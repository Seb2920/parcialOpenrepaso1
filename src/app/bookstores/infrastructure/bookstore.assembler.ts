import {BookstoreResource} from './bookstore.resource';
import {BookStoreEntity} from '../domain/model/bookstore.entity';

export class BookstoreAssembler {
  static toDomain(resource:BookstoreResource): BookStoreEntity {
    const entity = new BookStoreEntity();
    entity.id = resource.id;
    entity.name = resource.name;
    entity.specialty = resource.specialty;
    entity.minimumCopies = resource.minimumCopies;
    return entity;
  }
}
