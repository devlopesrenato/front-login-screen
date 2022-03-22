import './button.css'

const Button = ( {children, className, onClick} ) => {
    return(
        <button type="submit" className={className} onClick={onClick}>
            {children}
        </button>
    )
};

export default Button