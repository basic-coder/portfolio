import React, { useState } from 'react'
import './project.css'
import p2 from '../../assets/p21.png'
import p1 from '../../assets/p3-min.png'
import p3 from '../../assets/p22.png'
import Card from '../../components/card/Card'

const cards = [
    {
        img: p1,
        head: 'Crypto',
        des: 'Crypto is online crypto coins website, where you can get details of all crypto coins and you can transfer ethers using metamask. It is made using react and blockchain',
        frontend: 'React',
        backend: 'blockchain',
        live: 'https://mycrypto-mauve.vercel.app',
        code: 'https://github.com/basic-coder/mycrypto',
    },
    {
        img: p2,
        head: 'Seo Master',
        des: 'Seo Master is a website for sitemap checking. It is made to reduce the work of manual testers.This app is deployed on vercel',
        frontend: 'React',
        backend: 'Nodejs',
        live: 'https://seo-master-client.vercel.app/',
        code: 'https://github.com/basic-coder/seo-master-client',
    },
    {
        img: p3,
        head: 'Taxi Website',
        des: 'Taxi Website was one of my current freelance work. It is completely UI related work.',
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
                       <h2>Personal / Freelance Projects</h2>
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
