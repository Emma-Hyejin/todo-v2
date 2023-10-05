import { TodoDatasType } from './Main';
import {
  ItemContainer,
  TextTodo,
  StateContainer,
  Checkbutton,
  DeleteButton,
} from './TodoItem.styled';

const TodoItem = (props: { data: TodoDatasType }) => {
  const data = props.data;
  return (
    <ItemContainer>
      <TextTodo>{data.content}</TextTodo>
      <StateContainer>
        <Checkbutton>✓</Checkbutton>
        <DeleteButton>x</DeleteButton>
      </StateContainer>
    </ItemContainer>
  );
};

export default TodoItem;
