import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.header`
  width: calc(100% - 1px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #06283d;
  box-shadow: 3px 3px 10px ${colors.shadow};
`;

export const ContainerTexts = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  text-transform: uppercase;
  color: ${colors.white};
  line-height: 50px;
`;

export const Image = styled.img.attrs((props: any) => ({
  src: props.src,
  alt: "Logo",
}))`
  width: 50px;
  height: 43px;
  margin-right: 0.7vw;
`;

export const Link = styled.a`
  text-decoration: none;
  font-weight: 400;
  font-size: 38px;
  color: ${colors.white};
`;
