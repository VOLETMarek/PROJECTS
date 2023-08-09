import React from 'react';

/* eslint-disable react/prefer-stateless-function */
import Form from '../Form/Form';
import Counter from '../Counter/Counter';
import Tasks from '../Tasks/Tasks';

import './App.scss';

import tasksList from '../../data/tasks';

class App extends React.Component {
  constructor(props) {
    super(props);

    // default states values
    this.state = {
      tasks: tasksList,
      inputTaskLabel: '',
    };

    this.createTask = this.createTask.bind(this);
    this.handleInputLabelChange = this.handleInputLabelChange.bind(this);
  }

  // function triggers when input field changes
  handleInputLabelChange(newValue) {
    this.setState({
      inputTaskLabel: newValue,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  createTask() {
    const { inputTaskLabel, tasks } = this.state;
    // Next id calculation (take the highest current task id and add +1)
    const idsArray = tasks.map((item) => item.id);

    // - fonction Math.max() allow us to fetch max id
    const idMax = Math.max(...idsArray);
    const nextId = idMax + 1;

    const newTask = {
      id: nextId,
      label: inputTaskLabel,
      done: false,
    };

    this.setState({
      tasks: [...tasks, newTask],
      inputTaskLabel: '',
    });
  }

  render() {
    const { tasks, inputTaskLabel } = this.state;

    const tasksNotDone = tasks.filter((item) => !item.done);
    const nbTasksNotDone = tasksNotDone.length;

    return (
      <div className="App">
        <Form
          handleSubmit={this.createTask}
          value={inputTaskLabel}
          setValue={this.handleInputLabelChange}
        />
        <Counter numberIncompleteTasks={nbTasksNotDone} />
        <Tasks tasks={tasks} />
      </div>
    );
  }
}

export default App;
