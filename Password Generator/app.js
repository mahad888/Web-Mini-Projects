const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxys";
const numbers = "1234567890";
const symbols = "~`!@#$%^*?<>:?|."

const getRandom = (data) => (data[Math.floor(Math.random() * data.length)])

const pass = document.getElementById("passbox")
const totalCh = document.getElementById("totalChar")
const uppr = document.getElementById("chk1")
const lower = document.getElementById("chk2")
const numb = document.getElementById("chk3")
const symb = document.getElementById("chk4")

const generatePass = (password ="") => {

    if (uppr.checked) {
        password += getRandom(upperCase);
        
    }
    if (lower.checked) {
        password += getRandom(lowerCase)
    }
    if (numb.checked) {
        password += getRandom(numbers)
    }
    if (symb.checked) {
        password += getRandom(symbols)
    }
    if (password.length < totalCh.value) {
        return generatePass(password)
    }
        
    pass.innerText = fixingChar(password, totalCh.value);

}

generatePass();


function fixingChar (word,size){
    if (word.length > size) {
        subWord = word.substring(0, size)
        return subWord;
        
    }
    else {
        return word;
    }
}



