import React from 'react';
import { CarouselBorder, CarouselContainer, CarouselText, CarouselTextButton, CarouselTextContainer, CarouselTitle } from './style';
import SearchBar from '../SearchBar/SearchBar';


const Banner = () => {
  return (
    <CarouselContainer>
      <CarouselBorder />
        <div>
          <img
            loading="lazy"
            src="https://images.unsplash.com/photo-1675295275133-dcc3b94a5d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
            alt="banner"
            />
          <CarouselTextContainer>
            <CarouselTitle>Your favorite movies. Explained</CarouselTitle>
            <CarouselText>Figure out what happened. Then find out why.</CarouselText>
            <CarouselTextButton>
            <SearchBar/>
            </CarouselTextButton>
          </CarouselTextContainer>
        </div>
    </CarouselContainer>
  );
};

export default Banner;

