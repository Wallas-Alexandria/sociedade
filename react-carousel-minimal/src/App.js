
import { Carousel } from "./lib";
import BotoesTopo from './lib/components/hender/index';
import QuemSomos from './lib/components/QuemSomos/index';
import foto1 from '../src/img1.jpg'
import foto2 from '../src/img2.jpg'
import Rodape from "./lib/components/footer";



function App() {
  
  const data = [
    {
      image: foto1,
      caption: `<div>
        <h3>PROJETO CONSTRUINDO O FUTURO</h3>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.

        </p>
      </div>`,
    },
    {
      image: foto2,
      caption: `<div>
      <h3>PROGRAMA CONECTA GERAÇÃO JOVEM</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel est tortor.

      </p>
      </div>`,
    },
    
  ];

  const captionStyle = {


  
  };
  const slideNumberStyle = {
 
    
    
  };
  return (
    
    <div >
   
   <BotoesTopo/>
   <QuemSomos/>
      <Rodape/>

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
           
          />

         
        </div>
      </div>
     
    </div>
  );
}

export default App;
