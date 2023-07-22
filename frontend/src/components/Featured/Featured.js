import React from 'react';
import './Featured.css';

const Featured = () => {
  return (<>
    <div className="featured-container">
      <div className="featured-item">
        <img src="https://cdn.pixabay.com/photo/2016/04/01/00/08/toronto-1298016_1280.jpg" alt="Hotel 1" />
        <div className="featured-text">
          <p>Toronto</p>
          <span>213 Properties</span>
        </div>
      </div>
      <div className="featured-item">
        <img src="https://cdn.pixabay.com/photo/2016/08/31/11/30/transamerica-pyramid-1633202_640.jpg" alt="Hotel 2" />
        <div className="featured-text">
          <p>Dallas</p>
          <span>34 Properties</span>
        </div>
      </div>
      <div className="featured-item">
        <img src="https://cdn.pixabay.com/photo/2015/03/11/12/31/buildings-668616_1280.jpg" alt="Hotel 3" />
        <div className="featured-text">
          <p>New York</p>
          <span>99 Properties</span>
        </div>
      </div>
    </div>
   
    <div className="image-row-container">
    
      <div className="image-item">
        <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_640.jpg" alt="Image 1" />
        <h2>Hotels</h2>
      </div>
      <div className="image-item">
        <img src="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_640.jpg" alt="Image 2" />
        <h2>Apartments</h2>
      </div>
      <div className="image-item">
        <img src="https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_640.jpg" alt="Image 3" />
        <h2>Resorts</h2>
      </div>
      <div className="image-item">
        <img src="https://cdn.pixabay.com/photo/2021/04/05/18/02/villa-balbiano-6154200_640.jpg" alt="Image 4" />
        <h2>Villas</h2>
      </div>
      <div className="image-item">
        <img src="https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_640.jpg" alt="Image 5" />
        <h2>Cabins</h2>
      </div>
    </div>
    </>
  );
};

export default Featured;
