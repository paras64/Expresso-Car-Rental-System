import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
:root {
  --white-color: #fff;
  --black-color: #000;
  --text-color: #767676;
  --btn-background-color: #ff4d30;
  --vehical-name-bg-color: #e9e9e9;
  --page-background-color: #f8f8f8;
  --field-color:#f0f8ff;
  
}
`;
