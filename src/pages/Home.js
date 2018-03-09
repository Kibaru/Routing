import React, { Component } from 'react';
import uuid from 'uuid';
import axios from 'axios';

import Projects from '../components/Projects';
import AddProject from '../components/AddProject';
import Users from '../components/Users'

class Home extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      users: []
    }
  }

  getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users =>this.setState({users}, () => console.log(this.state)));
  }

  getProjects(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart',
        category: 'Web Development'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
    this.getUsers();
  }

  componentDidMount(){
    this.getUsers();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render(){
    return (
      <div>
          <div className="container">
            <h1>Home page</h1>
            <AddProject addProject={this.handleAddProject.bind(this)} />
            <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/><br/>
            <Users users={this.state.users} />
          </div>
      </div>
    );
  }
}

export default Home;
