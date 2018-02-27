export default class Model{
    constructor(id,meal,calorie){
        // Ideally we should make the properties private so that it can't be accessed by everyone
        // To do so we can use Setters and getters
        this.id = id;
        this.meal = meal;
        this.calorie = calorie;
    }
}