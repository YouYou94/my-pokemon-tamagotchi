import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Start } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-pokemon-tamagotchi" element={<Start />} />
        <Route path="/my-pokemon-tamagotchi/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
