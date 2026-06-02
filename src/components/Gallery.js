function Gallery(props) {
    return (
        <section className="gallery">

            <div className="gallery-row">

                {props.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="Gallery"
                    />
                ))}

            </div>

        </section>
    );
}

export default Gallery;