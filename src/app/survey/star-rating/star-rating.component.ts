import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() public stars;
  @Input() public rating;

  @Output() starEnter = new EventEmitter();
  @Output() starLeave = new EventEmitter();
  @Output() starClicked = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter(){
    this.starEnter.emit(this.stars);
  }

  onMouseLeave(){
    this.starLeave.emit(this.stars);
  }

  onClicked(){
    this.starClicked.emit(this.stars);
  }

}
