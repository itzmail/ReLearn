import { useState } from "react";
import firebase from "./firebase-config";

function App() {
  const [noPhone, setNoPhone] = useState();
  const [noOTP, setNoOTP] = useState();

  function configureCaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log(response);
        onSignInSubmit();
        console.log("Recaptcha Verified");
      },
      defaultCountry: "ID"
    });
  }

  function onSignInSubmit(e) {
    e.preventDefault();
    configureCaptcha();

    const phoneNumber = "+62" + noPhone;
    console.log(phoneNumber);

    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("Error onSignInSubmit", error);
      });
  }

  function onSubmitOTP(e) {
    e.preventDefault();
    const code = noOTP;
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user));
      alert("User is verified");
      // ...
    }).catch((error) => {
      console.log("Error onSubmitOTP")
      console.log(error);
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input type={"tel"} placeholder="Phone Number" onChange={e => setNoPhone(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>

      <h2>Enter OTP</h2>
      <form onSubmit={onSubmitOTP}>
        <input type={"tel"} placeholder="OTP Number" onChange={e => setNoOTP(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;