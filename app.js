let color = document.getElementById('clr_box');
let ftr = document.querySelector('footer');

const getcolor = () => {
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomnumber.toString(16);
    color.style.background = randomCode;
    ftr.style.background = randomCode;
    document.getElementById('color_code').innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

document.getElementById('btn').addEventListener(
    'click',
    getcolor
)

getcolor();