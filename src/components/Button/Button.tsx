import styled from "styled-components";

export const Button = styled.button`
  color:var(--clr);
  background:var(--bg);
  padding:0.5em 0.8em;
  display:flex;
  align-items:center;
  margin:0em auto;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
