class QuizApp extends React.Component {
    constructor(props) {
        super(props);
        this.cont = 0,
        this.answersUser = [],
        this.answersComp = [],
        this.barCounter = 0;
        this.answersComp.push(this.props.questions[this.cont].correctAnswer); 

        this.state = {
            image: this.props.questions[this.cont].image,
            question: this.props.questions[this.cont].question,
            answerOptions: this.props.questions[this.cont].answers,
            answer: this.props.questions[this.cont].correctAnswer,
            progress: $('#bar').css('width', this.barCounter + '%')
        };
    }

    onClick(e, index) {
        let userAnswer = this.state.answerOptions[index];

        this.cont = this.cont + 1;
        this.answersComp.push(this.props.questions[this.cont].correctAnswer);        
        this.barCounter = this.barCounter + 25;
        this.answersUser.push(userAnswer);

        this.setState({

            image: this.props.questions[this.cont].image,
            question: this.props.questions[this.cont].question,
            answerOptions: this.props.questions[this.cont].answers,
            answer: this.props.questions[this.cont].correctAnswer,
            progress: $('#bar').css('width', this.barCounter + '%')
        });

    }

    render() {

        const getAnswerList = (answers) => {

            return answers.map((answer, index) => {
                return (
                    <li key={index}>
                        <a className="btn btn-block btn-warning btnClic" id={index} onClick={(e) => this.onClick(e, index)}>{answer}</a>
                    </li >

                );
            });
        }
        const AnswerList = ({ answers }) => {

            return (
                <div>
                    <ul>{getAnswerList(answers)}</ul>
                </div>
            );
        }
        const Quiz = (props) => {

            return (
                <div className="quiz">
                    <h2 className="question">{props.question}</h2>
                    <AnswerList answers={props.answerOptions} />

                </div>
            );
        }
        const Images = (props) => {
            return (
                <div>
                    <img className="imageSize" align="center" src={props.image} alt="" />
                </div>
            );
        }
        console.log(this.cont);
        if (this.cont < 4) {
            return (
                <div className="questions container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 col-sm-12">
                            <div id="myProgress">
                                <div id="bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <span class="sr-only"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-xs-6 col-sm-6">
                            <Images
                                image={this.state.image}
                            />
                        </div>
                        <div className="col-md-6 col-xs-6 col-sm-6">
                            <Quiz
                                question={this.state.question}
                                answer={this.state.answer}
                                answerOptions={this.state.answerOptions}
                            />
                        </div>
                    </div>

                </div>
            );
        }
        else {
            const getAnswerUser = () => {
                return this.answersUser.map((answer, index) => {
                    return (
                        <li key={index}>
                            <p>{answer}</p>
                        </li>
                    );
                });
            }
            const getAnswerComp = () => {
                return this.answersComp.map((answer, index) => {
                    return (
                        <li key={index}>
                            <p>{answer}</p>
                        </li>
                    );
                });
            }
            const AnswerUserList = () => {

                return (
                    <div>
                        <ul>{getAnswerUser()}</ul>
                    </div>
                );
            }
            const CorrectAnswers = () => {
                return (
                    <div>
                        <ul>{getAnswerComp()}</ul>
                    </div>
                );
            }
            return (
                <div className="container-fluid">
                    <div className="col-md-6 col-sm-6 col-xs-6 text-center">
                        <h2>Your Answers</h2>
                        <AnswerUserList />
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 text-center">
                        <h2>Correct Answers</h2>
                        <CorrectAnswers />
                    </div>
                </div>
            );
        }
    }

}

const questionsArray = [
    {
        image: "img/History/paracas.jpg",
        question: "¿De qué cultura son caracteriticas las trepanaciones craneanas?",
        answers: ["Nazca", "Chimu", "Paracas"],
        correctAnswer: "Paracas"
    },
    {
        image: "img/History/virrey.jpg",
        question: "¿Cuál fue el último virrey del Perú?",
        answers: ["Francisco de Borja y Aragon", "Jose de la Serna Hinojosa", "Blasco Nuñez Vela"],
        correctAnswer: "Jose de la Serna Hinojosa"
    },
    {
        image: "img/History/mancoInca.jpg",
        question: "¿Quien ayudo a los españoles en su camino de Cajamarca a Cusco en 1583?",
        answers: ["Calcuchimac", "Manco Inca", "Huascar"],
        correctAnswer: "Manco Inca"

    },
    {
        image: "img/History/primerGobierno.jpg",
        question: "¿Cuanto tiempo duró el gobierno del primer Presidente del Peru?",
        answers: ["24 meses", "13 meses", "4 meses"],
        correctAnswer: "4 meses"
    },
    {
        image: "img/History/conflictos.jpg",
        question: "¿Con cuál de estos paises el Perú tuvo más conflictos armados?",
        answers: ["Chile", "Ecuador", "Bolivia"],
        correctAnswer: "Ecuador"
    }
];

ReactDOM.render(<QuizApp questions={questionsArray} />, document.getElementById("containerQuizz"));
