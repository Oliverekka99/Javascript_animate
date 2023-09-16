const throttlefunc = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - prev > delay){
            prev = now;
            return func(...args);
        }
    };
};
//whenever mouse is moved, the function is called/execute within a gap of every 4 seconds
document.querySelector('#center')
.addEventListener(
    'mousemove', 
    throttlefunc((details) => {
        var div = document.createElement('div');
        div.classList.add('imagediv');
        div.style.left = details.clientX + 'px';
        div.style.top = details.clientY + 'px';

        let img = document.createElement('img');
        img.setAttribute('src', "https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")
        div.appendChild(img);

        document.body.appendChild(div);
        gsap.to(img,{
            y: "0",
            ease: Power1,
            duration: .6
        });
        gsap.to(img,{
            y: "100%",
            ease: Power2,
            delay: .6
        });

        setTimeout(function(){
            div.remove();
        },2000); 
    },400) 
);
