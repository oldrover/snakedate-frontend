
export const NavSnake = (props) => {

    const imgSrc = 'images/snake.jpg';

    return (
        <div className="NavSnake">
            <div className="NavSnakeImg">
                <img src={imgSrc} alt="chameleon" />
            </div>
            <div className="SnakeNavName">
                {props.user.snakes[0].name}
            </div>             
        </div>  

    )
}
