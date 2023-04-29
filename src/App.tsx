import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout";
import "./main.global.css";
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken";
import { UserContextProvider } from "./shared/context/userContext";
import { PostsContextProvider } from "./shared/context/postsContext";
import { createStore } from "redux";
import { Provider, useDispatch } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, setToken } from "./store";

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  const dispatch = useDispatch();
  dispatch(setToken(token));

  return (
    <Layout>
      <UserContextProvider>
        <Header />
        <PostsContextProvider>
          <Content>
            <CardsList />
          </Content>
        </PostsContextProvider>
      </UserContextProvider>
    </Layout>
  );
}

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));