import React from "react";
import { Link } from "react-router-dom";


const FormatDescription = (description) =>{
    return description.substring(0,20) + "..."
}

const ProjectCard = (props) =>{
    const {project, onEdit}= props
    const handleEditClick = (projectBeingEdited) => {
        onEdit(projectBeingEdited)
    }

    return(
        <div className="card">
            <img src={project.strCategoryThumb} alt={project.strCategory} />
            <section className="section dark ">
                    <h5 className="strong">
                        <strong>{project.strCategory}</strong>
                    </h5>
                    <Link to={"/makanan/" + project.id}>
                    <p>{FormatDescription(project.strCategoryDescription)}</p>
                    </Link>
                    <p>{project.price}</p>
                <button className="bordered" onClick={()=>handleEditClick(project)}>
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>
    )
}

export default ProjectCard