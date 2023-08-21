import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

   contact: Contact = new Contact('','','','');
   isSubmitted: boolean = false;


   onSubmit(contactForm: NgForm) {
    console.log('Form submitted');
    console.log(this.contact);
    console.log(contactForm.value);
    this.isSubmitted = true;
  }

    

}
