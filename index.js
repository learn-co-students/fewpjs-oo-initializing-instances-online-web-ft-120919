class Breakfast {
    constructor(food, drink) {
        this.food = food
        this.drink = drink
    }
};
let breakfast = new Breakfast('eggs', 'juice')

class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
};
let lunch = new Lunch('ceasar', 'chicken', 'scotch')

class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert
    }
}
