import {useReducer, useCallback} from 'react';

interface IHttpState<T> {
  data: T | null;
  error: string | null;
  status: 'pending' | 'completed' | null;
}

enum ActionType {
  send_request = 'send_request',
  success = 'success',
  error = 'error',
}

interface ActionSendRequest {
  type: ActionType.send_request;
}

interface ActionSuccess<T> {
  type: ActionType.success;
  data: T;
}

interface ActionError {
  type: ActionType.error;
  errorMessage: string;
}

type Action<T> = ActionError | ActionSuccess<T> | ActionSendRequest;

type CustomReducer<T> = React.Reducer<IHttpState<T>, Action<T>>;

function httpReducer<T>(
  httpState: IHttpState<T>,
  action: Action<T>
): IHttpState<T> {
  switch (action.type) {
    case ActionType.send_request: {
      return {
        data: null,
        error: null,
        status: 'pending',
      };
    }
    case ActionType.success: {
      return {
        data: action.data,
        error: null,
        status: 'completed',
      };
    }
    case ActionType.error: {
      return {
        data: null,
        error: action.errorMessage,
        status: 'completed',
      };
    }
    default: {
      throw Error('Unknown action');
    }
  }
}

function useHttp<T>(sendRequest: Function, isRequestSending = false) {
  const initialHttpState: IHttpState<T> = {
    data: null,
    error: null,
    status: isRequestSending ? 'pending' : null,
  };

  const [httpState, dispatch] = useReducer<CustomReducer<T>>(
    httpReducer,
    initialHttpState
  );

  const sendHttpRequest = useCallback(
    async function (requestData?: any) {
      dispatch({type: ActionType.send_request});
      try {
        const responseData = await sendRequest(requestData);
        dispatch({type: ActionType.success, data: responseData});
      } catch (error: any) {
        dispatch({
          type: ActionType.error,
          errorMessage: error.message || 'Something went wrong!',
        });
      }
    },
    [sendRequest]
  );

  return {
    sendHttpRequest,
    ...httpState,
  };
}

export default useHttp;
