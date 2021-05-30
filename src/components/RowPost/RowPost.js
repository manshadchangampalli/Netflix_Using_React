import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {API_kEY,IMAGE_URL} from '../../constants/constant'

function RowPost(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
       axios.get(props.imgUrl).then((response)=>{
           console.log(response.data.results);
           setMovie(response.data.results)
       }).catch(err=>{
    })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
            { 
                movie ? movie.map((item)=>{
                    return(
                        <img className={props.smallClass? "smallPoster":"poster"} src={`${IMAGE_URL+item.backdrop_path}`} alt="" />
                    )
                }):"loading"
            }   
         </div>
         <YouTube videoId="2g811Eo7K8U" opts={opts} />;
        </div>
    )
}

export default RowPost
