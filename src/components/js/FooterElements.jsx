import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #000;
  color: #fff;
  height: 80px;
  padding: 1rem calc((100vw - 1000px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
    &:hover {
      color: #15cdfc;
    }
  }

  p {
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`;
