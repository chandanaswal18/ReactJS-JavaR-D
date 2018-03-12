import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Biodata from './biodata.js'

ReactDOM.render(<Biodata />, document.getElementById('root'));
registerServiceWorker();
