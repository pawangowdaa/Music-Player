import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import key from '../tocken/key'
import Search from "./Search";


function Music(props){
    const[artist,setArtist]= useState([])

    const searchArtist =async (artistName)=>{
        await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization': `Bearer ${key}`
            }
        }).then(res=>res.json())
        .then(out=>{
            console.log('out = ',out)
            setArtist(out.artists.items)
        })
        .catch(err=>console.log(err.message))
    }
    //react hook -> used to call data on mounting stage
    useEffect(()=>{
        searchArtist('SPB')
    },[])
    return(
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-success">Spotify Music Player</h3>
            </div>
        </div>
        <Search findArtist={searchArtist}/>
        <div className="row">
            {
                artist && artist.map((item,index)=>{
                    const {id,name,popularity,image,genres,href,followers,type}=item
                    return(
                        <div className="col-md-3 mt-2 mb-2" key={index}>
                            <div className="card">
                                <div className="card-body">
                                {/* image slider */}
                                <div className="carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-inner" style={{height:'200px'}}>
                                        <div className="carousel-item active">
                                            <img src={'https://picsum.photos/300/300'} alt="no image found" height={200} className="d-block w-100" />
                                        </div>
                                        {/* {
                                             images && images.map((item,index)=>{
                                                return (
                                                    <div className="carousel-item" key={index}>
                                                        <img src={item.url} alt="no image found" height={200} className="d-block w-100" />
                                                    </div>
                                                )
                                            }) 
                                        } */}
                                    </div>
                                </div>
                                    <h6 className="text-success text-center">
                                        {name}
                                    </h6>
                                </div>
                                <div className="card-footer">
                                    <NavLink to={`/tracks/artist/${id}`} className="btn btn-success">
                                    Tracks

                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}
export default Music