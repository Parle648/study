const sliderTarget = document.querySelector('.slider-terget');

const sliderTargetTwo = document.querySelector('.slider-targetTwo')

sliderTarget.onmousedown = function(event){

    sliderTarget.style.position = 'absolute';

    sliderTarget.parentNode.style.position = 'relative';

    sliderPosition(event.pageX, event.pageY);

    function sliderPosition(x){
        sliderTarget.style.left = (x - sliderTarget.offsetWidth / 2 - ((innerWidth - sliderTarget.parentNode.clientWidth) / 2)) + 'px'
        increace.value =  Math.round((sliderTarget.style.left.slice(0, sliderTarget.style.left.length -2) / 300) * 250000)
        if(increace.value <= 500){
            increace.value = 500
        }
    };
    
    function MouseMove(event){
        
        sliderPosition(event.pageX, event.pageY);
        
        if(sliderTarget.style.left.slice(0, sliderTarget.style.left.length -2) > 275){

            sliderTarget.style.left ='275px';
        } else if(sliderTarget.style.left.slice(0, sliderTarget.style.left.length -2) <= 0){

            sliderTarget.style.left ='0px'
        }

    };

    document.addEventListener('mousemove', MouseMove)

    document.onmouseup = function(){

        document.removeEventListener('mousemove', MouseMove);

        sliderTarget.removeEventListener('mousemove', MouseMove);
    }
};

sliderTargetTwo.onmousedown = function(event){

    sliderTargetTwo.style.position = 'absolute';

    sliderTargetTwo.parentNode.style.position = 'relative';

    sliderPosition(event.pageX, event.pageY);

    function sliderPosition(x){
        sliderTargetTwo.style.left = (x - sliderTargetTwo.offsetWidth / 2 - ((innerWidth - sliderTargetTwo.parentNode.clientWidth) / 2)) + 'px'
        hight.value =  Math.round((sliderTargetTwo.style.left.slice(0, sliderTarget.style.left.length -2) / 300) * 250000)
        if(hight.value >= 250000){
            hight.value = 250000
        }
        else if(hight.value <= 500)[
            hight.value = 500
        ]
    };

    function MouseMove(event){

        sliderPosition(event.pageX, event.pageY);

        if(sliderTargetTwo.style.left.slice(0, sliderTargetTwo.style.left.length -2) > 275){

            sliderTargetTwo.style.left ='275px';
        } else if(sliderTargetTwo.style.left.slice(0, sliderTargetTwo.style.left.length -2) <= 0){

            sliderTargetTwo.style.left ='0px'
        }

    };

    document.addEventListener('mousemove', MouseMove)

    document.onmouseup = function(){

        document.removeEventListener('mousemove', MouseMove);

        sliderTargetTwo.removeEventListener('mousemove', MouseMove);
    }
};


const increace = document.querySelector('#increace-cost');
const hight = document.querySelector('#hight-cost')


increace.addEventListener('input', function(){
    let percent = (increace.value / 250000) * 300

    console.log(`${percent}px`)

    sliderTarget.style.left= percent  + 'px'
})

hight.addEventListener('input', function(){
    let percent = (hight.value / 250000) * 300

    console.log(`${percent}px`)

    sliderTargetTwo.style.left= percent  + 'px'
})

const subm = document.querySelector('.submit-btn'),
    inputsArr = document.querySelectorAll('input');
let isvalid = true  ;

function suibmit(event) {
    event.preventDefault();
    for (input of inputs) {
        if (input.value === '') {
            input.classList.add('error');
        };
    };
};

inputsArr.forEach(function (input) {
    input.addEventListener('input', function (event) {
        if (event.target.hasAttribute('data-reg')) {
            checkInput(event.target);
        };
    });
});

function checkInput(elem) {
    const value = elem.value;
    const reg = new RegExp(elem.getAttribute('data-reg'));
    if (reg.test(value)) {
        elem.classList.add('ok');
        elem.classList.remove('error');
    } else {
        elem.classList.add('error');
    };
};

subm.addEventListener('click', function (event) {
    event.preventDefault();
    event.target.classList.add('ready')
    inputsArr.forEach((e) => {
        if (e.closest('.error')) {
            isvalid = false;
        };
    });

    if (isvalid) {
        console.log(`${
            inputsArr.forEach(function (e) {
                console.log(e.value);
            })
        }`);
    };
});

// const dragArea = document.querySelector('.drop-area')

// dragArea.addEventListener('drop', function(event){
//     let files = [...event.dataTransfer.files]
// })

// ['dragenter', 'dragover'].forEach(function(one){
//     dragArea.addEventListener(one, (event) => {
//         dragArea.style.background = 'dark'
//     })
// })
// ['drop', 'dragleave'].forEach(function(two){
//     dragArea.addEventListener(two, (event) => {
//         dragArea.style.background = '#fff'
//     })
// })
// ['dragend', 'dragenter', 'dragleave', 'dragover'].forEach(function(dragEvent){
//     document.addEventListener(dragEvent, (event) => {
//         event.preventDefault()
//         event.stopPropagation()
//     })
// })

const dropHeader = document.querySelector('.drop-header'),
      dropBody = document.querySelector('.drop-body'),
      variant = document.querySelectorAll('.variant')


dropHeader.onclick = function(){
    dropBody.classList.toggle('body_active')
}

variant.forEach((choseVariant) => {
    choseVariant.addEventListener('click', (event) => {
        let chose = event.target.innerText
        dropHeader.innerText = chose;
        dropBody.classList.remove('body_active')
    })
})

const higher = document.querySelector('#higher')
const lower = document.querySelector('#lower')
const carts = document.querySelectorAll('.prod-item')

higher.addEventListener('click', (event) => {
    let array = [];
    function createArr(cart){
        array.push(cart)
    }
    carts.forEach(createArr)
    for(cart of carts){
        
    }
})

const block = document.querySelector('.flex')
const btn = document.querySelector('.up')
const btn2 = document.querySelector('.down')

btn.onclick = sortUp;
btn2.onclick = sortDown;

function sortUp(){
    const arr = [...block.children]
    arr.sort((a, b) => {
        console.log(a.dataset.cost)
        return a.dataset.cost - b.dataset.cost
    })
    block.innerHTML = ''

    for (let div of arr){
        block.appendChild(div)
    }
}

function sortDown(){
    const arr = [...block.children]
    arr.sort((a, b) => {
        console.log(a.dataset.cost)
        return b.dataset.cost - a.dataset.cost
    })
    block.innerHTML = ''

    for (let div of arr){
        block.appendChild(div)
    }
}