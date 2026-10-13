import { Routes } from '@angular/router';
import { BookstoreOverwiev } from './bookstores/presentation/views/bookstore-overwiev/bookstore-overwiev';
import { ReceiveBooks } from './inventory/presentation/views/receive-books/receive-books';
import { PageNotFound} from './shared/presentation/views/page-not-found/page-not-found';

export const routes: Routes = [
  {path: '', redirectTo: 'bookstore/overwiev', pathMatch: 'full'},
  {path: 'bookstores', children: [{path: 'overwiev', component: BookstoreOverwiev}]},
  {path: 'inventory', children:[{path: 'receipts/new', component: ReceiveBooks}]},
  {path: '**', component: PageNotFound}
];
