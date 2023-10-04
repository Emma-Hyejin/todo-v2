import {
  MainContainer,
  ListContainer,
  InputContainer,
  BigTitle,
  InputForm,
  SendButton,
} from './Main.styled';
import TodoItem from './TodoItem';

const Main = () => {
  return (
    <MainContainer>
      <BigTitle>상태 관리 TodoList</BigTitle>
      <ListContainer>
        <TodoItem />
      </ListContainer>
      <InputContainer>
        <InputForm></InputForm>
        <SendButton>저장</SendButton>
      </InputContainer>
    </MainContainer>
  );
};

export default Main;
