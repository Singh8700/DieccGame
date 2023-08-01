import Components from "./components/Components"
import {ThemeProvider} from "styled-components"
import Mouse from "./components/mouse/MouseEvent"
const App = ()=> {
  const theme={
    media:{
      tab:"780px",
      mobile:"660px",
      smobile:"480px"
    }
  }
  return (
    <ThemeProvider theme={theme}>
    <Mouse/>
    <Components/>
    </ThemeProvider>
  )
}

export default App
