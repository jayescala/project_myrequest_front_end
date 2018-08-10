import React from 'react'

const Suggestions = (props) => {
  console.log(props, "This is props J");
  const suggestions = props.results.tracks.items.map(result => (
    <li key={result.id}>
      <h5>Name: {result.album.artists[0].name}</h5>
      <h7>Track: {result.name}</h7><br/>
      <h7>Album: {result.album.name}</h7><br/>
    </li>
  ))
  return <ul>{suggestions}</ul>
}

export default Suggestions;
