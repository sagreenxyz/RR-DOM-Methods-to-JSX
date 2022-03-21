let koalaContainer = <div className="ui items"></div>

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div className="item" style={{cursor: 'pointer'}}></div>

    // Koala Card Image
    let imageContainer = <div></div>
    let koalaImage = <img></img>

    imageContainer.setAttribute('class', 'image')

    koalaImage.setAttribute('src', koala.imageURL)

    imageContainer.append(koalaImage)

    // Koala Card Content
    let koalaContent = <div></div>
    koalaContent.setAttribute('class', 'content')

    let header = <div></div>
    header.setAttribute('class', 'header')
    header.append(koala.name)

    let descriptionParagraph = <p></p>
    descriptionParagraph.append(koala.description)

    let descriptionContainer = <div></div>
    descriptionContainer.setAttribute('class', 'description')
    descriptionContainer.append(descriptionParagraph)

    koalaContent.append(
        header,
        descriptionContainer
    )

    koalaCard.append(
        imageContainer,
        koalaContent
    )

    koalaContainer.append(koalaCard)
})

document.body.append(koalaContainer)