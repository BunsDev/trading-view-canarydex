
import React,{ useState, useCallback, memo } from 'react'
import { Flex, Card,ButtonMenu, ButtonMenuItem, Button } from '@pancakeswap/uikit'

import styled from 'styled-components'
import useTheme from 'hooks/useTheme';

const Wrapper = styled.div`
  & > div {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.input};
    border: 0;
  }
  & button {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
`



const LimitOrderTable: React.FC = () => {
  const [index, setIndex] = useState(0);
  const handleClick = (newIndex) => setIndex(newIndex);
  const { theme } = useTheme()
  return (
    
      <Wrapper>
      
        <ButtonMenu activeIndex={index} onItemClick={handleClick}>
          <ButtonMenuItem style={{
              color: index === 0 ? theme.colors.text : theme.colors.textSubtle,
              backgroundColor: index===0 ? theme.card.background : theme.colors.input,
            }}>Open Orders</ButtonMenuItem>
          <ButtonMenuItem style={{
              color: index===1 ? theme.colors.text : theme.colors.textSubtle,
              backgroundColor:  index===1 ? theme.card.background : theme.colors.input,
            }}>Order History</ButtonMenuItem>
        </ButtonMenu>
    
    </Wrapper>
     
  )
}

export default LimitOrderTable
