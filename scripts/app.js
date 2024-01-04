const contentArea = document.getElementById("content-area");
const sidebar = document.getElementById("sidebar");

// run function on load
window.onload = () => controlSideBarFloat();
window.onscroll = () => controlSideBarFloat();
window.onresize = () => controlSideBarFloat();

let rightBlock = contentArea;
let leftBlock = sidebar;
let topSpace = 40;
let breakPoint = 992;
let stickyClass = 'sticky-sidebar';
let bottomFixedClass = 'bottom-fixed-sidebar';

function controlSideBarFloat(){
    let rectR = rightBlock.getBoundingClientRect();
    let rectL = leftBlock.getBoundingClientRect();

    if(window.innerWidth >= breakPoint){
        if(rectR.top - topSpace + (rectR.height - rectL.height) >= 0 && rectR.top - topSpace <=0){
            leftBlock.classList.add(stickyClass);
            leftBlock.classList.remove(bottomFixedClass);
        }else if(rectR.top - topSpace + (rectR.height - rectL.height) <=0){
            leftBlock.classList.remove(stickyClass);
            leftBlock.classList.add(bottomFixedClass);
        }else{
            leftBlock.classList.remove(stickyClass);
            leftBlock.classList.remove(bottomFixedClass);
        }
    }else{
        leftBlock.classList.add(stickyClass);
        leftBlock.classList.remove(bottomFixedClass);
    }
}