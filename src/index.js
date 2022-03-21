let koalaContainer = (

    <div className="ui items">
        {koalas.map(koala => {
            <div className="item" style={{ cursor: 'pointer' }}>
                <div className="image">
                    <img src={koala.imageURL}></img>
                </div>
                <div className="content">
                    <div className="header">
                        {koala.name}
                    </div>
                    <div className="description">
                        <p>{koala.description}</p>
                    </div>
                </div>
            </div>
        })}
    </div>
)