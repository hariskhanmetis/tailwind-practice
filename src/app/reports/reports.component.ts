import { Component, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MapInfoWindow,MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent {
  zoom = 4;
  apiLoaded = false;

  center: google.maps.LatLngLiteral = { lat: 33.6844, lng: 73.0479 };

  markers= [
    {
      position: { lat: 33.6844, lng: 73.0479 },
      label: 'Pakistan',
    }
  ];
  infoContent = '';

  constructor() {
    if (!this.apiLoaded) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
      script.async = true;
      script.onload = () => {
        this.apiLoaded = true;
      };
      document.head.appendChild(script);
    }
  }

  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;
  openInfoWindow(marker: any) {
    this.infoWindow.open(marker);
  }
}
