import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
      font-family: 'TTNorms-Black';
      src: url("/static/fonts/TTNorms-Black.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Black.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-BlackItalic';
      src: url("/static/fonts/TTNorms-BlackItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-BlackItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-Bold';
      src: url("/static/fonts/TTNorms-Bold.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Bold.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-BoldItalic';
      src: url("/static/fonts/TTNorms-BoldItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-BoldItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-ExtraBold';
      src: url("/static/fonts/TTNorms-ExtraBold.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-ExtraBold.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-ExtraBoldItalic';
      src: url("/static/fonts/TTNorms-ExtraBoldItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-ExtraBoldItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-ExtraLight';
      src: url("/static/fonts/TTNorms-ExtraLight.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-ExtraLight.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-ExtraLightItalic';
      src: url("/static/fonts/TTNorms-ExtraLightItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-ExtraLightItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-Heavy';
      src: url("/static/fonts/TTNorms-Heavy.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Heavy.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-HeavyItalic';
      src: url("/static/fonts/TTNorms-HeavyItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-HeavyItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-Italic';
      src: url("/static/fonts/TTNorms-Italic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Italic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-Light';
      src: url("/static/fonts/TTNorms-Light.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Light.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-LightItalic';
      src: url("/static/fonts/TTNorms-LightItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-LightItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-Medium';
      src: url("/static/fonts/TTNorms-Medium.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Medium.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-MediumItalic';
      src: url("/static/fonts/TTNorms-MediumItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-MediumItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-Regular';
      src: url("/static/fonts/TTNorms-Regular.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Regular.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-Thin';
      src: url("/static/fonts/TTNorms-Thin.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-Thin.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'TTNorms-ThinItalic';
      src: url("/static/fonts/TTNorms-ThinItalic.otf") format("opentype"),
           url("/public/static/fonts/TTNorms-ThinItalic.otf") format("opentype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    overflow-x: hidden;
    background-color: #ffffff;
    background: #ffffff;


    .MuiPaper-elevation1{
      box-shadow: none !important;
    }

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    position: relative;
  }

  a:focus, textarea:focus, input:focus, button:focus{
      outline: none !important;
  }

  a:active, textarea:active, input:active, button:active {
    outline: none !important;
  }

  body{
    @media print {
        .hiddenInPrint{
          display: none;
          margin: 0;
          padding: 0;
          border: 0 !important;
          overflow: hidden;
        }
        .removePaddingInPrint{
          margin: 0;
          padding: 0;
          border: 0 !important;
          overflow: hidden;
        }
      }
  }
`;
