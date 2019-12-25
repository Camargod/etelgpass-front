import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit
{
  headerSelectedSection : number = 0;
  config;
  fullpage_api;
  title = 'EtelgPass';
  isLogged : boolean = false;
  constructor(private cookieService : CookieService) 
  {
    // for more details on config options please visit fullPage.js docs
    this.config = 
    {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['Home', 'Notas', 'Faltas'],
      sectionsColor: ['white', 'whitesmoke', '#7BAABE'],
      menu: '#menu',
      navigation: true,
      // fullpage callbacks
      afterResize: () => 
      {
        console.log("After resize");
      },
      onLeave: (origin, destination, direction) =>
      {
        this.headerSelectedSection = destination.index;
      }
    };
  }

  ngOnInit(): void 
  {
    if(this.cookieService.get("isLogged"))
    {
      this.isLogged = true;
    }
  }

  ngAfterViewInit(): void 
  {
    if(!this.isLogged)
    {
      this.fullpage_api.setAllowScrolling(false);
      this.fullpage_api.silentMoveTo('Home', 0);
      this.fullpage_api.setKeyboardScrolling(false);

    }
  }  

  getRef(fullPageRef) 
  {
    this.fullpage_api = fullPageRef;
  }

}
