import React from 'react';
const axios = require('axios');

class WordEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(input) {
    if (input !== '') {
      let termWord = document.getElementsByClassName('term')[0].value;
      axios.put('http://localhost:8000/api/words', { id: this.props.termDefinition._id, term: termWord, definition: input })
        .then((result) => console.log('Put request finish'))
        .catch((err) => console.log('Error in put request'))
        .then(() => this.props.fetchAll());
    }
  }

  render() {
    return (
      <div>
        {this.props.termDefinition.isEdit ?
          <div>
            <dl><input className='term' type='text' placeholder={this.props.termDefinition.term}></input>
              <input className='definition' type='text' placeholder={this.props.termDefinition.definition}></input>
            </dl>
            <button onClick={(event) => this.handleSubmit(document.getElementsByClassName('definition')[0].value.toLowerCase())}>Submit</button>
            <button onClick={() => this.props.changeEditState(this.props.index, false)}>Cancel</button>
          </div>
          :
          <div>
            <dl>
              <dt>{this.props.termDefinition.term}</dt>
              <dd>{this.props.termDefinition.definition}</dd>
            </dl>
            <button onClick={() =>this.props.changeEditState(this.props.index, true)}>Edit</button>
            <button onClick={(event) => this.props.delete(this.props.index, event)}>Delete</button>
          </div>
        }
      </div>
    )
  }
}

export default WordEntry;

//set a state:false