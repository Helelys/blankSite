import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  standalone: true,
  imports: [],
  templateUrl: './acordeon.component.html',
  styleUrl: './acordeon.component.css'
})
export class AcordeonComponent implements OnInit {

  ngOnInit(): void {
      const acordeon = document.querySelectorAll('.acordeon');

      acordeon.forEach((acordeon) => {
        acordeon.addEventListener('click', () => {
          const body = acordeon.querySelector('.acordeon-body');
          body?.classList.toggle('active');
        });
      });
  }

}
