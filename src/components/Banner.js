import Button from './Button';

function Banner(props) {
    return (
        <section className="banner">

            <h2>{props.title}</h2>

            <p>{props.text}</p>

            <div className="button-group">
                <Button
                    buttonText="Secondary"
                    buttonStyle="secondary"
                />

                <Button
                    buttonText="Primary"
                    buttonStyle="primary"
                />
            </div>

        </section>
    );
}

export default Banner;