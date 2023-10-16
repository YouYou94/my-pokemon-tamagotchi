import styled from '@emotion/styled';

export const DefaultLayout = styled.div`
  flex: 1;

  display: flex;
`;

export const ColumnLayout = styled(DefaultLayout)<{
  justifycontent?: string;
  alignitems?: string;
}>`
  flex-direction: column;
  justify-content: ${(prop) => prop.justifycontent};
  align-items: ${(prop) => prop.alignitems};
`;
