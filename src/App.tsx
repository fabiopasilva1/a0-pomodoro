import { Home } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainser } from './components/MessagesContainer';

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainser>
        <Home />
      </MessageContainser>
    </TaskContextProvider>
  );
}
