import {Link} from 'react-router-dom';
import {MenuContainer} from './styles';
import {MenuItemsWrapper} from './styles';
import {IoClose} from 'react-icons/io5'
import {MenuCloseWrapper} from './styles';
import { useContext } from 'react';
import { MenuContext } from '../../Contexts/MenuContext';
import { UserContext } from '../../Contexts/UserContext';

const OptionsMenu = [
  {
    "name": "Inicio",
    "path": "/"
  },
  {
    "name": "Perfil",
    "path": "/profile",
    "authRequired": true
  },
  {
    "name": "Mis prendas",
    "path": "/my-clothes",
    "authRequired": true
  },
  {
    "name": "Iniciar sesión",
    "path": "/login"
  },
  {
    "name": "Cerrar sesión",
    "path": "/logout",
    "authRequired": true
  }
]

export const Menu = () => {

  const {menuState, onChangeOpenCloseMenu} = useContext(MenuContext);
  const {user} = useContext(UserContext);

  return (
    <MenuContainer isShown={ menuState.isOpen }>
      <MenuCloseWrapper onClick={onChangeOpenCloseMenu}>
        <IoClose />
        </MenuCloseWrapper>
      <MenuItemsWrapper>
        {
          OptionsMenu.map((item, index) => {
              if (user.isAuth && item.authRequired) {
                <Link key={index} to={item.path}><li>{item.name}</li></Link>
              }
              if (!user.isAuth && !item.authRequired) {
                <Link key={index} to={item.path}><li>{item.name}</li></Link>
              }
          }
          )
        }
      </MenuItemsWrapper>
    </MenuContainer>
  )
}
