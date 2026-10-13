import {Injectable, signal} from '@angular/core';
import {BookStoreEntity} from '../domain/model/bookstore.entity';
import {BookStockEntity} from '../../inventory/domain/model/book-stock.entity';
import {BookstoreApiService} from '../infrastructure/bookstore-api.service';
import {BookstoreAssembler} from '../infrastructure/bookstore.assembler';
import {BookStockApiService} from '../../inventory/infrastructure/book-stock-api.service';
import {BookstockAssembler} from '../../inventory/infrastructure/book-stock.assembler';

@Injectable({
  providedIn: 'root'
})
export class BookstoreStore {
  readonly bookstores = signal<BookStoreEntity[]>([]);
  private readonly bookStocks = signal<BookStockEntity[]>([]);

  constructor(
    private bookstoreApiService: BookstoreApiService,
    private bookStockApiService: BookStockApiService
  ) {
  }

  loadData(): void {
    this.bookstoreApiService.getAllBookstores().subscribe((resources) => {
      this.bookstores.set(resources.map(r => BookstoreAssembler.toDomain(r)));
    });

    this.bookStockApiService.getAllBookStocks().subscribe((resources) => {
      this.bookStocks.set(resources.map(r => BookstockAssembler.toDomain(r)));
    });
  }

  getBookByBookstore(bookstoreId: string): BookStockEntity[] {
    return this.bookStocks().filter(s => s.bookstoreId === bookstoreId);
  }

  getAvailableTitles(bookstoreId: string): number {
    const stocks = this.getBookByBookstore(bookstoreId);
    const uniqueTitles = new Set(stocks.map(stock => stock.bookKey));
    return uniqueTitles.size;
  }

  getReplenishmentRequired(bookstoreId: string, minimumCopies: number): number {
    const stocks = this.getBookByBookstore(bookstoreId);
    const copiesPerBook = new Map<string, number>();

    stocks.forEach(stock => {
      const current = copiesPerBook.get(stock.bookKey) || 0;
      copiesPerBook.set(stock.bookKey, current + stock.copies);
    });

    let count = 0;
    copiesPerBook.forEach(totalCopies => {
      if (totalCopies >= minimumCopies) {
        count++;
      }
    });
    return count;
  }
}
