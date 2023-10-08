import styled from 'styled-components';
import tw from 'twin.macro';

export const MainContainer = styled.div`
  ${tw`
        border rounded-lg
        flex flex-col
        justify-between
        items-center
        w-96
        min-h-[430px]
        max-h-[600px]
        mx-auto
        mt-10
        py-3
    `}
  background-color: #DFCCFB;
`;

export const BigTitle = styled.div`
  ${tw`py-3 text-xl font-semibold`}
`;

export const ListContainer = styled.div`
  ${tw`flex flex-col flex-1 w-10/12 py-1 text-base font-semibold `}
`;

export const InputContainer = styled.form`
  ${tw`flex flex-row justify-between w-10/12 p-3`}
`;

export const InputForm = styled.input`
  ${tw`w-full px-2 py-3 mr-2 border rounded-lg`}
`;

export const SendButton = styled.button`
  ${tw`w-24 px-2 py-2 text-base font-semibold text-white bg-purple-700 border-purple-800 rounded-lg`}

  &:hover {
    background-color: rgb(126 34 300);
  }
`;

//App Container
export const WholeContainer = styled.div`
  ${tw`flex flex-row h-screen`}
`;
