const messBox = document.getElementById('mess-box');
const messageAdd = (message, who) => {
    
    const div = document.createElement("div")
    div.classList.add('message');

    if(who === "user")
    {
        div.innerHTML = `
            <span class="user-message">${message}</span>
         `
         messBox.append(div)
         scroll()
    }
    else{
        div.innerHTML = `
            <span class="bot-message">${message}</span>
         `
         setTimeout(() => {
            messBox.append(div)
            scroll()
            messageSound();
         }, 500);
         
    }
}

const scroll = () => {
    messBox.scrollTo(0,messBox.scrollHeight);
}
const messageSound = () => {
    let audio = new Audio('../media/message.mp3');
    audio.currentTime = 0;
    audio.play();
}