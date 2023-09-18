// import { useState } from 'react';
// import axios from 'axios';

// type Props = {};

// export default function Quotes({}: Props) {
//   const [text, setText] = useState('');
//   const [author, setAuthor] = useState('');

//   function getQuote() {
//     axios
//       .get('http://localhost:3000/', { withCredentials: true }) // Use withCredentials
//       .then((response) => {
//         setText(response.data.text);
//         setAuthor(response.data.author);
//       });
//   }

//   return (
//     <div>
//       <button onClick={getQuote}>Generate Quote</button>
//       <h1>{text}</h1>
//       <h3>{'-' + author}</h3>
//     </div>
//   );
// }
