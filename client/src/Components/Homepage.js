import React, { Component } from 'react'

class HomePage extends Component{
    render(){
        return(
            <div>
                <h1>Welcome To Your Inventory Hub!</h1>
                <h3>Please Select Which Page You'd Like to Visit</h3>
                    <div className='home-page-links'>
                        <a href='/home'><button className="home-page-button">Home Inventory</button></a>
                    </div>
                    <div className='home-page-links'>
                        <a href='/kitchen'><button className="home-page-button">Kitchen</button></a>
                    </div>
                    <div className='home-page-links'>
                        <a href='/bedroom'><button className="home-page-button">Bedroom</button></a>
                    </div>
                    <div className='home-page-links'>
                        <a href='/survival'><button className="home-page-button">Survival</button></a>
                    </div>
                    <div className='home-page-links'>
                        <a href='/festival'><button className="home-page-button">Festival</button></a>
                    </div>

            </div>
        )
    }
}

export default HomePage