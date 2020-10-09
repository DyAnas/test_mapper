import React, { useState, useCallback, useEffect } from "react";
import ImageMapper from "react-image-mapper";
import URL from './photoshop.jpg'
import { useHistory } from "react-router-dom";
import withMobileDialog from "@material-ui/core";
import Dialog from 'react-bootstrap-dialog';
import Example from "./DialogAlert";
export default function Test1() {
    const [query, setQuery] = useState(1);
    const history = useHistory();
    const [mapAreas, setMapAreas] = useState({
        name: "Floor 2",
        areas:[
            { id: 1, shape: "poly", coords: [42,42,46,179,116,178,120,88,117,35],preFillColor: "#02f3af" , fillColor: "#7fb775"},
            { id: 2, shape: "poly", coords: [122,88,117,176,245,174,247,86], preFillColor: "#e7df8e" ,fillColor: "#7fb775" },
            { id: 3, shape: "poly", coords: [46,180,41,277,85,273,116,246,116,178], preFillColor: "#02f3af" , fillColor: "#7fb775"  },
            { id: 4, shape: "poly", coords: [42,278,34,413,110,404,116,248,85,273], preFillColor: "#e7df8e" ,fillColor: "#7fb775" },
            { id: 5, shape: "poly", coords: [149,255,151,279,142,281,146,314,165,310,171,336,296,317,283,229], preFillColor: "#02f3af" , fillColor: "#7fb775"  } ,
            { id: 6, shape: "poly", coords: [249,85,246,173,383,172,381,162,401,162,439,79], preFillColor: "#e5787c",fillColor: "#7fb775"  },
          //  { id: 7, shape: "poly", coords: [361,227,357,248,333,246,328,289,338,293,335,335,428,351,446,239], preFillColor: "#e5787c",fillColor: "#7fb775"  },
        ]
    });

/*    const handleUpdateMapArea = useCallback(
        evt =>
            updateMapArea(5, [evt.nativeEvent.layerX, evt.nativeEvent.layerY, 10]),
        []
    );*/

    /**
     * Update image area when updated
     *
     * @see https://github.com/coldiary/react-image-mapper/issues/32
     */
    useEffect(() => {
        setQuery(Math.random());
    }, [mapAreas]);

 /*   const updateMapArea = (id, coords) => {
        console.log(id, coords);
        const areas = mapAreas.areas.map(item =>
            item.id === id ? { ...item, coords } : item
        );
        setMapAreas({
            name: mapAreas.name,
            areas
        });

    };*/
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // new function
    const handleUpdateMapArea2 = useCallback(
        evt =>
            enterArea(evt),

        [ ]
    );
    const [classes, setClasses]= useState({
            className: 'span1',
        }
    );
    const [index, setIndex]=useState("");
    const [dialog, setDialog]=useState();
    const enterArea=( area )=> {


            setIndex(area.id);
        // deep copy to areas (array)
        const copy =JSON.parse(JSON.stringify(mapAreas.areas));
        copy[area.id-1].preFillColor="#10dec0";
        setMapAreas({
            name: mapAreas.name,
            areas: copy

        });
        handleShow();

       // history.push("/dialog")
        console.log("copy",copy);
    }



    return (
        <div className="center">
            <Example
                show={show}
                onHide={handleClose}
                index={index}
                name={mapAreas.name}

            />
        <div className="container">

            <ImageMapper
                src={`${URL}?${query}`}
                //onClick={area => getTipPosition(area)}
               // onImageClick={handleUpdateMapArea}
                map={mapAreas}
                width={500}
                onClick={handleUpdateMapArea2}
            />

            <span className="span1" >
                   Sone a
             </span>


            <span className="span2"  >
            Sone  b
        </span>

            <span className="span3">
            Sone c
        </span>

            <span className="span4">
            Sone d
        </span>

            <span className="span5">
            Sone e
        </span>

            <span className="span6">
            Sone f
        </span>
            {/*
            <span className="span7">
            Sone {mapAreas.areas[6].id}
        </span>*/}
        </div>
    <cnter>
        <h2>{index}</h2>
    </cnter>

        </div>
    );
}
