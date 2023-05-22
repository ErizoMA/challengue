'use strict';

import { APIGatewayEvent, APIGatewayProxyHandler } from 'aws-lambda';
import CharacterRepository from '../repositories/character.repository';
import Personaje from '../models/Personaje';
import { badRequest, conflict, created, internalError } from '../utils/rest';
import { STATUS_CODE } from '../config/constants';

export const handler: APIGatewayProxyHandler = async (event: APIGatewayEvent) => {
  try {
    const body: Partial<Personaje> = JSON.parse(event.body ?? '{}');
    const defaultStringValue = 'n/a';
    const defaultArrayValue: string[] = [];
    if (!body.nombre) return badRequest();

    const characterDTO: Partial<Personaje> = {
      nombre: body.nombre || defaultStringValue,
      altura: body.altura || defaultStringValue,
      masa: body.masa || defaultStringValue,
      colorCabello: body.colorCabello || defaultStringValue,
      colorPiel: body.colorPiel || defaultStringValue,
      colorOjos: body.colorOjos || defaultStringValue,
      añoNacimiento: body.añoNacimiento || defaultStringValue,
      género: body.género || defaultStringValue,
      planetaOrigen: body.planetaOrigen || defaultStringValue,
      películas: body.películas || defaultArrayValue,
      especies: body.especies || defaultArrayValue,
      vehículos: body.vehículos || defaultArrayValue,
      navesEstelares: body.navesEstelares || defaultArrayValue,
      creado: new Date().toISOString(),
      editado: new Date().toISOString(),
      url: body.url || defaultStringValue,
    };
    const characterRepository = new CharacterRepository();
    await characterRepository.create(characterDTO);
    return created();
  } catch (error: any) {
    console.log(error);
    if (error.statusCode === STATUS_CODE.BAD_REQUEST) return conflict();
    return internalError();
  }
};
