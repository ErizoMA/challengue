import { REST, STATUS_CODE } from '../../src/config/constants';
import { badRequest, internalError, notFound, response, success } from '../../src/utils/rest';

it('test_response_with_valid_status_code_message_and_result', () => {
  const result = { name: 'John', age: 30 };
  const responseObj = response(200, 'Success', result);
  expect(responseObj.statusCode).toBe(200);
  expect(responseObj.body).toBe(JSON.stringify({ message: 'Success', result }, null, 2));
});

it('test_success_with_data', () => {
  const data = { name: 'John', age: 30 };
  const result = success(data);
  expect(result.statusCode).toBe(STATUS_CODE.SUCCESS);
  expect(result.body).toBe(JSON.stringify({ message: REST.SUCCESS, result: data }, null, 2));
});

it('test_internal_error_returns_response_with_internal_status_code_and_internal_error_message', () => {
  const result = internalError();
  expect(result.statusCode).toBe(STATUS_CODE.INTERNAL);
  expect(JSON.parse(result.body)).toEqual({ message: REST.INTERNAL });
});

it('test_not_found_returns_response_object_with_status_code_404_and_message_not_found', () => {
  const result = notFound();
  expect(result.statusCode).toBe(STATUS_CODE.NOT_FOUND);
  expect(result.body).toContain(REST.NOT_FOUND);
});

it('test_bad_request_returns_response_with_status_code_400_and_message_bad_request', () => {
  const result = badRequest();
  expect(result.statusCode).toBe(STATUS_CODE.BAD_REQUEST);
  expect(JSON.parse(result.body)).toEqual({ message: REST.BAD_REQUEST });
});
