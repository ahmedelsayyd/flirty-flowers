import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgGxSplitTextDirective } from 'ng-gx-split-text';
import gsap from 'gsap';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('text', { static: true, read: NgGxSplitTextDirective }) text: NgGxSplitTextDirective;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      this.textAnimation();
      
  }

  textAnimation(){
    gsap.fromTo(this.text.words, {y: 150, opacity: 0}, {y: 0, opacity:1, duration:1 , stagger:.2, ease:"Power2.out"})
  }

}
