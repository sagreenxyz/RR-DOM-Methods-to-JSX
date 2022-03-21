let koalaContainer = <div className="ui items"></div>

// Koala Card
// koalas are in './public/koalas.js'
koalas.forEach(koala => {
    let koalaCard = <div className="item" style={{cursor: 'pointer'}}></div>

    // Koala Card Image
    let imageContainer = <div className="image"></div>
    let koalaImage = <img src={koala.imageURL}></img>

    imageContainer.append(koalaImage)

    // Koala Card Content
    let koalaContent = <div className="content"></div>

    let header = <div className="header"></div>
    header.append(koala.name)

    let descriptionParagraph = <p></p>
    descriptionParagraph.append(koala.description)

    let descriptionContainer = <div className="description"></div>
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