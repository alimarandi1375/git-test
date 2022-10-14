import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  @Input ('hSize') hSize : string = '';
  @Input ('wSize') wSize : string = '';

  constructor() {}

  ngOnInit(): void {}

}
