export class ChildService {
  constructor() {
  }

  getChildren() {
    return new Promise((resolve, reject) => {
      resolve([{
        name: "Ovidio Calvet",
        avatar: "img/avatar.png",
        balance: 5,
        factor: 1,
        tasks: [{
          title: "Do the dishes",
          completed: false
        },{
          title: "Feed Paty",
          completed: true
        },{
          title: "Make the bed",
          completed: false
        }]
      },{
        name: "Jonathan Calvet",
        avatar: "img/avatar.png",
        balance: 15,
        factor: 1,
        tasks: [{
          title: "Do the dishes",
          completed: false
        },{
          title: "Clean the cars",
          completed: false
        }]
      }]);
    });
  }

  addChild(child) {
    return new Promise((resolve, reject) => {
      resolve(child);
    });
  }
}
