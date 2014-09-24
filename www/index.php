<?php
/**
 * This makes our life easier when dealing with paths. Everything is relative
 * to the application root now.
 */
chdir(dirname(__DIR__));

// Setup autoloading
//require 'init_autoloader.php';

include  'D:/OpenServer/userdata/ZendFramework/library/Zend/Loader/AutoloaderFactory.php';
Zend\Loader\AutoloaderFactory::factory(array(
    'Zend\Loader\StandardAutoloader' => array(
        'autoregister_zf' => true
    )
));

// Run the application!
Zend\Mvc\Application::init(require 'private/config/application.config.php')->run();
