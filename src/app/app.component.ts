import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { element } from 'protractor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 2;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;
  icon = "https://upload.wikimedia.org/wikipedia/commons/4/48/BLANK_ICON.png";
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
      draggable: true,
      rad:80000,
      color:'#0f676f',
      sales:12
      
	  },
	  {
		  lat: 51.373858,
		  lng: 10.215982,
		  label: 'B',
      draggable: false,
      rad:40000,
      color:'blue',
      sales:25
	  },
	  {
		  lat: 51.723858,
		  lng: 8.895982,
		  label: 'C',
      draggable: true,
      rad:10000,
      color:'#0f676f',
      sales:56
	  }
  ];
  scale={};
  constructor(){
    this.scale=this.setScale(this.markers);
    console.log(this.scale);
    
  }
  
  setScale(markersScale){
    let scale={};
    let min,max;
    markersScale.forEach(element => {
      scale[element.sales.toString()]= element.sales*1000;
      element.scale=element.sales*10000;

    });
    
    return markersScale;

  }
  getScale(index){
    console.log(index);
    
    return this.scale['index'];
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
 
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string; 
  draggable: boolean;
  rad?:number;
  color?:string;
  sales?:number;
  scale?:number;
}
