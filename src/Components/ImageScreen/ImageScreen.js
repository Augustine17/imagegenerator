import React, { useState } from 'react'
import './ImageScreen.css'

const ImageScreen = () => {
    const [images,setImages] = useState();
    const [input,setInput] = useState("");

    function fetchImage(){
        let clientId = "kE6ttNgA9b24KoQ2hniwNQa1ZYONKrl6HNAGjIWFDPo";
        const API_URL = "https://api.unsplash.com/search/photos";
        let url = `${API_URL}?client_id=${clientId}&query=${input}&page=1&per_page=12`;

        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                setImages(data.results);
            })
            .catch(error => console.error('Error fetching images:', error));

    }

  return (
    <div id='container'>
        <header>
            <h1>Image generator</h1>
        </header>
        <div id='input-container'>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' placeholder='input key'/>
            <button onClick={fetchImage}>Generate</button>
        </div>
        <div id='image-container'>
            {images && <img src = {images[0].urls.regular} alt={`Image of ${input}`}/>}
        </div>
    </div>
  )
}

export default ImageScreen