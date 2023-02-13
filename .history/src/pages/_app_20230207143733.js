import "@/styles/globals.css";
import currentTheme from "./themes";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
