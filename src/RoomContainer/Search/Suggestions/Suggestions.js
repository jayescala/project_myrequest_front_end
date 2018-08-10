import React from 'react'

const Suggestions = (props) => {
  console.log(this);
  const suggestions = props.results.tracks.items.map(result => {
    return  <li className="suggestion-item" key={result.id}>
              <div><img className="album-image" src={result.album.images[0].url}/><h5>{result.album.artists[0].name}</h5></div>
              <h7>Track: {result.name}</h7><br/>
              <h7>Album: {result.album.name}</h7><br/>
              <button type="submit" name={result.id} onClick={props.addTrack.bind(null, result.name)}>Add</button>
            </li>
  });
  return (
    <ul>
      {suggestions}
    </ul>
  );
}

export default Suggestions;
