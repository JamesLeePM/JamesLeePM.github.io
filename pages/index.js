import Head from "next/head";
import { Inter } from "next/font/google";
import HomePage from "@/components/Pages/HomePage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>James Lee | AI Innovation Leader | Product Strategist | Software Engineer</title>
        <meta
          name="description"
          content="Passionate Product Technologist based in remote locations, USA"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage />
    </>
  );
}