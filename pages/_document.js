// pages/_document.js
import Document, { Html, Main, NextScript, Head } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";

class MyDocument extends Document {
  // Your custom logic here

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="This is a description of my application."
          />
          <link rel="stylesheet" href="/path/to/your/global.css" />
          <title>Dhairya | Portfolio</title>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
