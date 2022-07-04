import React from "react";
import ReactDOM from "react-dom";
import WordList from './components/wordList.jsx';
import Buttons from './components/buttons.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
    this.fetchAll = this.fetchAll.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.delete = this.delete.bind(this);
    this.changeEditState = this.changeEditState.bind(this);
  }

  fetchAll() {
    axios.get('http://localhost:8000/api/words')
      .then((response) => {
        //console.log(response.data);
        this.setState({
          words:
            response.data.map(e => ({ ...e, isEdit: false }))
        });
        console.log(this.state.words);
      });
  }

  changeEditState(index, isEditValue) {
    //console.log('changeEditState')
    this.setState({
      words: [
        ...this.state.words.slice(0, index),
        { ...this.state.words[index], isEdit: isEditValue },
        ...this.state.words.slice(index + 1)
      ]
    });
  }

  onClickAdd(termstr, definitionstr) {
    let term = termstr.toLowerCase().split('');
    term[0] = term[0].toUpperCase();
    term = term.join('');
    let obj = { term: term, definition: definitionstr.toLowerCase() };
    console.log(obj);
    axios.post('http://localhost:8000/api/words', obj)
      .then((result) => console.log(result.data, 'was added'))
      .catch((err) => (console.log('Error during add click button')))
      .then(this.fetchAll);
  }

  onSearch(inputstr) {
    if (inputstr !== '') {
      let input = inputstr.toLowerCase().split('');
      input[0] = input[0].toUpperCase();
      input = input.join('');
      //console.log(input);
      axios.get('http://localhost:8000/api/search', {
        params: {
          term: input
        }
      })
        .then((result) => {
          console.log(result.data);
          this.setState({ words: result.data });
        })
        .catch((err) => alert('Search Error'))
      //alert('Please type a word in box');
      /*
      this.fetchAll();
      for(var i = 0;i<this.state.words;i++){
        if(this.state.words[i].term.toLowerCase()===input.toLowerCase()){
          this.setState({words:this.state.word[i]});
        }
      }
      */
    }
    else {
      alert('Please type a word in box');
    }
  }

  delete(index, event) {
    event.preventDefault();
    let item = this.state.words[index];
    axios.delete('http://localhost:8000/api/words', item).then((item) => console.log(item.data, 'was deleted'))
      .catch((err) => console.log('Error during delete request'))
      .then(() => this.fetchAll());
  }



  componentDidMount() {
    this.fetchAll();
    // console.log(this.state.words);
  }


  render() {
    return (
      <div>
        <h1>Glossary Chart</h1><br />
        <WordList
          wordlist={this.state.words}
          delete={this.delete}
          changeEditState={this.changeEditState}
          fetchAll={this.fetchAll}
          handleCancle={this.handleCancle}
        />
        <Buttons
          onClickAdd={this.onClickAdd}
          onSearch={this.onSearch}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));