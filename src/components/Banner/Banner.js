import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Cupiditate id mollitia distinctio quam voluptatibus eaque tenetur quia. Nisi magnam nihil at,
                 quisquam, hic distinctio fugiat ipsum architecto sit quasi voluptate.</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
