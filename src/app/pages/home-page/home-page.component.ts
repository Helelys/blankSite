import { Component } from '@angular/core';
import { HeaderBarComponent } from "../../components/header-bar/header-bar.component";
import { HeroBannerComponent } from "../../components/hero-banner/hero-banner.component";
import { AboutContentComponent } from "../../components/about-content/about-content.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderBarComponent, HeroBannerComponent, AboutContentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
