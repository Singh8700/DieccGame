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
    background-color: (--bg);
    border: 1px solid (--bg);
    color: (--clr);
    transition: 0.3s background ease-in;
  }
`;

