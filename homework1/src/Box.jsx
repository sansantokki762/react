function Box(props) {
    const style1 = {
        border: "2px solid blue",
        padding: "10px",
        margin: "10px"
    }
    return(
        <div style={style1}>
            {props.children} {/*이렇게 하면 컴포넌트에다 뭘 넣을 수 있음*/}
        </div>
    )
}

export default Box;