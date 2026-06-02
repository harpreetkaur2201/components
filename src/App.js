import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {

    const navLinks = [
        { index: 0, name: 'Home', url: '#' },
        { index: 1, name: 'About', url: '#' },
        { index: 2, name: 'Gallery', url: '#' },
        { index: 3, name: 'Contact', url: '#' }
    ];

    let bannerTitle = 'Be creative';

    let bannerText =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

    const galleryImages = [
        'https://picsum.photos/200?1',
        'https://picsum.photos/200?2',
        'https://picsum.photos/200?3',
        'https://picsum.photos/200?4'
    ];

    return (
        <>
            <Header navLinks={navLinks} />

            <Banner
                title={bannerTitle}
                text={bannerText}
            />

            <Gallery images={galleryImages} />

            <Footer />
        </>
    );
}

export default App;