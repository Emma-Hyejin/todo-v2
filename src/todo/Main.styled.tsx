import styled from 'styled-components';
import tw from 'twin.macro';

export const MainContainer = styled.div`
  ${tw`
        border rounded-lg
        bg-pink-200
        flex flex-col
        justify-between
        items-center
        w-96
        min-h-[430px]
        mx-auto
        mt-10
        py-3
    `}
`;

export const BigTitle = styled.div`
  ${tw`text-xl font-semibold py-3`}
`;

export const ListContainer = styled.div`
  ${tw`
    flex flex-col
    w-10/12
    text-base font-semibold
    bg-yellow-200
    flex-1
    py-1
    `}
`;

export const InputContainer = styled.form`
  ${tw`p-3 w-10/12 flex flex-row justify-between`}
`;

export const InputForm = styled.input`
  ${tw`border rounded-lg px-2 py-3 w-full mr-2`}
`;

export const SendButton = styled.button`
  ${tw`border-purple-800 bg-purple-700 text-white rounded-lg px-2 py-2 text-base w-24 font-semibold`}

  &:hover {
    background-color: rgb(126 34 300);
  }
`;
