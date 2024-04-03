import { Component } from '@angular/core';

@Component({
  selector: 'app-atf',
  standalone: true,
  imports: [],
  templateUrl: './atf.component.html',
  styleUrl: './atf.component.scss'
})
export class AtfComponent {

  scrollToContactSection() {
      let contactSection = document.getElementById('contact');
      if (contactSection) {
       let targetY = contactSection.getBoundingClientRect().top + window.scrollY -120;

       window.scrollTo({
         top: targetY,
         behavior: 'smooth'
       });
      }
      setTimeout(this.scrollToContactSection, 590);
      setTimeout(this.scrollToContactSection, 800);
  }

}

