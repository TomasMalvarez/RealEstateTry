import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-property-viewer',
  templateUrl: './property-viewer.component.html',
  styleUrls: ['./property-viewer.component.css']
})
export class PropertyViewerComponent implements OnInit {
  title: string | undefined;
  description: string | undefined;

  constructor() {  }

  ngOnInit(): void {
    this.title = "X"

    this.description = "XXXXX"
    
  }

}
