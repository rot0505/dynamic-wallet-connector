import config from 'config'

import BlockchainService from './blockchainService'
import YATNFT from 'abi/YATNFT.json'

class YATNFTService extends BlockchainService {
  constructor(contractAddress) {
    super()
    this.contractAddress = contractAddress
    this.contract = new this.web3.eth.Contract(YATNFT, contractAddress)
  }

  getNFTBalance = async (address) => {
    const balance = await this.contract.methods.balanceOf(address).call()
    return balance
  }
}

const yatNFTService = new YATNFTService(config.yatNFT)

export default YATNFTService
export { yatNFTService }
