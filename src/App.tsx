import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"

import { Transactions } from "./pages/Transactions"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />

    <Transactions />
    </ThemeProvider>
  )
}

export default App
