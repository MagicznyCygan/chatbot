const colors = ['red', 'blue', 'green', 'default', 'yellow', 'black', 'pink', 'purple'];
const changeChatColor = (color) => {
    let root = document.documentElement;

    if(color === colors[0]){
        root.style.setProperty('--user-message-color', '#db2153')
        localStorage.setItem('chatColor', '#db2153')
    }

    else if(color === colors[1]){
        root.style.setProperty('--user-message-color', '#04b0db')
        localStorage.setItem('chatColor', '#04b0db')
    }

    else if(color === colors[2]){
        root.style.setProperty('--user-message-color', '#41d165')
        localStorage.setItem('chatColor', '#41d165')
    }

    else if(color === colors[3]){
        root.style.setProperty('--user-message-color', '#118ab2')
        localStorage.setItem('chatColor', '#118ab2')
    }

    else if(color === colors[4]){
        root.style.setProperty('--user-message-color', '#cadb4b')
        localStorage.setItem('chatColor', '#cadb4b')
    }

    else if(color === colors[5]){
        root.style.setProperty('--user-message-color', '#1f1f1f')
        localStorage.setItem('chatColor', '#1f1f1f')
    }

    else if(color === colors[6]){
        root.style.setProperty('--user-message-color', '#e031a0')
        localStorage.setItem('chatColor', '#e031a0')
    }

    else if(color === colors[6]){
        root.style.setProperty('--user-message-color', '#b336cf')
        localStorage.setItem('chatColor', '#b336cf')
    }
}

const getColors = () => {
    let reply = colors;
    return reply;
}