import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";

export default function Playground() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});

  const clickMe = (e, section, el) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("clicking:", section, el);
    setStyleObj(theme[section][el]);
    setSection(section);
    setElement(el);
  };

  // console.log("playground gets theme: ", theme);
  return (
    <>
      <Head>
        <title>Style Playground</title>
        <meta name="description" content="Play with Project Styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Page onClick={clickMe}>
          <StyleForm
            key={`${section}${element}`}
            section={section}
            element={element}
            styleObj={styleObj}
          />

          <section style={{ flexBasis: "60%" }}>
            <Text element="h1" onClick={clickMe}>
              Welcome to the Playground!
            </Text>

            <Text element="h2" onClick={clickMe}>
              I am a h2 heading
            </Text>
            <Text element="h3" onClick={clickMe}>
              I am a h3 heading
            </Text>
          </section>
        </Page>
      </main>
    </>
  );
}
