import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import "./main.global.css";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { Action, applyMiddleware, createStore, Middleware } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState, setToken } from "./store/reducer";
import thunk, { ThunkAction } from "redux-thunk";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import { Post } from "./shared/Post";
import { NotFound } from "./shared/NotFound";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

function AppComponent() {
  const [token] = useToken();
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch, token]);

  // redirect("/posts");

  return (
    <>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <UserContextProvider>
              <Header />
              <PostsContextProvider>
                <Content>
                  <Routes>
                    {/* redirect */}
                    <Route path="/posts" element={<CardsList />} />
                    <Route path="/auth" element={<CardsList />} />
                    <Route path="/" element={<Navigate to={"/posts"} />} />
                    <Route path="/posts/*" element={<CardsList />} />

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Content>
              </PostsContextProvider>
            </UserContextProvider>
          </Layout>
        </BrowserRouter>
      )}
    </>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
