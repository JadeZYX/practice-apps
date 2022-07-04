import React from 'react';
import WordEntry from './WordEntry.jsx';

const WordList = (props)=>{
  return (
    <div>{
      props.wordlist.map((ele,index)=>(
      <WordEntry
      termDefinition={ele} key={index} index={index}
      delete={props.delete}
      changeEditState={props.changeEditState}
      fetchAll={props.fetchAll}
      handleCancle={props.handleCancle}
      />
      ))
      }
    </div>
  )
};

export default WordList;