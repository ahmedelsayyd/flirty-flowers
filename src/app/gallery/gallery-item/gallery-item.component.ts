import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { GalleryItem } from '../gallery.component';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit, AfterViewInit {
  @ViewChildren('galleryItemWraper')  galleryItemWraper :QueryList<ElementRef>
  @Output() activGalleryImage = new EventEmitter<number>()
  @Input() key: string =''
  @Input() index: number = 0
  @Input() imageObj!: GalleryItem
  // @Input() activeImage: number= 0
  // [activeImage]="updateActiveImage(i)"
  reveal = false



  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {


  }

  updateActiveImage(IntersectionObserverEntry, index){
    IntersectionObserverEntry.map(entry =>{
      
      if(entry.isIntersecting){
        this.reveal = true
        this.activGalleryImage.emit(index +1)
      }
    })
    
    // this.reveal= true
  }

}
