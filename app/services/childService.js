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
          id: 1,
          title: "Do the dishes",
          completed: false
        },{
          id: 2,
          title: "Feed Paty",
          completed: true
        },{
          id: 3,
          title: "Make the bed",
          completed: false
        }]
      },{
        name: "Jonathan Calvet",
        avatar: "img/avatar.png",
        balance: 15,
        factor: 1,
        tasks: [{
          id: 1,
          title: "Do the dishes",
          completed: false
        },{
          id: 2,
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
