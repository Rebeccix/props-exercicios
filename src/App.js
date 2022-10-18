import CardVideo from "./components/CardVideo";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo nome={"Fotografia"} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
            <CardVideo nome={"Magic"} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
            <CardVideo nome={"React props"} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
            <CardVideo nome={"Js 4 dummies "} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
            <CardVideo nome={"lowFi"} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
            <CardVideo nome={"Cats"} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
            <CardVideo nome={"Funny"} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
            <CardVideo nome={"Reddit"} img={'https://assets.moxfield.net/cards/card-J98rm-art_crop.jpg'}/>
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}