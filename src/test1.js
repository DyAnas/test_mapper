import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import URL from './photoshop.jpg'
import { useHistory } from "react-router-dom";
import Example from "./DialogAlert";

const areas = [
    { id: 1, shape: "poly", coords: [42, 42, 46, 179, 116, 178, 120, 88, 117, 35], preFillColor: "#02f3af", fillColor: "#7fb775" },
    { id: 2, shape: "poly", coords: [122, 88, 117, 176, 245, 174, 247, 86], preFillColor: "#e7df8e", fillColor: "#7fb775" },
    { id: 3, shape: "poly", coords: [46, 180, 41, 277, 85, 273, 116, 246, 116, 178], preFillColor: "#02f3af", fillColor: "#7fb775" },
    { id: 4, shape: "poly", coords: [42, 278, 34, 413, 110, 404, 116, 248, 85, 273], preFillColor: "#e7df8e", fillColor: "#7fb775" },
    { id: 5, shape: "poly", coords: [149, 255, 151, 279, 142, 281, 146, 314, 165, 310, 171, 336, 296, 317, 283, 229], preFillColor: "#02f3af", fillColor: "#7fb775" },
    { id: 6, shape: "poly", coords: [249, 85, 246, 173, 383, 172, 381, 162, 401, 162, 439, 79], preFillColor: "#e5787c", fillColor: "#7fb775" },
    { id: 7, shape: "poly", coords: [361, 227, 357, 248, 333, 246, 328, 289, 338, 293, 335, 335, 428, 351, 446, 239], preFillColor: "#e5787c", fillColor: "#7fb775" },
];


export default function Test1() {
    const [query, setQuery] = useState(1);
    const history = useHistory();
    const [mapAreas, setMapAreas] = useState({
        name: "choose a floor",
        areas:areas
    });

    useEffect(() => {
        setQuery(Math.random());
    }, [mapAreas]);

    const handleUpdateMapArea = useCallback(
        evt =>
            enterArea(evt),

        []
    );
    // todo find solution to remove multi object from mapareas without copy areas every time
    // handle onclick sone
    const enterArea = (area) => {

        // deep copy to areas (array)
        // const copy =JSON.parse(JSON.stringify(mapAreas.areas));

        //NB!! I used rfdc library to make deep copy for better performance.
        const clone = require('rfdc')();
        let copy = clone(mapAreas.areas);


        console.log(copy)
        // copy[area.id-1].preFillColor="#10dec0";
        setMapAreas({
            name: mapAreas.name,
            areas: copy

        });
        handleShow();

        // history.push("/dialog")
        console.log("copy", copy);
    }

    // floor 1 handle
    const handleClickFloor1 = (floors) => {
        const color = "#ecdb9a"
   const areasToShow = floors.map(item=>{
        return areas[item]
   })
            setMapAreas({
                name: "Floor 1",
                areas: areasToShow
            });


    }

    // handle onclick floor 2
    const handleClickFloor2 = () => {
       
        const color = "#ecdb9a"
        const clone = require('rfdc')();
        let copy = clone(mapAreas.areas);
        console.log(mapAreas.areas.length);
        if (mapAreas.areas.length === 7) {
            var areas1 = copy.splice(3, 1);
            console.log(mapAreas.areas.length);
            setMapAreas({
                name: "Floor 1",
                areas: areas1
            });

        }
        setMapAreas({
            name: "Floor 2",

            areas: [
                { id: 1, shape: "poly", coords: [42, 42, 46, 179, 116, 178, 120, 88, 117, 35], preFillColor: "#02f3af", fillColor: "#7fb775" },
                { id: 2, shape: "poly", coords: [122, 88, 117, 176, 245, 174, 247, 86], preFillColor: "#e7df8e", fillColor: "#7fb775" },
                { id: 3, shape: "poly", coords: [46, 180, 41, 277, 85, 273, 116, 246, 116, 178], preFillColor: "#02f3af", fillColor: "#7fb775" },
                { id: 4, shape: "poly", coords: [42, 278, 34, 413, 110, 404, 116, 248, 85, 273], preFillColor: "#e7df8e", fillColor: "#7fb775" },
                { id: 5, shape: "poly", coords: [149, 255, 151, 279, 142, 281, 146, 314, 165, 310, 171, 336, 296, 317, 283, 229], preFillColor: "#02f3af", fillColor: "#7fb775" },
                { id: 6, shape: "poly", coords: [249, 85, 246, 173, 383, 172, 381, 162, 401, 162, 439, 79], preFillColor: "#e5787c", fillColor: "#7fb775" },
                { id: 7, shape: "poly", coords: [361, 227, 357, 248, 333, 246, 328, 289, 338, 293, 335, 335, 428, 351, 446, 239], preFillColor: "#e5787c", fillColor: "#7fb775" },
            ]
        });

    }
    // handle onclick floor 3
    const handleClickFloor3 = () => {
        setMapAreas({
            name: "Floor 3",
            areas: [
                { id: 2, shape: "poly", coords: [122, 88, 117, 176, 245, 174, 247, 86], preFillColor: "#e7df8e", fillColor: "#7fb775" },
                { id: 5, shape: "poly", coords: [149, 255, 151, 279, 142, 281, 146, 314, 165, 310, 171, 336, 296, 317, 283, 229], preFillColor: "#02f3af", fillColor: "#7fb775" },
                { id: 6, shape: "poly", coords: [249, 85, 246, 173, 383, 172, 381, 162, 401, 162, 439, 79], preFillColor: "#e5787c", fillColor: "#7fb775" },
                { id: 7, shape: "poly", coords: [361, 227, 357, 248, 333, 246, 328, 289, 338, 293, 335, 335, 428, 351, 446, 239], preFillColor: "#e5787c", fillColor: "#7fb775" },
            ]

        });


    }

    // dialog handle
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="container">
            <Example
                show={show}
                onHide={handleClose}

                name={mapAreas.name}

            />

            <h2>{mapAreas.name}</h2>
            <div className="container">


                <ImageMapper
                    src={`${URL}?${query}`}
                    //onClick={area => getTipPosition(area)}
                    // onImageClick={handleUpdateMapArea}
                    map={mapAreas}
                    width={500}
                    onClick={enterArea}
                />

                <span className="span1" >
                    Sone d
             </span>


                <span className="span2"  >
                    Sone  j
        </span>

                <span className="span3">
                    Sone c
        </span>

                <span className="span4">
                    Sone e
        </span>

                <span className="span5">
                    Sone f
        </span>

                <span className="span6">
                    Sone b
        </span>

                <span className="span7">
                    Sone a
        </span>
            </div>
            <div className="container">
                <button onClick={()=>{handleClickFloor1([0,1,4])}}>Floor 1</button>
                <button onClick={handleClickFloor2}>Floor 2</button>
                <button onClick={handleClickFloor3}>Floor 3</button>
            </div>

        </div>
    );
}
