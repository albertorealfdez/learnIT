import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, name: 'Alberto', email: 'jalbertorealfdez@gmail.com', password: '123', type: 0 },
      { id: 2, name: 'José', email: 'jose@jose.es', password: '123', type: 0 },
      { id: 3, name: 'Alberto', email: 'albertorealfdez@gmail.com', password: '1234', type: 1 },
      { id: 4, name: 'Javi', email: 'javi@javi.es', password: '1234', type: 1 }
    ];

    let courses = [
      { id: 1, key: 'LC', name: 'Lógica Computacional', year: 2016 },
      { id: 2, key: 'DETI', name: 'Dirección Estratégica de TI', year: 2016 },
    ];
    return { users, courses };
  }
}