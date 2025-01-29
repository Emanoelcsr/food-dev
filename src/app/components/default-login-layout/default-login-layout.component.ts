import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeadsComponent } from '../heads/heads.component';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [HeadsComponent, RodapeComponent],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.css'
})
export class DefaultLoginLayoutComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secundaryBtnText: string = "";

}
