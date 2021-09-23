import React from 'react';
import Whirligig from 'react-whirligig'
import placeholder from './placeholder.png';
import placeholder2 from './placeholder-wide.png';
  
const Home = () => {
  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  return (
    <div id='content'>
      <div id='title'>
        <h1>Top News Articles</h1>
      </div>
     
      <div id='newsArticles'>
        <Whirligig id ='slider'
          visibleSlides={3}
          gutter="1em"
          ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
          >
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
            <img id="images" src={placeholder} />
        </Whirligig>
        <button id="sliderbutton-prev" onClick={prev}>Prev</button>
        <button id='sliderbutton-next' onClick={next}>Next</button>
      </div>
    
      <div id='chart-home'>
        <img id="chart" src={placeholder2} />

        <br></br>

        <button id="candlesticks-button">Candlestick Chart</button>
        <button id="line-button">Line Chart</button>

      </div>

      <br></br>

      <footer>

      </footer>
    </div>
  );
};
  
export default Home;

/*
  <SimpleImageSlider
    width={896}
    height={504}
    images={images}
  />
*/