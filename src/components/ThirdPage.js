import React, { useState } from 'react';
import './ThirdPage.css';
import growingpath from './growing-path2.png';
import Accordion from './Accordion';
import {useHistory} from 'react-router-dom';

 function ThirdPage(props){
  const history= useHistory()
  const [ seniority, setSeniority ] = useState([
    {
      title:'Initial and Mid Level ⬇️',
      description:'Junior, Junior Advanced, Semi Senior, Semisenior Advanced',
      open: false
    },
    {
      title:'Senior ⬇️',
      description:'Senior, Software designer, Architect',
      open: false
    },
    {
      title:'Expert and MGM ⬇️',
      description:'Tecnical manger, Technical director',
      open: false
    },
    {
      title:'Senior Management ⬇️',
      description:'Studio Partener, VP Tech',
      open: false
    },
   ]);

  const toggleCards = index =>{
    setSeniority(seniority.map((card, i) =>{
      if (i === index){
        card.open = !card.open
      }else{
        card.open = false;
      }
      return card;
    }))
  }


  return (
    <div className="group">
      <h2 className="titulo">Career Path</h2>
      <div className="caja">
        <img src={growingpath} alt="people-growing" className='image-size'/> 
        <div className="accordion">
        {seniority.map((card, i)=>(
          <Accordion card={card} index={i} toggleCards={toggleCards}/>
        ))}
        </div>
      </div>
      <div className="buttons">
          <button onClick={()=>{history.push("/letsimagine")}}>Previous</button>
          <button onClick={()=>{history.push("/triforce")}}>Next</button>
        </div>
    </div>
  )
}

export default ThirdPage;