function scrollAppear(){
    const description = document.querySelector('.description')

    console.log(description)

    let descriptionPosition = description.getBoundingClientRect().height;

    let screenPosition = window.innerHeight


    if (descriptionPosition < screenPosition){
        console.log("I'm in!!");
        console.log(description);
        description.classList.add('appear');     
    }
}

window.addEventListener('scroll', scrollAppear)
