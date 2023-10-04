import styled from 'styled-components';
import tw from 'twin.macro';

export const ItemContainer = styled.div`
  ${tw`
        border rounded-lg
        text-base font-semibold
        w-full
        py-2
        flex flex-row
        items-center
        justify-between
    `}
`;

export const TextTodo = styled.div`
  ${tw`w-8/12 border rounded-lg bg-white px-2 py-2`}
`;

export const StateContainer = styled.form`
  ${tw`
        flex flex-row
        justify-between
    `}
`;

export const Checkbutton = styled.button`
  ${tw`
        bg-green-600
        border rounded-lg
        font-semibold
        text-2xl
        w-10 
        h-10
        p-1
        mx-1
    `}

  &:hover {
    background-color: #54b79a;
  }
`;

export const DeleteButton = styled.button`
  ${tw`
        bg-zinc-500
        text-white
        font-semibold
        text-xl
        border rounded-lg
        w-10
        h-10 
        p-1
    `}

  &:hover {
    background-color: #5c5c5c;
  }
`;
