document.documentElement.lang = 'en';
let metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
document.head.appendChild(metaCharset);

let metaViewport = document.createElement('meta');
metaViewport.setAttribute('name', 'viewport');
metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
document.head.appendChild(metaViewport);

let titleElement = document.createElement('title');
titleElement.textContent = 'Call to Action';
document.head.appendChild(titleElement);

function loadFont() {
    let style = document.createElement('style');
    style.textContent = `
    @font-face {
        font-family: 'Arvo';
        src: url('./fonts/Arvo-Regular.ttf');
    }
    @font-face {
        font-family: 'Montserrat';
        src: url('./fonts/Montserrat-Regular.ttf');
    }
    @font-face {
        font-family: 'OpenSans';
        src: url('./fonts/OpenSans-Regular.ttf');
    }`;
    document.head.appendChild(style);
}
loadFont();

let container = document.createElement('div');
document.body.appendChild(container)
container.classList.add('container');

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
container.appendChild(h1);

let p = document.createElement('p');
p.innerHTML= 'But I must explain to you how all this mistaken idea of denouncing ';
container.append(p);

let div = document.createElement('div');
div.classList.add('container__div');
container.appendChild(div); 

let block1 = document.createElement('div');
block1.classList.add('container__block1');
let block2 = document.createElement('div');
block2.classList.add('container__block2');

div.append(block1, block2);

let name1 = document.createElement('span');
let name2 = document.createElement('span');
let title1 = document.createElement('h1');
let title2 = document.createElement('h1');
let pText1 = document.createElement('p');
let pText2 = document.createElement('p');
let button1 = document.createElement('button');
let button2 = document.createElement('button');

name1.innerHTML = 'FREELANCER';
name2.innerHTML = 'STUDIO';
title1.innerHTML = 'Initially designed to ';
title2.innerHTML = 'Initially designed to ';
pText1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
pText2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing ';
button1.innerHTML = 'START HERE';
button2.innerHTML = 'START HERE';

block1.append(name1, title1, pText1, button1);
block2.append(name2, title2, pText2, button2);

let style1 = document.createElement('style');
style1.innerHTML = `
body {
    margin: 0px auto;
}
.container {
    padding-top: 122px;
    display: flex;
    margin: 0px auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.container__div {
    display: flex;
    flex-direction: row;
    margin-top: 55px;
}
.container__block1, .container__block2 {
    display: flex;
    width: 401px;
    height: 480px;
    padding: 0.5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container__block1 {
    border: 1px solid #E8E9ED;
    border-radius: 6px 0 0 6px;
}
.container__block2 {
    background: #8F75BE;
    border-radius: 0 6px 6px 0;
}
h1 {
    color: #212121;
    font-family: 'Arvo';
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
}
span, button {
    color: #9FA3A7;
    font-family: 'Montserrat';
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 2.4px;
}
.container__block2 span {
    color: #FFC80A;
}
.container__div h1 {
    width: 210px;
    line-height: 46px;
}
p {
    color: #9FA3A7;
    font-family: OpenSans;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 26px;
}
.container__div p {
    width: 210px;
    font-size: 12px;
    line-height: 22px;
}
.container__block2 p, .container__block2  h1, .container__block2 button {
    color: #fff;
}
.container__block1 button  {
    color: #212121;
}
button {
    width: 150px;
    height: 46px;
    margin-top: 40px;
    background: none;
    border-radius: 40px;
    border: 3px solid #FFC80A;
    cursor: pointer; 
}`;
document.head.appendChild(style1);