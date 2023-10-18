import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Start } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-pokemon-tamagotchi" element={<Start />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
