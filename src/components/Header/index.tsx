import * as Dialog from "@radix-ui/react-dialog"

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export const Header = () => {
  return(
    <HeaderContainer>
        <HeaderContent>
          <h1>DT Money</h1>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>Nova transação</NewTransactionButton>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay />

              <Dialog.Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <Dialog.Close />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        
        </HeaderContent>
    </HeaderContainer>
  )
}