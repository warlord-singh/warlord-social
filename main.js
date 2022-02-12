const texts = ['Developer','Human','wannabe'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0,++index);
    
    document.querySelector('.moving-text').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    
setTimeout(type, 400 );

}());


//const toggle = document.getElementsByID(icon)[0]
//const navbarlinks = document.getElementsByID(buttons)[0] 
//
//toggle.addEventListner('click', () => {
 //   navbarlinks.classList.toggle('active')
//})









