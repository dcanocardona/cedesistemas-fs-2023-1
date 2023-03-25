export const Button = (props) => {

    return (
        <button onClick={props.onPress}>{ props.name }</button>
    )
}