import React, { useEffect, useState } from 'react'
import {
  ContainerDivLogin,
  ContainerNavLink,
  FormLogin,
  InputSubmit
} from '../styles/styledComponents'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ContainerDivLogin>
      <FormLogin>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          name='username'
        ></input>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
          name='password'
        ></input>
        <InputSubmit type='submit' placeholder='Connexion'></InputSubmit>
      </FormLogin>
    </ContainerDivLogin>
  )
}

export default Login
