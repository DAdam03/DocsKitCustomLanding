document.addEventListener("wheel");

function scrolled(){
    let scrollAmount = 0.0;
    if(typeof window !== 'undefined'){
        scrollAmount = window.scrollY/600;
        let r = document.querySelector(':root');
        if(typeof r !== 'undefined'){
            r.style.setProperty('--posY', scrollAmount);
        }
        console.log(scrollAmount);
    }
}