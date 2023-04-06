let element = document.getElementById("welcome");
const title = "hello!";
const greet = () => {
    element.innerHTML = title;
}

window.onload = greet();
