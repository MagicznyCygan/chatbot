const getReply = (text) => {
    let reply = ''
    userMessages.forEach((tabs, index) => {
        let tabLen = userMessages[index].length;

        if(tabs.includes(text) == true){
            reply = botReplies[index][Math.floor(Math.random() * tabLen)];
        }
    });

    return reply;
}
