import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testEnv';
  data: Object;

  constructor(private http: HttpClient){
  }

  testReq(){
    this.http.get('https://rubbermanager.azurewebsites.net/api/worker').subscribe(res => {
      console.log(res)
      this.data = res;
    });
  }
  
}
