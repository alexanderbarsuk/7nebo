<?php

namespace Site;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
use Zend\Uri\UriFactory;

class Module {
    
    public static $sCurLang;
    
    public function onBootstrap(MvcEvent $e){
        
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);
        
        $eventManager->attach(MvcEvent::EVENT_ROUTE, array($this, 'initLocale'), -1);
    }

    public function getConfig(){
        return include __DIR__ . '/config/module.config.php';
    }

    public function getAutoloaderConfig(){
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }
    
    public function initLocale(MvcEvent $e){
        
        $config = $e->getApplication()->getServiceManager()->get('Config');
        
        $serverUrl = $e->getApplication()->getServiceManager()->get('ViewHelperManager')->get('ServerUrl');
        $baseUrl = $serverUrl->__invoke();
        $uri = UriFactory::factory($baseUrl);
        $domain = $uri->getHost();
        list($lang) = explode($config['base_domain'], $domain);
        if (!empty($lang)){
            self::$sCurLang = str_replace(".", "", $lang);
        } else {
            self::$sCurLang = $config['default_lang'];
        }
        
        $translator = $e->getApplication()->getServiceManager()->get('translator');
        $translator->setLocale($config['languages'][self::$sCurLang]['locale']);

    }
}
