//rfce + tab ==> function component
//rcc + tab ==> class Component


import React from 'react'

function Contacts(props) {
  return (
            <tbody>
              <tr>
                <td>
                  <img
                    className="contactTable__img"
                    src={props.pictureUrl}
                    alt={props.name}
                  />
                </td>
                <td>
                  <p>{props.name}</p>
                </td>
                <td>
                  <p>{Math.round(props.popularity * 100) / 100}</p>
                </td>
              </tr>
            </tbody>
  )
}

export default Contacts