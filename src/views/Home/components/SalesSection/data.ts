import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Create your very own token on our Super Simple Token Generator.',
  bodyText: 'Your can create, have a special launch event and trade your new token on CanarySwap.',
  reverse: false,
  primaryButton: {
    to: '/tokengen',
    text: 'Create Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.canaryx.xyz/products/token-creation',
    text: ('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBNB.png', alt: 'CANARY token logo' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on SGB Chain in seconds, just by connecting your wallet.',
  reverse: true,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.canaryx.xyz',
    text: ('Learn'),
    external: true,
  },
  
  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaUSDT.png', alt: 'Trading Everything' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'Earn passive income.',
  bodyText:
    'CanarySwap makes it easy to make your crypto work for you.',
  reverse: false,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.canaryx.xyz',
    text: ('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: '/images/home/YuklaBUSD.png', alt: 'Canary Mountains' }
    ],
  },
}
