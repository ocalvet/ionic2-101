export class SettingsService {
  constructor() {
    this.settings = {
      showTasks: true
    };
  }

  getSettings() {
    return new Promise((resolve, reject) => {
      resolve(this.settings);
    });
  }
}
