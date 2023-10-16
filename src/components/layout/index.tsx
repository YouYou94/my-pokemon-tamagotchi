import styled from '@emotion/styled';

export const DefaultLayout = styled.div`
  flex: 1;

  display: flex;
`;

export const ColumnLayout = styled(DefaultLayout)<{
  height?: string;
  justifycontent?: string;
  alignitems?: string;
}>`
  height: ${(prop) => prop.height};

  flex-direction: column;
  justify-content: ${(prop) => prop.justifycontent};
  align-items: ${(prop) => prop.alignitems};
`;
