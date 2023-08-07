import { ChangeEvent, useEffect, useState } from 'react';
import { Message } from './Message';


export const SimpleForm = () => {
  const [formState, setFormState] = useState({
      username: 'EmmanuelTamburini',
      email: 'emmanueltamburini@gmail.com',
  });
  
  const {email, username} = formState;

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormState({...formState, [name]: value});    
  }

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
        <h1>SimpleForm</h1>
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
            placeholder="emmanueltamburini@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange}
        />
        {username === 'EmmanuelTamburini' && <Message />}
    </>
  )
}
