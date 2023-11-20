import { HeaderComponent } from "./components/header/HeaderComponent";
import { FooterComponent } from './components/footer/FooterComponent';
import './App.css'
import { CardComponent } from "./components/card/CardComponent";
import { ButtonComponent } from "./components/button/ButtonComponent";

function App() {

  return (
    <>
      <HeaderComponent/>
      <main>
        <CardComponent/>
        <ButtonComponent
          titulo={'Siguiente'}
        />
      </main>
      <FooterComponent/>
    </>
  )
}

export default App
