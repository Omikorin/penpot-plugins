import { render } from '@solidjs/web';
import App from './App';
import '@penpot/plugin-styles/styles.css';

render(() => <App />, document.getElementById('root') as HTMLDivElement);
