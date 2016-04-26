export class NotificationService {

  constructor() {
  }

  getNotification() {
    return new Promise((resolve, reject) => {
      resolve([{
        title: "Completed Task",
        description: "Ovidio Calvet just finished feeding paty"
      },{
        title: "Completed Task",
        description: "Ovidio Calvet just finished feeding paty"
      },{
        title: "Completed Task",
        description: "Ovidio Calvet just finished feeding paty"
      },{
        title: "Completed Task",
        description: "Ovidio Calvet just finished feeding paty"
      },{
        title: "Completed Task",
        description: "Ovidio Calvet just finished feeding paty"
      }]);
    });
  }
}

