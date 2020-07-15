import { Component, OnInit } from '@angular/core';
import { S1Service } from 'src/app/s/s1.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers:[S1Service]
  
})
export class C2Component implements OnInit {

  constructor(public d:S1Service) { }

  ngOnInit(): void {
  }
  add(){this.d.counter++}

  minus(){this.d.counter--}
}
