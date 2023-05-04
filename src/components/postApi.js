import {React,Fragment,useState} from 'react';
export default function OtpGen(){
   
//    // const [formValues, setFormValues] = useState({mobile:''});
//     const [formErrors, setFormErrors] = useState({});
   
   
//     const validate = (values) => {
//         const errors = {};
//     const mobregex= /[6789]\d{9}$/;
//     if(!values.mobile){
//         errors.mmobile ="Mobile No is required";
//     }else if(!mobregex.text(values.mobile)){
//         errors.mobile="Number should be 10 digit "
//     } return errors;
// };
async function handleOtp(data){
    try {
        const data = { "mobile": 7310013161 };
      console.log(data);
    let result= await fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",{
        method:'POST',
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
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
   // setFormErrors(validate(formValues));
}
    return(
<Fragment>
<input  type="Number"
name="mobileNo"
placeholder="mobileno" />


<button onClick={handleOtp}>Get OTP</button>

</Fragment>
    );
}