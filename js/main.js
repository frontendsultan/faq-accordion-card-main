class Accordion {
    constructor(){
        this.section = document.querySelectorAll('[data-section]'); 
    }

}

let accord = new Accordion();

accord.section.forEach(el=>{
    
    el.addEventListener('click',function(){
        el.classList.toggle('active');

    })
})