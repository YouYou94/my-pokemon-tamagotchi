import { SettingButton } from '../common/button/SettingButton';
import { Layout, Header, Article, Footer } from './Styled';

export const Display = () => {
  return (
    <Layout>
      <Header></Header>
      <Article></Article>
      <Footer>
        <SettingButton>1</SettingButton>
        <SettingButton>2</SettingButton>
        <SettingButton>3</SettingButton>
      </Footer>
    </Layout>
  );
};
