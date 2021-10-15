import Details from './Details';

const Dashboard = (props) => {
    return (
        <div className="Dashboard">                
            <Details snake={props.snake}/>
        </div>
        );    
}

export default Dashboard;