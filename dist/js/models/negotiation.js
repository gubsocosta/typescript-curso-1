var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _amount, _date, _quantity;
export class Negotiation {
    constructor(amount, date, quantity) {
        _amount.set(this, void 0);
        _date.set(this, void 0);
        _quantity.set(this, void 0);
        __classPrivateFieldSet(this, _amount, amount);
        __classPrivateFieldSet(this, _date, date);
        __classPrivateFieldSet(this, _quantity, quantity);
    }
    get amount() {
        return __classPrivateFieldGet(this, _amount);
    }
    get date() {
        return __classPrivateFieldGet(this, _date);
    }
    get quatity() {
        return __classPrivateFieldGet(this, _quantity);
    }
    get volume() {
        return __classPrivateFieldGet(this, _amount) * __classPrivateFieldGet(this, _quantity);
    }
}
_amount = new WeakMap(), _date = new WeakMap(), _quantity = new WeakMap();
