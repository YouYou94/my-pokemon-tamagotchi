import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/my-pokemon-tamagotchi" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
