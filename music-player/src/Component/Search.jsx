import React,{useState} from "react";
function Search(props){
    const [artist,setArtist]=useState('')

    const submitHandler =(e)=>{
        e.preventDefault();
        props.findArtist(artist)
    }

    return(
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card">
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="search">Search Artist</label>
                                <div className="input-group mt-2 mb-2">
                                <input type="search" name="artist" id="artist" value={artist} onChange={(e)=>setArtist(e.target.value)} className="form-control"></input>
                                <button onClick={submitHandler} className="btn btn-outline-success"><i className="bi bi-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search