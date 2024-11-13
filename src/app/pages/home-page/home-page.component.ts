import { Component } from '@angular/core';
import { HeaderBarComponent } from "../../components/header-bar/header-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
