const checkCommand = (commandTab) => {
    // ---- Change tab to text ----
    let commandText = commandTab.join(" ")
    messageAdd(commandText, "user")

    // ---- Other variables ----

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

    else if(commandText === "version" || commandText === "v"){
        let reply = `My current version is ${config.version}`;
        messageAdd(reply, "bot")
    }

    else if(commandTab[0] === "color" && colors.includes(commandTab[1])){
        changeChatColor(commandTab[1]);
        let reply = `You change current chat color to ${commandTab[1]}`;
        messageAdd(reply, "bot")
    }

    else if(commandText === "colors"){
        let reply = getColors();
        messageAdd(reply, "bot")
    }

    else if(commandText === "last change" || commandText === "changes" || commandText === "news" || commandText === "whats new" || commandText === "what new"){
        let reply = config.lastChange;
        messageAdd(reply, "bot")
    }

    else{
        let reply = `I don't understand. Please try again. 😊`;
        messageAdd(reply, "bot")
    }
   
}