import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card";
import { postsContext } from "../context/postsContext";
import axios from "axios";
import { meRequestError, meRequestSuccess } from "../../store/me/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { Route, Routes } from "react-router-dom";
import { Post } from "../Post";

export function CardsList() {
  const token = useSelector<RootState, string>((state) => state.token);
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState("");
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [nextAfter, setNextAfter] = useState("");
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(0);
  }

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading("");
      try {
        if (!!token && token !== "undefined") {
          const {
            data: {
              data: { after, children },
            },
          } = await axios.get("https://oauth.reddit.com/hot", {
            headers: { Authorization: `bearer ${token}` },
            params: { after: nextAfter },
          });
          setNextAfter(after);
          setPosts((prevChildren) =>
            prevChildren.concat(
              children.map((child: any, index: any) => ({
                ...child,
                key: prevChildren.length + index,
              }))
            )
          );
          setCounter((prev) => prev + 1);
        }
      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          load();
        }
      },
      {
        rootMargin: "10px",
      }
    );
    if (bottomOfList.current && counter < 3) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [bottomOfList.current, nextAfter, token, counter]);

  return (
    <div>
      <ul className={styles.cardsList}>
        {posts.length === 0 && !loading && !errorLoading && (
          <div style={{ textAlign: "center" }}>Нет ни одного поста</div>
        )}
        {posts.map((post) => (
          <Card key={post.key} post={post} />
        ))}

        <div ref={bottomOfList} />
        {counter === 3 && (
          <div style={{ display: "flex", margin: "0 auto" }}>
            <button
              onClick={handleClick}
              style={{
                backgroundColor: "blue",
                color: "white",
                margin: "auto",
              }}>
              Загрузить ещё
            </button>
          </div>
        )}

        {loading && <div style={{ textAlign: "center" }}>Загрузка...</div>}
        {errorLoading && (
          <div role="alert" style={{ textAlign: "center" }}>
            {errorLoading}
          </div>
        )}
      </ul>
      <Routes>
        <Route path="/:id" element={<Post />} />
      </Routes>
    </div>
  );
}
