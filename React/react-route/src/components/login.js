import {useState} from 'react';
import useAuth from './auth';
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const [user, setUser] = useState('');

    const auth = useAuth();
    const navigate = useNavigate();

    console.log(user);

    const handleClick = () => {
        auth.login(user);
        navigate('/')
    }

    return(
        <div>
            <label>
                username : <input type={'text'} onChange={e=>setUser(e.target.value)} />
            </label>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}