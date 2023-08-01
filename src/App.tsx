import Components from "./components/Components"
import {ThemeProvider} from "styled-components"
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
    <Components/>
    </ThemeProvider>
  )
}

export default App
