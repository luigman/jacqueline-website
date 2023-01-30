import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Thumbnail = styled.div`
justify-content: center;
align-items: center;
overflow: hidden;
flex-shrink: 0;
    min-width: 100%;
    height: 300px;
    border-radius: 25px;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    span {
      color: #000;
      margin-left: 0.5rem;
    }
  }
`;
