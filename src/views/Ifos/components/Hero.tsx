import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import { useTranslation } from 'contexts/Localization'







const Hero = () => {
  const { t } = useTranslation()

  return (
    <Box mb="32px">
        <Container>
          <Heading as="h1" scale="xl" mb="24px">
            {t('IFO: Initial Farm Offerings')}
          </Heading>
          <Text bold fontSize="20px">
            {t('Buy new tokens with a brand new token sale model.')}
          </Text>
        </Container>
    </Box>
  )
}

export default Hero
