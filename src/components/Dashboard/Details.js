import { Inactive } from '../Inactive';

export const Details = (props) => {

    const snake = props.snake;

    let imgSrc = 'images/snake.jpg';

    props.snake.image !== '' && (imgSrc = snake.image);
    
    
    return (
            <div className='details'>
                <div>
                    <div className='fact'>
                        Name: {snake.name}
                    </div>
                    <div  className='fact'>
                        Spezies: {snake.species}
                    </div>
                    <div  className='fact'>
                        Geschlecht: {snake.sex}
                    </div>
                </div><div>
                    <div  className='fact'>
                        Geburtsjahr: {snake.birthYear}
                    </div>
                    <div  className='fact'>
                        aktuelles Gewicht: {snake.weight}g
                    </div>
                    <div  className='fact last'>
                        aktuelle Größe: {snake.size}cm
                    </div>
                </div>
                {/* <div className='fact_image'>
                <img src={imgSrc} alt='snake' />
                </div>  */}
                {
                snake.id === '' && (
                    <Inactive />
                )
            }                  
            </div>
        );    
}


