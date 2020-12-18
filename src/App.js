import './App.css';
import Player from './components/player';
import World from './components/map/world';

export default function App() {
  return (
    <div>
      <World idWorld={1} />
      <Player skin={1} />
    </div>
  );
}
