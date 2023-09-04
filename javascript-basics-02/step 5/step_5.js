const images = document.querySelectorAll('img')
images.forEach((element) => {
    element.addEventListener('mouseover', (e) => {
        // e.target.setAttribute('src', `./images/${element.id}_2.jpg`)
        const images = document.querySelectorAll('img')
images.forEach((element) => {
    element.addEventListener('mouseover', (e) => {
        switch(element.id){
            case 'image1':
                e.target.setAttribute('src','./images/image1_2.jpg')
                break
            case 'image2':
                e.target.setAttribute('src','./images/image2_2.jpg')
                break
            case 'image3':
                e.target.setAttribute('src','./images/image3_2.jpg')
                break
            case 'image4':
                e.target.setAttribute('src','./images/image4_2.jpg')
                break
            case 'image5':
                e.target.setAttribute('src','./images/image5_2.jpg')
                break
                
        }
        })
    })

        })
        // ### For getting back initial image on mouse out :)
        // element.addEventListener('mouseout', (e) =>{
        //     e.target.setAttribute('src', `./images/${element.id}.jpg`)
        // }) 
    })
