import { REST, STATUS_CODE } from '../config/constants';

const response = (statusCode: number, message: string, result?: any) => {
  const body = {
    message,
    result,
  };

  if (result === undefined) delete body.result;

  return {
    statusCode,
    body: JSON.stringify(body, null, 2),
  };
};

export const success = (data: any) => {
  return response(STATUS_CODE.SUCCESS, REST.SUCCESS, data);
};
export const internalError = () => {
  return response(STATUS_CODE.INTERNAL, REST.INTERNAL);
};
export const notFound = () => {
  return response(STATUS_CODE.NOT_FOUND, REST.NOT_FOUND);
};
export const badRequest = () => {
  return response(STATUS_CODE.BAD_REQUEST, REST.BAD_REQUEST);
};
