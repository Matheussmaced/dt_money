import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

    <h1>Hello World</h1>
    </ThemeProvider>
  )
}

export default App
