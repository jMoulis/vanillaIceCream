import App from './components/app';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const app = new App();
    app.loadApp();
  } catch (error) {
    throw new Error(`Unable to import app: ${error.message}`);
  }
});
