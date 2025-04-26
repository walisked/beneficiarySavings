import { useState } from 'react';
import { auth } from '../../firebase/config';
import { multiFactor } from 'firebase/auth';

const MFAEnrollment = () => {
  const [otp, setOtp] = useState('');
  
  const enrollSMS = async () => {
    const user = auth.currentUser;
    const multiFactorSession = await multiFactor(user).getSession();
    
    // Send SMS OTP
    const phoneOpts = {
      phoneNumber: '+1234567890',
      session: multiFactorSession
    };
    
    await multiFactor(user).enroll({
      phoneNumber: phoneOpts.phoneNumber,
      session: multiFactorSession
    });
    
    // Handle OTP verification
    await multiFactor(user).finalizeEnrollment(otp);
  };

  return (
    <div>
      <input value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={enrollSMS}>Enable SMS 2FA</button>
    </div>
  );
};