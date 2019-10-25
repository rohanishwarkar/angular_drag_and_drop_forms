import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router, NavigationExtras} from '@angular/router';

import { FormService } from '../shared/form.service';
import { Form } from '../shared/form.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  
})
export class FormComponent implements OnInit {
  currForm :Form;

  constructor(private formService: FormService,private route: Router) { }

  ngOnInit() {
    this.refreshFormList();
  }

  refreshFormList() {
    this.formService.getFormList().subscribe((res) => {
      this.formService.forms = res as Form[];
    });
  }

  onEdit(th: Form) {
    this.formService.editForm(th);
    this.route.navigateByUrl('/manager/edit')    
  }

  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.formService.deleteForm(_id).subscribe((res) => {
        this.refreshFormList();
      });
    }
  }
}
