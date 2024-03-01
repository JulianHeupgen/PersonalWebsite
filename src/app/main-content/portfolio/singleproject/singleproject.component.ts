import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-singleproject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleproject.component.html',
  styleUrl: './singleproject.component.scss'
})
export class SingleprojectComponent {

  @Input() project = {
    title: "Join",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Task manager inspired by the Kanban System. Create and organize tasks by using drag and drop functions, assign users and categories.",
    liveTest_link: "https:julian-heupgen.de/join",
    gitHub_link: "https://github.com/JOIN",
    image: "join.png"
  };

}

