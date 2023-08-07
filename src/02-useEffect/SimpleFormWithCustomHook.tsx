import { useEffect } from 'react';
import { Message } from './Message';
import { useForm } from '../hooks/useForm';


export const SimpleFormWithCustomHook = () => {
  const {formState, onInputChange, email, password, username} = useForm({
    username: 'EmmanuelTamburini',
    email: 'emmanueltamburini@gmail.com',
    password: '123456'
  });

  useEffect(() => {
    console.log('useEffect used');
  }, []);
  
  useEffect(() => {
    console.log('formState used');
  }, [formState]);

  useEffect(() => {
    console.log('email used');
  }, [email]);
  

  return (
    <>
        <h1>SimpleFormWithCustomHook</h1>
        <hr />
        <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={username}
            onChange={onInputChange}
        />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="test@test.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        <input
            type="password"
            className="form-control mt-2"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
        />
        
        {username === 'EmmanuelTamburini' && <Message />}
    </>
  )
}
