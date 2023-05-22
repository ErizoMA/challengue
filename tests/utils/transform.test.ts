import Personaje from '../../src/models/Personaje';
import PersonajeDynamo from '../../src/models/PersonajeDB';
import { transformItemToPersonaje } from '../../src/utils/transform';

// Tests that the function transforms an input object with all required properties correctly.
it('test_transform_item_to_personaje_with_all_properties', () => {
  const item: PersonajeDynamo = {
    PK: 'personaje#1',
    SK: 'Luke Skywalker',
    nombre: 'Luke Skywalker',
    altura: '172',
    masa: '77',
    colorCabello: 'blond',
    colorPiel: 'fair',
    colorOjos: 'blue',
    añoNacimiento: '19BBY',
    género: 'male',
    planetaOrigen: 'Tatooine',
    películas: ['1', '2', '3'],
    especies: ['human'],
    vehículos: ['X-34 landspeeder'],
    navesEstelares: ['X-wing'],
    creado: '2014-12-09T13:50:51.644000Z',
    editado: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };

  const expectedOutput: Personaje = {
    nombre: 'Luke Skywalker',
    altura: '172',
    masa: '77',
    colorCabello: 'blond',
    colorPiel: 'fair',
    colorOjos: 'blue',
    añoNacimiento: '19BBY',
    género: 'male',
    planetaOrigen: 'Tatooine',
    películas: ['1', '2', '3'],
    especies: ['human'],
    vehículos: ['X-34 landspeeder'],
    navesEstelares: ['X-wing'],
    creado: '2014-12-09T13:50:51.644000Z',
    editado: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };

  expect(transformItemToPersonaje(item)).toEqual(expectedOutput);
});
