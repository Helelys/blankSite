import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css',
})
export class HeaderBarComponent implements OnInit {
  ngOnInit(): void {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    toggleBtn?.addEventListener('click', () => {
      dropDownMenu?.classList.toggle('open');

      const isOpen = dropDownMenu?.classList.contains('open');

      if (toggleBtnIcon) {
        toggleBtnIcon.className = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-bars';
      }
    });
  }

  @Input()
  icon1: String = `https://i.imgur.com/QkNM0O3.png`;

  @Input()
  icon2: String = `https://i.imgur.com/F4Sf4HL.png`;

  @Input()
  icon3: String = `https://i.imgur.com/teTYWxm.png`;

  @Input()
  icon4: String = `https://i.imgur.com/J6cp9zB.png`;

  @Input()
  logo: String = `https://i.imgur.com/jKBxXiI.png`;
}
