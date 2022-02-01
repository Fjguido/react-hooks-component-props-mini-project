function Article({title, date = "January 1, 1970", preview, minutes}) { 
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small>{minutes}</small>
        </article>
    )
}

// function emojiTime(emojiMinutes) {

// }

export default Article;