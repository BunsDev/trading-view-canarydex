import { Token, ChainId } from '@pancakeswap/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

export const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = [
  {
    id: 'sample',
    address: '0x751D354D940250b3E7a333DC9B0883816363A20c',
    isActive: true,
    name: 'Sample Token(Sample)',
    poolBasic: {
      saleAmount: '100,000 Sample',
      raiseAmount: '$100,000',
      cakeToBurn: '$0',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '200,000 Sample',
      raiseAmount: '$200,000',
      cakeToBurn: '$0',
      distributionRatio: 0.7,
    },
    currency: tokens.cake,
    token: tokens.ifotoken,
    releaseBlockNumber: 16993396,
    campaignId: '1',
    articleUrl: 'https://canarydex.netlify.app/voting/proposal/QmUqRxjwZCWeZWEdgV2vHJ6hex7jMW7i247NKFas73xc8j',
    tokenOfferingPrice: 2.5,
    version: 2,
  }
]

export default ifos
