'use strict';

import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { getCharacter } from '../services/starwars';
import { badRequest, internalError, notFound, success } from '../utils/rest';
import { REST } from '../config/constants';
import { translateKeysOfCharacter } from '../utils/translate';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  console.log('EVENT :', JSON.stringify(event, null, 2));
  try {
    const { id } = event.pathParameters || {};
    if (!id) return badRequest();
    const character = await getCharacter(id);
    const personaje = translateKeysOfCharacter(character);
    return success(personaje);
  } catch (error: any) {
    if (error.message === REST.NOT_FOUND) return notFound();
    return internalError();
  }
};
