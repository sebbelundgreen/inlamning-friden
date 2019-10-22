class Booktable {
    _name = '';
    _lastname = '';
    _date = '';
    _guests = '';

    constructor(name, lastname, date, guests) {
        this._name = name;
        this._lastname = lastname;
        this._date = date;
        this._guests = guests;
    }

    toString() {
        return `
        <li>
            Förnamn: ${this._name} <br>
            Efternamn: ${this._lastname} <br>
            Datum: ${this._date} <br>
            Gäster: ${this._guests}
            <hr>
        </li>
        `;
    }
}