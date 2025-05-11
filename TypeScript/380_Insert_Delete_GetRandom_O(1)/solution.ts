class RandomizedSet {
    struct: Map<number, Boolean>;
    size: number;

    constructor() {
        this.struct = new Map();
    }

    insert(val: number): boolean {
        if (this.struct.has(val)) {
            return false;
        } else {
            this.struct.set(val, true);
            this.size++;
            return true;
        }
    }

    remove(val: number): boolean {
        this.size--;
        return this.struct.delete(val);
    }

    getRandom(): number {
        return this.struct.keys[Math.floor(this.size * Math.random())]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */