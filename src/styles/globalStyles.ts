import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Koulen', sans-serif;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.darkBlue};
  }

  td button {
    padding: 0;
    border: none;
    margin: -1px 0 -1px 0;
  }

  td p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  form button {
    margin-top: 10px;
  }

  .number0{
    padding-top: 20px;
  }

  .navio1, .navio2{
    z-index: -1 !important;
    position: fixed;
    width: 60vh;
  }

  .navio1{
    left: 0;
  }

  .navio2{
    bottom: 0;
    right: 0;
  }
`;
