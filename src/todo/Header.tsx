import { Link } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

import styled from 'styled-components';
import tw from 'twin.macro';
import { completedCount } from '../redux/clearSlice';

const HeaderContainer = styled.div`
  ${tw`flex flex-col items-center h-full py-5 bg-zinc-400`}
`;

const HeaderMenu = styled.div`
  ${tw`flex flex-row w-40 p-3 text-2xl font-semibold text-center`}

  &:hover {
    background-color: #5e5d5d;
    cursor: pointer;
  }
`;

const TaskCount = styled.div`
  ${tw`absolute w-7 p-1 h-7 text-sm font-semibold text-center 
  text-white bg-pink-400 rounded-full left-[135px]`}
`;

const Header = () => {
  const Taskcount = useAppSelector(completedCount);
  return (
    <HeaderContainer>
      <HeaderMenu>
        <Link to="/">TODO</Link>
      </HeaderMenu>
      <HeaderMenu>
        <Link to="/complete">Completed</Link>
        <TaskCount>{Taskcount}</TaskCount>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
