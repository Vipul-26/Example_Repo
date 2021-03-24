import React from 'react';
import FormComponent from "./FormComponent.js"

function App() {
const test=()=>{}
  return (
    <div data-test="component-app">
     <FormComponent onSubmit={test}/>
    </div>
  );
}

export default App;
