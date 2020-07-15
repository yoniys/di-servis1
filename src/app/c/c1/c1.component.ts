import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(public s:S1Service) { }

  ngOnInit(): void {
  }
add(){this.s.counter++}

minus(){this.s.counter--}
}
