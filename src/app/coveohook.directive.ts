import { Directive, AfterViewInit, ElementRef, OnInit  } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Directive({
  selector: '[appCoveohook]'
})
export class CoveohookDirective implements OnInit, AfterViewInit{
  Coveo: any;

  constructor(private el: ElementRef, private router: Router) {
    router.events.subscribe( (event: Event) => {
      console.log(this.router.url);
      if (event instanceof NavigationStart) {
        console.log('navigating')
          // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
        console.log('navigating end')
          // Hide loading indicator
      }
      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
    });
  }

ngOnInit(): void {
  this.initCoveo(this.el.nativeElement)
}

ngAfterViewInit(): void {
  if (this.el.nativeElement.id ==='search') {
    const url = new URL(window.location.href)
    const query = decodeURIComponent(url.hash.substr(1)).replace('q=','');
    //Coveo.state(this.el.nativeElement, 'q', query);
  }
}

initCoveo = (element) => {
    
    Coveo.SearchEndpoint.configureSampleEndpointV2();
    if (element.id ==='search') {
      const url = new URL(window.location.href)
      let query = decodeURIComponent(url.hash.substr(1)).replace('q=','');
      Coveo.$$(element).on('doneBuildingQuery', function(e, args) {
        // This queryBuilder could be used to modify the query.
        if(query){
          console.log(query)
          args.queryBuilder.expression.add(query);
          query = '';
        }
        const encodeQry = encodeURIComponent(`${args.queryBuilder.expression.parts[0]}`);
        const  qryString = (encodeQry !== 'undefined')  ? `${'search#q='}${encodeQry}` : 'search#q=%40uri';
        if(encodeQry === '%40uri') args.queryBuilder.expression.parts.splice(0,1);
        window.history.replaceState('', document.title, qryString)

     })
      // Initialize the main page, and further initialize the
      // standalone search box as an external component
      Coveo.init(element);
  } else {
    // Initialize only the standalone search box, such
    // that it redirects the browser to the main search page
    Coveo.initSearchbox(this.el.nativeElement, "/search");
  };
  
  }
}
