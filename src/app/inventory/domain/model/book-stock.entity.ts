export class BookStockEntity{
  id: string;
  bookstoreId: string;
  bookKey: string;
  bookTitle: string;
  authorName: string;
  copies: number;
  receivedAt: string;

  constructor(){
    this.id = '';
    this.bookstoreId = '';
    this.bookKey = '';
    this.bookTitle = '';
    this.authorName = '';
    this.copies = 0;
    this.receivedAt = '';
  }
}
