//@ts-nocheck
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from '@react-google-maps/api';
import React, { useEffect, useRef, useState } from 'react';
// import { isMobile, isTablet } from 'react-device-detect';

//убрать //@ts-nocheck и описать типы
interface ICenter {
  lat: number;
  lng: number;
}

interface Props {
  center: ICenter;
  marker_title: string;
}

const MapContacts: React.FC<Props> = ({ center, marker_title = '' }) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP;
  const [popupOpen, setPopupOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyC9ofxwIKyzFAYZiDL4l7Xg9SdPqKGqRjg',
  });
  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  var mapOptions = {
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    overviewMapControl: true,
    rotateControl: true,
  };

  // const [width, setWidth] = useState(55);
  // const [height, setHeight] = useState(55);

  // useEffect(() => {
  // 	if (isTablet) {
  // 		setWidth(38);
  // 		setHeight(38);
  // 	}
  // 	if (isMobile) {
  // 		setWidth(29);
  // 		setHeight(29);
  // 	}
  // }, []);

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{ disableDefaultUI: true }}
        >
          <MarkerF
            onLoad={onLoad}
            onClick={() => {
              setPopupOpen(true);
            }}
            position={center}
            // icon={{
            // 	url: '/images/icons/map-marker.svg',
            // 	anchor: new google.maps.Point(0, 0),
            // 	scaledSize: new google.maps.Size(width, height),
            // }}
          >
            {popupOpen ? (
              <InfoWindowF onCloseClick={() => setPopupOpen(false)}>
                <div>{marker_title}</div>
              </InfoWindowF>
            ) : null}
          </MarkerF>
        </GoogleMap>
      ) : (
        'Loading map...'
      )}
    </>
  );
};

export default MapContacts;
