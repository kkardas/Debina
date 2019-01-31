import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../data.service";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {MailService} from "../mail.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {catchError, tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mailForm: FormGroup;
  message = {name: '', visitDay: '', phoneNumber: '', email: ''};
  resultMessage: string;

  @ViewChild('content')
  myIdentifier: ElementRef;

  constructor(public dataService: DataService,
              public mailService: MailService,
              private modalService: NgbModal) {
    this.resultMessage = '';
  }

  isDayFromFuture(): ValidatorFn{
    return (control: AbstractControl): {[visitDay: string]: any} | null => {
      const forbidden = new Date(control.value) >= new Date();
      return forbidden ? null : {'visitDay': {value: control.value}};
    };
  }

  ngOnInit() {
    this.mailForm = new FormGroup({
      'name': new FormControl(this.message.name, [
        Validators.required
      ]),
      'visitDay': new FormControl(this.message.visitDay, [
        Validators.required,
        this.isDayFromFuture()
      ]),
      'phoneNumber': new FormControl(this.message.phoneNumber, [
        Validators.required
      ]),
      'email': new FormControl(this.message.email),
    });
  }

  get name() { return this.mailForm.get('name'); }
  get visitDay() { return this.mailForm.get('visitDay'); }
  get phoneNumber() { return this.mailForm.get('phoneNumber'); }
  get email() { return this.mailForm.get('email'); }

  onSubmit() {
    this.mailService.sendMail(
      this.message.name,
      this.message.visitDay,
      this.message.phoneNumber,
      this.message.email)
        .subscribe(result => {this.resultMessage = result; this.open();});

  }

  open() {
    this.modalService.open(this.myIdentifier, {ariaLabelledBy: 'modal-basic-title'});
  }
}
