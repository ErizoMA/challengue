import instance from '../../src/config/axios';
import { REST } from '../../src/config/constants';
import { getCharacter, getCharacters } from '../../src/services/starwars';

/**GET CHARACTERS */

// Tests that the function retrieves all characters when no filters are applied.
it('test_retrieving_characters_no_filters', async () => {
  const characters = await getCharacters(undefined, undefined);
  expect(characters.length).toBeGreaterThan(0);
});

// Tests that the function retrieves the correct page of characters when a page filter is applied.
it('test_retrieving_characters_page_filter', async () => {
  const characters = await getCharacters('2', undefined);
  expect(characters.length).toBeGreaterThan(0);
  expect(characters[0].name).toEqual('Anakin Skywalker');
});

// Tests that the function throws an error when an invalid page number is provided.
it('test_invalid_page_number', async () => {
  await expect(getCharacters('invalid', undefined)).rejects.toThrowError(REST.NOT_FOUND);
});

// Tests that the function retrieves the correct characters when a search filter is applied.
it('test_retrieving_characters_search_filter', async () => {
  const characters = await getCharacters(undefined, 'luke');
  expect(characters.length).toBeGreaterThan(0);
  expect(characters[0].name.toLowerCase()).toContain('luke');
});

// Tests that the function retrieves the correct characters when both page and search filters are applied.
it('test_retrieving_characters_both_filters', async () => {
  const characters = await getCharacters('3', 'nien');
  expect(characters.length).toBeGreaterThan(0);
  expect(characters[0].name.toLowerCase()).toContain('nien');
});

/**GET CHARACTER BY ID */

// Tests that the function successfully retrieves a character with a valid id.
it('test_valid_id_returns_valid_character', async () => {
  const validId = '1';
  const expectedCharacter = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/',
    ],
    species: ['https://swapi.dev/api/species/1/'],
    vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
    starships: ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/'],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/',
  };
  jest.spyOn(instance, 'get').mockResolvedValue({ data: expectedCharacter });
  const character = await getCharacter(validId);
  expect(character).toEqual(expectedCharacter);
});

// Tests that the function throws an error with NOT_FOUND message when given an invalid id.
it('test_invalid_id_returns_error', async () => {
  const invalidId = 'invalid';
  const mockGet = jest.fn().mockRejectedValue(new Error(REST.NOT_FOUND));
  instance.get = mockGet;
  await expect(getCharacter(invalidId)).rejects.toThrowError(REST.NOT_FOUND);
  expect(mockGet).toHaveBeenCalledWith(`/people/${invalidId}`);
});
