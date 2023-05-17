import { Page } from "../../Components/Page"
import { Content } from "../../globalStyles";

const Profile = () => {

  return (
    <Page title="Perfil">
      <Content>
        <h4>Nombre</h4>
        <p>Pepito</p>
        <h4>Correo electrónico</h4>
        <p>pepito@gmail.com</p>
        <h4>Dirección</h4>
        <p>Calle 10</p>
        <h4>Teléfono</h4>
        <p>3145556664</p>
      </Content>
    </Page>
  )
}

export default Profile;
