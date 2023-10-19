import { ColumnLayout, Logo, StartButton, Copyright } from '../components';

const Home = () => {
  return (
    <ColumnLayout height="100vh" justifycontent="space-between">
      <Logo />
      <ColumnLayout justifycontent="flex-end">
        <StartButton />
        <Copyright />
      </ColumnLayout>
    </ColumnLayout>
  );
};

export default Home;
