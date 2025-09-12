/**
 * 
 * @param {number} key 
 * @param {number} value 
 */
const LRUNode = function (key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.least = null;
    this.most = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    const node = this.cache.get(key);
    if (node) {
        if (this.least == node) {
            this.least = node.next ?? node;
        }

        if (this.most != node) {
            if (node.next) {
                node.next.prev = node.prev;
            }
            if (node.prev) {
                node.prev.next = node.next;
            }
            node.next = null;
            node.prev = null;

            node.prev = this.most;
            this.most.next = node;
            this.most = node;
        }
        return node.value;
    }

    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const newNode = new LRUNode(key, value);
    if (this.cache.has(key)) {
        const oldNode = this.cache.get(key);
        if (oldNode.next) {
            oldNode.next.prev = oldNode.prev;
        }
        if (oldNode.prev) {
            oldNode.prev.next = oldNode.next;
        }
        if (oldNode == this.least) {
            this.least = oldNode.next;
        }

        newNode.prev = this.most;
        this.most.next = newNode;
        this.cache.set(key, newNode);

        this.most = newNode;
        if (this.least == newNode) {
            this.least = newNode.next ?? node;
        }
    } else if (this.cache.size == this.capacity) {
        const toEvict = this.least;
        if (toEvict.next) {
            this.least = toEvict.next;
            toEvict.next.prev = null;
        } else {
            this.least = null;
        }
        this.cache.delete(toEvict.key);
    }
    if (this.most) {
        newNode.prev = this.most;
        this.most.next = newNode;
    }
    this.most = newNode;
    if (!this.least) {
        this.least = newNode;
    }
    this.cache.set(key, newNode);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

((input) => {
    const capacity = input.shift();

    const obj = new LRUCache(capacity);
    input.forEach((val) => {
        if (val.length == 1) {
            console.log(obj.get(...val));

        } else {
            console.log(obj.put(...val));
        }
        if (obj.cache.has(4) && obj.cache.get(4).value == 29) {

        }
    })
})(
    [[10], [10, 13], [3, 17], [6, 11], [10, 5], [9, 10], [13], [2, 19], [2], [3], [5, 25], [8], [9, 22], [5, 5], [1, 30], [11], [9, 12], [7], [5], [8], [9], [4, 30], [9, 3], [9], [10], [10], [6, 14], [3, 1], [3], [10, 11], [8], [2, 14], [1], [5], [4], [11, 4], [12, 24], [5, 18], [13], [7, 23], [8], [12], [3, 27], [2, 12], [5], [2, 9], [13, 4], [8, 18], [1, 7], [6], [9, 29], [8, 21], [5], [6, 30], [1, 12], [10], [4, 15], [7, 22], [11, 26], [8, 17], [9, 29], [5], [3, 4], [11, 30], [12], [4, 29], [3], [9], [6], [3, 4], [1], [10], [3, 29], [10, 28], [1, 20], [11, 13], [3], [3, 12], [3, 8], [10, 9], [3, 26], [8], [7], [5], [13, 17], [2, 27], [11, 15], [12], [9, 19], [2, 15], [3, 16], [1], [12, 17], [9, 1], [6, 19], [4], [5], [5], [8, 1], [11, 7], [5, 2], [9, 28], [1], [2, 2], [7, 4], [4, 22], [7, 24], [9, 26], [13, 28], [11, 26]]
)