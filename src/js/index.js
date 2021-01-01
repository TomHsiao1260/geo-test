import Procedural from 'procedural-gl';
import '../style.scss';

// Choose a DOM element into which the library should render
const container = document.getElementById( 'container' );

// Configure datasources (see documentation for details)
const NASADEM_APIKEY = '16ea12ec8a8274c24b72283cf340d3779';

const datasource = {
  elevation: {
    apiKey: NASADEM_APIKEY
  },
  imagery: {
  	// 正射影像圖(通用)
  	urlFormat: 'https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/EPSG:3857/{z}/{y}/{x}.jpg', 
  	// 正射影像(混合)
  	// urlFormat: 'https://wmts.nlsc.gov.tw/wmts/PHOTO_MIX/default/EPSG:3857/{z}/{y}/{x}.jpg',
  	// 官方範例(奧地利)
    // urlFormat: 'https://maps1.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpg',
    attribution: 'Tiles &copy; <a href="https://www.basemap.at/">basemap.at</a>'
  }
}

// Initialize library and optionally add UI controls
Procedural.init( { container, datasource } );

// Configure buttons for UI
Procedural.setCameraModeControlVisible( true );
Procedural.setCompassVisible( false );
Procedural.setRotationControlVisible( true );
Procedural.setZoomControlVisible( true );



// Load real-world location
const montBlanc = { latitude: 25.194226767501995, longitude: 121.56090411096234 };
// const montBlanc = { latitude: 46.8852371, longitude: 10.8672222 };
Procedural.displayLocation( montBlanc );