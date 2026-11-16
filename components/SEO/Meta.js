import React from "react";
import Head from "next/head";

const title = "Radhesh Goel | Operating Systems Developer";
const description =
  "Explore Radhesh Goel’s operating systems work, software projects, technical skills, résumé and connected tools through the interactive Krad Linux portfolio.";
const siteUrl = "https://keysi.dev/";
const imageUrl = `${siteUrl}images/logos/profile.png`;
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}#profile`,
      url: siteUrl,
      name: title,
      description,
      mainEntity: { "@id": `${siteUrl}#person` },
      isPartOf: { "@id": `${siteUrl}#website` },
      hasPart: [
        { "@id": "https://uni.keysi.dev/#website" },
        { "@id": "https://share.keysi.dev/#website" },
        { "@id": "https://cast.keysi.dev/#website" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: "Radhesh Goel",
      alternateName: "Rad",
      url: siteUrl,
      image: imageUrl,
      jobTitle: "Operating Systems Developer",
      knowsAbout: ["Operating systems", "C", "RISC-V", "Rust", "Linux"],
      sameAs: ["https://github.com/keys-i", "https://linkedin.com/in/radhesh-g"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      url: siteUrl,
      name: "Krad Linux",
      description,
      publisher: { "@id": `${siteUrl}#person` },
    },
    {
      "@type": "WebSite",
      "@id": "https://uni.keysi.dev/#website",
      url: "https://uni.keysi.dev/",
      name: "Rad’s Notes",
      description: "Study notes, worked examples, cheatsheets and past papers",
    },
    {
      "@type": "WebSite",
      "@id": "https://share.keysi.dev/#website",
      url: "https://share.keysi.dev/",
      name: "share.git",
      description: "Read-only links for sharing private GitHub repositories",
    },
    {
      "@type": "WebSite",
      "@id": "https://cast.keysi.dev/#website",
      url: "https://cast.keysi.dev/",
      name: "QuestRelay",
      description: "Low-latency Meta Quest mixed-reality casting",
    },
  ],
};

export default function Meta() {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="author" content="Radhesh Goel" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#e95420" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="Radhesh Goel" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Radhesh Goel" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content="Rad’s Portfolio" />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={siteUrl} />
      <link rel="icon" href="/images/logos/favicon.ico" />
      <link rel="apple-touch-icon" href="/images/logos/profile.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </Head>
  );
}
