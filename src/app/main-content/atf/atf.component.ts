import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  ngOnInit() {
    AOS.init();
  }

}

