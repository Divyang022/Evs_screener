import "bootstrap/dist/css/bootstrap.css";
import building from "./images/building.jpg";
import bar from "./images/line-chart.png";
import img from "./images/big-pic.png";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css'

export default function Slides() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src ={building} alt = "..." className="slide-img"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src ={img} alt = "..." className="slide-img"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src ={bar} alt = "..." className="slide-img"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

