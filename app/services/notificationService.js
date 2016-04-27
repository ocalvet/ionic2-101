export class NotificationService {

  constructor() {
  }

  getNotifications() {

    return new Promise((resolve, reject) => {
      resolve([{
        title: 'Completed Task',
        description: 'Ovidio Calvet just finished feeding paty'
      },{
        title: 'Money Deposited',
        description: 'Jonathan Calvet just deposited $20'
      },{
        title: 'Task Not Completed',
        description: 'Jonathan Calvet didn\'t make the bed'
      },{
        title: 'Task Not Completed',
        description: 'Ovidio Calvet didn\'t feed paquito'
      },{
        title: 'Completed Task',
        description: 'Ovidio Calvet just finished washing the dishes'
      }]);
    });
  }

}
