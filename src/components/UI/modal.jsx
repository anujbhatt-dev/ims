const Modal =(props)=>{
    return(
        <div onClick={props.show} className="modal">
             {props.children}
        </div>
    )
}
export default Modal;