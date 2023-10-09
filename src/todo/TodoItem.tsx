import { addCompletemark, deleteCompletemark } from '../redux/clearSlice';
import { TodoDatasType } from './Main';
import {
  ItemContainer,
  TextTodo,
  StateContainer,
  Checkbutton,
  DeleteButton,
} from './TodoItem.styled';
//redux
import { useAppDispatch } from '../redux/hooks';
import { useState } from 'react';
import axios from 'axios';

const TodoItem = (props: { data: TodoDatasType }) => {
  const data = props.data;
  const dispatch = useAppDispatch();

  //isClicked 상태를 공유하기 때문에 전체 데이터가 함께 완료상태로 전환.
  //isClicked 각각 고유의 상태를 가지도록 해야 한다.
  const [isClicked, setIsClicked] = useState(data.isComplete);

  const handleCompleteTask = async () => {
    const changedData = !data.isComplete;
    setIsClicked(!isClicked);
    try {
      await axios
        .patch(`http://localhost:3001/datas/${data.id}`, {
          isComplete: changedData,
        })
        .then((res) => {
          console.log(res, '200:OK SEND CHANGE DATA');
        });
    } catch (error) {
      console.log(error);
    }

    changedData ? dispatch(addCompletemark()) : dispatch(deleteCompletemark());
  };

  return (
    <ItemContainer>
      <TextTodo className={isClicked ? 'completeTask' : ''}>
        {data.content}
      </TextTodo>
      <StateContainer>
        <Checkbutton onClick={handleCompleteTask}>✓</Checkbutton>
        <DeleteButton onClick={handleCompleteTask}>x</DeleteButton>
      </StateContainer>
    </ItemContainer>
  );
};

export default TodoItem;
