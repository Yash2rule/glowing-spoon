import {Route} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  return (
    <div>
      <h1>Welcome to Auth Demo App</h1>
      <Route path="/" exact component={HomeScreen}/>
      <Route path="/login" exact component={LoginScreen}/>
      <Route path="/profile" exact component={ProfileScreen}/>
    </div>
  );
}

export default App;
