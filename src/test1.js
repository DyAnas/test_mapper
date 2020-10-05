import React, { Component } from 'react';
import URL from './photoshop.jpg'
import './App.css';
import ImageMapper from 'react-image-mapper';

class  Test extends Component {

render (){
 
 const MAP = {
    name: "my-map",
    areas: [
      { name: "1", shape: "poly", coords: [42,42,46,179,116,178,120,88,117,35], preFillColor: "green", fillColor: "blue"  },
      { name: "2", shape: "poly", coords: [122,88,117,176,245,174,247,86], preFillColor: "pink"  },
      { name: "3", shape: "poly", coords: [46,180,41,277,85,273,116,246,116,178], fillColor: "yellow"  },
      { name: "4", shape: "poly", coords: [42,278,34,413,110,404,116,248,85,273], preFillColor: "red"  },
        { name: "5", shape: "poly", coords: [149,255,151,279,142,281,146,314,165,310,171,336,296,317,283,229], preFillColor: "blue"  } ,
        { name: "6", shape: "poly", coords: [249,85,246,173,383,172,381,162,401,162,439,79], preFillColor: "yellow"  },
        { name: "7", shape: "poly", coords: [361,227,357,248,333,246,328,289,338,293,335,335,428,351,446,239], preFillColor: "gray"  },
    ]
  };


  return (
    <div className="container">

      <ImageMapper src={URL} map={MAP} width={500}
    
    	//onMouseEnter={area => enterArea(area)}

    
    />


  
</div>
  );
}
}

export default Test;
