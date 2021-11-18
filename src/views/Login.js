import { useSelector } from 'react-redux'

import LoginForm from '../components/login/LoginForm'
import Loading from '../components/loading/Loading'

import { ContainerDivLogin, ImageBackground, ImgLeague } from '../styles/login'

const Login = () => {
  const loading = useSelector(state => state.login.loading)
  const error = useSelector(state => state.champions.error)
  // const token = useSelector(state => state.champions.data)

  return (
    <ImageBackground>
      <ContainerDivLogin>
        <ImgLeague src='https://i.pinimg.com/originals/95/e2/be/95e2beeff28cf0ca9a65acc6616c0bd6.png' />
        {loading && <Loading size='1' />}
        <LoginForm />
        {error && <div>error</div>}
      </ContainerDivLogin>
    </ImageBackground>
  )
}

export default Login
