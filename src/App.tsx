import { Heading } from './components/Heading/Heading';
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';
export function App() {
  return (
    <>
      <Heading>
        Olá mundo! 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, esse.
        Consequuntur eveniet quibusdam maiores repellendus inventore fugit a!
        Consectetur enim facere nesciunt quam assumenda voluptatibus autem
        impedit minima laudantium quaerat.
      </p>
    </>
  );
}
