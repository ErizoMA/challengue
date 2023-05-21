import Character from '../../src/models/Character';
import Personaje from '../../src/models/Personaje';
import { translateKeysOfCharacter } from '../../src/utils/translate';

it('test_translate_keys_of_character_with_valid_input', () => {
  const character: Character = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'Tatooine',
    films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    species: ['Human'],
    vehicles: ['Snowspeeder', 'Imperial Speeder Bike'],
    starships: ['X-wing', 'Imperial shuttle'],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };
  const expectedPersonaje: Personaje = {
    nombre: 'Luke Skywalker',
    altura: '172',
    masa: '77',
    colorCabello: 'blond',
    colorPiel: 'fair',
    colorOjos: 'blue',
    añoNacimiento: '19BBY',
    género: 'male',
    planetaOrigen: 'Tatooine',
    películas: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
    especies: ['Human'],
    vehículos: ['Snowspeeder', 'Imperial Speeder Bike'],
    navesEstelares: ['X-wing', 'Imperial shuttle'],
    creado: '2014-12-09T13:50:51.644000Z',
    editado: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };
  expect(translateKeysOfCharacter(character)).toEqual(expectedPersonaje);
});

it('test_translate_keys_of_character_with_empty_input', () => {
  const character: Character = {} as Character;
  const expectedPersonaje: Personaje = {} as Personaje;
  expect(translateKeysOfCharacter(character)).toEqual(expectedPersonaje);
});
