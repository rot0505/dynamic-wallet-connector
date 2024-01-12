import {
  useDynamicContext,
  useWalletItemActions,
  useDynamicScopes,
} from '@dynamic-labs/sdk-react-core'
import { VStack, Text, Button } from '@chakra-ui/react'
import { RoundButton } from 'components'
import { useNavigate } from 'react-router-dom'

const DynamicComponent = () => {
  const navigate = useNavigate()
  const { openWallet } = useWalletItemActions()
  const { user, isAuthenticated, handleLogOut } = useDynamicContext()
  const { userHasScopes } = useDynamicScopes()
  const hasNFTGateScope = userHasScopes('nft-gate')

  console.log('scope', hasNFTGateScope)
  if (isAuthenticated) {
    console.log('User is authorized', user, isAuthenticated)
  } else {
    console.log('User is not authorized', user, isAuthenticated)
  }
  return (
    <VStack
      w="100%"
      color="white"
      borderWidth="1px"
      borderColor="borderColor"
      alignItems="center"
      justifyContent="center"
      background="primaryBackground"
      minH="100vh"
      gap="30px"
    >
      <Button
        onClick={() => navigate('Original')}
        colorScheme="teal"
        variant="outline"
      >
        Try with Web3.js without Dynamic module
      </Button>
      <Text fontSize="3xl">
        {' '}
        Implemeting authentication using Dyanmic Module and its NFT gating
        feature{' '}
      </Text>
      <Text fontSize="2xl">
        {isAuthenticated
          ? hasNFTGateScope
            ? 'You have Yat NFT, You passed the NFT gate'
            : "You don't have Yat NFT, You don't pass the NFT gate"
          : ''}
      </Text>
      {isAuthenticated ? (
        <RoundButton onClick={async () => await handleLogOut()}>
          Disconnect MetaMask
        </RoundButton>
      ) : (
        <RoundButton onClick={() => openWallet('metamask')}>
          Connect MetaMask
        </RoundButton>
      )}
    </VStack>
  )
}

export default DynamicComponent
