const getColor = () => {
    const randomNum = Math.floor(Math.random()*16777215) // 16777215 is a specific no 

    const randomCode = "#" + randomNum.toString(16)//to obtain a hexadecimal number to obtain color code

    document.querySelector(".colorcode").innerText = randomCode;

    // navigator.clipboard.writeText(randomCode);

    document.body.style.backgroundColor = randomCode;
}


getColor();


const interval = setInterval(() => {
    getColor()

}, 2200)

// document.getElementById("btn").addEventListener("click", clearInterval(interval));

const mahad = document.getElementById("Id")


