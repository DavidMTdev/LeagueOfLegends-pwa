import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import LoginForm from '../components/login/LoginForm'
import Loading from '../components/loading/Loading'

import { ContainerDivLogin, ImageBackground, ImgLeague } from '../styles/login'

const Login = () => {
  const history = useHistory()
  const loading = useSelector(state => state.login.loading)
  const error = useSelector(state => state.login.error)
  const token = useSelector(state => state.login.data)

  if (token) {
    history.push('/champions')
  }

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
