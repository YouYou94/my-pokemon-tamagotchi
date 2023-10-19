import styled from '@emotion/styled';
import MainLogo from '../../../assets/logo/Main.png';

export const Logo = () => {
  return (
    <Layout>
      <Box>
        <Pointer>
          <LogoImg src={MainLogo} alt="Main Logo Image" />
        </Pointer>
      </Box>
    </Layout>
  );
};

const Layout = styled.header`
  height: 15rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div``;

const Pointer = styled.div`
  cursor: pointer;
  user-select: none;
`;

const LogoImg = styled.img`
  width: 48rem;
`;
