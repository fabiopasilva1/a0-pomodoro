import { Home } from './pages/Home';
import './styles/theme.css';
import './styles/global.css';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MessageContainser } from './components/MessagesContainer';
import { BrowserRouter, Route, Routes } from 'react-router';
import { NotFound } from './pages/NotFound';
import { AboutPomodoro } from './pages/AboutPomodoro';

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainser>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-pomodoro' element={<AboutPomodoro />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MessageContainser>
    </TaskContextProvider>
  );
}
