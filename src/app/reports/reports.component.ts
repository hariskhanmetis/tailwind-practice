import { Component, AfterViewInit } from '@angular/core';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements AfterViewInit {
  
  ngAfterViewInit(): void {
    const map = new jsVectorMap({
      selector: '#map',
      map: 'world',
      zoomButtons: true,
      regionStyle: {
        initial: {
          fill: '#4f46e5'
        }
      }
    });
  }
}
