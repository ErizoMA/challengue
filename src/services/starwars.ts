import instance from '../config/axios';
import { REST } from '../config/constants';
import Character from '../models/Character';

export async function getCharacters(page: string | undefined, search: string | undefined): Promise<Character[]> {
  try {
    const twoFiltersActive = page && search;
    if (twoFiltersActive) {
      const response = await instance.get(`/people?page=${page}`);
      const characters: Character[] = response.data.results;
      const charactersFound = characters.filter((character) => character.name.toLowerCase().includes(search));
      return charactersFound;
    } else if (search) {
      const searchResponse = await instance.get(`/people?search=${search}`);
      const characters = searchResponse.data.results;
      return characters;
    } else {
      const response = await instance.get(`/people?page=${page || 1}`);
      const characters = response.data.results;
      return characters;
    }
  } catch (error) {
    throw Error(REST.NOT_FOUND);
  }
}

export async function getCharacter(id: string): Promise<Character> {
  try {
    const response = await instance.get(`/people/${id}`);
    const character = response.data;
    return character;
  } catch (error) {
    throw new Error(REST.NOT_FOUND);
  }
}
