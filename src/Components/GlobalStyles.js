import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// export default ()=>createGlobalStyle``;

const globalStyles = createGlobalStyle` 
${reset};
a{
    text-decoration:none;
    color:inherit;
}
*{
    box-sizing:border-box;

}
body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:15px;
    background-color:rgba(20,20,20,1);
    color:white;
    padding-top:50px;
    margin-left:10px;
    height:100%;
}`;
export default globalStyles;
