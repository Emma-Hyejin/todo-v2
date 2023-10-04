import {
  ItemContainer,
  TextTodo,
  StateContainer,
  Checkbutton,
  DeleteButton,
} from './TodoItem.styled';

const TodoItem = () => {
  return (
    <ItemContainer>
      <TextTodo>TEST 입니다.</TextTodo>
      <StateContainer>
        <Checkbutton>✓</Checkbutton>
        <DeleteButton>x</DeleteButton>
      </StateContainer>
    </ItemContainer>
  );
};

export default TodoItem;
