import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {FormControl, FormGroup} from "@angular/forms";
import {JokeService} from "../../services/joke.service";
import {Joke} from "../../models/joke.model";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  categories: string[] =[];
  form: FormGroup;
  joke: Joke = new Joke([],'','','','');
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

  onSubmit() {
    if (this.form.value.category) {
      this.jokeService.getARandomJokeBasedOnSelectedCategory(this.form.value.category).subscribe((joke: Joke) => {
          this.joke = joke;
        },
        error => {
          console.log(error);
        });
    } else {
      this.jokeService.getARandomJoke().subscribe((joke: Joke) => {
          this.joke = joke;
        },
        error => {
          console.log(error);
        });
    }
  }
}
