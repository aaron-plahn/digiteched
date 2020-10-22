import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarItem } from '../../types/types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  public isMenuCollapsed: boolean = true; // Haburger menu collapsed initially
  public isDropdownCollapsed: boolean = true; // 'More' dropdown collapsed initially
  public navbarItems: NavbarItem[] = [
    {name:"projects", routerLink:"/projects", display:"Projects"},
    {name:"work", routerLink:"/work", display:"Work"},
    {name:"education", routerLink:"/education", display:"Education"},
    {name:"links", routerLink:"/links", display:"Links"}
  ];

  constructor() { }

  ngOnInit() {
  }

  public toggleNavbar(){
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  public toggleDropdown(){
    this.isDropdownCollapsed = !this.isDropdownCollapsed;
  }

  public navbarItemClick(){
    console.log(`Navbar item clicked`);
    this.isMenuCollapsed = true;
    if(!this.isDropdownCollapsed) this.isDropdownCollapsed = true; // collapse dropdown if navbar item is clicked
  }

  public dropdownItemClick(){
    console.log(`Dropdown item clicked`);
    this.navbarItemClick();
    this.isDropdownCollapsed = true;
  }
}