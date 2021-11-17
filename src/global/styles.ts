import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html,body,#root{
    height: 100%;
    background-color: rgba(33, 33, 33, 0.98);
    font-family: "Roboto", sans-serif;
  }
`