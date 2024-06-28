
function Header(){
    const word ='selin'
    return(
        <div>
            <img src="./images/logo.jpeg" height="50px"></img>
            <h1>{word.toUpperCase()}</h1>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contacts</li>
            </ul>
          

        </div>
        
    );

}
export default Header