import { Component, OnInit, AfterViewInit, OnChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'coveo-angular-project';
  

  ngOnInit(): void {

    
  }
  ngAfterViewInit() {

  }
}


/*
const mainPageRoot = document.getElementById("search");
    const searchBoxRoot = document.getElementById("searchbox");
    // 2. Configure a search endpoint.
    Coveo.SearchEndpoint.configureSampleEndpointV2();
    // 3. Initialize a Searchbox component. When in the main search page, this is done externally.
    if (mainPageRoot) {
      Coveo.init(mainPageRoot, {
        externalComponents: [
          searchBoxRoot
        ]
      });
    } else {
      Coveo.initSearchbox(searchBoxRoot, "/search");
    };
*/