import Nav from './Nav';

function Header(props) {
    return (
        <header>
            <div className="container flex">
                <h1>Components</h1>
                <Nav navLinks={props.navLinks} />
            </div>
            
        </header>
    );
}

export default Header;