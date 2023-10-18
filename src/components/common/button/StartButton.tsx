import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Start_Default from '../../../assets/button/Start_Default.png';
import Start_Hover from '../../../assets/button/Start_Hover.png';

export const StartButton = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState<boolean>(false);

  const onMouseOverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsHover(true);
  };

  const onMouseOutHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsHover(false);
  };

  const onClickHandler = () => {
    navigate('/my-pokemon-tamagotchi/home');
  };

  return (
    <Layout>
      <Button
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        onClick={onClickHandler}
      >
        <ButtonImg
          src={isHover ? Start_Hover : Start_Default}
          alt="Start Button Image"
        />
      </Button>
    </Layout>
  );
};

const Layout = styled.div`
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  border: none;

  background-color: transparent;
`;

export const ButtonImg = styled.img`
  width: 8rem;
`;
