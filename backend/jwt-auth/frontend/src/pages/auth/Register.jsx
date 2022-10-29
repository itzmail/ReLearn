import React, { useState } from 'react'
import { InputAuth } from '../../components/form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confPass, setConfPass] = useState('');
    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const Register = async (e) => {
      e.preventDefault();
      try{
        await axios.post('http://localhost:5000/users',{
          name,
          email,
          password: pass,
          confPassword: confPass
        });
        navigate('/', {replace: true});
      }catch(e) {
        if(e.response) {
          console.log(e.response.data.msg);
          setMsg(e.response.data.msg);
        } else {
          console.log(e);
        }
      }
    }


  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className='columns is-centered'>
            <div className="column is-4-desktop">
                <p className="has-text-centered">{msg}</p>
                <form className="box" onSubmit={Register}>
                    <InputAuth onChange={val => setName(val.target.value)} label={'Nama'} placeholder={'Nama'} type={'text'} />
                    <InputAuth onChange={val => setEmail(val.target.value)} label={'Email'} placeholder={'Email'} type={'text'} />
                    <InputAuth onChange={val => setPass(val.target.value)} label={'Password'} placeholder={'*******'} type={'password'} />
                    <InputAuth onChange={val => setConfPass(val.target.value)} label={'Confirm Password'} placeholder={'*******'} type={'password'} />
                    <div className="field mt-5">
                        <button type='submit' className='button is-success is-fullwidth'>Register</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
