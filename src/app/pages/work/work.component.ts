import { Component, OnInit } from '@angular/core';
import { WorkItem, JobItem } from '../../types/types';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  tngLangTechMgr: JobItem = {
    position: "Language Technology Manager",
    startDate: "Nov. 2019",
    endDate: "Present",
    bullets: [
      "Secured highly competetive $300,000 grant from the National Research Council for language technology",
      "Project lead and tech mentor for a highly successful tech capacity building initiative with 4 local youth",
      "Established an innovative tech studio for language documentation and tech capacity building",
    ]
  }

  tngAppDev: JobItem = {
    position: "Language App Developer",
    startDate: "Oct. 2017",
    endDate: "Oct. 2019",
    bullets: [
      "Developed, published, and maintained language website as well as on-premise server-side software",
      "Developed and published series of 4 language apps for iOS and Android",
      "Implemented innovative rapid recording pipeline, allowing us to record and label ~200,000 clips",
      "Designed, analyzed, and organized complex paradigms into a relational database"
    ]
  }

  tngDigiTech: JobItem = {
    position: "Digitization Technician",
    startDate: "Aug. 2015",
    endDate: "Sept. 2017",
    bullets: [
      "Performed audio restoration on ~1,000 forty-five minute digitized audio cassette tapes",
      "Digitized hundreds of audio cassettes"
    ]
  }

  teaching: JobItem = {
    position: "Instructor, Tutor, and Curriculum Developer",
    startDate: "Sept. 2010",
    endDate: "Present",
    bullets: [
      "Taught, tutored, or provided classroom support for around two-dozen university math, physics and computers courses",
      "Part of several (individual and group) curriculum development projects",
      "Served on several academic committees at multiple universities"
    ]
  }

  tng: WorkItem = {
    employer: "Tŝilhqot’in National Government",
    jobs: [
      this.tngLangTechMgr,
      this.tngAppDev,
      this.tngDigiTech
    ]
  }

  instructor: WorkItem = {
    employer:"TRU, UNBC, SFU",
    jobs: [
      this.teaching
    ]
  }

  items: WorkItem[] = [
    this.tng,
    this.instructor
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
