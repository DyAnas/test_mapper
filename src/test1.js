import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import URL from './photoshop.jpg'
import { useHistory } from "react-router-dom";
import Example from "./DialogAlert";
const clone = require('rfdc')();
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
    // dialog handle
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [mapAreas, setMapAreas] = useState({
        name: "choose a floor",
        areas: [
            areas[0],
            areas[1],
            areas[3],
            areas[4],
            areas[5]
        ]
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
        //NB!! I used rfdc library to make deep copy for better performance.
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
    const handleClickFloor = (floor) => {
        let items=[];
        let areasToShow;
        if (floor===1) {

            const color = "#ecdb9a"
            // items most be from database for zone that is active
            items = [6, 5];
            areasToShow = items.map(item => {
                return areas[item]
            })
            setMapAreas({
                name: "Floor 1",
                areas: areasToShow
            });
        }
         else if(floor ===2){
                 items = [1,4,5,6];
                 areasToShow = items.map(item=>{
                    return areas[item]
                })
                setMapAreas({
                    name: "Floor 2",
                    areas: areasToShow
                });
        }
         else if(floor===3){
            items = [1,4,5,6];
            areasToShow = items.map(item=>{
                return areas[item]
            })
            setMapAreas({
                name: "Floor 3",
                areas: areasToShow
            });
        }
        else if(floor===4){
            items = [0,1,3,4,5,6];
            areasToShow = items.map(item=>{
                return areas[item]
            })
            setMapAreas({
                name: "Floor 4",
                areas: areasToShow
            });
        }
        else if(floor===6){
            items = [0,1,3];
            areasToShow = items.map(item=>{
                return areas[item]
            })
            setMapAreas({
                name: "Floor 6",
                areas: areasToShow
            });
        }
        else if(floor===7){
            items = [0,3];
            areasToShow = items.map(item=>{
                return areas[item]
            })
            setMapAreas({
                name: "Floor 7",
                areas: areasToShow
            });

        }
        else{
            items = [0,1,3,4,5];
            areasToShow = items.map(item=>{
                return areas[item]
            })
            setMapAreas({
                name: "Floor 5",
                areas: areasToShow
            });

        }
    }

    // handle onclick floor 2
    const handleClickFloor2 = () => {

        // items most be from database for zone that is active
        const items = [1,4,5,6];
        const areasToShow = items.map(item=>{
            return areas[item]
        })
        setMapAreas({
            name: "Floor 2",
            areas: areasToShow
        });
    }


    // handle onclick floor 3
    const handleClickFloor3 = () => {
        // items most be from database for zone that is active
        const items = [1,4,5,6];
        const areasToShow = items.map(item=>{
            return areas[item]
        })
        setMapAreas({
            name: "Floor 3",
            areas: areasToShow
        });
    }




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

                <button onClick={()=>handleClickFloor(1)}>Floor 1</button>
                <button onClick={()=>handleClickFloor(2)}>Floor 2</button>
                <button onClick={()=>handleClickFloor(3)}>Floor 3</button>
                <button onClick={()=>handleClickFloor(4)}>Floor 4</button>
                <button onClick={()=>handleClickFloor(5)}>Floor 5</button>
                <button onClick={()=>handleClickFloor(6)}>Floor 6</button>
                <button onClick={()=>handleClickFloor(7)}>Floor 7</button>
            </div>

        </div>
    );
}
