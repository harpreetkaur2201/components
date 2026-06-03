import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';

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
    image1,
    image2,
    image3,
    image4
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