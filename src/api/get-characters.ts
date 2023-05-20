'use strict';

import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { getCharacters } from '../services/starwars';
import { internalError, notFound, success } from '../utils/rest';
import { translateKeysOfCharacter } from '../utils/translate';
import { REST } from '../config/constants';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  console.log('EVENT :', JSON.stringify(event, null, 2));
  try {
    const { page, search } = event.queryStringParameters || {};
    const characters = await getCharacters(page, search);
    if (characters.length === 0) return notFound();
    const personajes = characters.map((character) => {
      return translateKeysOfCharacter(character);
    });
    return success(personajes);
  } catch (error: any) {
    if (error.message === REST.NOT_FOUND) return notFound();
    return internalError();
  }
};
