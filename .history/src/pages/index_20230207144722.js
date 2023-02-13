import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import H1 from "@/components/text/H1";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ theme }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 style={theme.text.h1}>Regular h1 text</h1>
        <H1>I am a H1 component text</H1>
      </main>
    </>
  );
}
