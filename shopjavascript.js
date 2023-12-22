let width = window.visualViewport.width;
let height = window.visualViewport.height;
const LeftBox = document.getElementById("leftBox");
const backgroundFade = document.getElementById("backgroundFade");
function leftBoxSlide() {
    
    LeftBox.style.transition = `1s`;
    LeftBox.style.transform = `translate(0%,0%)`;
    backgroundFade.style.transition = `background-color 1s ease`;
    backgroundFade.style.visibility = `visible`;
    backgroundFade.style.backgroundColor = `rgba(0,0,0,0.2)`;
    console.log("why")
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