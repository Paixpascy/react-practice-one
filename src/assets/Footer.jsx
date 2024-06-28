
function Footer(props){
    return(
        <div>
             <p>name- &nbsp;{props.name}</p>
             <p>dateEstablished- &nbsp;{props.dateEstablished}</p>
             <b>&copy; {new Date().getFullYear()} SELIN</b>
        </div>
       
    )
}
export default Footer