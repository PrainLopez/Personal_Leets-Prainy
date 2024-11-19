const MinStack = function () {
    this.st = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.st.push([val, Math.min(val, this.getMin())]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.st.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const item = this.st?.at(-1);
    if (item) {
        return item[0];
    } else {
        return undefined;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    const item = this.st?.at(-1);
    if (item) {
        return item[1];
    } else {
        return Infinity;
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */