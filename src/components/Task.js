import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as Complete } from "../assests/complete.svg";
import { ReactComponent as Star } from "../assests/star.svg";
import { ReactComponent as Check } from "../assests/check.svg";
import { ReactComponent as Delete } from "../assests/delete.svg";

const Task = ({
  id,
  description,
  isStarred,
  isCompleted,
  toggleCompletion,
  toggleStarred,
  deleteTask,
}) => {
  return (
    <div className="task">
      {!isCompleted ? (
        <Complete
          className="complete"
          onClick={(e) => {
            toggleCompletion(id);
          }}
        />
      ) : (
        <Check
          className="complete"
          onClick={(e) => {
            toggleCompletion(id);
          }}
        />
      )}

      <p>{description}</p>
      {!isStarred ? (
        <Star
          className="star"
          onClick={(e) => {
            toggleStarred(id);
          }}
        />
      ) : (
        <Star
          className="star"
          fill="#FFD700"
          onClick={(e) => {
            toggleStarred(id);
          }}
        />
      )}

      <Delete className="delete" onClick={(e) => deleteTask(id)} />
    </div>
  );
};

Task.propTypes = {
  description: PropTypes.string,
  isStarred: PropTypes.bool,
  isCompleted: PropTypes.bool,
};

Task.defaultProps = {
  description: "Boilerplate Todo Description",
  isCompleted: false,
  isStarred: false,
};

export default Task;
