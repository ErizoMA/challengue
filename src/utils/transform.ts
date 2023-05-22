import Personaje from '../models/Personaje';
import PersonajeDynamo from '../models/PersonajeDB';

export const transformItemToPersonaje = (item: PersonajeDynamo): Personaje => {
  const { PK, SK, ...rest } = item;
  return { ...rest, nombre: SK };
};
