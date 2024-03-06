let btn1= document.getElementById("myButton");
let btn2= document.getElementById("myButton2");
let copyCode = document.querySelector('.copyCode')
let codeCopy = document.getElementById("codeCopy")

const hexValue = ()=> {
    let hexaNumber = "0123456789abcdef";
    let colors = "#"
    for(let i=0; i<6; i++){
    colors = colors + hexaNumber[Math.floor(Math.random()*16)]
    }
    return colors;
}

const handleButton1 = () =>{
     rgb1 = hexValue();
    console.log(rgb1);
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`
    copyCode.innerHTML = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`;
    btn1.innerText = rgb1;
};

const handleButton2 = () =>{
    rgb2 = hexValue();
    console.log(rgb2);
    document.body.style.backgroundImage = `linear-gradient(to right top, ${rgb1}, ${rgb2})`
    copyCode.innerHTML = `background-image: linear-gradient(to right top, ${rgb1}, ${rgb2})`;
    btn2.innerText = rgb2;
};


btn1.addEventListener('click', handleButton1);
btn2.addEventListener('click', handleButton2);

codeCopy.addEventListener('click', ()=> {
    navigator.clipboard.writeText(copyCode.innerText)
})