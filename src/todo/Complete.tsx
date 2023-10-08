import { useState } from 'react';
import { TodoDatasType } from './Main';
import {
  CompleteCtainer,
  CompleteItem,
  CompleteListContainer,
} from './Complete.styled';
import { BigTitle } from './Main.styled';

const Complete = () => {
  const [cleared, setCleared] = useState<TodoDatasType[]>([]);

  return (
    <CompleteCtainer>
      <BigTitle>완료한 ToDo</BigTitle>
      <CompleteListContainer>
        {cleared &&
          cleared.map((data) => {
            return <CompleteItem key={data.id} data={data.content} />;
          })}
      </CompleteListContainer>
    </CompleteCtainer>
  );
};

export default Complete;
