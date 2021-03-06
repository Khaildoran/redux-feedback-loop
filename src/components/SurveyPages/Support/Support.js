import React, { Component } from 'react';
import { connect } from 'react-redux'
import navigation from '../../../feedbackLibrary/pushToNextRoute';


class Support extends Component {

  state = {
    input: -1 // default state of an 'invalid' input to make sure the user sets a value before hitting next 
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit = () => {
    let inputIsValid = this.state.input >= 0 && this.state.input <= 5 // abstracted into a variable for clarity 

    if (inputIsValid) {
      let payloadData = {
        answer: this.state.input,
        question: 'support'
      }
      this.props.dispatch({
        type: "SET_SURVEY_ANSWER",
        payload: payloadData
      })
      navigation.pushToNextRoute('/comments', this)
    } else {
      alert('Please enter a rating between 0 and 5')
    }
  }

  render() {
    return (
      <div className="questionWrap">
      <p className="surveyQuestion">Do you feel supported?</p>
      <label htmlFor="inputField">Rating 0 to 5::   </label>
      <input type="number" className="inputField" onChange={this.handleChange}/>
      <button onClick={this.handleSubmit}>Next</button>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxStore) => ({
  reduxStore
})
export default connect(putReduxStateOnProps)(Support);
