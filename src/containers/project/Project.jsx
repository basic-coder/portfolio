import React, { useState } from 'react'
import './project.css'
import p2 from '../../assets/nimbusbytes.png'
import p1 from '../../assets/classicSafety.png'
import p3 from '../../assets/p22.png'
import Card from '../../components/card/Card'

const cards = [
    {
        img: p1,
        head: 'Classic Safety',
        des: 'Classic Safety is product based website sells products such as Polyester Slings, Cargo Ratchet Belt, Round Slings etc.',
        frontend: 'Html/css',
        live: 'https://classicsafety.in/',
    },
    {
        img: p2,
        head: 'NimbusBytes',
        des: 'NimbusBytes is one of my latest product, it is an service based which provides IT services.',
        frontend: 'React',
        live: 'https://nimbusbytes.com',
    },
    {
        img: p3,
        head: 'White Cabs',
        des: 'White Cabs is a cabs service in ca.',
        frontend: 'React',
        live: 'https://whitecabs.ca/',
    },
]

const Project = () => {
    const [cardToggle, setCardToggle] = useState(false);
    return (
        <>
        <section className='portfolio-section sec-padding' id='project'>
           <div className="container">
               <div className="row">
                   <div className="section-title">
                       <h2> Freelance Projects</h2>
                   </div>
               </div>
               <div className="row">
               { cards.map((card)=>(
                
                   <Card key={card.head} close={()=>setCardToggle(false)} image={card.img} title={card.head} des={card.des} frontend={card.frontend} backend={card.backend} code={card?.code} live={card.live} />
                   ))
                }
               </div>
           </div>
        </section>
        </>
    )
}

export default Project
