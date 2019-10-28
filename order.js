class Order {
    _pizza = '';
    _table = '';
    _glutenfree = '';
    _allergier = '';
    _before = '';
    _drink = '';

    constructor(pizza, table, glutenfree, allergier, before, drink) {
        this._pizza = pizza;
        this._table = table;
        this._glutenfree = glutenfree;
        this._allergier = allergier;
        this._before = before;
        this._drink = drink;
    }

    toString() {
        return `
        <li>
            Pizza: ${this._pizza} <br>
            Table: ${this._table} <br>
            Glutenfree: ${this._glutenfree} <br>
            Allergier: ${this._allergier} <br>
            Förrätt: ${this._before} <br>
            Dryck: ${this._drink}
            <hr>
        </li>
        `;
    }
}