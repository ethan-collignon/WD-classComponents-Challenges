import React from 'react';
 
const CatList = (props) => {
    return ( //This is where the error lies
      <ul>
        {props.breeds.map((cat) => (
          <li>{cat}</li>
        ))}
      </ul>
    );
  };
 
export default CatList;
