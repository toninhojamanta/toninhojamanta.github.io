const iframe = document.querySelector('iframe');

setInterval(() => {
    if (screen.height > screen.width) {
        iframe.style.height = `${screen.height * 1.2}px`;
    } else {
        iframe.style.height = `${screen.height / 2}px`;
    }
});
