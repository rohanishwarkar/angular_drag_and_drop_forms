import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PrismService } from '../../Prism.service';
import { FormService } from '../../shared/form.service';
import { Form } from '../../shared/form.model';

declare var M: any;
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  providers: [FormService]
})
export class BuilderComponent implements OnInit {
  currForm: Form;
  public form: Object;
  showSucessMessage: boolean;
  constructor(public prism: PrismService,public formService: FormService) {
    this.form = {components: []};
  }

  makenull(){
    this.currForm={
      _id:'',
      name:'',
      components:''
    }
  }
  onChange(event) {
    this.currForm.components = JSON.stringify(event.form);
  }

  ngOnInit() {
    this.makenull();
  }

  onSubmit(form: NgForm) {
    this.formService.postForm(this.currForm).subscribe((res) => {
      this.showSucessMessage = true;
      this.makenull()
    });
  }

}
