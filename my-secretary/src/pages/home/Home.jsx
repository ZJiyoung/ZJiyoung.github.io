import * as S from "./Home.style";

import {
  Background,
  Clock,
  Greetings,
  Quotes,
  Todo,
  Weather,
} from "../../components";

const Home = () => {
  return (
    <>
      <Background />
      <Clock />
      <Greetings />
      <Quotes />
      <Todo />
      <Weather/>
    </>
  );
};

export default Home;
