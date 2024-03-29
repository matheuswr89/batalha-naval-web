import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
    text-transform: uppercase;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
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
  .hover-icon {
    color: black;
    
  }
  .hover-icon:hover {
    color: ${colors.blueMap};
  }
  /* width */
::-webkit-scrollbar {
  width: 5px;
  border-radius: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;
