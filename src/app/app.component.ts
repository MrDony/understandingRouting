import { Component } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'understandingRouting';
  
  private router:Router=new Router;

  constructor(private router1:Router){this.router=router1;}



  public changePage(pageName:string):void{
    this.router.navigate(['$(pageName']);
  }
}
