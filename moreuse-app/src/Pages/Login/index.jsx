import { Page } from "../../Components/Page";
import { Button } from "../../Components/Button"
import { FormContainer, FormControl } from "../../globalStyles";
import { Link } from "react-router-dom";
import { SignupContent } from "./styles";
import { useForm } from 'react-hook-form';
import { emailExpRegular } from "../../Constants";

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitLogin = (data) => {
    console.log(data);
  }

  return (
    <Page title="Ingresar">
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <FormControl>
            <label>Correo electrónico</label>
            <input type="text" {...register("emailAddress",
                {required: true, pattern: emailExpRegular}
            )} />
            { errors.emailAddress?.type === 'required' && <span>Campo Requerido</span> }
            { errors.emailAddress?.type === 'pattern' && <span>Debes ingresar correo válido</span> }
          </FormControl>
          <FormControl>
            <label>Contraseña</label>
            <input type="password" {...register("password", {required: true, minLength: 8})} />
            { errors.password?.type === 'required' && <span>La contraseña es requerida</span> }
            { errors.password?.type === 'minLenght' && <span>Mínimo 8 caracteres</span> }
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


