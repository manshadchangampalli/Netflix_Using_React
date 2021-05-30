import React,{useEffect, useState} from 'react'
import './Banner.css'
import {API_kEY,IMAGE_URL} from '../../constants/constant'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_kEY}&language=en-US`).then((response)=>{
            let index=Math.floor(Math.random() * 20);
            setMovie(response.data.results[index])
        })
    }, [])
    
    return (
       

        <div 
            style={{backgroundImage: `url(${movie ?IMAGE_URL+movie.backdrop_path:""})`}}
        className='banner'>
            <div className="content">
                <h1 className="title">{movie ? movie.title:"loading"}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="discription">{movie? movie.overview:"loading"}</h1>
                
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
