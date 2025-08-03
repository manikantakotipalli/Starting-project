import Header  from './components/header.jsx';
import CoreConcepts from './Components/CoreConcepts.jsx';
import {CORE_CONCEPTS as coreonly}  from './data.js';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
            <ul>
               <CoreConcepts
                    title= {coreonly[0].title}
                    description={coreonly[0].description}
                    image={coreonly[0].image}/>
              <CoreConcepts {...coreonly[1]}/>
              <CoreConcepts {...coreonly[2]}/>
              <CoreConcepts {...coreonly[3]}/>
                       
            </ul>
        </section>
   

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;