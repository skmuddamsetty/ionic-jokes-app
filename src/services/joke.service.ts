import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class JokeService{
  private categories: string[] =[];
  constructor(private http: Http){}

  getARandomJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random?category=celebrity')
      .map((response: Response)=>{
        console.log(response.json());
        return response.json();
      });
  }

  getAllCategoriesFromServer(){
      return this.http.get('https://api.chucknorris.io/jokes/categories')
        .map((response: Response) => {
          return response.json();
        });
  }

  getAllCategories(){
    console.log(this.categories);
    return this.categories.slice();
  }
}
