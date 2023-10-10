import * as Dialog from "@radix-ui/react-dialog"

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import { NewTransactionModal } from "../NewTransactionModal"

export const Header = () => {
  return(
    <HeaderContainer>
        <HeaderContent>
          <h1>DT Money</h1>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <NewTransactionModal />
          </Dialog.Root>
        
        </HeaderContent>
    </HeaderContainer>
  )
}