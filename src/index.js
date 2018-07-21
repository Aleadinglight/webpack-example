import _ from 'lodash';
import Artyom from 'artyom.js';
import './style.css';

const Jarvis = new Artyom();
Jarvis.say("Hello World !");

function component() {
    var element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;
}
  
document.body.appendChild(component());