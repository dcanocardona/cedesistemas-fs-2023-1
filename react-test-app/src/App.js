import { Fragment, useState } from "react"
import { Button } from "./Button"

export const App = () => {

    //const pets = ['Bruno', 'Lucas', 'Simba']

    //hooks
    const [pets, setPets] = useState(['Firulays', 'Pluto', 'Toby']);
    const [inputPet, setInputPet] = useState("");
    
    const onAddPet = () => {
        setPets([...pets, inputPet]);
        setInputPet("");
    }

    const onChangeInputPet = (event) => {
        setInputPet(event.target.value);
    }

    return (
        <Fragment>
            <h1>Hola mundo react</h1>
            <Button name="Enviar" />
            <br /><br />
            <Button name="Guardar"/>
            <br /><br />
            <input value={inputPet} onChange={onChangeInputPet} type="text" placeholder="Ingresar mascota"/>
            <Button name="Agregar" onPress={onAddPet} />
            <ul>
                {
                    pets.map(item => <li>{item}</li>)
                }
            </ul>
        </Fragment>
    )
}