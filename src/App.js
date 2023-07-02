import Navbar from './components/Navbar'
import Banner from './components/Banner'
import PresentationCardRight from './components/PresentationCardRight'
import PresentationCardLeft from './components/PresentationCardLeft'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-container">
        <Banner />
        <section className="presentation-container">
          <PresentationCardRight
            img="images/accompagnement.png"
            text="Véritable couteau suisse, je vous assiste sur le quotidien de votre entreprise (un peu comme un bras droit)
            en m’occupant de toutes les tâches qui vous demandent trop de temps ou dont vous n’avez, tout simplement,
            pas envie de vous occuper."
          />
          <PresentationCardLeft
            img="images/conseil.png"
            text="J’interviens dans tous les secteurs d’activité et entreprises (TPE, PME, associations, EI,..), même si, il est
            vrai, mon expertise se porte principalement sur le secteur du CHR (Cafés, Hôtels, Restaurants)"
           />
           <PresentationCardRight
            img="images/gestion.png"
            text="Ma personnalité et mon parcours professionnel me permettent de pouvoir jongler sur tous les aspects
            d’une entreprise, je vous accompagne autant sur la partie financière, administrative que sur la partie RH
            ou encore sur les aspects de stratégie de commercialisation et communication. Cette liste n’est bien sûr pas
            exhaustive, je m’adapte à vos besoins, rencontrons-nous pour en parler !"
          />
        </section>
          <h2>MES VALEURS</h2>
      </div>
    </div>
  );
}

export default App;
