import { Component, OnInit } from '@angular/core';
import { Skill } from '../../model/skill';
import { SkillService } from '../../service/skill.service';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill: Skill[] = [];

  constructor(
    public skillService: SkillService,
  ) { }

  ngOnInit(): void {
    this.skillService.getSkill().subscribe(data => this.skill = data);
  }

}
