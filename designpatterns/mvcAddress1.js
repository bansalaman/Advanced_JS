import Model from './model/modelAddress1';
import View from './view/viewAddress1';
import Controller from './controller/controllerAddress1';
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