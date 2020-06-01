import React from 'react';

const Card =  props => {
  return (
    <tbody key={props.id}>
      <tr>
        <td>
          <img className="contactTable__img" src={props.pictureUrl} alt={props.name} />
        </td>
        <td>
          <p>{props.name}</p>
        </td>
        <td>
          <p>{Math.round(props.popularity * 100) / 100}</p>
        </td>
        <td>
          <button onClick={props.clickToDelete}>Delete</button>
        </td>
      </tr>
    </tbody>
  );
}

export default Card;
