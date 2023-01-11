import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/model/contact-message';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contact = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(30),
      Validators.maxLength(100),
    ]),
  });

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {}

  sendMessage(): void {
    let message = new Message({
      name: this.contact.value.name,
      email: this.contact.value.email,
      message: this.contact.value.message,
    });

    this.service.postMessage(message).subscribe({
      next: () => {
        alert('Successfully sent');
      },
    });
    this.router.navigate(['home']);
  }
}
