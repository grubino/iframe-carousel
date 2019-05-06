import React from 'react';
import './App.css';
import Slider from 'react-slick';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500
      },
      slides: [
        { url: 'https://www.npmjs.com/package/react-slick-iframe' },
        { url: 'https://www.npmjs.com/package/react-slick-iframe' },
        { url: 'https://www.npmjs.com/package/react-slick-iframe' },
        { url: 'https://www.npmjs.com/package/react-slick-iframe' },
        { url: 'https://www.npmjs.com/package/react-slick-iframe' }
      ],
      resetIFrame: 0
    };
    this.iframes = [];
  }

  componentDidMount() {
    this.iframes.forEach(iframe =>
      iframe.onload = () => setTimeout(() => iframe.src = iframe.src, 5000));
  }

  addToList(url) {
    this.setState({ slides: [...this.state.slides, { url, title: 'new slide' }]});
  }

  render() {
    const { settings, slides } = this.state;
    return (
      <div>
        <button onClick={() => this.addToList()}>pause</button>
        <div className="App">
          <Slider {...settings}>
            { slides.map((slide, i) => (<iframe ref={frame => this.iframes.push(frame)} key={`${i}`} title={slide.title} src={slide.url} className="App"/>)) }
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
