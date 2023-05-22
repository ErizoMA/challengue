// import client from '../config/dynamodb';
import { CHARACTER_ENTITY } from '../config/constants';
import Personaje from '../models/Personaje';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import PersonajeDynamo from '../models/PersonajeDB';

type PartialPersonaje = Partial<Personaje>;
export default class CharacterBD {
  private client: DocumentClient;
  constructor() {
    this.client = new DocumentClient({ region: 'us-east-1' });
  }
  async create(Item: PartialPersonaje) {
    const { nombre, ...rest } = Item;
    await this.client
      .put({
        TableName: process.env.TABLE_NAME || '',
        Item: {
          PK: CHARACTER_ENTITY,
          SK: nombre,
          ...rest,
        },
        ConditionExpression: 'attribute_not_exists(SK)',
      })
      .promise();
  }
  async list(): Promise<PersonajeDynamo[]> {
    const { Items = [] } = await this.client
      .query({
        TableName: process.env.TABLE_NAME || '',
        KeyConditionExpression: 'PK = :PK',
        ExpressionAttributeValues: { ':PK': CHARACTER_ENTITY },
      })
      .promise();
    return Items as PersonajeDynamo[];
  }
}
