const checkCommand = (commandTab) => {
    
    // ---- Change tab to text ----
    let commandText = commandTab.join(" ")
    messageAdd(commandText, "user")

    // ---- Command checker ----

    if(commandText === "what time is it?" || commandText === "what time is it")
    {
        let data = new Date()
        let hour = data.getHours();
        let minute = data.getMinutes();
        let reply = `The current time is ${hour}:${minute}`;
        messageAdd(reply, "bot")
    }

    else if(commandText === "i love you")
    {
        let reply = `Awwww, thanks. You are great`;
        messageAdd(reply, "bot")
    }

    else if(commandText === "😘")
    {
        let reply = `😍 🥰 😘 ❤️`;
        messageAdd(reply, "bot")
    }

    // ---- Greetings ----
    else if(userMessages[0].includes(commandText))
    {
        let reply = getReply(commandText)
        messageAdd(reply, "bot")
    }

    else{
        let reply = `I don't understand. Please try again. 😊`;
        messageAdd(reply, "bot")
    }
   
}