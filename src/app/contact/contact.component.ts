import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public showLabel = false;
  public submitSuccess = false;
  constructor() { }

  ngOnInit(): void {
  }

  public canDeactivate(): Promise<any> | boolean {
    if(!this.submitSuccess){
      const confirmation = confirm('Are you sure you want to leave this page ?');
      if (confirmation === true && this.submitSuccess) {
        return true;
      }
      else {
        return false;
      }
    } else {
      return true;
    }
  }

  public testMethod() {
    setTimeout(() => {
      this.submitSuccess = true;
      this.showLabel = true;
    }, 3000)
  }
}
