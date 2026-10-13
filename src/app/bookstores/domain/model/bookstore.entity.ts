export class BookStoreEntity {
  id: string;
  name: string;
  specialty: string;
  minimumCopies: number;

  constructor(){
    this.id = '';
    this.name = '';
    this.specialty = '';
    this.minimumCopies = 0;
  }
}
