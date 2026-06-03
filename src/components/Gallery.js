function Gallery(props) {
    return (
        <section className="gallery">
            <div className="container">
                <div className="gallery-row">

                    {props.images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt="Gallery" />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Gallery;