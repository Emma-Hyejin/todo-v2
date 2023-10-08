import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tw from 'twin.macro';

const HeaderContainer = styled.div`
  ${tw`flex flex-col items-center h-full py-5 bg-zinc-400`}
`;

const HeaderMenu = styled.div`
  ${tw`p-3 text-2xl font-semibold text-center w-36`}

  &:hover {
    background-color: #5e5d5d;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderMenu>
        <Link to="/">TODO</Link>
      </HeaderMenu>
      <HeaderMenu>
        <Link to="/complete">Completed</Link>
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
