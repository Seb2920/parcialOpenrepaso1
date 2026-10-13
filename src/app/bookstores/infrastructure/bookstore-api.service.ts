import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {BookstoreResource} from "./bookstore.resource";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookstoreApiService {
  private readonly baseUrl = environment.serverBasePath + '/bookstores';

  constructor(private http: HttpClient) {
  }

  getAllBookstores(): Observable<BookstoreResource[]> {
    return this.http.get<BookstoreResource[]>(this.baseUrl);
  }
}
