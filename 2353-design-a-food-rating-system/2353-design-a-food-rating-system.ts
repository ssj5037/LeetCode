
class FoodRatings {
    foods;
    cuisines;
    ratings;
    
    constructor(foods: string[], cuisines: string[], ratings: number[]) {
        this.foods = foods;
        this.cuisines = cuisines;
        this.ratings = ratings;
    }

    changeRating(food: string, newRating: number): void {
        const index = this.foods.indexOf(food);
        this.ratings[index] = newRating;
    }

    highestRated(cuisine: string): string {
        let max = 0;
        let maxIndex = 0;
        for (let i = 0; i < this.cuisines.length; i++) {
            if (this.cuisines[i] === cuisine) {
                if (this.ratings[i] > max) { 
                    max = this.ratings[i];
                    maxIndex = i;
                } else if (this.ratings[i] === max) {
                    if (this.foods[maxIndex] > this.foods[i]) maxIndex = i;
                }
            }
        }
        return this.foods[maxIndex];
    }
}

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */