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
      description: 'Parc de recyclage',
      iconData:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",

      
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
      description: 'Parc de recyclage',
    },
    {
      title: 'Parc à Conterneurs Strombeek',
      latitude:'50.912901',
      longitude: '4.363483',
      description: 'Parc de recyclage',
    },
    {
      title: 'Recyparc Incovo Machelen',
      latitude:'50.900962',
      longitude: '4.442250',
      description: 'Parc de recyclage'
    },

// Delhaize Wallonie
{
  title: 'Delhaize Dinant',
  latitude:'50.28501497379873 ', 
  longitude: '4.9021',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize Louvain-La-Neuve',
  latitude:'50.67619716319946',
  longitude: '4.621357024000144',
  description: 'Parc de recyclage'
},
{
  title: "Delhaize Braine l'Alleud",
  latitude:'50.70282232621195 ',
  longitude: '4.359521045730882',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize Tubize',
  latitude:'50.69542796364989',
  longitude: '4.207756240193631',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize Wavre',
  latitude:'50.7209457231561',
  longitude: ' 4.618561359150394',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize St Lambert',
  latitude:'50.6468536372278 ',
  longitude: '5.572207756100387',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize Liège',
  latitude:'50.62802610845757',
  longitude: '5.5877177852930915',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize Burenville',
  latitude:'50.64050812201191 ',
  longitude: '5.538519305041238',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize Rive Gauche',
  latitude:'50.40886938985379',
  longitude: '4.442126127068308',
  description: 'Parc de recyclage'
},
{
  title: 'Delhaize Warmonceau',
  latitude:'50.42337629801506',
  longitude: '4.460632855019335',
  description: 'Parc de recyclage'
},


{
  title: 'Delhaize Warmonceau',
  latitude:'50.42337629801506',
  longitude: '4.460632855019335',
  description: 'Parc de recyclage'
},


{
  title: 'Delhaize Mons',
  latitude:'50.454264279321535 ',
  longitude: '3.954457444104725',
  description: 'Parc de recyclage'
},



{
  title: 'Delhaize Tournai',
  latitude:'50.6032726780785',
  longitude: '3.406378409908867',
  description: 'Parc de recyclage'
},

{
  title: 'Delhaize Woluwe',
  latitude:'50.84593963357254',
  longitude: '4.417170863311161',
  description: 'Parc de recyclage'
},

//Conteneur parc Wallonie
{
  title: 'RecyParc de Thuin',
  latitude:'50.38007522154453 ',
  longitude: '4.327198002149054',
  description: 'Parc de recyclage'
},
{
  title: 'Recyparc (parc à conteneurs) de Malonne',
  latitude:'50.49902590457932',
  longitude: '4.783130607110051',
  description: 'Parc de recyclage'
},
{
  title: 'Recyparc Tournai 1 Ipalle',
  latitude:'50.65600120841629',
  longitude: '3.368640886132194',
  description: 'Parc de recyclage'
},
{
  title: 'Recyparc Braine-le-Château',
  latitude:'50.725600143524744',
  longitude: '4.264026614178193',
  description: 'Parc de recyclage'
},
{
  title: 'Recyparc',
  latitude:'50.716536687893715',
  longitude: '5.5323796518007775',
  description: 'Parc de recyclage'
},
{
  title: 'Recyparc Liège',
  latitude:'50.66497822554346',
  longitude: '5.79655047159911',
  description: 'Parc de recyclage'
},
{
  title: 'Park container lntradel',
  latitude:'50.63536991381969',
  longitude: '5.496356358191913',
  description: 'Parc de recyclage'
},
{
  title: "RecyParc d'Obourg - Hyge",
  latitude:'50.477740191384875',
  longitude: '4.0027317780464555',
  description: 'Parc de recyclage'
},
{
  title: 'RecyParc Tournai 2 - Ipalle',
  latitude:'50.60369985734483',
  longitude: '3.4095865483564216',
  description: 'Parc de recyclage'
},
{
  title: 'Bruxelles Propreté - Parc à conteneurs',
  latitude:'50.843380873923834',
  longitude: '4.456673527110963',
  description: 'Parc de recyclage'
},
{
  title: 'Parc à Conteneurs / Déchetterie Auderghem',
  latitude:'50.813033306909695',
  longitude: '4.446257813015167',
  description: 'Parc de recyclage'
},
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
        description: marker.description,
        
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
      disableDefaultUI: true,
    }
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
    
  }

  
}
