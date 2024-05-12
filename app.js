
let box =  document.querySelector('.box');
let box_2 =  document.querySelector('.box-2');


window.addEventListener('scroll', function(){

    let height = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let fromTop = document.documentElement.scrollTop;
    let subHeight = height - clientHeight;
    let result = Math.round(fromTop * 100 / subHeight);
    box.style.background = `conic-gradient(#2ecc71 ${result}%, #3498db ${result}%)`;
    box_2.innerHTML = result;
    
});
console.log(result);   

    


