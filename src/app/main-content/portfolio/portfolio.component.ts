import { Component } from '@angular/core';
import { SingleprojectComponent } from './singleproject/singleproject.component';
import { CommonModule } from '@angular/common';
import { InViewportModule } from 'ng-in-viewport';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SingleprojectComponent, InViewportModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [

    {
      title: "Join",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks by using drag and drop functions, assign users and categories.",
      liveTest_link: "http://join.julian-heupgen.de/JOIN/html/index.html",
      gitHub_link: "https://github.com/JulianHeupgen/JOIN-KanbanBoard",
      image: "join.png"
    },
    {
      title: "El Pollo Loco",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "A simple Jump N Run Game based on object oriented Programming. Help Pepe to collect coins and fight against chickens.",
      liveTest_link: "http://elpolloloco.julian-heupgen.de/elPolloLoco/index.html",
      gitHub_link: "https://github.com/JulianHeupgen/El-Pollo-Loco",
      image: "elpolloloco.png"
    },
    {
      title: "DA Bubble",
      technologies: ["HTML", "SCSS", "Typescript", "Angular", "Firebase"],
      description: "Chat massenger inspired by Slack. Stay in contact with colleagues, keep up to date and share thoughts and ideas.",
      liveTest_link: "",
      gitHub_link: "",
      image: "laptop.png"
    },

  ];


  getClassByIndex(index: number): string {
    return index % 2 == 0 ? "row" : "row-reverse";
  }

}

