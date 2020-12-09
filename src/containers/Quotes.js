import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { upvoteQuote, downvoteQuote, removeQuote } from "../actions/quotes";

class Quotes extends Component {
  renderQuotes = () => 
    this.props.quotes.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} remove={() => this.props.remove(quote.id)} upvote={() => this.props.upvote(quote.id)} downvote={() => this.props.downvote(quote.id)}/>)
  
    delete = (id) => {
      this.props.remove(id)
    }
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state}
}
const mapStateToDispatch = (dispatch) => {
  return {
    remove: (q) =>  { dispatch(removeQuote(q))},
    upvote: (id) => dispatch(upvoteQuote(id)),
    downvote: (id) => dispatch(downvoteQuote(id))
}
};
//add arguments to connect as needed
export default connect(mapStateToProps, mapStateToDispatch)(Quotes);
