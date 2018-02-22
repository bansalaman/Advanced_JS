export default class webSocketClient{
    constructor(){
        this.ws = new WebSocket('ws://localhost:8080')
        // new websocket just like http
    }
    connect(){//connection between server and exchange data
        document.querySelector('form')
        .addEventListener('submit',()=>{
            let name = document.querySelector('#name').value;
            let message = document.querySelector('#message').value;
            this.ws.send(JSON.stringify({name:name,message:message}))
            //we can send binary data or anything
            return false;
        })
        this.ws.onmessage = (e)=>{
            let li = document.createElement('li')
            li.appendChild(document.createTextNode(e.data))
            document.querySelector('#messages').appendChild(li)
        }
        this.ws.onerror = (e)=>{
            let li = document.createElement('li')
            let span = document.createElement('span')
            span.appendChild(span)
            li.appendChild(span)
            document.querySelector('#messages').appendChild(li)
        }
    }
}