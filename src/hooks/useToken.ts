import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setTokenAsync } from "../store/token/tokenActions";

export function useToken() {
  const [token, setToken] = useState("");
  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(setTokenAsync());
  }, []);

  return [token];
}
