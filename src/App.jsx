import { Header }        from "./components/header/Header";
import { Footer }        from './components/footer/Footer';
import { Button }        from "./components/button/Button";
import { CarouselPromo } from "./components/carousel/CarouselPromo";

import './App.css'
import Ecommerce from "./components/ecommerce/Ecommerce";
import { Container } from "react-bootstrap";

function App() {

  return (
    <>
      <Header/>
      <Container>
        <Ecommerce/>
        <CarouselPromo/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
