"use client"
import { Html, Head, Main, NextScript } from 'next/document'
import ChakraWrapper from '../../public/components/ChakraWrapper'
import Link from 'next/link';
import theme from '../../theme/theme';

export default function Document() {
  return (
    <Html lang="en">
      <ChakraWrapper>
        <Head>
        <link
            href="https://fonts.googleapis.com/css2?family=Lemonada:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body style={{ background: "#7EA2FF" }} >
          <Main />
          <NextScript />
        </body>
      </ChakraWrapper>
    </Html>
  )
}
