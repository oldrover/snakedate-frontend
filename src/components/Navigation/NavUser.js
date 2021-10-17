export const NavUser = (props) => {
    return (
        <div className="NavUser">
            {props.user.name}
            <div className="UserIcon"></div>  
        </div>
    )
}