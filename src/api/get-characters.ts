'use strict';

import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { internalError, notFound, success } from '../utils/rest';
import { REST } from '../config/constants';
import CharacterRepository from '../repositories/character.repository';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  console.log('EVENT :', JSON.stringify(event, null, 2));
  try {
    const { page, search } = event.queryStringParameters || {};
    const characterRepository = new CharacterRepository();
    const personajes = await characterRepository.list(page, search);
    if (personajes.length === 0) return notFound();
    return success(personajes);
  } catch (error: any) {
    console.log(error);
    if (error.message === REST.NOT_FOUND) return notFound();
    return internalError();
  }
};
