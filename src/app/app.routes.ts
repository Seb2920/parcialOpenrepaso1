import { Routes } from '@angular/router';
import { BookstoreOverwiev} from './bookstores/presentation/views/bookstore-overwiev/bookstore-overwiev';
import { RecieveBooks } from './bookstores/presentation/views/recieve-books/recieve-books';
import { PageNotFound} from './shared/presentation/views/page-not-found/page-not-found';

export const routes: Routes = [
  {path: '', redirectTo: 'bookstore/overwiev', pathMatch: 'full'},
  {path: 'bookstores', children: [{path: 'overwiev', component: BookstoreOverwiev}]},
  {path: 'inventory', children:[{path: 'receipts/new', component: RecieveBooks}]},
  {path: '**', component: PageNotFound}
];
