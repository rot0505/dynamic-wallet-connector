import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core'
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import DynamicComponent from './page'

const DynamicPage = () => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: 'bda82efb-0455-47bb-82c0-a4bd586eb568',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <DynamicComponent />
    </DynamicContextProvider>
  )
}

export default DynamicPage
