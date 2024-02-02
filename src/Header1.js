function Header1(props){
    
    return(
        <div>
            <ul>
                {
                    <li>{props.image}</li>
                }
            </ul>
        </div>
    );
}
export default Header1;