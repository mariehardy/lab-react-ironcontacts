//rfce + tab ==> function component
//rcc + tab ==> class Component

// import React, { Component } from 'react';
// import contacts from '../contacts.json';

// export default class Contacts extends Component {
//   state = {
//     contacts: contacts.slice(0, 5),
//   };
//   render() {

//     return (
//       <table className="contactTable">
//         <thead>
//           <tr>
//             <th>Picture</th>
//             <th>Name</th>
//             <th>Popularity</th>
//           </tr>
//         </thead>
//         {this.state.contacts.map((c) => {
//           return [
//             <tbody key={c.id}>
            
//               <tr>
//                 <td>
//                   <img
//                     className="contactTable__img"
//                     src={c.pictureUrl}
//                     alt={c.name}
//                   />
//                 </td>
//                 <td>
//                   <p>{c.name}</p>
//                 </td>
//                 <td>
//                   <p>{Math.round(c.popularity * 100) / 100}</p>
//                 </td>
//               </tr>
//             </tbody>,
//           ];
//         })}
//       </table>
//     );
//   }
// }
