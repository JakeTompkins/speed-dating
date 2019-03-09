import React, { Component } from "react";
import "./App.css";

import Button from "./newQuestionButton";
import QuestionDisplay from "./questionDisplay";
import TimerDisplay from "./timer";

const QUESTIONS = [
	"Tell me about your favorite movie",
	"What's your ideal meal?",
	"What are you most looking forward to at Le Wagon?",
	"Give me your best life-hack",
	"What did you find most challenging in the prep work?",
	"If you had to listen to just one song for 48 hours straight, which one would it be?",
	"Do you have experience with coding?",
	"What do you want to do after camp?",
	"What's your favorite podcast/video channel?",
	"iPhone or Android? (don't hurt each other)",
	"What's your favorite software or app?",
	"Hot-pot or Hamburgers?",
	"(ASK A RANDOM QUESTION)",
	"If you could have dinner with one living person, who would it be?"
];

const START_SECONDS = 0;
const START_MINUTES = 1;
class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			minutes: START_MINUTES,
			seconds: START_SECONDS,
			timerOn: false,
			questions: QUESTIONS,
			question: QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)]
		};
	}

	startTimer = () => {
		this.setState(oldState => {
			return { timerOn: true, minutes: START_MINUTES, seconds: START_SECONDS };
		}, this.timer);
	};

	stopTimer = () => {
		this.setState(oldState => {
			return { timerOn: false };
		}, this.newQuestion);
	};

	timer = () => {
		let seconds = this.state.seconds;
		let minutes = this.state.minutes;

		setTimeout(() => {
			if (!this.state.timerOn) {
				return;
			}
			minutes = seconds === 0 && minutes > 0 ? minutes - 1 : minutes;
			seconds = seconds > 0 ? seconds - 1 : 59;

			this.setState({
				seconds,
				minutes
			});

			if (seconds === 0 && minutes === 0) {
				this.stopTimer();
				return;
			}
			this.timer();
		}, 1000);
	};

	newQuestion = () => {
		this.setState(oldState => {
			let oldQuestion = oldState.question;
			let questions = oldState.questions;
			questions.splice(questions.indexOf(oldQuestion), 1);
			if (questions.length < 1) {
				return { question: "That's all, folks!" };
			}
			let randomIndex = Math.floor(Math.random() * questions.length);
			let question = questions[randomIndex];

			return {
				questions,
				question
			};
		});
	};
	render() {
		return (
			<div className="pagewrapper">
				<div className="questioncontainer">
					<QuestionDisplay question={this.state.question} />
				</div>
				<TimerDisplay
					seconds={this.state.seconds}
					minutes={this.state.minutes}
				/>
				<Button
					startTimer={this.startTimer}
					stopTimer={this.stopTimer}
					timerOn={this.state.timerOn}
				/>
			</div>
		);
	}
}

export default App;
