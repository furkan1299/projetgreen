import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: 'map.page.html',
  styleUrls: ['map.page.scss'],
})

export class MapPage {
  map: any;
  @ViewChild('map', {read: ElementRef, static: false}) mapRef:ElementRef;
  infoWindows: any = [];
  markers: any = [

    {
      title: 'Delhaize Hankar',
      latitude:'50.822468',
      longitude: '4.403751',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Auderghem',
      latitude:'50.809676',
      longitude: '4.445545',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Bruxelles Sud',
      latitude:'50.800259',
      longitude: '4.305470',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Bruxelles Nord',
      latitude:'50.879736',
      longitude: '4.376007',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Bruxelles Forest',
      latitude:'50.804175',
      longitude: '4.302543',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Bruxelles Woluwe',
      latitude:'50.843365',
      longitude: '4.456845',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Saint Joost Ten Noode',
      latitude:'50.851444',
      longitude: '4.380905',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Evere',
      latitude:'50.851444',
      longitude: '4.380905',
      description: 'Parc de recyclage'
    },
    {
      title: 'Parc à Conterneurs Wemmel',
      latitude:'50.905268',
      longitude: '4.301643',
      description: 'Parc de recyclage'
    },
    {
      title: 'Parc à Conterneurs Dilbeek',
      latitude:'50.866460',
      longitude: '4.268081',
      description: 'Parc de recyclage'
    },
    {
      title: 'Parc à Conterneurs Steenokkerzeel',
      latitude:'50.911739',
      longitude: '4.511020',
      description: 'Parc de recyclage'
    },
    {
      title: 'Parc à Conterneurs Ecowerf',
      latitude:'50.893430',
      longitude: '4.556165',
      description: 'Parc de recyclage'
    },
    {
      title: 'Parc à Conterneurs Strombeek',
      latitude:'50.912901',
      longitude: '4.363483',
      description: 'Parc de recyclage'
    },
    {
      title: 'Recyparc Incovo Machelen',
      latitude:'50.900962',
      longitude: '4.442250',
      description: 'Parc de recyclage'
    }
  ]; 

  constructor() {}

  ionViewDidEnter(){
    this.showMap();
  }

  addMarkersToMap(markers){
    for (let marker of markers){
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
        description: marker.description
      });


    mapMarker.setMap(this.map);
    this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker){
    let infoWindowContent = '<div id="content">' +
                              '<h2 id="firstHeading" class"firstHeading">' + marker.title + '</h2>' +
                              '<p> ' + marker.description + '</p>' +
                              '<p> Latitude: ' + marker.latitude + '</p>' +
                              '<p> Longitude: ' + marker.longitude + '</p>' +
                            '</div>';

    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows){
      window.close();
    }
  }

  showMap(){
    const location = new google.maps.LatLng(50.800129, 4.305470);
    const options = {
      center: location,
      zoom: 18,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }
}
