import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    text-align: center;
    padding: ${theme.spacings.medium};
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
