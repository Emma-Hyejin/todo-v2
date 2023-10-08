import styled from 'styled-components';
import tw from 'twin.macro';
import { Checkbutton } from './TodoItem.styled';

export const CompleteCtainer = styled.div`
  ${tw`
  flex flex-col w-6/12 h-[600px] items-center 
  mx-auto mt-10 pb-5
  border rounded-lg`}
  background-color: #DFCCFB;
`;

export const CompleteListContainer = styled.div`
  ${tw`flex flex-col flex-1 w-10/12 py-1 text-base font-semibold bg-pink-300 `}
`;

const CompleteItemContainer = styled.div`
  ${tw`flex flex-row items-center justify-between w-full py-2 text-base font-bold bg-white border rounded `}
`;

export const CompleteItem = (props: { data: string }) => {
  const data = props.data;
  return (
    <CompleteItemContainer>
      {data} <Checkbutton>✓</Checkbutton>
    </CompleteItemContainer>
  );
};
