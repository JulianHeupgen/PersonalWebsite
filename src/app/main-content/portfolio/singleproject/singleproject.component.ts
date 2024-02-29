import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singleproject',
  standalone: true,
  imports: [],
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

