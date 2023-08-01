import styled from "styled-components";
import { Button } from "../Button/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container className="flex flex-wrap">
      <div className="imgSection">
        <img src="./images/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};


export default StartGame;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  .imgSection{
    width:400px;
    height:max-content;
    margin:0 auto;
    img{
    width:90%;
    object-fit:cover;
    }
  }
  .content{
    width:400px;
    padding:2em 5em 5em 0;
    flex-wrap:wrap;
    justify-content:left;
    margin:0 auto;
    h1{
      width:100%;
      font-size:7em;
    }
  }
  @media(max-width:${({theme})=>theme.media.mobile}){
    .content{
      justify-content:center;
      align-items:center;
      h1{
        text-align:center;
      }
    }
  }
`;
