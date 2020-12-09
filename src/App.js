import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm';
import Quotes from './containers/Quotes'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        {console.log(this.props.store)}
        <QuoteForm />
        <Quotes />
      
      </div>
    );
  }}


export default App;
