const data=[
    {
      "id": 1,
      "question": "What is React?",
      "answer": "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
    },
    {
      "id": 2,
      "question": "How does React work?",
      "answer": "React works by creating a virtual DOM in memory. Instead of manipulating the browser's DOM directly, React creates a virtual DOM and updates it in response to changes. React then updates the browser's DOM in the most efficient way possible."
    },
    {
      "id": 3,
      "question": "What are components in React?",
      "answer": "Components are the building blocks of a React application. They are reusable, independent pieces of code that return a React element to be rendered to the page. Components can be class-based or functional."
    },
    {
      "id": 4,
      "question": "What is JSX?",
      "answer": "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used with React to describe what the UI should look like. JSX produces React 'elements' which are rendered to the DOM."
    },
    {
      "id": 5,
      "question": "What is the difference between state and props?",
      "answer": "Props (short for properties) are read-only attributes that are passed from a parent component to a child component. State is a local data storage that is local to the component itself and can be changed internally. Props are immutable, whereas state is mutable."
    },
    {
      "id": 6,
      "question": "What are hooks in React?",
      "answer": "Hooks are functions that let you use state and other React features in functional components. The most commonly used hooks are useState for state management and useEffect for side effects. Hooks were introduced in React 16.8."
    },
    ];
  
  export default data;
  