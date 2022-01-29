function Letter({state, message, filterLetters}){

    function deleteMessage(state, message){
        let messages = state.messages.filter((item)=> item.id !== message.id);
        filterLetters({
            ...state,
            messages
        });
    }

    return (
        <div>
            <h3> DATE: {message.date}</h3>
            <h2 style = {{color: message.nameColor}}> NAME: {message.name}</h2>
            <p style = {{color: message.textColor}}> TEXT: {message.text}</p>

            <button onClick={(e)=>deleteMessage(state, message)}>Delete</button>

            <button>Edit</button>
        </div>
    )
    
}

export default Letter