import React from 'react'
import './Publication.css'

const items = [
    {
        id: 1,
        image: 'https://drive.google.com/uc?export=view&id=1f0PoszJWd3GPQUdTO1YCcJ4mNGk0g9Ja',
        title: 'THEOLOGICAL PERSPECTIVES ON TITHING IN THE OLD TESTAMENT AND THEIR IMPLICATIONS FOR BELIEVING COMMUNITIES IN AFRICA',
        cite: 'Thesis (DTh)--Stellenbosch University, 2006',
        desc: 'Theological viewpoints on tithing in the Old Testament and their ramifications for religious communities in Africa are the subject of this dissertation.',
        link: 'http://scholar.sun.ac.za/handle/10019.1/1366'
    },
    {
        id: 2,
        image: 'https://drive.google.com/uc?export=view&id=1DQQQV-ifQNqbhzJD8JBq9kyUfpOUNbGB',
        title: 'Deuteronomic tithe laws and their humanitarian implications for Africa',
        cite: 'Thesis (DTh)--Stellenbosch University, 2006',
        desc: 'Theological viewpoints on tithing in the Old Testament and their ramifications for religious communities in Africa are the subject of this dissertation.',
        link: "http://dx.doi.org/10.17570/stj.2018.v4n2.a16"
    },
    {
        id: 3,
        image: 'https://drive.google.com/uc?export=view&id=1DQQQV-ifQNqbhzJD8JBq9kyUfpOUNbGB',
        title: 'Religious education and nation-building in Nigeria',
        cite: 'Thesis (DTh)--Stellenbosch University, 2006',
        desc: 'Theological viewpoints on tithing in the Old Testament and their ramifications for religious communities in Africa are the subject of this dissertation.',
        link: "https://ojs.reformedjournals.co.za/index.php/stj/article/view/1260"
    },
]


function Publication() {
  return (
    <div className='public'>
       <div className="publiccover1">
        {items.map((item)=>(
            <div className="publiccover2">
                <div>
                    <img src={item.image} alt="" loading="lazy"  />
                </div>
                <div className="p2side">
                    <div className="p2side1">
                        <h3>{item.title}</h3>
                        <p>{item.cite}</p>
                    </div>
                    <div className="p2side2">
                        <p>{item.desc} <a href={item.link} target='/blank' style={{color: '#0073FF'}}>View Publication</a></p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Publication
