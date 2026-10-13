export interface BookStockResource {
  id: string;
  bookstoreId: string;
  bookKey: string;
  bookTitle: string;
  authorName: string;
  copies: number;
  receivedAt: string;
}
