import StartGame from "./startGame/StartGame"
import GameStart from "./gamePlay/GameStart"
import {useState} from 'react'


const Components=()=>{
  const [toggleBtn,setToogleBtn] = useState(false)
  const toggleGamePlay = () => {
    setToogleBtn((prev) => !prev);
  };
  
  return (
    <>
    {toggleBtn?<GameStart/>:    <StartGame toggle={toggleGamePlay}/>}
    </>
    )
}
export default Components