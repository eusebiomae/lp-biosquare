import styled from "styled-components";
import theme from "../../theme";

export const BoxContent = styled.div`
  position: absolute;
`;

export const BoxButton = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  gap: 15px;
  position: relative;
  /* width: 150px; */

  & > div {
    align-items: center;
    background-color: ${theme.colors.green};
    border: 1px solid ${theme.colors.brown};
    clip-path: polygon(0% 0%,100% 0%,100% 75%,95% 75%,100% 85%,90% 75%,0% 75%);
    display: flex;
    font-size: 15px;
    justify-content: space-evenly;
    left: -11px;
    padding: 0px 6px 55px;
    position: fixed;
    top: -165px;
    -webkit-clip-path: polygon(0% 0%,100% 0%,100% 75%,95% 75%,100% 85%,90% 75%,0% 75%);
    width: 395px;
    height: 220px;
    z-index: 1;

    @media (max-width: ${theme.breakpoints.desktop.px}) {
      width: 350px;
      clip-path: polygon(76% 5%, 64% 0, 84% 5%, 100% 5%, 100% 100%, 30% 100%, 0 100%, 0 5%);
      -webkit-clip-path: polygon(76% 5%, 64% 0, 84% 5%, 100% 5%, 100% 100%, 30% 100%, 0 100%, 0 5%);
      height: 164px;
      padding: 0 6px 0;
    }

    img {
      padding: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  & > button {
    align-items: center;
    background-color: ${theme.colors.brown};
    color: ${theme.colors.green};
    /* border-radius: 50px; */
    display: flex;
    font-size: 17px;
    height: 25px;
    justify-content: center;
    position: relative;
    width: 25px;
    /* padding: 3px 5px; */
    margin-right: 5px;
    margin-top: 18px;

    ${theme.typography.map}

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    &:before {
      animation: rotate 7s linear infinite;
      /* border-radius: 50%; */
      border: 1px dashed ${theme.colors.brown};
      bottom: 3px;
      content: '';
      height: 32px;
      left: -3px;
      -moz-transition: all 0.2s ease;
      position: absolute;
      top: -3px;
      transition: all 0.3s ease;
      -webkit-transition: all 0.2s ease;
      width: 32px;
    }
  }
`;
