import React from "react";
// import "./styles.css";
// import aeris from "../images/aeris.PNG";
// import barrett from "../images/barrett.PNG";
// import chocobo from "../images/chocobo.PNG";
// import cid from "../images/cid.PNG";
// import cloud from "../images/cloud.PNG";
// import jenova from "../images/jenova.PNG";
// import redxiii from "../images/redxiii.PNG";
// import sephiroth from "../images/sephiroth.PNG";
// import tifa from "../images/tifa.PNG";
// import vincent from "../images/yuffie.PNG";
// import yuffie from "../images/zack.PNG";
// import zack from "../images/aeris.PNG";

// cardImage = () => {
//     for (var i = 0; i<image.length; i++) {
//         console.log("hello");
//     };
// };

function Card(props) {
  return (
    <div
      className="card"
      // style={{
      //   backgroundImage: props.image ? `url(${props.image}` : "none"
      // }}
      // id={props.id}
      onClick={props.handleCardClick}
    >
      {props.image.map(item => (
        <img key={item.id} className="card-item" alt="name" src={item.img}></img>
      ))}
    </div>
  );
};

// const Card = props => (
//     <div
//       className="card"
//       style={{
//         backgroundImage: props.image ? `url(${props.image}` : "none"
//       }}
//       id={props.id}
//       onClick={props.handleCardClick}
//     >
//       <img src={cloud} alt="cloud1" />
//     </div>
//   );

// function Card(props) {
//   return (
//     <ul className="list-group">
//       {props.image.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   );
// }

export default Card;
