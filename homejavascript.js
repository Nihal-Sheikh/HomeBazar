let width = window.visualViewport.width;
let height = window.visualViewport.height;
const LeftBox = document.getElementById("leftBox");
const backgroundFade = document.getElementById("backgroundFade");
const hoverMenuShop = document.getElementById("hoverMenuShop");
const hoverMenuAbout = document.getElementById("hoverMenuAbout");
const subContentShop = document.getElementsByClassName("sideBarSubContentsShop");
const subContentAbout = document.getElementsByClassName("sideBarSubContentsAbout");
subContentAbout.collapseMenuLeft = document.getElementById("collapseLeftAbout");
subContentShop.collapseMenuLeft = document.getElementById("collapseLeftShop");
subContentAbout.collapseMenuRight = document.getElementById("collapseRightAbout");
subContentShop.collapseMenuRight = document.getElementById("collapseRightShop");
subContentShop.overlord = document.getElementById("sidebarShop")
subContentAbout.overlord = document.getElementById("sidebarAbout")
subContentAbout.collapsed = true;
subContentShop.collapsed = true;
hoverMenuShop.value = false;
hoverMenuAbout.value = false;
function leftBoxSlide() {
    
    LeftBox.style.transition = `1s`;
    LeftBox.style.transform = `translate(0%,0%)`;
    backgroundFade.style.transition = `background-color 1s ease`;
    backgroundFade.style.visibility = `visible`;
    backgroundFade.style.backgroundColor = `rgba(0,0,0,0.2)`;
}
async function leftBoxSlideReset() {
    const transitionPromise = () => {
        return new Promise(resolve => {
            backgroundFade.addEventListener('transitionend', function handler() {
                resolve();
                backgroundFade.removeEventListener('transitionend', handler);
            });
        });
    };
    LeftBox.style.transition = `1s`;
    LeftBox.style.transform = `translate(-100%,0%)`;
    backgroundFade.style.transition = `background-color 1s ease`;
    backgroundFade.style.backgroundColor = `rgba(0,0,0,0)`;
    await transitionPromise();
    backgroundFade.style.visibility = `hidden`;
}
function hoverMenuDown(x) {
    
    x.style.transition = `0.3s`;
    x.style.opacity = `1`;
    x.style.transform = `translate(0%,0%)`;
    x.style.zIndex = `9`;
}
function resetHoverMenuDown(x) {
    x.style.zIndex = '8';
    setTimeout(() => {
        actualReset(x);
    }, 1000);
    
}
function actualReset(x) {
    if (x.value == false) {
        x.style.transition = `0.3s`;
        x.style.opacity = `0`;
        x.style.transform = `translate(0%,-110%)`;
        
    }
}
function cancelLeave(x) {
    x.value = true;
}
function resetCancelLeave(x) {
    x.value = false;
    setTimeout(() => {
        resetHoverMenuDown(x);
    }, 300);
    
}
async function collapseMenuRequest(c) {
    if (c.value == false) {
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            element.style.display = `none`;

        }
        c.collapseMenuLeft.style.transform = 'translate(29%,-200%) rotate(-120deg)';
        c.collapseMenuRight.style.transform = 'translate(-29%,-200%) rotate(120deg)';
        c.overlord.style.marginBlockEnd = '4svh';
        c.value = true;
    }
    else {
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            element.style.display = `block`;
            
        }
        c.collapseMenuLeft.style.transition = `0.2s`;
        c.collapseMenuRight.style.transition = `0.2s`;
        c.collapseMenuLeft.style.transform = 'rotate(-60deg) translate(57%, 0%)';
        c.collapseMenuRight.style.transform = 'rotate(60deg) translate(-57%, 0%)';
        c.overlord.style.marginBlockEnd = '2svh';
        c.value = false;
    }
    
}
