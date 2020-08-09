import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'play-angular10-routing';
  name = '--unknow--';
  data = [];
  constructor(private userServ:UsersService){
    setTimeout(() => {
      console.log('constructor', this.userServ, this.userServ.getData());
      this.name = this.userServ.getData().name;
    }, 3000);

    this.userServ.getHttpData().subscribe(output=>{
      console.warn(output);
      this.data = output;
    })
  }
}
