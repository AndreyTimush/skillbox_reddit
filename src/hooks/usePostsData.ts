import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

interface IPostsData {
  posts?: Array<any>;
}

export function usePostsData() {
  const [postsData, setPostsData] = useState<IPostsData>({});
  const token = useSelector<RootState, string>((state) => state.token);

  useEffect(() => {
    if (!!token && token !== "undefined") {
      axios
        .get("https://oauth.reddit.com/best.json?sr_detail=true", {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((resp) => {
          const postsData = resp.data;
          setPostsData({
            posts: [postsData.data.children].map((elem) => elem),
          });
        })
        .catch(console.log);
    }
  }, [token]);

  return [postsData];
}