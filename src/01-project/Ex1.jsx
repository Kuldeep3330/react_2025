import CoreConcept from "./CoreConcept";
import Header from "./Header";
import react_img from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS , EXAMPLES} from "./data";
import './Ex1.css'
import TabButton from "./TabButton";
import { useState } from "react";


function Ex1() {
  const [tabContent, setTabContent]= useState('')

  const reactDescription=["Fundamental", "Crucial", 'Core']
  const btn=["components", "props", "jsx", "state"]

  function getRandomInt(max){
    return reactDescription[Math.floor(Math.random()*max)]
  }  

  const handleClick=(e)=>{
    setTabContent(e.target.innerText)    
}

  return (
    <div>
      <Header react_img={react_img} heading="React Essentials" content={`${getRandomInt(3)} React concepts you will need for almost any app you are
          going to build!`}/>
      
      <main>
        <section id="core-concepts">
          <h2>core concepts</h2>
          <ul>

          {
            CORE_CONCEPTS.map((data, index) => (
              <CoreConcept key={index} {...data} />
            ))
          }

          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
                       
            {
              btn.map((data, index) => (
                <TabButton key={index} onClick={handleClick}>{data}</TabButton>
              ))
            }
          </menu>
              {/* {tabContent} */}
              
              {!tabContent ?<p style={{background:'red', color:'#f1f1f1'}}> please select a button</p>:
              <div id="tab-content">
              <h3>{EXAMPLES[tabContent]?.title}</h3>
              <p>{EXAMPLES[tabContent]?.description}</p>
              <pre>
                <code>{EXAMPLES[tabContent]?.code}</code>
              </pre>
              </div>
              
              }
              
        </section>
      </main>
    </div>
  );
}

export default Ex1;
