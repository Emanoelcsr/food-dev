import { Component } from '@angular/core';
import { HeadsComponent } from '../heads/heads.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeadsComponent, RodapeComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
