import { Injectable } from '@nestjs/common';
import { Cat } from 'src/graphql.schema';
@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [
        {id: 1, name: 'Nicole', age: 5},
        {id: 2, name: 'Poo', age: 10},
        {id: 3, name: 'kitty', age: 1}
    ]
    findAll() {
        return this.cats
    }
    findOneById(id: number) {
        return this.cats.find(cat => cat.id === id)
    }
}
