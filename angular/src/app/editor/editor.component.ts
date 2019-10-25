import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../shared/form.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  selectedForm = this.formService.getform();
  components = JSON.parse(this.selectedForm.components)["components"];

  constructor(private formService: FormService) {}
  
  ngOnInit() {
  }

  onChange(event) {
    this.selectedForm.components = JSON.stringify(event.form);
  } 
  
  onSubmit(form: NgForm) {
    this.formService.putForm(this.selectedForm).subscribe((res) => {
    });
  }
}
