import styled from '@emotion/styled';
import Start_Default from '../../../assets/button/Start_Default.png';

export const StartButton = () => {
  return (
    <Layout>
      <Button>
        <ButtonImg src={Start_Default} alt="Start Button Image" />
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
