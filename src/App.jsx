import Header  from './components/header.jsx';
import CoreConcepts from './Components/CoreConcepts.jsx';
import {CORE_CONCEPTS}  from './data.js';
import TabButton from './Components/TabButton.jsx';
import { useState } from 'react';
import {EXAMPLES} from './data.js';

function App() {
const[selectTab, setSelectedTab]= useState("components");


function handleSelect(selectTab){
    setSelectedTab(selectTab);
}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
            <ul>
               <CoreConcepts
                    title= {CORE_CONCEPTS[0].title}
                    description={CORE_CONCEPTS[0].description}
                    image={CORE_CONCEPTS[0].image}/>
              <CoreConcepts {...CORE_CONCEPTS[1]}/>
              <CoreConcepts {...CORE_CONCEPTS[2]}/>
              <CoreConcepts {...CORE_CONCEPTS[3]}/>
                       
            </ul>
        </section>
   

        <h2>Time to get started!</h2>
          <section id="examples">
            <menu>
              <TabButton onSelect={()=>handleSelect("components")}>Components</TabButton>
              <TabButton onSelect={()=>handleSelect("jsx")}>Jsx</TabButton>
              <TabButton onSelect={()=>handleSelect("props")}>Props</TabButton>
              <TabButton onSelect={()=>handleSelect("state")}>state</TabButton>
            </menu>
          </section>
          <div id="tab-content">
           <h3> {EXAMPLES[selectTab].title}</h3>
            <p>{EXAMPLES[selectTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectTab].code}</code>
            </pre>          
          </div>  
       </main>
    </div>
  );
}

export default App;