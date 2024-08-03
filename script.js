const newTitle = 'आंभिरा इन्स्टिट्यूट ऑफ सायन्स';
const originalTitle = 'Ambhira Institute of Science';
const originalSubtitle = 'Learn, Grow, Achieve: Transforming Students into Champions';
const newSubtitle1 = 'आपल्या उज्ज्वल भविष्याची गुरुकिल्ली';
const newSubtitle2 = 'आजच प्रवेश घ्या आणि आपल्या यशाचा पाया भरा!';
let contentState = true;

setInterval(() => {
    const contentElement = document.getElementById('institute-name').getElementsByTagName('h1')[0];
    const subtitleElement = document.getElementById('institute-name').getElementsByTagName('p')[0];

    if (contentState) {
        contentElement.innerText = newTitle;
        subtitleElement.innerText = newSubtitle1;

        // Switch to the secondary subtitle after 2.5 seconds
        setTimeout(() => {
            if (contentElement.innerText === newTitle) {
                subtitleElement.innerText = newSubtitle2;
            }
        }, 2500);
    } else {
        contentElement.innerText = originalTitle;
        subtitleElement.innerText = originalSubtitle;
    }

    contentState = !contentState;
}, 5000);



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}



