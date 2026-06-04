import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';


function App() {

    const navLinks = [
        { index: 0, name: 'Home', url: '#' },
        { index: 1, name: 'About', url: '#' },
        { index: 2, name: 'Gallery', url: '#' },
        { index: 3, name: 'Contact', url: '#' }
    ];

    let bannerTitle = '3D Character';

    let bannerText =
            'It is a 3D cartoon-style illustration. The image uses smooth shapes, simple features, and bright colors to create a playful digital character look. This style is often used for avatars, apps, websites, and presentations because it feels modern, friendly, and attractive.'
      
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