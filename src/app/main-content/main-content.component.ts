import { Component } from '@angular/core';
import { AtfComponent } from './atf/atf.component';
import { SocialMediaComponent } from './socialMedia/social-media.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AtfComponent, SocialMediaComponent, AboutMeComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
