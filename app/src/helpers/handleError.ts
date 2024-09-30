export interface ErrorResponse {
  response?: {
    status: number;
    data?: {
      msg?: string;
      data?: {
        step?: string;
      };
    };
  };
  message?: string;
}

interface DataError {
  code?: number;
  message?: string;
  desc?: string;
}

const handleError = (error: ErrorResponse): DataError => {
  let dataErr: DataError = {};
  let setMessage = '';
  const {response, message} = error;
  const status = response ? response?.status : null;

  try {
    setMessage = response?.data?.msg || message || '';
  } catch (e) {
    console.log(e);
  }

  switch (status) {
    case 400:
      dataErr = {
        code: response?.status,
        message: setMessage,
        desc: 'Bad Request',
      };
      break;
    case 401:
      dataErr = {
        code: response?.status,
        message: setMessage,
        desc: 'Unauthorized',
      };
      break;
    case 402:
      dataErr = {
        code: response?.status,
        message: setMessage,
        desc: 'Payment Required',
      };
      break;
    case 403:
      dataErr = {
        code: response?.status,
        message: setMessage,
        desc: 'Forbidden',
      };
      break;
    case 404:
      dataErr = {
        code: response?.status,
        message: setMessage,
        desc: 'Not Found',
      };
      break;
    case 409:
      dataErr = {
        code: response?.status,
        message: setMessage,
        desc: 'Conflict',
      };
      break;
    default:
      dataErr = {
        code: status || 500,
        message: setMessage,
        desc: 'An unknown error occurred',
      };
      break;
  }

  return dataErr;
};

export default handleError;
