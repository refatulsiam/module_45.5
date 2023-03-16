const images = [
    'images/pic-1.jpg', //0
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg', //9
]

let imaIndex = 0;
const imgEl = document.getElementById('slider-img');
setInterval( () =>{
    if(imaIndex === images.length){
        imaIndex = 0;
    }
    const imgUrl = images[imaIndex]
    // console.log(imaIndex, imgUrl);
    imgEl.setAttribute('src', imgUrl)
    imaIndex++;
}, 2000)