import CharacterBD from '../infrastructure/PersonajeBD';
import Personaje from '../models/Personaje';
import { getCharacter, getCharacters } from '../services/starwars';
import { transformItemToPersonaje } from '../utils/transform';
import { translateKeysOfCharacter } from '../utils/translate';

export default class CharacterRepository {
  private database: CharacterBD;
  constructor() {
    this.database = new CharacterBD();
  }

  async get(id: string) {
    const character = await getCharacter(id);
    return translateKeysOfCharacter(character);
  }

  async list(page: string | undefined, search: string | undefined) {
    const characters = await getCharacters(page, search);
    const personajes = characters.map((character) => {
      return translateKeysOfCharacter(character);
    });
    return personajes;
  }

  async create(character: Partial<Personaje>) {
    await this.database.create(character);
  }

  async listdb() {
    const personajesDB = await this.database.list();
    return personajesDB.map((personaje) => {
      return transformItemToPersonaje(personaje);
    });
  }
}
