
export const Details = (props) => {
    return (
            <div className="Details">
                <div className="Fact">
                    Name: {props.snake.name}
                </div>
                <div  className="Fact">
                    Spezies: {props.snake.species}
                </div>
                <div  className="Fact">
                    Geschlecht: {props.snake.sex}
                </div>
                <div  className="Fact">
                    Geburtsjahr: {props.snake.birthyear}
                </div>
                <div  className="Fact">
                    aktuelles Gewicht: {props.snake.weight}g
                </div>
                <div  className="Fact Last">
                    aktuelle Größe: {props.snake.size}cm
                </div>
                <div className="FactImage">
                <img src="images/cham.jpg" alt="snake" />
                </div>   
                
            </div>
        );    
}


