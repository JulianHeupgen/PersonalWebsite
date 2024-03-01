import { Component } from '@angular/core';
import { SingleprojectComponent } from './singleproject/singleproject.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, SingleprojectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [

    {
      title: "Join",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks by using drag and drop functions, assign users and categories.",
      liveTest_link: "www.google.de",
      gitHub_link: "https://github.com/JulianHeupgen/JOIN",
      image: "join.png"
    },
    {
      title: "El Pollo Loco",
      technologies: ["HTML", "CSS", "JavaScript"],
      description: "A simple Jump N Run Game based on object oriented Programming. Help Pepe to collect coins and fight against chickens.",
      liveTest_link: "www.google.de",
      gitHub_link: "https://github.com/JulianHeupgen/El-Pollo-Loco",
      image: "elpolloloco.png"
    },

  ];


  getClassByIndex(index: number): string {
    return index % 2 == 0 ? "row" : "row-reverse";
  }

}

