export class ChildService {
  constructor() {
  }

  getChildren() {
    return new Promise((resolve, reject) => {
      resolve([{
        name: "Ovidio Calvet",
        avatar: "img/avatar.png",
        balance: 5,
        totalTasks: 10,
        completedTasks: 5
      },{
        name: "Jonathan Calvet",
        avatar: "img/avatar.png",
        balance: 62.5,
        totalTasks: 4,
        completedTasks: 2
      }]);
    });
  }
}
