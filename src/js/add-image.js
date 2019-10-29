import kiwi from './new.jpg';


function addImages() {
    const img = document.createElement('img');
    img.alt = "KIWI",
        img.src = kiwi,
        img.width = 454

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImages;