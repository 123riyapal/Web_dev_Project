// ?there have two methods to use property
//  * using props keyword;
// * using curly braces; in this name of property will be same as declare  otherwise it not gives any output

// function Add(props) {
//     return (<>
//         <img src={props.image} alt="" />
//         <h1>{props.name}</h1>
//         <p>{props.hobbies}</p>
//     </>);
// }
// import React from "react";  

// function Add({image,name,hobbies,children /*we use children to acces html element that declare in Add function at time of calling  */}){
//         // Filter children to find the h1 element

//         const h1Child = React.Children.toArray(children).find(child => child.type === 'h1');

//     return (
//         <>
        
//         <img src={image} alt="" />
//         <h1>{name}</h1>
//         <p>{hobbies}</p>
//         <p>{h1Child}</p>
//         </>
//     )
// }
// export default Add;

// & How we use condition in React in React it is called Condition Rendering 

 {/* import React from "react";

// Functional components for valid and invalid passwords
const ValidPassword = () => <h1>Password is valid</h1>;
const InvalidPassword = () => <h1>Password is invalid</h1>;

const Password = ({ isValid }) => {
    if (isValid) {
        return <ValidPassword />;
    } else {
        return <InvalidPassword />;
    }
};

function Add() {
    return (
        <>
            <Password isValid={true} />
        </>
    );
}

export default Add;
*/}


// ! How we use ternary operator in React JS


  /* const IsWeatherGood=()=><h1> yes today is better 👌...</h1>;
const IsWeatherBad =()=><h1>yes today is rain  ☂️ ...</h1>;

function Weather({weather}){
    return (weather)?  <IsWeatherGood/> :   <IsWeatherBad/>;
}


function Add(){
    return (
        <>
        <Weather weather={true}/>; 
        </>
    );
}
export default Add;} 
*/ 

// & How we use list in react
// * In list key is always mandotary 

// function Add() {
//     const product = ["Apple🍎", "Cloths🛍️", "Utensils🍽️", "Noodles 🍜"];

//     return (
//         <>
//             <h1>Your Product in Cart 🛒</h1> 
//             <h3>Product : 👇</h3>
//             { product.map((product, index) => (
//                 //  ?Using Math.random() changes keys every time you run the component.
//                 //  ?   This confuses React because it can't match old items with new items.
                
//                 // * The key attribute is necessary to help React identify which items have changed, been added, or removed.
//                 // * This helps improve the performance by minimizing the number of DOM operations.
//                 // * Keys should be unique and stable for each item in the list to prevent issues with state and re-renders.

//                 <ul key={index}>
//                     <li>{product}</li>
//                 </ul>
//             ))}
//         </>
//     );
// }

// export default Add;
//  ? How we use react Bootstrap in React
// import Button from 'react-bootstrap/Button';
// // IF WE WNAT TO ALSO APPLY SOME CSS ON OUR HAND THAN WE USE CUSTOM CSS
// function Add() {
//   return (
//     <>
//       <Button variant="primary ">Primary</Button>{' '}
//       <Button variant="secondary">Secondary</Button>{' '}
//       <Button variant="success">Success</Button>{' '}
//       <Button variant="warning">Warning</Button>{' '}
//       <Button variant="danger">Danger</Button>{' '}
//       <Button variant="info">Info</Button>{' '}
//       <Button variant="light">Light</Button>{' '}
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

//  export default Add;
//  ? How we use react icon in React

import React, { useState } from 'react';

function Print() {
    const [message, setMessage] = useState('');

  const handleKeyDown = () => {
    setMessage('You pressed a key inside the input field');
  };

  return (
    <>
      <p>Press a key in the input field:</p>
      <input type="text" onKeyDown={handleKeyDown} />
      <p id="demo">{message}</p>
    </>
  );
}


function Increase() {
  const handleMouseScroll = (event) => {
    event.target.style.fontSize = "35px";
  };

  return (
    <>
      <p
        style={{ border: "2px solid black", padding: "20px" }}
        onMouseMove={handleMouseScroll}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo hic fugit perferendis inventore provident assumenda
        fuga eveniet quisquam consectetur pariatur culpa tenetur 
        repellat dicta libero, sunt corporis quibusdam quod. Reprehenderit.
      </p>
    </>
  );
}

function Play() {
    const [message, setMessage] = useState('');

    const PlayVideo = () => {
        setMessage('The video has started to play');
    };

    return (
        <>
            <h2>The onplay Event</h2>
            <p>Assign an &quot; onplay &quot; event to a video element.</p>
            <p>Press play.</p>
            <video controls onPlay={PlayVideo}>
                <source src="https://media.istockphoto.com/id/1459172249/video/simple-10-seconds-countdown-timer-green-and-grey-colour-on-white-background.mp4?s=mp4-640x640-is&k=20&c=ea8n4WlkCIqis91dIP5Z_10WB7HyvRn4HLBbDCJxhME=" type="video/mp4"/>
                <source src="mov_bbb.ogg" type="video/ogg"/>
                Your browser does not support HTML5 video.
            </video>
            <p>Video courtesy of <a href="https://media.istockphoto.com/id/1459172249/video/simple-10-seconds-countdown-timer-green-and-grey-colour-on-white-background.mp4?s=mp4-640x640-is&k=20&c=ea8n4WlkCIqis91dIP5Z_10WB7HyvRn4HLBbDCJxhME=" target="_blank">Big Buck Bunny</a>.</p>
            <p id="demo">{message}</p>
        </>
    );
}



function Add() {
  return (
    <>
     <Increase/>
     <br />
     <Print/>
     <br />
      <Play />
      <br />
      
    </>
  );
}

export default Add;
