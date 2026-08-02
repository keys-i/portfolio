import React from "react";
import Head from "next/head";

const title = "Rad’s Portfolio | Krad Linux";
const description =
  "Explore Rad’s projects, skills, résumé, and experiments through the browser-based Krad Linux desktop.";
const siteUrl = "https://keysi.dev/";
const imageUrl = `${siteUrl}images/logos/profile.png`;

export default function Meta() {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#e95420" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Rad’s Portfolio" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={siteUrl} />
      <link rel="icon" href="/images/logos/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/logos/profile.png" />
    </Head>
  );
}
