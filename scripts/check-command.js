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


}