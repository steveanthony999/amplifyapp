import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>Hello from v2</h2>
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
