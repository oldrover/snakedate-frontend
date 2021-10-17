
export const NavSnake = (props) => {

    return (
        <div className="NavSnake">
            <img src="images/cham.jpg" alt="chameleon" />
            {props.user.snakes[0].name}                    
        </div>  

    )
}
