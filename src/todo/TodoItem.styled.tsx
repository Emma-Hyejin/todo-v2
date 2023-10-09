import styled from 'styled-components';
import tw from 'twin.macro';

export const ItemContainer = styled.div`
  ${tw`flex flex-row items-center justify-between w-full py-2 text-base font-semibold`}
`;

export const TextTodo = styled.div`
  ${tw`w-8/12 px-2 py-2 bg-white border rounded-lg`}

  &.completeTask {
    ${tw`italic text-gray-500 line-through`}
  }
`;

export const StateContainer = styled.form`
  ${tw`flex flex-row justify-between `}
`;

export const Checkbutton = styled.button`
  ${tw`w-10 h-10 p-1 mx-1 text-2xl font-semibold bg-green-600 border rounded-lg `}

  &:hover {
    background-color: #54b79a;
  }
`;

export const DeleteButton = styled.button`
  ${tw`w-10 h-10 p-1 text-xl font-semibold text-white border rounded-lg bg-zinc-500`}

  &:hover {
    background-color: #5c5c5c;
  }
`;
