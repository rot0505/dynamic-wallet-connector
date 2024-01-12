import { useEffect, useState } from 'react'
import { VStack, Text, Button } from '@chakra-ui/react'
// import { RoundButton } from 'components'
import { ConnectWalletButton } from 'components'
import { useNavigate } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { yatNFTService } from 'services/blockchain/YATNFTService'

const Web3JsComponent = () => {
  const [isPassed, setIsPassed] = useState(false)
  const navigate = useNavigate()
  const { account } = useWeb3React()
  useEffect(() => {
    if (account) {
      yatNFTService.getNFTBalance(account).then((balance) => {
        if (balance > 0) {
          setIsPassed(true)
        }
      })
      navigate()
    }
  }, [account])

  return (
    <VStack
      w="100%"
      color="white"
      borderWidth="1px"
      borderColor="borderColor"
      alignItems="center"
      justifyContent="center"
      background="teal"
      minH="100vh"
      gap="30px"
    >
      <Button
        onClick={() => navigate('/')}
        colorScheme="primaryColor"
        variant="outline"
      >
        Try with Dynamic module
      </Button>
      <Text fontSize="3xl">
        {' '}
        Implemeting authentication and NFT gating using Web3.js{' '}
      </Text>
      <Text fontSize="2xl">
        {account
          ? isPassed
            ? 'You have Yat NFT, You passed the NFT gate'
            : "You don't have Yat NFT, You don't pass the NFT gate"
          : ''}
      </Text>
      <ConnectWalletButton />
    </VStack>
  )
}

export default Web3JsComponent
