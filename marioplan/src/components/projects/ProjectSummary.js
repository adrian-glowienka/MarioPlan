import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="project-list section">
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName}{project.authorLastName}</p>
                <p className="grey-text">27 September, 1am</p>
            </div>
        </div>
    </div>
    )
}

export default ProjectSummary;