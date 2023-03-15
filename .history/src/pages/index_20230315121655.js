import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
//import { Inter } from "@next/font/google";
import Link from "next/link";
import Page from "@/components/layout/Page";
import { getFontsArray } from "@/utils/fonts";
import { useSelector, useDispatch } from "react-redux";
import { updateFont, selectFontObjs } from "@/store/fontsSlice";

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#FFFFE0",
};

// let options = [
//   { label: "Gelasio", value: "var(--font-gelasio)" },
//   { label: "Work Sans", value: "var(--font-work-sans)" },
//   { label: "Montserrat", value: "var(--font-montserrat)" },
// ];

let options = getFontsArray();

//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();
  const themeFonts = useSelector(selectFontObjs);

  useEffect(() => {
    console.log("themeFonts:", themeFonts);
  }, []);

  const test = (val) => {
    val.key = "body";
    dispatch(updateFont(val));
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page>
          <Link type="button" href="/playground">
            To Playground
          </Link>
          <button onClick={test}>Test</button>

          <div>
            <div>Body: {themeFonts.body.label}</div>
          </div>
        </Page>
      </main>
    </>
  );
}

// <StyleGrid title="Theme Fonts">
// <StyleGridItem label="body">
//   <FontDropdown
//     onSelect={test}
//     defaultObj={themeFonts.body}
//     key="body"
//     options={options}
//   />
// </StyleGridItem>
// <StyleGridItem label="headings">
//   <FontDropdown
//     onSelect={test}
//     defaultObj={themeFonts.display}
//     key="display"
//     options={options}
//   />
// </StyleGridItem>
// </StyleGrid>
