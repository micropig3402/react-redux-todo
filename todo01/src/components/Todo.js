import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text}) => {
  return (
    <li
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}>
      {text}
    </li>
  );
};

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
