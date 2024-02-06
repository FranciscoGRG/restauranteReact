/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/NetflixSlider.css'
import { Link } from 'react-router-dom';
import { ObtenerPelisNuevas } from '../js/script';

const Carrousel = () => {

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {

      try {
        const pelis = await ObtenerPelisNuevas()
        setMovieDetails(pelis)
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  });


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplayspeed: 90000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='netflix-slider-container'>
      <Slider {...sliderSettings}>
        {movieDetails && movieDetails.map((peli) => (
          <div key={peli.id} className='netflix-slider-item'>
           <Link to={`/movieDetail/${peli.id}`}> <img src={`https://image.tmdb.org/t/p/w500/${peli.poster_path}`} alt="" /></Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrousel;
