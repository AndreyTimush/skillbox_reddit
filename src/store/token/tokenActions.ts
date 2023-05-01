import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducer";

export const SET_TOKEN = "SET_TOKEN";

export type setTokenAction = {
  type: typeof SET_TOKEN;
  token: string;
};

export const setToken: ActionCreator<setTokenAction> = (token: string) => ({
  type: SET_TOKEN,
  token,
});

export const SET_TOKEN_ERROR = "SET_TOKEN_ERROR";

export type setTokenErrorAction = {
  type: typeof SET_TOKEN_ERROR;
  error: string;
};

export const setTokenError: ActionCreator<setTokenErrorAction> = (
  error: string
) => ({
  type: SET_TOKEN_ERROR,
  error,
});

export const setTokenAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    if (window.__token__) {
      dispatch(setToken(window.__token__));
    }
  };
