const images = document.querySelectorAll('img')
images.forEach((element) => {
    element.addEventListener('mouseover', (e) => {
        e.target.setAttribute('src', `./images/${element.id}_2.jpg`)
        })
        // ### For getting back initial image on mouse out
        // element.addEventListener('mouseout', (e) =>{
        //     e.target.setAttribute('src', `./images/${element.id}.jpg`)
        // }) 
    })
