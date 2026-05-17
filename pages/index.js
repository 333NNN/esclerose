import Head from "next/head";
import React from "react";

import Profile from "@/src/components/profile/profile";
import List from "@/src/components/list/list";
import Toogle from "@/src/components/button/toogleMode";
import Social from "@/src/components/social-links/social-links";

export default function Home() {
  return (
    <>
      <Head>
        <title>𝕰𝕾𝕮𝕷𝕰𝕽𝕺𝕾𝕰</title>
        <meta name="description" content="Central de links oficiais - Esclerose" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Força o navegador a baixar os backgrounds com prioridade máxima */}
        <link rel="preload" href="/assets/bg-dark.webp" as="image" type="image/webp" />
        <link rel="preload" href="/assets/bg-test1.webp" as="image" type="image/webp" />
      </Head>

      <div id="container">
        <Profile />
        <Toogle />
        <List />
        <Social />
      </div>
    </>
  );
}