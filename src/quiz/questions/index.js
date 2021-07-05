const qBank = [
    {
      question:
        "how build the app1 ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "1"
    },
    {
      question:
        "how build the app2 ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "2"
    },
    {
      question:
        "how build the app3 ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "3"
    },
    {
      question:
        "how build the app4 ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "4"
    },
    {
      question:
        "how build the app5 ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "5"
    }
    
  ];
    
  // n = 5 to export 5 question
  export const questionAPI =() =>
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, 5));