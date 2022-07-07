import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Canary Exchange',
  description:
    'The most popular AMM on BSC by user count! Earn CANARY through yield farming or win it in the Lottery, then stake it in CANARY Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Canary Exchange), NFTs, and more, on a platform you can trust.',
  image: 'https://canarydex.netlify.app/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Canary Exchange')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Canary Exchange')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Canary Exchange')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Canary Exchange')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Canary Exchange')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Canary Exchange')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Canary Exchange')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Canary Exchange')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Canary Exchange')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Canary Exchange')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Canary Exchange')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Canary Exchange')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Canary Exchange')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Canary Exchange')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Canary Exchange')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Canary Exchange')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Canary Exchange')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Canary Exchange')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Canary Exchange Info & Analytics')}`,
        description: 'View statistics for Canary Exchange exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Canary Exchange Info & Analytics')}`,
        description: 'View statistics for Canary Exchange exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Canary Exchange Info & Analytics')}`,
        description: 'View statistics for Canary Exchange exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Canary Exchange')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Canary Exchange')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Canary Exchange')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Canary Exchange')}`,
      }
    default:
      return null
  }
}
