import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // google maps zoom level
  zoom: number = 8;
  
  // initial center position for the map
  lat: number = 51.673858;
  lng: number = 7.815982;

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
  
  markers: marker[] = [
	  {
		  lat: 51.673858,
		  lng: 7.815982,
		  label: 'A',
      draggable: true,
      rad:80000,
      color:'red'
	  },
	  {
		  lat: 51.373858,
		  lng: 10.215982,
		  label: 'B',
      draggable: false,
      rad:40000,
      color:'blue'
	  },
	  {
		  lat: 51.723858,
		  lng: 8.895982,
		  label: 'C',
      draggable: true,
      rad:10000,
      color:'green'
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string; 
  draggable: boolean;
  rad?:number;
  color?:string;
}
