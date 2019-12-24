import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  ngOnInit(): void 
  {
  }
  public headerSelectedSection : number = 0;
  config;
  fullpage_api;
  title = 'EtelgPass';

  constructor(private router: Router) 
  {
    // for more details on config options please visit fullPage.js docs
    this.config = 
    {
      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['Home', 'Notas', 'Faltas'],
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE'],
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

  getRef(fullPageRef) 
  {
    this.fullpage_api = fullPageRef;
  }

}
