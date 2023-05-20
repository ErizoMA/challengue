import Character from '../models/Character';
import Personaje from '../models/Personaje';

export const translateKeysOfCharacter = (character: Character): Personaje => {
  const personaje: Personaje = {
    nombre: character.name,
    altura: character.height,
    masa: character.mass,
    colorCabello: character.hair_color,
    colorPiel: character.skin_color,
    colorOjos: character.eye_color,
    añoNacimiento: character.birth_year,
    género: character.gender,
    planetaOrigen: character.homeworld,
    películas: character.films,
    especies: character.species,
    vehículos: character.vehicles,
    navesEstelares: character.starships,
    creado: character.created,
    editado: character.edited,
    url: character.url,
  };
  return personaje;
};
