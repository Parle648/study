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