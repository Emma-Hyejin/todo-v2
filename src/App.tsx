import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './todo/Main';
import Header from './todo/Header';
import Complete from './todo/Complete';
import { WholeContainer } from './todo/Main.styled';

function App() {
  return (
    <BrowserRouter>
      <WholeContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/complete" element={<Complete />} />
        </Routes>
      </WholeContainer>
    </BrowserRouter>
  );
}

export default App;
