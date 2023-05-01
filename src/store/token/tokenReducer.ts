import {
  SET_TOKEN,
  SET_TOKEN_ERROR,
  setTokenAction,
  setTokenErrorAction,
} from "./tokenActions";
import { Reducer } from "react";

export type tokenState = {
  error: string;
  token: string;
};

type tokenActions = setTokenErrorAction | setTokenAction;

export const tokenReducer: Reducer<tokenState, tokenActions> = (
  state,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_TOKEN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
