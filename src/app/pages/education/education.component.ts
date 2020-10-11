import { Component, OnInit } from '@angular/core';
import { EducationItem } from '../../types/types';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  udacity: EducationItem = {
    school: "Udacity",
    program: "Deep Learning Nanodegree",
    startDate: "Aug. 2020",
    endDate: "Oct. 2020",
    bullets: [
      "Tools: Python, PyTorch, NumPy, Pandas, AWS Sagemaker, Lambda, API Gateway",
      "Deep Neural Networks, Convolutional Neural Networks, Generative Adversarial Networks, Recurrent Neural Networks"
    ]
  }

  sfu: EducationItem = {
    school: "Simon Fraser University",
    program: "MSc",
    acronym: "SFU",
    major: "Physics",
    startDate: "Sept. 2012",
    endDate: "Jan. 2015",
    bullets: [
      "MSc Thesis: Cosmological constraints on new scalar gravitational interactions",
      "Tools: Fortran, Python, PCA, Scientific Computing, CAMB",
      "Supervisor: Dr. Levon Pogosian",
      "Extracurricular: CASCA Grad Rep, Physics Program Grad Rep, Lead scholarship writing workshops",
      "Completed all required coursework for PhD (All but dissertation)"
    ]
  }

  tru: EducationItem = {
    school: "Thompson Rivers University",
    acronym: "TRU",
    program: "BSc",
    major: "Physics",
    minor: "Math",
    startDate: "Sept. 2008",
    endDate: "April 2012",
    bullets: [
      "4.26 / 4.33 GPA",
      "Awarded TRU Science Medal as top graduating undergraduate BSc student",
      "Part of team to reestablish the Physics club and found the Physics Help Centre"
    ]
  }

  items: EducationItem[] = [
    this.udacity,
    this.sfu,
    this.tru
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
