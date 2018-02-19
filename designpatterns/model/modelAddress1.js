class Model{
    constructor(){
        this.stName;
        this.cityName;
    }
    add(stName, cityName){
        this.stName = stName;
        this.cityName = cityName;
    }
}
export default new Model()