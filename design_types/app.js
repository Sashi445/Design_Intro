const imageViewer = document.querySelector('.image_viewer');

const images = document.querySelectorAll('.images img');

const closeButton = imageViewer.querySelector('#close')


console.log(imageViewer);

console.log(images);

images.forEach((e) => {
    e.addEventListener('click', function(){
        imageViewer.querySelector('img').src = this.src;
        imageViewer.classList.remove('hide')
        console.log("Height : ", imageViewer.style.top)
        console.log(window.pageYOffset)
        let height = `${window.pageYOffset}px`
        imageViewer.style.top = height
        console.log(imageViewer.style.top)
    })
})

closeButton.addEventListener('click', function(){
    imageViewer.classList.add('hide')
    console.log("closed!!")
})
