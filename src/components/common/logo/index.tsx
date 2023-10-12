import { Box, Layout, LogoImg, Pointer } from './Styled';
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
