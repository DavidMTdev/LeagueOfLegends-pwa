import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import actions from '../../actions'
import { LightTheme, DarkTheme } from '../../themes'

import { ContainerNavTheme, ThemeIcon } from '../../styles/header'

const NavTheme = () => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.theme.value)

  const switchTheme = theme => {
    dispatch(actions.theme.switchTheme(theme))
  }

  return (
    <ContainerNavTheme>
      {current == DarkTheme ? (
        <ThemeIcon
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => switchTheme(LightTheme)}
        >
          <path d='M16 2C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V5C17 5.26522 16.8946 5.51957 16.7071 5.70711C16.5196 5.89464 16.2652 6 16 6C15.7348 6 15.4804 5.89464 15.2929 5.70711C15.1054 5.51957 15 5.26522 15 5V3C15 2.73478 15.1054 2.48043 15.2929 2.29289C15.4804 2.10536 15.7348 2 16 2V2ZM16 22C17.5913 22 19.1174 21.3679 20.2426 20.2426C21.3679 19.1174 22 17.5913 22 16C22 14.4087 21.3679 12.8826 20.2426 11.7574C19.1174 10.6321 17.5913 10 16 10C14.4087 10 12.8826 10.6321 11.7574 11.7574C10.6321 12.8826 10 14.4087 10 16C10 17.5913 10.6321 19.1174 11.7574 20.2426C12.8826 21.3679 14.4087 22 16 22V22ZM29 17C29.2652 17 29.5196 16.8946 29.7071 16.7071C29.8946 16.5196 30 16.2652 30 16C30 15.7348 29.8946 15.4804 29.7071 15.2929C29.5196 15.1054 29.2652 15 29 15H27C26.7348 15 26.4804 15.1054 26.2929 15.2929C26.1054 15.4804 26 15.7348 26 16C26 16.2652 26.1054 16.5196 26.2929 16.7071C26.4804 16.8946 26.7348 17 27 17H29ZM16 26C16.2652 26 16.5196 26.1054 16.7071 26.2929C16.8946 26.4804 17 26.7348 17 27V29C17 29.2652 16.8946 29.5196 16.7071 29.7071C16.5196 29.8946 16.2652 30 16 30C15.7348 30 15.4804 29.8946 15.2929 29.7071C15.1054 29.5196 15 29.2652 15 29V27C15 26.7348 15.1054 26.4804 15.2929 26.2929C15.4804 26.1054 15.7348 26 16 26V26ZM5 17C5.26522 17 5.51957 16.8946 5.70711 16.7071C5.89464 16.5196 6 16.2652 6 16C6 15.7348 5.89464 15.4804 5.70711 15.2929C5.51957 15.1054 5.26522 15 5 15H3C2.73478 15 2.48043 15.1054 2.29289 15.2929C2.10536 15.4804 2 15.7348 2 16C2 16.2652 2.10536 16.5196 2.29289 16.7071C2.48043 16.8946 2.73478 17 3 17H5ZM6.292 6.292C6.38489 6.19887 6.49524 6.12499 6.61673 6.07457C6.73822 6.02416 6.86847 5.99821 7 5.99821C7.13153 5.99821 7.26178 6.02416 7.38327 6.07457C7.50476 6.12499 7.61511 6.19887 7.708 6.292L9.708 8.292C9.80098 8.38498 9.87473 8.49535 9.92505 8.61683C9.97537 8.73831 10.0013 8.86851 10.0013 9C10.0013 9.13149 9.97537 9.26169 9.92505 9.38317C9.87473 9.50465 9.80098 9.61502 9.708 9.708C9.61502 9.80098 9.50465 9.87473 9.38317 9.92505C9.26169 9.97537 9.13149 10.0013 9 10.0013C8.86851 10.0013 8.73831 9.97537 8.61683 9.92505C8.49535 9.87473 8.38498 9.80098 8.292 9.708L6.292 7.708C6.19887 7.61511 6.12499 7.50476 6.07457 7.38327C6.02416 7.26178 5.99821 7.13153 5.99821 7C5.99821 6.86847 6.02416 6.73822 6.07457 6.61673C6.12499 6.49524 6.19887 6.38489 6.292 6.292V6.292ZM7.708 25.708C7.61516 25.801 7.50491 25.8748 7.38355 25.9251C7.26219 25.9755 7.1321 26.0015 7.00071 26.0016C6.86931 26.0016 6.73919 25.9759 6.61776 25.9257C6.49633 25.8755 6.38598 25.8018 6.293 25.709C6.20002 25.6162 6.12625 25.5059 6.07588 25.3846C6.02551 25.2632 5.99954 25.1331 5.99944 25.0017C5.99935 24.8703 6.02514 24.7402 6.07534 24.6188C6.12553 24.4973 6.19916 24.387 6.292 24.294L8.292 22.294C8.38484 22.201 8.49509 22.1272 8.61645 22.0769C8.73781 22.0265 8.8679 22.0005 8.99929 22.0004C9.13069 22.0004 9.26081 22.0261 9.38224 22.0763C9.50367 22.1265 9.61402 22.2002 9.707 22.293C9.79998 22.3858 9.87375 22.4961 9.92412 22.6175C9.97449 22.7388 10.0005 22.8689 10.0006 23.0003C10.0006 23.1317 9.97486 23.2618 9.92466 23.3832C9.87447 23.5047 9.80084 23.615 9.708 23.708L7.708 25.708ZM25.708 6.292C25.6151 6.19887 25.5048 6.12499 25.3833 6.07457C25.2618 6.02416 25.1315 5.99821 25 5.99821C24.8685 5.99821 24.7382 6.02416 24.6167 6.07457C24.4952 6.12499 24.3849 6.19887 24.292 6.292L22.292 8.292C22.1042 8.47977 21.9987 8.73445 21.9987 9C21.9987 9.26555 22.1042 9.52023 22.292 9.708C22.4798 9.89577 22.7344 10.0013 23 10.0013C23.2656 10.0013 23.5202 9.89577 23.708 9.708L25.708 7.708C25.8011 7.61511 25.875 7.50476 25.9254 7.38327C25.9758 7.26178 26.0018 7.13153 26.0018 7C26.0018 6.86847 25.9758 6.73822 25.9254 6.61673C25.875 6.49524 25.8011 6.38489 25.708 6.292V6.292ZM24.292 25.708C24.4795 25.8958 24.7339 26.0014 24.9993 26.0016C25.2647 26.0017 25.5192 25.8965 25.707 25.709C25.8948 25.5215 26.0004 25.2671 26.0006 25.0017C26.0007 24.7363 25.8955 24.4818 25.708 24.294L23.708 22.294C23.5205 22.1062 23.2661 22.0006 23.0007 22.0004C22.7353 22.0003 22.4808 22.1055 22.293 22.293C22.1052 22.4805 21.9996 22.7349 21.9994 23.0003C21.9993 23.2657 22.1045 23.5202 22.292 23.708L24.292 25.708Z' />
        </ThemeIcon>
      ) : null}

      {current == LightTheme ? (
        <ThemeIcon
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => switchTheme(DarkTheme)}
        >
          <path d='M14.912 4C17.0562 4.00036 19.1612 4.57526 21.008 5.6649C22.8547 6.75454 24.3758 8.31912 25.4129 10.1959C26.45 12.0726 26.9653 14.193 26.9052 16.3364C26.8451 18.4798 26.2118 20.568 25.0711 22.3836C23.9304 24.1993 22.3241 25.6762 20.4191 26.6606C18.5142 27.645 16.3803 28.1011 14.2394 27.9813C12.0985 27.8614 10.0288 27.1702 8.24563 25.9793C6.46245 24.7885 5.03092 23.1416 4.09995 21.21C4.0327 21.0713 3.99842 20.9189 3.9998 20.7648C4.00117 20.6107 4.03815 20.4589 4.10786 20.3215C4.17756 20.184 4.2781 20.0645 4.40163 19.9723C4.52516 19.8801 4.66833 19.8177 4.81995 19.79C7.37195 19.328 11.376 17.916 12.976 13.65C14.102 10.65 14 7.62 13.542 5.19C13.5157 5.04843 13.5203 4.90286 13.5554 4.76323C13.5906 4.6236 13.6555 4.49322 13.7457 4.38099C13.8359 4.26876 13.9493 4.17733 14.0781 4.11295C14.2069 4.04858 14.348 4.01278 14.492 4.008C14.632 4 14.772 4 14.912 4Z' />
        </ThemeIcon>
      ) : null}
    </ContainerNavTheme>
  )
}

export default NavTheme
