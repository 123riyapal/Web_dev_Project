import { useState ,useEffect } from "react";

// function Forms() {
//     const [name, setName] = useState("");

//     function handleClick(event) {
//         setName(event.target.value);
//     }

//     return (
//         <>
//             <form action="#">
//                 <label htmlFor="name">Name: </label> {' '}
//                 <input 
//                     type="text" 
//                     placeholder="Enter your name" 
//                     value={name}
//                     onChange={handleClick}
//                 />
//             </form>
//             <p>{name}</p> {/* Display the current name */}
//         </>
//     );
// }

function Forms() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://official-joke-api.appspot.com/jokes/ten");
            const jokes = await response.json();
            if (jokes && jokes.length) setData(jokes);
        }
        getData();
    }, []);

    return (
        <>
            {data ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>
                            <strong>Setup:</strong> {item.setup} 🤔
                            <br />
                            <strong>Punchline:</strong> {item.punchline}😂

                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default Forms;
