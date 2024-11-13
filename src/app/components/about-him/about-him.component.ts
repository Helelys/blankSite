import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-him',
  standalone: true,
  imports: [],
  templateUrl: './about-him.component.html',
  styleUrl: './about-him.component.css'
})
export class AboutHimComponent {
  @Input()
  img: String = "https://bodyinmotion.co.nz/wp-content/uploads/2018/07/placeholder-img-min.jpg";
}
