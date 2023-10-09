import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export const Header = () => {
  return(
    <HeaderContainer>
        <HeaderContent>
          <h1>DT Money</h1>


          <NewTransactionButton>Nova transação</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
  )
}