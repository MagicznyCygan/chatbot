const btn = document.getElementById('btn');
const inputField = document.getElementById('input-field');


const validate = (text) => {
    if(text === ""){
        console.log('Pusty tekst')
    }
    else{
        text = text.toLowerCase()
        textTab = text.split(" ")
        checkCommand(textTab)
        /*if(text === "hi"){
            const div = document.createElement("div")
            div.classList.add('message');
            div.innerHTML = `
                <span class="user-message">${text}</span>
            `
            document.getElementById('mess-box').append(div)
            let reply = "Hi, how are you?";
            
            console.log(reply)
        }*/
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