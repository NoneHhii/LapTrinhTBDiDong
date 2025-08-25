export class Stack<T> {
    private values: T[] = [];

    push(value: T) : number {
        this.values.push(value);
        return this.values.length;
    }

    pop() : T | undefined {
        return this.values.pop();
    }

    peek(): T | undefined {
        return this.values[this.values.length - 1];
    }

    isEmpty() : boolean {
        return this.values.length === 0;
    }

    size() : number {
        return this.values.length;
    }
}