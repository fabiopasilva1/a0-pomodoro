import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainser } from './components/MessagesContainer';

import { MainRouter } from './routers/MainRouter';
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainser>
        <MainRouter />
      </MessageContainser>
    </TaskContextProvider>
  );
}
