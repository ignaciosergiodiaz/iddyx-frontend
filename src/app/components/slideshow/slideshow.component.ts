import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  images = [180, 1070, 1082].map((n) => `https://picsum.photos/id/${n}/1920/330`);

  constructor() { }

  ngOnInit(): void {
  }

}
