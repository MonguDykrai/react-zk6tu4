import React from 'react';
import './style.css';
import { Button } from 'antd';
import jsxToString from 'jsx-to-string';

console.log(jsxToString(<Button test1="test" />));

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

// https://www.npmjs.com/package/jsx-to-string
