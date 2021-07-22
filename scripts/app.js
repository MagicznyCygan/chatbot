const btn = document.getElementById('btn');
const inputField = document.getElementById('input-field');

let root = document.documentElement;

root.style.setProperty('--user-message-color', config.chatColor, 'important')

const firstMessage = () => {
    let message = `Hi, I'm Leah artificial intelligence. How can I help you?`;
    messageAdd(message, "bot")
}

// ---- Check message ----
const validate = (text) => {
    if(text === ""){
        console.log('Message cannot be empty')
    }
    else{
        text = text.toLowerCase()
        textTab = text.split(" ")
        checkCommand(textTab)
    }
}

inputField.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        let text = inputField.value;
        inputField.value = "";
        validate(text)
    }
})
btn.addEventListener('click', () => {
    let text = inputField.value;
    inputField.value = "";
    validate(text)
})

firstMessage();