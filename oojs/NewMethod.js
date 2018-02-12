class player  {};
Object.defineProperty(player, 'firstName', {
  value: "Virat",
  writable: false,//can be edited or not
  enumerable: true,//property should be visible or not during iteration
  configurable: true//can delete this property
});

Object.defineProperty(player, 'lastName', {
  value: "Kohli",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(player, 'fullName', {
    value: function(){
        return this.firstName+" "+this.lastName
    },
    writable: true,
    enumerable: true,
    configurable: true
  });
  

player.firstName="Virushka"
// player.fullName = function(){
//     return Nothing;
// }

for(let i in player){
    console.log(i + " : " + player[i]);
}
//console.log(player.fullName());