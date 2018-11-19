import App from './components/app';
import Store from './components/Store';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const app = new App({ Store });
    app.render();
  } catch (error) {
    throw new Error(`Unable to import app: ${error.message}`);
  }
});
