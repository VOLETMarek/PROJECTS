<?php

namespace Pokedex\Models;

use Pokedex\Utils\Database;
use PDO;
use Pokedex\Models\Type;

class Pokemon extends CoreModel
{
    /** 
     * Properties storing the Pokémon information
     */
    private $hp;
    private $attack;
    private $defense;
    private $spe_attack;
    private $spe_defense;
    private $speed;
    private $number;

    /**
     * Create getters (no need for setters in our usage!)
     * to retrieve the values of the properties
     */

    public function getHp()
    {
        return $this->hp;
    }

    public function getAttack()
    {
        return $this->attack;
    }

    public function getDefense()
    {
        return $this->defense;
    }

    public function getSpeAttack()
    {
        return $this->spe_attack;
    }

    public function getSpeDefense()
    {
        return $this->spe_defense;
    }

    public function getSpeed()
    {
        return $this->speed;
    }

    public function getNumber()
    {
        return $this->number;
    }

    /** 
     * Method to retrieve the list of Pokémon ordered by numbers
     */
    public function findAll()
    {
        $sql = "SELECT *
                FROM `pokemon` 
                ORDER BY `number`";

        // Get the database connection
        $pdo = Database::getPDO();

        // Execute the query
        $request = $pdo->query($sql);

        // Retrieve all results with "fetchAll" and pass the retrieved data to an instance of the current model (Pokemon)
        $pokemons = $request->fetchAll(PDO::FETCH_CLASS, self::class);

        return $pokemons;
    }

    /** 
     * Method to retrieve the information of a Pokémon
     */
    public function find($number)
    {
        $sql = "SELECT *
                FROM `pokemon` 
                WHERE `number` = {$number}
                LIMIT 1";

        // Get the database connection
        $pdo = Database::getPDO();

        // Execute the query with query because we want to access
        // the data returned by the query
        $pdoStatement = $pdo->query($sql);

        // Retrieve the result and instantiate the current class with the retrieved info
        $pokemon = $pdoStatement->fetchObject(self::class);

        return $pokemon;
    }

    /** 
     * Method to retrieve a list of Pokémon by type
     */
    public function findByType($typeId)
    {
        // Join the pivot table "pokemon_type" to filter by type IDs
        $sql = "SELECT *
                FROM `pokemon` 
                INNER JOIN `pokemon_type` ON `pokemon_type`.`pokemon_number` = `pokemon`.`number`
                WHERE `pokemon_type`.`type_id` = {$typeId}
                ORDER BY `pokemon`.`number`";

        // Get the database connection
        $pdo = Database::getPDO();

        // Execute the query with query because we want to access
        // the data returned by the query
        $pdoStatement = $pdo->query($sql);

        // Retrieve all results with "fetchAll" and pass the retrieved data to an instance of the current model (Pokemon)
        $pokemons = $pdoStatement->fetchAll(PDO::FETCH_CLASS, self::class);

        return $pokemons;
    }

    /**
     * Method to retrieve the types of the current Pokémon
     */
    public function getTypes()
    {
        // Search in the pivot table "pokemon_type" for entries that match the provided number
        // then join this table with the "type" table and retrieve its fields
        $sql = "SELECT `type`.*
                FROM `pokemon_type`
                INNER JOIN `type` ON `type`.`id` = `pokemon_type`.`type_id`
                WHERE `pokemon_type`.`pokemon_number` = {$this->getNumber()}";

        // Get the database connection
        $pdo = Database::getPDO();

        // Execute the query with query because we want to access
        // the data returned by the query
        $pdoStatement = $pdo->query($sql);

        // Retrieve the result and instantiate the Type class with the retrieved info
        $types = $pdoStatement->fetchAll(PDO::FETCH_CLASS, Type::class);

        return $types;
    }
}
