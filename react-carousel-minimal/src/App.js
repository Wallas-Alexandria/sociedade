import "./App.css";
import { Carousel } from "./lib";
import Menu from './lib/components/header/';
// import QuemSomos from './lib/components/QuemSomos/index';
import Hero from './lib/components/hero/';
import Footer from './lib/components/footer/';

function App() {
  const data = [
    {
      image:
        "https://scontent.fcgh24-1.fna.fbcdn.net/v/t39.30808-6/284546608_488220383055482_2249343573894890025_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEmkhAS9RXeSCQtRqGgCIgaf3NKwI-vcuh_c0rAj69y6L0NzGco4HinBmzElTct213wuU8ok_Zemn-0qYJOPJYR&_nc_ohc=mwF_fz0ZjrUAX-tU4g8&_nc_ht=scontent.fcgh24-1.fna&oh=00_AfBWngD9TnY8cN4HPY9eRd0ipgn6FMqFdemWFYNBO6fl1Q&oe=63BADE03",
      caption: `<div>
        <h3 class="titulo__banner">PROJETO CONSTRUINDO O FUTURO</h3>
        
        <p class="paragrafo__banner">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.

        </p>
      </div>`,
    },
    {
      image:
        "https://scontent.fcgh24-1.fna.fbcdn.net/v/t39.30808-6/283099630_483561243521396_5012070780292846045_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFJv7jNIwFAX72SOjTAXEMp1suQsj_RDfPWy5CyP9EN806ntiGYFEWrSf-CfQ5oIHZNRMndyoRTGG6rDSAklPVo&_nc_ohc=8VOwCYuLJ9wAX-Gkx-S&_nc_ht=scontent.fcgh24-1.fna&oh=00_AfCGcS46Cryj_Ys71sYGWl-AdH8OHFO88ktP4WOQljyvfQ&oe=63BC453E",
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
      </section>

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

        </div>
      </div>

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
    </div>
  );
}

export default App;
