import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showNavbar: boolean = false;

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }

  ngOnInit() {
    AOS.init();
}

}

