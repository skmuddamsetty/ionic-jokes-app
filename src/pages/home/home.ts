import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {FormControl, FormGroup} from "@angular/forms";
import {JokeService} from "../../services/joke.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  categories: string[] =[];
  form: FormGroup;
  constructor(public navCtrl: NavController, private http: Http,
  private jokeService: JokeService) {}

  ngOnInit(){
      this.initForm();
      this.jokeService.getAllCategoriesFromServer().subscribe((categories: string[]) => {
          for (let category in categories) {
            this.categories.push(categories[category]);
          }
        },
        error => {
          console.log(error);
        });
  }

  private initForm(){
    this.form = new FormGroup({
      'category':new FormControl(null,null),
    });
  }

  onSubmit(){
    console.log(this.form.value.category);
  }
}
