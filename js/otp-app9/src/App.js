import { useState } from 'react';
import { auth } from './firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

function App() {
  const [phone, setPhone] = useState();
  const [otp, setOtp] = useState();

  function configureCaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log("Configure Recaptcha");
        console.log(response);
        onSignInSubmit();
      }
    }, auth);
  }

  function onSignInSubmit(e) {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = phone;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP Sended")
      }).catch((error) => {
        console.log(`Error onSignInSubmit ${error}`);
      });
  }

  function onInputOTP(e) {
    e.preventDefault();
    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
      console.log("Success Send OTP");
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      console.log(`Error OTP ${error}`);
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  return (
    <div>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input type={"tel"} placeholder={"Nomor Telepon"} onChange={e => setPhone(e.target.value)} required />
        <button type='submit'>Login</button>
      </form>
      <form onSubmit={onInputOTP}>
        <input type={"number"} placeholder={"Nomor OTP"} onChange={e => setOtp(e.target.value)} required />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
