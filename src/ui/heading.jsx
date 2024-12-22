// import styled, { css } from "styled-components";

// const Heading=styled.h1`
// ${props=>props.as==="h1" && css`
//     font-size: 3rem;
//     font-weight: 20px;
// `}
// ${props=>props.as==="h2" && css`
// font-size: 2rem;
// font-weight: 20px;
// `
// }
// ${props=>props.as==="h3" && css`
// font-size: 2rem;
// font-weight: 20px;
// `}

// color: red;
// font-weight: bold;
// background-color: #000;
// `

// export default Heading;

import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 6000;
    `}
    
  line-height: 1.4;
`;

export default Heading;