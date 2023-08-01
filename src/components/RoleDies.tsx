import {useState} from "react"
import styled from "styled-components"

const RoleDies = ({rolDiecs})=>{
  const {upDateDiecs,rendomDiec,isStatus} = rolDiecs
  
  return (
    <Wrapper className="flex"
    onClick={rendomDiec}
    >
    <img src={`./images/dice/dice_${upDateDiecs}.png`} alt={`./images/dice/dice_${upDateDiecs}.png`} className={isStatus?"active":""}/>
    <p>Click to Roll Diec Now</p>

    </Wrapper>
    )
}
export default RoleDies
const Wrapper=styled.div`
flex-direction:column;
flex-wrap:wrap;
margin-top:-5em;
img{
  width:75%;
  object-fit:cover;
}
.active:active{
  animation:rolling 0.5s alternate 1;
}
p{
  font-size:2em;
}
@keyframes rolling{
  from{
    transform:rotateX(0deg) rotateY(90deg);
  }
  to{
    transform:rotateX(360deg) rotateY(360deg);
  }
}
`