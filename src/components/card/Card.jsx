import React from 'react'
import {BiCodeAlt} from 'react-icons/bi';
import {AiOutlineWifi} from 'react-icons/ai';
import './card.css'

const Card = ({title,image,des,frontend,backend,code,live}) => {
    return (
        <div className="portfolio__card">
            <div className="portfolio__box">
                <div className="portfolio__imgBx">
                    <img src={image} alt="project" />
                </div>
                <div className="portfolio__contentBx">
                    <div className="portfolio__content">
                        <h2>{title}</h2>
                        <p>{des}</p>
                        <div className='portfolio__buttons'>
                            <a href={code}  target="_blank"><BiCodeAlt /><span>code</span></a>
                            <a href={live}  target="_blank"><AiOutlineWifi/><span>live</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
