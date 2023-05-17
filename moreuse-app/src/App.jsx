import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Router';
import { GlobalStyle } from './globalStyles';
import { MenuContextStore } from './Contexts/MenuContext';
import { UserContext } from './Contexts/UserContext';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <UserContext>
        <MenuContextStore>
          <RouterProvider router={router} />
        </MenuContextStore>
      </UserContext>
    </>
  )
}
