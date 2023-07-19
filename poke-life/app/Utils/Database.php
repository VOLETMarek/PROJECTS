<?php

namespace Pokedex\Utils;

use PDO;

// Remember its usage => Database::getPDO()
// Design Pattern: Singleton
class Database
{
    /** @var PDO */
    private $dbh;
    private static $_instance;

    private function __construct()
    {
        // Retrieve data from the config file
        // The parse_ini_file function parses the file and returns an associative array
        $configData = parse_ini_file(__DIR__ . '/../config.ini');

        try {
            $this->dbh = new PDO(
                "mysql:host={$configData['DB_HOST']};dbname={$configData['DB_NAME']};charset=utf8",
                $configData['DB_USERNAME'],
                $configData['DB_PASSWORD'],
                array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING) // Display SQL errors on the screen
            );
        } catch (\Exception $exception) {
            echo 'Connection error...<br>';
            echo $exception->getMessage() . '<br>';
            echo '<pre>';
            echo $exception->getTraceAsString();
            echo '</pre>';
            exit;
        }
    }

    // The unique method you need to use
    public static function getPDO()
    {
        // If no instance => create one
        if (empty(self::$_instance)) {
            self::$_instance = new Database();
        }
        return self::$_instance->dbh;
    }
}
