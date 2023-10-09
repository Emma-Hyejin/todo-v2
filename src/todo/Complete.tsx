import { useEffect, useState } from 'react';
import { TodoDatasType } from './Main';
import {
  CompleteCtainer,
  CompleteItem,
  CompleteListContainer,
  ImgContainer,
} from './Complete.styled';
import noData from '../assets/noData.png';
import { BigTitle } from './Main.styled';
import axios from 'axios';

const Complete = () => {
  const [cleared, setCleared] = useState<TodoDatasType[]>([]);

  useEffect(() => {
    const getFilterdDatas = async () => {
      try {
        await axios.get('http://localhost:3001/datas').then((res) => {
          const filteredData = res.data.filter((el: TodoDatasType) => {
            return el.isComplete === true;
          });
          setCleared(filteredData);
          console.log(filteredData);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getFilterdDatas();
  }, []);

  return (
    <CompleteCtainer>
      <BigTitle>완료한 ToDo</BigTitle>
      <CompleteListContainer>
        {cleared.length > 0 ? (
          cleared.map((data) => {
            return <CompleteItem key={data.id} data={data.content} />;
          })
        ) : (
          <ImgContainer src={noData}></ImgContainer>
        )}
      </CompleteListContainer>
    </CompleteCtainer>
  );
};

export default Complete;
