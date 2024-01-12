import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

import Web3JsComponent from './page'

function getLibrary(provider) {
  var library

  if (provider?.chainType === 'hmy') {
    library = provider.blockchain
  } else {
    library = new Web3Provider(provider)
    library.pollingInterval = 8000
  }

  return library
}
const Web3JsPage = () => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3JsComponent />
    </Web3ReactProvider>
  )
}

export default Web3JsPage
