import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import { Box, Button, Checkbox, Flex, Link, Radio, Text } from '@pancakeswap/uikit'
import { RowBetween } from 'components/Layout/Row'
import Page from 'views/Page'
import { StyledInputCurrencyWrapper, StyledSwapContainer } from 'views/Swap/styles'
import { AppBody } from 'components/App'
import { useTokenGenContract } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import { BIG_NINE, BIG_TEN } from 'utils/bigNumber'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import axios from 'axios'



const InputRow = styled.div<{ selected: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
  padding: ${({ selected }) => (selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem')};
`

const LabelRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0.75rem 1rem 0 1rem;
`
const InputPanel = styled.div`
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  border-radius: '20px';
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  z-index: 1;
`
const Container = styled.div`
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.input};
  box-shadow: ${({ theme }) => theme.shadows.inset};
`

const StyledInput = styled.input`
  color: ${({ theme }) => (theme.colors.text)};
  width: 20rem;
  position: relative;
  font-weight: 500;
  outline: none;
  border: none;
  font-size: 16px;
  white-space: nowrap;
  padding: 0px;
  text-align: left;


  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }
`
const gasPrice = BIG_TEN.times(BIG_TEN.pow(BIG_NINE)).toString()
const Tokengen: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const { toastError, toastSuccess } = useToast()
  const contract=useTokenGenContract();
  const [deployedevent, setDeployedevent] = useState(0);
  const [deployedContract, setDeployedContract] = useState([])
  const [dcontractAddress, setDcontractAddress] = useState("")
  const [contractName, setContractName] = useState("StandardToken");
  const [contractcode, setContractcode] = useState("");
  const [copytext, setCopytext] = useState("2. Copy Code")
  if(navigator.clipboard.readText.toString()===contractcode)
  setCopytext("2. Code Copied")
  const ref1=useRef<HTMLInputElement>(null);
  const ref2=useRef<HTMLInputElement>(null);
  const ref3=useRef<HTMLInputElement>(null);
  const ref4=useRef<HTMLInputElement>(null);
  const ref5=useRef<HTMLInputElement>(null);

  const {balance}=useGetBnbBalance()
  const [mybal, setMybal] = useState("0")
  useEffect(()=>{
    setMybal(balance.div("1000000000000000000").toString())
  },[balance])
  async function loadData()
  {
    
      if(account&&account.startsWith("0x"))
      {
      const counter=await contract.counter(account);
      if(counter>0)
      {
        console.log(account,counter)
        const arr=[];
        for(let i=counter-1;i>-1;i--)
        {
        const data=await contract.deployedtokens(account,i)
        arr.push(<p>{data}</p>)
        }
        setDeployedContract(arr)
      }
      }
        
  }
         
  return (
    <>
      <Page ><h1>Your SGB Balance: {mybal}</h1>
              <br/><br/>
      <StyledSwapContainer $isChartExpanded={false} >
      
            <StyledInputCurrencyWrapper >
              <AppBody>
              <br/><br/>
      <Flex width="100%" justifyContent="right" position="relative">
      
      <Text >Token Name:</Text>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <StyledInput
      ref={ref1}
      placeholder='My Token'
    /></Flex>

<br/>

    <Flex width="100%"  justifyContent="right" position="relative">  
      <Text >Token Symbol:</Text>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <StyledInput
      ref={ref2}
      placeholder='MYT'
    /></Flex>
<br/>
<Flex width="100%"  justifyContent="right" position="relative">  
      <Text >Token Supply:</Text>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <StyledInput
      ref={ref3}
      type="number"
      placeholder='1000000'
    /></Flex>
<br/>

<Flex width="100%"  justifyContent="right" position="relative">  
      <Text >Mintable:</Text>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Box style={{width: "20rem"}}>
      <Checkbox ref={ref4} scale="sm" value="sd"/>
      </Box>
      </Flex>
<br/>
      <Flex width="100%"  justifyContent="right" position="relative">  
      <Text >Burnable:</Text>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Box style={{width: "20rem"}}>
      <Checkbox ref={ref5} scale="sm" value="sd"/>
      </Box>
      </Flex>

      <br/>
      <Flex width="100%"  justifyContent="center" position="relative">  
      <Button onClick={async ()=>{
          if(ref1.current.value.trim().length>0&&ref2.current.value.trim().length>0&&ref3.current.value.length>0)
          {
            try {
                
            const tx = await contract.deployNewToken(ref1.current.value.trim(),ref2.current.value.trim(),ref3.current.value,ref4.current.checked,ref5.current.checked,{value:"50000000000000000000"});
             
            const receipt=await tx.wait()
              if (receipt.status) {
                for(let i=0;i<receipt.events.length;i++)
                {
                  if(receipt.events[i].event==="ERC20TokenCreated")
                  {
                    setDcontractAddress(receipt.events[i].args.tokenAddress)
                  }
                }
                if(ref4.current.checked&&ref5.current.checked)
                  setContractName("Erc20Token")
                else if(ref4.current.checked)
                  setContractName("MintableToken")
                  else if(ref5.current.checked)
                  setContractName("BurnableToken")
                  else
                  setContractName("StandardToken")
                toastSuccess('Success', 'Your token is created successfully.')
                setDeployedevent(deployedevent+1)
              }
            } catch (error:any) {
              if(error.code!==4001)
              toastError('Error', 'You have not enough balance for token creation.')
              // setDeployedevent(deployedevent+1)
            
            }
        }
        else
        toastError('Error', 'First 3 parameters (Name, symbol, supply) is compulsory')
          }} >1. Create</Button>
      </Flex>

      <br/><br/>
      <Flex width="100%"  justifyContent="center" position="relative">  
      <Button onClick={async ()=>{
        const contcode = await axios.get('/contractcode.txt',{}) 
        setContractcode(contcode.data)
        navigator.clipboard.writeText(contcode.data)
              setCopytext("2. Code Copied")
         }} >{copytext}</Button>

</Flex>
<br/><br/>
      <Flex width="100%"  justifyContent="center" position="relative">  
      

<Link  href={"https://songbird-explorer.flare.network/address/".concat(dcontractAddress).concat("/verify-via-flattened-code/new")}>
              <Button variant={!account ? 'secondary' : 'primary'}>3. Verify Contract</Button>
            </Link>
         
</Flex>
<br/><br/>
    </AppBody>
    <br/><br/>
    <Flex width="100%" flexDirection="column"  justifyContent="left" position="relative">  
      <h1>Parameters you will need while contract verification:</h1>
      <br/>
      <p>Contract Name:  <strong>{contractName}</strong></p>
      <p>Compiler:  <strong>v0.6.12+commit.27d51765</strong></p>
      <p>Try to fetch constructor arguments automatically:  <strong>Yes</strong></p>
      </Flex>
    <br/><br/>
    <AppBody>
    <br/>
    <Flex width="100%" justifyContent="center" position="relative">
    
    <Button onClick={()=>{loadData()}}>Deployed Token Addresses</Button>
    </Flex>
    <br/>
    <div style={{textAlign:"center",width:"100%"}}>
    {deployedContract}

    </div>
    <br/>
    </AppBody>
    </StyledInputCurrencyWrapper>
    </StyledSwapContainer>
    </Page>
     
    </>
  )
}

export default Tokengen
