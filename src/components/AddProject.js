import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor(){
    super()
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    }
    else{
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render(){
    let categoryOptions = this.props.categories.map(category =>{
      return <option key={category} value={category}>{category}</option>
    });
    return (
      <div className="container">
        <h3>Add New Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label className="control-label">Title</label><br/>
            <input className="form-control" type="text" ref="title"/>
          </div>
          <div className="form-group">
            <label className="control-label">Category</label><br/>
            <select className="form-control select-picker" ref="category">
              {categoryOptions}
            </select>
          </div> <br/>
          <input className="btn btn-primary btn-lg" type="submit" value="Submit"/> <br/><br/>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func
}

export default AddProject;
