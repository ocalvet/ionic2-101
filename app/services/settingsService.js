export class SettingsService {
  constructor() {
    this.settings = {
      showTasks: true,
      showTransactions: false,
      showNotifications: false
    };
  }

  getSettings() {
    return new Promise((resolve, reject) => {
      resolve(this.settings);
    });
  }
}
