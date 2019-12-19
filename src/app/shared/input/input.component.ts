import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  @Input() placeholder: any;
  @Input() type: any
  @Input() form: any
  @Input() name: any
  constructor() { }

  ngOnInit() {
    console.log("form input", this.form)
  }

}
