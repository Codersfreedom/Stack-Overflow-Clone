import React from 'react'

const OtpPage = () => {

const handleOtpChange =(e)=>{
    const value = e.target.value
}

  return (
    <div>
       <div>
          <h2>OTP Verification</h2>
          <p>Please enter the OTP sent to your email or phone.</p>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={handleOtpChange}
          />
          <button onClick={handleVerification}>Verify</button>
        </div>
    </div>
  )
}

export default OtpPage
