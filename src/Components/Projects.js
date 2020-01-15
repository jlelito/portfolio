import React, { Component } from 'react';
import image from '../Assets/loan.jpg'
import BootstrapCard from './Cards/CardUI.jsx';



class Projects extends Component {
  constructor(props) {
    super(props);

    this.projects = props.projects;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
        <div className="w-100">
          <h2 className="mb-5">Current Projects</h2>
            
         
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
         
          {
            this.projects.map((data, index) => (
              
              <BootstrapCard 
                imgsrc={image} 
                title={data.projectName} 
                cardtext={data.projectDetail}
                link={data.link}
              />
              
            ))
          }
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}



export default Projects;
