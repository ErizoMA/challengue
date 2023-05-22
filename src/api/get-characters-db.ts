'use strict';

import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { internalError, notFound, success } from '../utils/rest';
import CharacterRepository from '../repositories/character.repository';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  console.log('EVENT :', JSON.stringify(event, null, 2));
  try {
    const characterRepository = new CharacterRepository();
    const personajes = await characterRepository.listdb();
    if (personajes.length === 0) return notFound();
    return success(personajes);
  } catch (error: any) {
    console.log(error);
    return internalError();
  }
};
