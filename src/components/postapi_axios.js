import {React,Fragment,useState} from 'react';
import './postapi_axios.css'
import axios from 'axios';
export default function OtpGen(){
    const [mobile,setMobile]=useState("");
    const [error,setError] =useState(false);
function handleChange(e){
    let item=e.target.value;
    if(!/^[789]\d{9}$/.test(item)){
    setError(true);
    }else{
        setError(false);
    }
    setMobile(item);
}
async function handleOtp(){    
      console.log(mobile);
    await axios.post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",{
      mobile })
      .then((response)=>{
      console.log("api data",response)
      }).catch((error)=>{
        console.log('post error',error);
      })
}
    return(<Fragment>
<div className='container'>
<h1>SignUp </h1>
<div className='form'>Enter your Mobile Number:
<span><input  type="Number"
name="mobile"
placeholder="mobile" onChange={handleChange} value={mobile} /> {error?<p>Invalid number</p>:""}
</span>

<div className='btn'>
<button onClick={handleOtp}>Get OTP</button>
</div>
</div>
</div>
</Fragment>
    );
}