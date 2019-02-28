import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, completedTodo } from "../actions";
import { bindActionCreators } from "redux";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.inputAddTodo = React.createRef();
  }

  renderTodos() {
    const { todos } = this.props;
    if (todos === "undefined" || todos === null) {
      return "";
    }
    return todos.map(todo => {
      return (
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="ui bulleted list"
          key={todo.id}
        >
          <div className="item">
            {todo.completed === true ? (
              <div style={{ textDecoration: "line-through" }}>{todo.todo}</div>
            ) : (
              todo.todo
            )}
          </div>
          <div>
            <i
              style={{ cursor: "pointer" }}
              onClick={() => this.props.completedTodo(todo.id)}
              className="check icon"
            />
            <i
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.deleteTodo(todo.id);
              }}
              className="close icon"
            />
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div>
          <div>
            <h1
              style={{ fontSize: "3em", textAlign: "center" }}
              className="ui header"
            >
              Todos App
            </h1>
          </div>
          <div
            className="ui input focus"
            style={{ marginRight: "20px", marginTop: "20px" }}
          >
            <input
              style={{ width: "600px" }}
              type="text"
              placeholder="Add Todo..."
              ref={this.inputAddTodo}
            />
          </div>
          <button
            onClick={() =>
              this.props.addTodo({
                id: (((1 + Math.random()) * 0x10000) | 0)
                  .toString(16)
                  .substring(1),
                todo: this.inputAddTodo.current.value,
                completed: false
              })
            }
            style={{ width: "150px" }}
            className="ui secondary button"
          >
            Add
          </button>
          <div
            style={{
              marginTop: "40px"
            }}
          >
            {this.renderTodos()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.todos;
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addTodo, deleteTodo, completedTodo }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
