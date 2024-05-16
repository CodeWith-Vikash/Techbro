import React, { useEffect, useRef, useState } from 'react'
import './Style.scss'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import brandlogo from '/brandlogo.png'

const Hero = () => {
    const imgref=useRef(null)
    const contentref=useRef(null)
    const [number, setnumber] = useState(Math.floor(Math.random()*9))
    const [page, setpage] = useState(Math.floor(Math.random()*104)+1)
    const [careerIndex, setCareerIndex] = useState(0)
    const [characterIndex, setCharacterIndex] = useState(0)
    
    const {isdark} =useSelector((state)=> state.mainReducer.home)
    
    const careers = ['web development','App development','c','c++','java','DSA','Python','Machine Learning']

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (characterIndex < careers[careerIndex].length) {
                setCharacterIndex(prevIndex => prevIndex + 1);
            } else {
                if (careerIndex < careers.length - 1) {
                    setCareerIndex(prevIndex => prevIndex + 1);
                } else {
                    setCareerIndex(0);
                }
                setCharacterIndex(0);
            }
        }, 400);

        return () => clearInterval(intervalId)
    }, [careerIndex, characterIndex])

    useEffect(()=>{
        imgref.current.style.transform=`translate(0%,0%)`
        contentref.current.style.transform=`translate(0%,0%)`
    },[])


  return (
    <div className='hero'>
        <div className="banner" style={{backgroundImage:`url(${isdark?'/dark.jpg':'/light.jpg'})`}}>
            <div className="content" style={isdark?{backgroundColor: 'rgb(0, 0, 0,0.5)'}:{backgroundColor: 'rgb(132, 132, 132,0.5)'}}>
                <img src={brandlogo} alt="" ref={imgref}/>
                <div className="bannercontent" ref={contentref}>
                <p className="subtitle">Learn <span>{careers[careerIndex].slice(0,characterIndex)}</span> free of cost</p>
                <p className="para" style={!isdark? {color:'white'}:null}>
                Confused on which tech stack to choose? I have got you covered. Browse courses and find out the best course for you. Its free! Techbro is my attempt to Provide those coding techniques to people in short time which took me years to learn.
                </p>
                <NavLink to='courses'><button>Explore Courses</button></NavLink>
                </div>
            </div>
        </div>
        <div className="blur" style={isdark?{background:` linear-gradient(
        180deg,
        rgba(11, 22, 37, 0) 0%,
        rgb(11, 22, 37) 79.17%
    )
    `}:{background:`linear-gradient(
                  180deg,
                  rgba(255, 255, 255,0) 0%,
                   #ffffff 79.17%
              )`}}></div>
              <div className="content"></div>
    </div>
  )
}

export default Hero