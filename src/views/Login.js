import React, { useState } from 'react'
import { ContainerDivLogin, FormLogin, ImageBackground, ImgLeague, InputStyled, InputSubmit } from '../styles/login'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <ImageBackground>
      <ContainerDivLogin>
        <ImgLeague src= 'https://i.pinimg.com/originals/95/e2/be/95e2beeff28cf0ca9a65acc6616c0bd6.png'/>
        <FormLogin>
          <InputStyled
            value={username}
            onChange={e => setUsername(e.target.value)}
            name='username'
            placeholder='username'
          ></InputStyled>
          <InputStyled
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
            name='password'
            placeholder='password'
          ></InputStyled>
          <InputSubmit type='submit' placeholder='Connexion'></InputSubmit>
        </FormLogin>
      </ContainerDivLogin>
    </ImageBackground>
  )
}

export default Login
