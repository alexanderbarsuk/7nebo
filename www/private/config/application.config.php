<?php

return array(
    // This should be an array of module namespaces used in the application.
    'modules' => array(
        'Site',
    ),

    'module_listener_options' => array(

        'module_paths' => array(
            dirname(__DIR__) . '/module',
        ),

        'config_glob_paths' => array(
            dirname(__DIR__) . '/config/autoload/{,*.}{global,local}.php',
        ),

    ),

    
);
