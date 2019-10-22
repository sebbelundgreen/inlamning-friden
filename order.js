class Order {
    _pizza = '';
    _table = '';
    _glutenfree = '';
    _allergier = '';

    constructor(pizza, table, glutenfree, allergier) {
        this._pizza = pizza;
        this._table = table;
        this._glutenfree = glutenfree;
        this._allergier = allergier;
    }

    toString() {
        return `
        <li>
            Pizza: ${this._pizza} <br>
            Table: ${this._table} <br>
            Glutenfree: ${this._glutenfree} <br>
            Allergier: ${this._allergier}
            <hr>
        </li>
        `;
    }
}