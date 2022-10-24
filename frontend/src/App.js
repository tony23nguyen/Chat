import './App.css';
import {Route} from 'react-router-dom'
import Homepage from './Homepage';
import ChatPage from './ChatPage';

function App() {
  return (
    <div className='App' >
      <Route path='/' component={Homepage} exact />
      <Route path='/Chats' component={ChatPage} />
    </div>
);}

export default App;
