export class Repository<T> {
    values: T[] = [];

    add(value: T) : void {
        this.values.push(value);
    }

    getAll() : T[] {
        return this.values;
    }
}