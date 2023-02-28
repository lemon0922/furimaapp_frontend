import React, { useState, useEffect } from 'react'
import "./ImageGarary.css";
import axios from "axios";

const instance = axios.create ({
  baseURL: process.env.REACT_APP_DEV_API_URL,
  headers: {
     'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

export const ImageGarary = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get('items')
    .then(res => {
      console.log(res);
      setItems(res.data)
    });
  }, [])
  
  return (
    <div>
      <div className="itemsWrapper">
        <div className="items">
          <div>
            <h1>{items.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGarary;