import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Page from "@/components/layout/Page";
//import styles from "@/styles/Home.module.css";

import { ColorDropdown } from "@/dev/components/dropdowns";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          <Link
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            href="/playground"
          >
            To Playground
          </Link>
          <section style={{ maxWidth: "600px" }}>
            <h1 key={Math.random()} elem="h1">
              I am a h1 heading
            </h1>

            <h2 key={Math.random()} elem="h2">
              I am a h2 heading
            </h2>
            <p key={Math.random()} elem="h3">
              I am a paragraph
            </p>
            <p key={Math.random()} elem="h4">
              I am a h4 heading
            </p>

            <p key={Math.random()} elem="h5">
              I am a h5 heading
            </p>
            <p key={Math.random()} elem="h6">
              I am a h6 heading
            </p>
            <p key={Math.random()} elem="subtitle1">
              I am a subtitle1
            </p>
            <p key={Math.random()} elem="subtitle2">
              I am a subtitle2
            </p>
          </section>
        </Page>
      </main>
    </>
  );
}
