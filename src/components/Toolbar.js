import { Component } from "react";

export class Toolbar extends Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    return (
      <div className="toolbar">
        {filters.map((el, ind) => (
          <button
            className={el === selected ? "btn btn_active" : "btn"}
            key={ind}
            onClick={onSelectFilter}
          >
            {el}
          </button>
        ))}
      </div>
    );
  }
}
