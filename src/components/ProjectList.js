import { Component } from "react";

export class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="projectList">
        {projects.map((el, ind) => (
          <img className="foto" key={ind} src={el.img} alt={el.category} />
        ))}
      </div>
    );
  }
}
