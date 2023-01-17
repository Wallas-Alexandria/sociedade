import "./App.css";
import { Carousel } from "./lib";
import Menu from './lib/components/header/';
import Hero from './lib/components/hero/';
import Footer from './lib/components/footer/';
import foto1 from '../src/img1.jpg'
import foto2 from '../src/img2.jpg'

function App() {
  const data = [
    {
      image:foto1,
      caption: `<div>
        <h3 class="titulo__banner">PROJETO CONSTRUINDO O FUTURO</h3>
        
        <p class="paragrafo__banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.

        </p>
      </div>`,
    },
    {
      image:foto2,
      caption: `<div>
      <h3 class="titulo__banner">PROGRAMA CONECTA GERAÇÃO JOVEM</h3>
      <p class="paragrafo__banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.

      </p>
      </div>`,
    },

  ];

  const captionStyle = {
    fontSize: "15px",
    top: "20px",

  };
  const slideNumberStyle = {



  };
  return (
    <div className="App">
      <section>
        <>
          <Menu />
        </>
      </section >


      <div style={{ textAlign: "center" }}>
        <div
          style={{

          }}
        >
          <Carousel
            data={data}
            time={2000}
            width="1440px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"

            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"

            showNavBtn={true}
            style={{

              textAlign: "center",
              maxWidth: "1440px",

            }}
          />
        </div >
      </div >

      <section>
        <>
          <Hero />
        </>
      </section>

      <section>
        <>
          <Footer />
        </>
      </section>
    </div >
  );
}

export default App;
