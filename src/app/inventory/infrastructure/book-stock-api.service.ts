import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {BookStockResource} from './book-stock.resource';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStockApiService {
  private readonly baseUrl = environment.serverBasePath + '/bookstocks';

  constructor(private http: HttpClient) {
  }

  getAllBookStocks(): Observable<BookStockResource[]> {
    return this.http.get<BookStockResource[]>(this.baseUrl);
  }

  createBookStock(bookStock: BookStockResource): Observable<BookStockResource> {
    return this.http.post<BookStockResource>(this.baseUrl, bookStock);
  }
}
