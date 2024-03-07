import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillset = [

    {
      "skill_name": "Angular",
      "skill_icon": "angular.png"
    },
    {
      "skill_name": "TypeScript",
      "skill_icon": "typescript.png"
    },
    {
      "skill_name": "JavaScript",
      "skill_icon": "javascript.png"
    },
    {
      "skill_name": "HTML",
      "skill_icon": "html.png"
    },
    {
      "skill_name": "Firebase",
      "skill_icon": "firebase.png"
    },
    {
      "skill_name": "GIT",
      "skill_icon": "git.png"
    },
    {
      "skill_name": "CSS",
      "skill_icon": "css.png"
    },
    {
      "skill_name": "REST-API",
      "skill_icon": "api.png"
    },
    {
      "skill_name": "SCRUM",
      "skill_icon": "scrum.png"
    },
    {
      "skill_name": "Material Design",
      "skill_icon": "material_design.png"
    }

  ];



  onMouseOver(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.style.transition = 'transform 0.05s ease-in-out'; 
    element.style.transform = 'translateY(-20px)'; 
    setTimeout(() => {
      element.style.transform = 'translateY(0)'; 
    }, 100);
  }


  scrollToContactSection() {
    let contactSection = document.getElementById('contact');
    if (contactSection) {
     let targetY = contactSection.getBoundingClientRect().top + window.scrollY;

     window.scrollTo({
       top: targetY,
       behavior: 'smooth'
     });
    }
    setTimeout(this.scrollToContactSection, 500);
  }


}

