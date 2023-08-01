import TotalScore from "../TotalScore"
import NumberSelector from "../NumberSelector"
import {useState} from "react"
import styled from "styled-components"
import RoleDies from "../RoleDies"
const GameStart =()=>{
  const [error,setError]= useState()
  const [selectedNumber,setSelectedNumber] = useState()
  const [upDateDiecs,setUpDateDiecs]=useState(1)
  const [gameOver,setGameOver] = useState()
  const [gameCount,setGameCount] = useState(5)
  const [isStatus,setIsStatus] = useState(false)
  const [gameWin,setGameWin] =useState()
  const [score,setScore]=useState(0)
  
   const rolingDiec=(min,max)=>{
     console.log("rolingDiec",Math.floor(Math.random() * (max - min) + min))
    return Math.floor(Math.random() * (max - min) + min)
  }
  const rendomDiec=()=>{
    setIsStatus(false)
    if(!selectedNumber){
       return setError("Please first Select the number and try again :)")
    }
    setIsStatus(true)
    const results = rolingDiec(1,7)
    
    setUpDateDiecs(prev => results)
    console.log(upDateDiecs)
    if(selectedNumber == results){
      setScore(prev => prev + results)
      setGameWin("Congratulations Your guess is right 👍")
     gameCount>=10?setGameCount(10):setGameCount(prev => prev + 1)
     setSelectedNumber(null)
     setError("")
      setTimeout(()=>{
        setGameWin("")
      },1000)
    }else{
      setScore(prev => prev - 2)
      setGameCount(prev => prev - 1)
      setSelectedNumber(null)
      setError("")
    if(gameCount===1){
       setGameOver("Game-Over because too many worng guess")
      setTimeout(()=>{
        setScore(0)
        setGameOver("")
        setGameCount(5)
      },1000)
    }
    }
  }
  const numberData={
    setSelectedNumber,
    selectedNumber,
    error,
    gameOver,
    gameCount,
    gameWin
  }
  const rolDiecs={
    upDateDiecs,
    rendomDiec,
    isStatus
  }
  return (
    <>
    <Wrapper className="flex">
    <div className="additional flex">
    <TotalScore score={score}/>
    <NumberSelector numberData={numberData}/>
    </div>
    <RoleDies rolDiecs={rolDiecs}/>
    </Wrapper>
    </>
    )
}
export default GameStart
const Wrapper = styled.div`
width:100vw;
height:100Vh;
justify-content:flex-start;
align-items:flex-start;
flex-wrap:wrap;
.additional{
  width:100%;
  justify-content:space-around;
  align-items:flex-end;
  flex-wrap:wrap;
  margin-top:0;
}
`