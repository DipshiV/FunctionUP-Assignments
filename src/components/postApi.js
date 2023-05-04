import {React,Fragment,useState} from 'react';
import './postApi.css'
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
    try {    
      console.log(mobile);
      let data={mobile};
    let result= await fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            "Accept": 'application/json' 
        },
        body:JSON.stringify(data)
    });
    result=await result.json();
    console.log('success',result);
    }catch(error){
        console.error("Error:", error);

    }
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