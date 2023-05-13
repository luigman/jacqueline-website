import styled from "styled-components";
import colors from "tokens/colors";

const Tag = styled.button`
  cursor: pointer;
  border-radius: 2em;
  padding: 0.5rem 1.5rem;
  margin: 0.1rem 0.3rem;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: ${({ textColor }) => textColor || "#333"};
  background: "#555";

  &:focus {
    outline: none;
  }

  &:disabled {
    background: gray;
  }
`;

export default Tag;
