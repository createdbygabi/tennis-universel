import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tennis Universel - Un média social passionné par le tennis. Interviews exclusives avec des légendes du tennis, des étoiles montantes et des experts de l'industrie." />
        <meta name="keywords" content="tennis, interviews, tennis universel, actualités tennis, médias tennis" />
        <meta name="author" content="Tennis Universel" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Tennis Universel" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tennisuniversel" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

