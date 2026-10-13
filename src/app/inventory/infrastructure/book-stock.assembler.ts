import {BookStockEntity} from '../domain/model/book-stock.entity';
import {BookStockResource} from './book-stock.resource';

export class BookstockAssembler {
  static toDomain(resource: BookStockResource): BookStockEntity {
    const entity = new BookStockEntity();
    entity.id = resource.id;
    entity.bookstoreId = resource.bookstoreId;
    entity.bookKey = resource.bookKey;
    entity.bookTitle = resource.bookTitle;
    entity.authorName = resource.authorName;
    entity.copies = resource.copies;
    entity.receivedAt = resource.receivedAt;
    return entity;
  }
}
