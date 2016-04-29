export class SettingsService {
  constructor() {
  }

  getSettings() {
    return new Promise((resolve, reject) => {
      resolve({
        showTasks: false
      });
    });
  }
}
