import React from "react";
import Question from "./Question";

class FAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuestionId: null
    };

    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick(id){
    if (this.state.selectedQuestionId === id) {
      this.setState({
        selectedQuestionId: null
      });
    }
    else {
      this.setState({
        selectedQuestionId: id
      });
    }
  };

  render() {
    let faqArray = this.props.data.map(faq =>{
      let showAnswer = false;
      if (faq.id === this.state.selectedQuestionId) {
        showAnswer = true;
      }

      let onQuestionClick = () => {
        this.handleQuestionClick(faq.id);
      };

      return(
        <Question
          key={ faq.id }
          question={ faq.question }
          answer={ faq.answer }
          questionClick={ onQuestionClick }
          showAnswer={ showAnswer }
        />
      )
    });

    return(
      <div>
        <div className="grid-x">
          <div className="cell small-3"></div>
          <div className="cell small-6"><h1>We're here to help</h1></div>
          <div className="cell small-3"></div>
        </div>
          { faqArray }
      </div>
    )
  }
}
export default FAQ;
