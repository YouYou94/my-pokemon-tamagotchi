import styled from '@emotion/styled';

type SettingButtonProps = {
  children: string;
};

export const SettingButton = ({ children }: SettingButtonProps) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  width: 4rem;
  height: 4rem;

  border: none;
  border-radius: 1rem;
`;
