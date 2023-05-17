import {IoMenu} from 'react-icons/io5';
import { TopbarContainer } from './styles';
import { MenuIconContainer } from './styles';
import { MenuContext } from '../../Contexts/MenuContext'
import { useContext } from 'react';

export const Topbar = () => {

  const { menuState, onChangeOpenCloseMenu } = useContext(MenuContext);

  const toggleMenu = () => {
    onChangeOpenCloseMenu();
  }

  return (
    <TopbarContainer>
      <MenuIconContainer onClick={toggleMenu}>
        <IoMenu />
      </MenuIconContainer>
      <div>
        <img src="/assets/logo.png" alt="logo" width="170px" />
      </div>
      </TopbarContainer>
  )
}
