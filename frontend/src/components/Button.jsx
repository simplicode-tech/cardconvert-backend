const Button = ({value, handleClick, type, className}) => {
    return(
        <button onClick={handleClick} type={type} className={className}>{value}</button>
    )
}
export default Button;