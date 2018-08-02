import { injectGlobal } from 'emotion';
import App from './components/app';

injectGlobal`
  html, body, #root {
    height: 100%;
    margin: 0;
    background-color: antiquewhite;
  }
`;

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const app = new App();
    app.loadApp();
  } catch (error) {
    throw new Error(`Unable to import app: ${error.message}`);
  }
});
