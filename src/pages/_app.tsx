//import "@/styles/globals.css";
import { GlobalStyles } from "@/styles/global_styles";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// const Container = styled.div`
//   background-color: ${({ theme }) => theme.colors.primary};
// `;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}
