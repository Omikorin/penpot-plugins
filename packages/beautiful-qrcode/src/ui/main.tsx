import { render } from '@solidjs/web';
import App from './App';
import '@/ui/assets/styles/main.css';

render(() => <App />, document.getElementById('root') as HTMLDivElement);
