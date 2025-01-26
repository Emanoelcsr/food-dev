import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from '../rodape/rodape.component';
import { HeadsComponent } from '../heads/heads.component';

@Component({
  selector: 'app-login',
  imports: [RodapeComponent, HeadsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
