"use strict";

async function obtenerDatosPokemon() {
    
    try {
        const peticion = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); // llamando a la primera generacion
        if (!peticion.ok) {
            throw new Error("Error al cargar los pokémon.");
        }
        // datos formateados
        const datosPokemon = await peticion.json();
        console.log(datosPokemon);
    }
    catch (error) {
        console.error(error);
    }
};

obtenerDatosPokemon();