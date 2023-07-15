import { Page } from "../../Components/Page";
import { Button } from "../../Components/Button"
import { FormContainer, FormControl } from "../../globalStyles";
import { Link, useNavigate } from "react-router-dom";
import { SignupContent } from "./styles";
import { useForm } from 'react-hook-form';
import { emailExpRegular } from "../../Constants";
import { httpRequest } from "../../Utils/HttpRequest";
import { ALERT_ICON, Alert } from "../../Components/Alert/Alert";
import { setToken } from "../../Utils/TokenLocalStorage";

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const onSubmitLogin = (data) => {
    console.log('entro al submit')
    validateUserRequest(data);
  }

  const validateUserRequest = async (data) => {
    try {
      const response = await httpRequest({
        endpoint: '/auth/login',
        body: data
      });
      console.log(response)
      const {token} = response.data;
      setToken(token);
      Alert({
        icon: ALERT_ICON.SUCCESS,
        title: 'Bienvenido',
        text: 'Acceso válido',
        callback: () => {
          navigate('/');
        }
      });

    } catch (error) {
      console.error(error)
      Alert({icon: ALERT_ICON.ERROR, title: 'Error', text: 'Credenciales inválidas' });
    }
  }

  return (
    <Page title="Ingresar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="text" {...register("email",
                {required: true, pattern: emailExpRegular}
            )} />
            { errors.email?.type === 'required' && <span>Campo Requerido</span> }
            { errors.email?.type === 'pattern' && <span>Debes ingresar correo válido</span> }
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password" {...register("password", {required: true, minLength: 6})} />
            { errors.password?.type === 'required' && <span>La contraseña es requerida</span> }
            { errors.password?.type === 'minLenght' && <span>Mínimo 6 caracteres</span> }
          </FormControl>
          <Button text='Ingresar' type="submit" />
        </form>
      </FormContainer>
      <SignupContent>
        <p>¿Aún no tienes una cuenta?</p>
        <Link to="/signup">Registrarme</Link>
      </SignupContent>
    </Page>
  )
}

export default Login;


