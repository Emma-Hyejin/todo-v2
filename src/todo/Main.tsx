import { useState, useEffect } from 'react';
import axios from 'axios';

import {
  MainContainer,
  ListContainer,
  InputContainer,
  BigTitle,
  InputForm,
  SendButton,
} from './Main.styled';
import TodoItem from './TodoItem';

export interface TodoDatasType {
  id: number;
  content: string;
  isComplete: boolean;
}

const Main = () => {
  const [datas, setDatas] = useState<TodoDatasType[]>([]);

  useEffect(() => {
    const getDummyDatas = async () => {
      try {
        await axios.get('http://localhost:3001/datas').then((res) => {
          setDatas(res.data);
          console.log(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getDummyDatas();
  }, []);

  return (
    <MainContainer>
      <BigTitle>상태 관리 TodoList</BigTitle>
      <ListContainer>
        {datas &&
          datas.map((data) => {
            return <TodoItem key={data.id} data={data} />;
          })}
      </ListContainer>
      <InputContainer>
        <InputForm></InputForm>
        <SendButton>저장</SendButton>
      </InputContainer>
    </MainContainer>
  );
};

export default Main;
