import Model from './model/modelAddress';
import View from './view/viewAddress';
import Controller from './controller/controllerAddress';
(function(){
    let view = new View({
        checkbox: document.getElementById('checkbox'),
        payStName: document.getElementById('payStName'),
        payCtName: document.getElementById('payCtName'),
        shipStName: document.getElementById('shipStName'),
        shipCtName: document.getElementById('shipCtName')
    })
    let controller = new Controller();
    view.initialize();
})();