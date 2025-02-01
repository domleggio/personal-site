import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello-section',
    templateUrl: './hello-section.component.html',
    styleUrls: ['./hello-section.component.css'],
    standalone: true
})
export class HelloSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
