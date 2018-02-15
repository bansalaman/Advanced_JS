import Model from "./model/cityMVP";
import View from './view/cityViewMVP'
import Controller from "./presentor/cityCtrlMVP";
//import {mod1,mod2,mod3} from './util/multimodule'
import obj from './util/multimodule'
(function(){
    //let model = new Model();
    //key value pair
    //console.log(mod1()+" "+mod2()+" "+mod3())
    console.log(obj.mod1()+" "+obj.mod2()+" "+obj.mod3())
    //console.log(obj.mod1()+" "+obj.mod2()+" "+obj.mod3())
    let presenter = new Controller();
    presenter.initialize();
})();