import { defineStore } from "pinia";

export default function useQuestion(){
    return defineStore ( 'question', {
        state: () => {
            return {
                            // width: 16.7,
            bgColor: "lightblue",
            // bgCondition: true,
            move:1,
            currentQuestion: 0,
            question: [
                {
                    q: 'What is the meaning of html',
                    answers: [
                        {
                            text: 'hyper text markup language',
                            is_correct: true
                        },
                        {
                            text: 'hyper tutor mobility language',
                            is_correct: false
                        },
                        {
                            text: 'hyper type markup language',
                            is_correct: false
                        }
                    ]
                },
                {
                    q: 'how many headings tag do we have in html',
                    answers: [
                        {
                            text: 4,
                            is_correct: false
                        },
                        {
                            text: 6,
                            is_correct: true
                        },
                        {
                            text: 9,
                            is_correct: false
                        },
                    ]
                },
                {
                    q: 'how do you declare variables in Sass',
                    answers: [
                        {
                            text: 'with an @',
                            is_correct: false
                        },
                        {
                            text: 'with a $',
                            is_correct: true
                        },
                        {
                            text: 'with a VAR',
                            is_correct: false
                        }
                    ]
                },
                {
                    q: 'how many fellows were present at dervac(cohort 2) as at January',
                    answers: [
                        {
                            text: '6',
                            is_correct: false
                        },
                        {
                            text: '8',
                            is_correct: true
                        },
                        {
                            text: '10',
                            is_correct: false
                        },
                    ]
                },
                {
                    q: 'what is the full name of your tutor',
                    answers: [
                        {
                            text: 'Abdullateef Abdulqayum',
                            is_correct: false
                        },
                        {
                            text: 'AbdulQayum',
                            is_correct: false
                        },
                        {
                            text: 'i dnt knw',
                            is_correct: true
                        }
                    ]
                },
                {
                    q: 'Which one is Agba"s favourite word',
                    answers: [
                        {
                            text: 'Ode',
                            is_correct: false
                        },
                        {
                            text: 'ehn ehn',
                            is_correct: false
                        },
                        {
                            text: 'Orietiyi',
                            is_correct: true
                        }
                    ]
                },
                {
                    q: 'Who do we refer to as "snippet"',
                    answers: [
                        {
                            text: 'Fawas',
                            is_correct: true
                        },
                        {
                            text: 'Abdulhameed',
                            is_correct: false
                        },
                        {
                            text: 'Abdulazeez',
                            is_correct: false
                        }
                    ]
                },
                {
                    q: 'Who came from bangcock',
                    answers: [
                        {
                            text: 'Fawas',
                            is_correct: false
                        },
                        {
                            text: 'Balkis',
                            is_correct: false
                        },
                        {
                            text: 'Emmanuel',
                            is_correct: true
                        }
                    ]
                },
                {
                    q: 'Who is fellow Esther first love',
                    answers: [
                        {
                            text: 'Javascript',
                            is_correct: false
                        },
                        {
                            text: 'Bro israel',
                            is_correct: true
                        },
                        {
                            text: 'Seyi',
                            is_correct: false
                        }
                    ]
                }
                
            ]
            }
        }

    })
}