import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  const [images, updateImages] = useState([]);

  function createCard(data){
    const imgArray = data.map(img=>{
      const download_url = img.download_url;
      return (
        <div className="col-sm-4 my-1">
          <img src={download_url} width="350"/>
        </div>
      )
    })
    updateImages(imgArray);
  }

  async function retrieveData(){
    const fetchedData = await axios.get('https://picsum.photos/v2/list');
    createCard(fetchedData.data);
  }

  useEffect(()=>{
    retrieveData();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          {images}
        </div>
      </div>
    </div>
  );
}

export default App;