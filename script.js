
// div
let maps = document.querySelector('.maps')
let continer_map = document.querySelector('.continer_map')
let settin = document.querySelector('.setting') 
let person = document.querySelector('.person')
let card =document.querySelector('.card')

// imput
let putgamer = document.getElementById('gamer')
let putjasoos = document.getElementById('jasoos')

// button
let btnRahnama = document.getElementById('rahnama');
let btnShoro = document.getElementById('shoro');
let deletmap = document.getElementById('deletmap');
let checkNaghsh =document.getElementById('check')
let delCard = document.getElementById('delCars')

// h , img
let h2 = document.querySelector('.card h2')
let h3 =  document.querySelector('.card h3')
let img =  document.querySelector('.card img')


let place = [
    'رستوران','مدرسه','شهر بازی','بیمارستان',
    'جنگل','دریا','پارکینگ','سینما','کافه',
    'فرودگاه','ترمینال', 'سالن کنسرت' , 'جاده',
    'کتبخانه' , 'مترو' , 'تونل', 'کوهستان', 'استخر',
    'آزمایشگاه', 'معدن طلا' ,'خوابگاه'
];

let personal = new Array();


// open and close maps rahnama
btnRahnama.addEventListener('click' , function(){
    maps.classList.toggle('nondel');
    setTimeout(function(){
        continer_map.classList.toggle('act');
    },500);
})

deletmap.addEventListener('click' , function(){
    continer_map.classList.toggle('act');
    setTimeout(function(){
        maps.classList.toggle('nondel')
    },500);
})


// create personel and gammer Array
function handleringSetting(x , y){
    let jasoos = parseInt(y);
    let dana = Number(x-y);
    let randomJoin = Math.floor(Math.random()*(dana+1));
    
    if(dana>jasoos){
        for(let i=0; i<dana ; i++){
            personal.push('دانا')  ;
        }
        
        for(let j=0 ; j<jasoos ; j++){
            personal.splice(randomJoin , 0 , 'جاسوس');
        }
        settin.classList.toggle('nondel');
        person.classList.toggle('nondel');
        
    }
    else{
        alert('تعداد جاسوسان نباید مساوی یا بیشتر از کل بازیکنان باشند');
    }
    
}

// start game and btn start
btnShoro.addEventListener('click' , () =>{
    handleringSetting(putgamer.value , putjasoos.value);

})

///////////////////////////////////////////////////////////////////
// naghsah
checkNaghsh.addEventListener('click' , () =>{
    checkNaghsh.classList.toggle('disable')
    card.classList.toggle('nondel')
    setTimeout(function(){
        card.classList.toggle("active")
    },500)

    handlerNaghsh()
})

function handlerNaghsh(){
    let rnadomNum = Math.floor(Math.random()* personal.length )
    console.log(rnadomNum);

    if(personal[rnadomNum] === 'دانا'){
        img.setAttribute('src' , 'images/221.jpg')


    }
    else{
        img.setAttribute('src' , 'images/gilar-ir-Spy-tools.jpg') 
        h3.innerHTML = "مکان : نامعلوم"
    }
    h2.innerHTML= personal[rnadomNum]
    
    // h2.innerHTML= personal[rnadomNum]
}




















//close card
delCard.onclick = function(){
    card.classList.toggle("active")

    setTimeout(function(){
        card.classList.toggle('nondel')
    },300)

    checkNaghsh.classList.toggle('disable')
}


