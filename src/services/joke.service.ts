import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class JokeService{
  private categories: string[] =[];
  constructor(private http: Http){}

  getARandomJoke(){
    return this.http.get('https://api.chucknorris.io/jokes/random')
      .map((response: Response)=>{
        return response.json();
      });
  }

  getAllCategoriesFromServer(){
      return this.http.get('https://api.chucknorris.io/jokes/categories')
        .map((response: Response) => {
          return response.json();
        });
  }

  getARandomJokeBasedOnSelectedCategory(category: string){
    return this.http.get('https://api.chucknorris.io/jokes/random?category='+category)
      .map((response: Response)=>{
        return response.json();
      });
  }

}
