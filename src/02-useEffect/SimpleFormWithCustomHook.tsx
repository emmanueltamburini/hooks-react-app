import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';


export const SimpleFormWithCustomHook = () => {
  const {formState, email, password, username, onInputChange, onReset} = useForm({
    username: '',
    email: '',
    password: ''
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
        
        <button onClick={onReset} className='btn btn-primary mt-2'>Delete</button>
    </>
  )
}
