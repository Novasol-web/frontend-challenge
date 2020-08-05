import React from 'react';
import ol from 'openlayers';
import PopupContent from '../components/PopupContent';
import MockData from '../data/mockData';

// Class component that creates the map as well as the markers and popups on it.
class BaseMap extends React.Component {
    componentDidMount(){
        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([-0.122930, 51.509783]),
                zoom: 10,
            })
        });

        // Data taken from MockData.json except lat and long.
        const data = [
            {
                lat: -0.184530,
                long: 51.520611,
                desc: MockData.properties[0].address.line4,
                title: MockData.properties[0].type
            },
            {
                lat: -0.018210,
                long: 51.587180,
                desc: MockData.properties[1].address.line4,
                title: MockData.properties[1].type
            },
            {
                lat: -0.099320,
                long: 51.525320,
                desc: MockData.properties[2].address.line4,
                title: MockData.properties[2].type
            }
        ];

        // populate the map with markers on the requested location created from lat and long
        const features = [];
        data.forEach( (point) => {
            const feature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([point.lat, point.long])),
                description: point.desc,
                title: point.title
            });
            const iconPath = 'https://cdn.mapmarker.io/api/v1/fa/stack?size=50&color=DC4C3F&icon=fa-microchip&hoffset=1';
            const iconStyle = new ol.style.Style({
                image: new ol.style.Icon(/** @type {olx.style.IconOptions} */({
                    anchor: [0.5, 46],
                    anchorXUnits: 'fraction',
                    anchorYUnits: 'pixels',
                    opacity: 0.75,
                    src: iconPath
                }))
            });
            feature.setStyle(iconStyle);
            features.push(feature);
        });
        
        //adds an array of features that makes it possible to engange with the markers on the map.
        var vectorSource = new ol.source.Vector({
            features: features
        });
        
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });
        map.addLayer(vectorLayer);
        var content = document.getElementById("popup-content");
        var title = document.getElementById("popup-title");
        var popup = new ol.Overlay({
            element: document.getElementsByClassName("popup")[0]
        });
        map.addOverlay(popup);
        document.getElementById('popup-close').onclick = () => {
            popup.setPosition(undefined);
            document.getElementById('popup-close').blur();
            return false;
        };
        
        // select interaction working on "click"
        var select = new ol.interaction.Select({
            condition: ol.events.condition.click
        });

        //displays content in popups.
        map.addInteraction(select);
        select.on('select', (e) => {
            if (e.target.getFeatures()) {
                const feature = e.target.getFeatures().item(0).N;
                content.innerHTML = 'Address: ' + feature.description;
                title.innerHTML = feature.title;
                popup.setPosition(feature.geometry.A);
            }
        });
    };
    render(){
        return(
            <div>
                <div id='map'>
                </div>
                <div>
                  <PopupContent />
                </div>
            </div>
            )
        };
    };
    export default BaseMap;