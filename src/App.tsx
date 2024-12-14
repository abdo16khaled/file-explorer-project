import React from 'react';
import logo from './assets/images/logo.svg';
import './styles/App.css';
import FileExplorer from './components/file-explorer/file-explorer';
import { Files } from './data/file-explorer';

function App() {
  return (
        <div className="App">
          <h1>File Explorer</h1>
          <FileExplorer fileTree={Files} />
        </div>

  );
}

export default App;
