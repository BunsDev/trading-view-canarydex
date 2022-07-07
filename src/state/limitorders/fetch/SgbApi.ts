import axios  from "axios"

const fetchchartdatadaily=async (token0,token1) =>{
    

    console.log("https://sgbchart.herokuapp.com/getpairdata?token0=".concat(token0).concat("&token1=").concat(token1).concat("&interval=pairsdaily"))
    const data=await axios.get("https://sgbchart.herokuapp.com/getpairdata?token0=".concat(token0).concat("&token1=").concat(token1).concat("&interval=pairsdaily"),{
        headers: {
            'content-type': 'application/json'
        }
    })
    return data.data;
}
const fetchchartdataweekly=async (token0,token1) =>{
    const data=await axios.get("https://sgbchart.herokuapp.com/getpairdata?token0=".concat(token0).concat("&token1=").concat(token1).concat("&interval=pairsweekly"),{
        headers: {
            'content-type': 'application/json'
        }
    })
    return data.data;
}
const fetchchartdatamonthly=async (token0,token1) =>{
    const data=await axios.get("https://sgbchart.herokuapp.com/getpairdata?token0=".concat(token0).concat("&token1=").concat(token1).concat("&interval=pairsmonthly"),{
        headers: {
            'content-type': 'application/json'
        }
    })
    return data.data;
}
const fetchchartdatayearly=async (token0,token1) =>{
    const data=await axios.get("https://sgbchart.herokuapp.com/getpairdata?token0=".concat(token0).concat("&token1=").concat(token1).concat("&interval=pairsyearly"),{
        headers: {
            'content-type': 'application/json'
        }
    })
    return data.data;
}

export {fetchchartdatadaily,fetchchartdataweekly,fetchchartdatayearly,fetchchartdatamonthly}