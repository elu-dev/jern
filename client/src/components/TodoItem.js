import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  
  getStyle() {
    return {
      backgroundColor: '#EEE',
      borderBottom: '2px solid #AAA',
      padding: '10px',
      // maxWidth: '700px',
      // width: '100%',
      flex: '10',
      color: this.props.todo.completed ? '#090': '#900'
    }
  }
  
  render() {
    const { id, title, completed} = this.props.todo

    return (
      <div style={{display:'flex'}}>
        <p style={this.getStyle()}>
          <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} /> {' '}
          {title}
        </p>
        <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


const btnStyle = {
  backgroundColor: '#D00',
  color: 'white',
  border: '1px solid #D00',
  borderBottom: '1px solid #A00',
  borderLeft: '2px solid #A00',
  flex: '1',
  padding: '5px 19px',
  cursor: 'pointer',
}


export default TodoItem;
