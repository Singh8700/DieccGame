import styled from "styled-components";

const NumberSelector = ({ numberData }) => {
 const {
   selectedNumber,
   setSelectedNumber,
   error,
   gameOver,
   gameCount,
   gameWin
 }=numberData
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
  };

  return (
    <NumberSelectorContainer>
    <p className="gameChance">Your Total Chance is {gameCount}</p>
    {error?<p className="error">{error}</p>:''}
      <div className="flexs">
        {arrNumber.map((value, i) => (
          <Box className="flex"
            key={i}
            isSelected={value === selectedNumber}
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}

      </div>
      <p>Select Number</p>
   <p className="error">{gameOver}</p>
   <p className="win">{gameWin}</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  width:600px;
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  align-items:right;
  padding:0 2em;
  .flexs{
    display: flex;
    gap: 24px;
  }
 .gameChance{
    font-size:2em;
    margin-top:0em;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
    text-align:right;
  }
  .error {
    font-size:2em;
    color: red;
  }
.win{
font-size:2em;
margin-top:-2em;
color:green;
}
    @media(max-width:${({theme})=>theme.media.mobile}){
    p{
      padding:0.5em 0;
      margin-top:0.5em;
    }
    }
`;

const Box = styled.div`
  height: 60px;
  width: 60px;
  text-align:center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  border-radius:0.8em;
  border: 1px solid ${(props) => (props.isSelected ? "var(--clr)" : "var(--bg)")};
  background-color: ${(props) => (props.isSelected ? "var(--bg)" : "var(--clr)")};
  color: ${(props) => (!props.isSelected ? "var(--bg)" : "var(--clr)")};

  transition: all 0.5s;
    @media(max-width:${({theme})=>theme.media.mobile}){
    margin-top:-1em;
    }
`;
