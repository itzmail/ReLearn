import React from 'react'
import { InputAuth } from '../components/form'

const Login = () => {
  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className='columns is-centered'>
            <div className="column is-4-desktop">
                <form className="box">
                    <InputAuth label={"Email or Username"} placeholder={"email@email.com"} type={'text'} />
                    <InputAuth label={"Password"} placeholder={"******"} type={'password'} />
                    <div className="field mt-5">
                        <button className='button is-success is-fullwidth'>Login</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
