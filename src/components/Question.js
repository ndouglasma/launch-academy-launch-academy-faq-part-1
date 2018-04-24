import React from "react";

class Question extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid-x">
        <div className="cell small-2"></div>
        <div className="cell small-8">
          <div onClick={ this.props.questionClick }>
            <h3>
              <i className={ this.props.showAnswer ? "fa fa-plus-square" : "fa fa-minus-square" }></i>
              &emsp;
              { this.props.question }
            </h3>
          </div>
          <div>
            <p>{ this.props.showAnswer ? this.props.answer : null }</p>
          </div>
          <hr/>
        </div>
        <div className="cell small-2"></div>
      </div>
    )
  }
}
export default Question;
