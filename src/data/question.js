const questions = {
  "JavaScript Basics": [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A function bundled with its lexical environment",
        "A feature that helps create objects",
        "A block of code inside a function",
        "A way to access global variables"
      ],
      correct: 0,
    },
    {
      question: "What will `typeof null` return?",
      options: [
        "'null'",
        "'undefined'",
        "'object'",
        "'boolean'"
      ],
      correct: 2,
    },
    {
      question: "Which of the following is NOT a JavaScript data type?",
      options: [
        "Number",
        "String",
        "Character",
        "Boolean"
      ],
      correct: 2,
    },
    {
      question: "Which method is used to parse a string to an integer in JavaScript?",
      options: [
        "parseInt()",
        "parseFloat()",
        "Number()",
        "String()"
      ],
      correct: 0,
    },
    {
      question: "What does `NaN` stand for?",
      options: [
        "Not a Number",
        "Null and Null",
        "Not a Null",
        "Non-array Number"
      ],
      correct: 0,
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: [
        "let",
        "const",
        "var",
        "static"
      ],
      correct: 1,
    },
    {
      question: "Which operator is used to check both value and type in JavaScript?",
      options: [
        "==",
        "===",
        "=",
        "!="
      ],
      correct: 1,
    },
    {
      question: "What does `JSON` stand for?",
      options: [
        "JavaScript Object Notation",
        "Java Syntax Object Notation",
        "JavaScript Option Notation",
        "Java Simple Object Notation"
      ],
      correct: 0,
    },
    {
      question: "Which method can be used to find an element by ID in JavaScript?",
      options: [
        "getElementById()",
        "querySelector()",
        "getElementByClass()",
        "getNodeById()"
      ],
      correct: 0,
    },
    {
      question: "Which statement is used to stop the execution of a loop?",
      options: [
        "stop",
        "break",
        "exit",
        "return"
      ],
      correct: 1,
    }
  ],
  "React Basics": [
    {
      question: "What is JSX in React?",
      options: [
        "JavaScript Extension",
        "JavaScript XML",
        "JavaScript JSON",
        "JavaScript HTML"
      ],
      correct: 1,
    },
    {
      question: "What is the purpose of React's useState hook?",
      options: [
        "To manage state in functional components",
        "To create routes in React",
        "To access the DOM",
        "To connect to APIs"
      ],
      correct: 0,
    },
    {
      question: "Which method is used to render elements in the DOM?",
      options: [
        "ReactDOM.render()",
        "React.render()",
        "React.createElement()",
        "document.render()"
      ],
      correct: 0,
    },
    {
      question: "What is a key in React and why is it important?",
      options: [
        "A unique identifier to identify items in lists",
        "A variable used to store state",
        "A unique identifier for managing events",
        "A property to change component styles"
      ],
      correct: 0,
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A representation of the actual DOM kept in memory",
        "A way to directly modify the DOM",
        "A structure used to handle asynchronous calls",
        "An API to interact with the backend"
      ],
      correct: 0,
    },
    {
      question: "What does `useEffect` do in React?",
      options: [
        "Handles side effects in functional components",
        "Manages component state",
        "Creates components",
        "Handles events"
      ],
      correct: 0,
    },
    {
      question: "What is the purpose of the `props` object in React?",
      options: [
        "To pass data from parent to child components",
        "To manage component state",
        "To handle side effects",
        "To render JSX"
      ],
      correct: 0,
    },
    {
      question: "Which hook should be used to store component state in a functional component?",
      options: [
        "useState",
        "useEffect",
        "useReducer",
        "useMemo"
      ],
      correct: 0,
    },
    {
      question: "What is the use of `React.Fragment`?",
      options: [
        "To wrap multiple elements without adding extra nodes to the DOM",
        "To manage component lifecycle",
        "To create React components",
        "To handle side effects"
      ],
      correct: 0,
    },
    {
      question: "How do you lift state up in React?",
      options: [
        "By passing data from child to parent component via props",
        "By passing data from parent to child component via props",
        "By using the useState hook",
        "By using Redux"
      ],
      correct: 1,
    }
  ]
};

export default questions;
