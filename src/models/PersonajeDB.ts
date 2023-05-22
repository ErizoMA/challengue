import Personaje from './Personaje';

export default interface PersonajeDynamo extends Personaje {
  PK: string;
  SK: string;
}
