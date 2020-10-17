import React from 'react';
import ImageMapper from "react-image-mapper";

import URL from './photoshop.jpg'
import { useHistory } from "react-router-dom";
import Example from "./DialogAlert";
export default function TestAbod  () {
    let mapAreas = {
   
        name: "choose a floor",
        areas: [
            { id: 1, shape: "poly", coords: [42, 42, 46, 179, 116, 178, 120, 88, 117, 35], preFillColor: "#02f3af", fillColor: "#7fb775" },
            { id: 2, shape: "poly", coords: [122, 88, 117, 176, 245, 174, 247, 86], preFillColor: "#e7df8e", fillColor: "#7fb775" },
            { id: 3, shape: "poly", coords: [46, 180, 41, 277, 85, 273, 116, 246, 116, 178], preFillColor: "#02f3af", fillColor: "#7fb775" },
            { id: 4, shape: "poly", coords: [42, 278, 34, 413, 110, 404, 116, 248, 85, 273], preFillColor: "#e7df8e", fillColor: "#7fb775" },
            { id: 5, shape: "poly", coords: [149, 255, 151, 279, 142, 281, 146, 314, 165, 310, 171, 336, 296, 317, 283, 229], preFillColor: "#02f3af", fillColor: "#7fb775" },
            { id: 6, shape: "poly", coords: [249, 85, 246, 173, 383, 172, 381, 162, 401, 162, 439, 79], preFillColor: "#e5787c", fillColor: "#7fb775" },
            { id: 7, shape: "poly", coords: [361, 227, 357, 248, 333, 246, 328, 289, 338, 293, 335, 335, 428, 351, 446, 239], preFillColor: "#e5787c", fillColor: "#7fb775" },
        ]
    }
    const color = "#ecdb9a"
    var areas1 = mapAreas.areas.splice(3, 3);
    mapAreas= {
        name: "choose a floor",
        areas: areas1
     }
     const enterArea = (area) => {

    }
    let query =0.4;
    return (
        <ImageMapper
            src={`${URL}?${query}`}
            //onClick={area => getTipPosition(area)}
            // onImageClick={handleUpdateMapArea}
            map={mapAreas}
            width={500}
            onClick={enterArea}
        />
    )
}