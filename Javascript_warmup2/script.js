// document.querySelector("div")

window.addEventListener("mousemove", function(details){
    let rect = document.querySelector("#rect");
    let mouserangex = gsap.utils.mapRange(0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width/2, 
        window.innerWidth - (100 + rect.getBoundingClientRect().width/2),
        details.clientX);
    // let mouserangey = gsap.utils.mapRange(0,
    //     window.innerHeight,
    //     100,
    //     window.innerHeight-100,
    //     details.clientY);
    gsap.to('#rect',{
        left: mouserangex + "px",
        // top: mouserangey + "px",
        ease: Power3,

    });
});