import { Component, OnInit } from '@angular/core';
import { InterfaceParams } from './entities/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  public UIParams : InterfaceParams;

  ngOnInit(): void
  {
    console.log(this.UIParams.selectedHeaderItem);
  }

  title = 'EtelgPass';

}
