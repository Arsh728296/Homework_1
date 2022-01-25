function Letter({message}){

    return (
        <div>
            <h3> DATE: {message.date}</h3>
            <h2 style = {{color: message.nameColor}}> NAME: {message.name}</h2>
            <p style = {{color: message.textColor}}> TEXT: {message.text}</p>
        </div>
    )
    
}

export default Letter