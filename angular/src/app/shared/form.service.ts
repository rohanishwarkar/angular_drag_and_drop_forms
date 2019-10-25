import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from './form.model';

@Injectable()
export class FormService {
  selectedForm;
  forms: Form[];
  readonly baseURL = 'http://localhost:3000/forms';

  constructor(private http: HttpClient) { }

  postForm(th: Form) {
    return this.http.post(this.baseURL, th);
  }

  getFormList() {
    return this.http.get(this.baseURL);
  }

  putForm(th: Form) {
    return this.http.put(this.baseURL + `/${th._id}`, th);
  }

  deleteForm(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
  editForm(th:Form){
    this.selectedForm=th;
  }

  getform(){
    return this.selectedForm;
  }

}
