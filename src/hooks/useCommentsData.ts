import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { tokenContext } from "../shared/context/tokenContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export function useCommentsData({ id }: { id: string }) {
  const [commentsData, setCommentsData] = useState([]);
  const token = useSelector<RootState, string>((state) => state.token);

  useEffect(() => {
    if (!!token && token !== "undefined") {
      axios
        .get(`https://oauth.reddit.com/comments/${id}`, {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          console.log(resp.data[1].data.children);
          setCommentsData(resp.data[1].data.children);
        })
        .catch(console.log);
    }
  }, [token]);

  return [commentsData];
}