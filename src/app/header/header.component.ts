import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


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


  scrollToAboutMeSection() {
    let aboutMeSection = document.getElementById('aboutMe');
    if (aboutMeSection) {
     let targetY = aboutMeSection.getBoundingClientRect().top + window.scrollY;

     window.scrollTo({
       top: targetY,
       behavior: 'smooth'
     });
    }
  }

    
    scrollToSkillsSection() {
      let skillsSection = document.getElementById('skills');
      if (skillsSection) {
       let targetY = skillsSection.getBoundingClientRect().top + window.scrollY -110;
  
       window.scrollTo({
         top: targetY,
         behavior: 'smooth'
       });
      }
    }


    scrollToPortfolioSection() {
      let portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
       let targetY = portfolioSection.getBoundingClientRect().top + window.scrollY -110;
  
       window.scrollTo({
         top: targetY,
         behavior: 'smooth'
       });
      }
    }

  }


