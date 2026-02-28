import { createPortal } from "react-dom";

function Modal( {children} ) {

    const styleM = {
        position: "fixed",
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex", 
        alignItems:"center",
        justifyContent: "center"

    }
    const style2 = {
        background: "white",
        padding: "20px",
        borderRadius: "8px"   //스타일 이렇게 적용//
    }


    return createPortal(
        <div style={styleM}>
            <div style={style2}>{children}</div>  
        </div>,
        document.body //body에서 랜더링함//
    )
}

export default Modal