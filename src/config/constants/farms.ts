import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'CANARY',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      19: '0xB2cD91b79df296ea181AA5f6d729E5136e1853A4',
    },
    token: serializedTokens.syrup,
    quoteToken: serializedTokens.wbnb,
  } 
  ,
  {
    pid: 1,
    lpSymbol: 'CANARY-SGB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      19: '0x2cbfeb2b9319aB03be011FAC31fb7EeC2b0101c0',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
 

  ,
  {
    pid: 2,
    lpSymbol: 'CAND-SGB LP',
    lpAddresses: {
      97: '',
      19: '0x62006F35a5721834fD612fb5a0951d8C0019334B',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  }
  
]

export default farms
