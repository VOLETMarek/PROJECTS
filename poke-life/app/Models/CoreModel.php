<?php

namespace Pokedex\Models;

class CoreModel
{
    /**
     * All our models have the id and name properties in common. We can therefore extract them in the parent model.
     */
    protected $id;
    protected $name;
    

    /**
     * Same for the getters (no need for setters in this project)
     */

    /**
     * Get the value of the name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

}