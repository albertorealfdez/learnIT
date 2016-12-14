import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      { id: 1, name: 'Juan', email: 'juan@juan.es', password: '123', type: 0 },
      { id: 2, name: 'José', email: 'jose@jose.es', password: '123', type: 0 },
      { id: 3, name: 'Marcos', email: 'marcos@marcos.es', password: '1234', type: 1 },
      { id: 3, name: 'Javi', email: 'javi@javi.es', password: '1234', type: 1 }
    ]
    return {users};
  }
/*
  createDb() {
    let courses = [
      { id: 1, name: 'Lógica Computacional', year: 2016 },
      { id: 2, name: 'Dirección Estratégica de TI', year: 2016 },
    ]
    return {courses};
  }*/
}