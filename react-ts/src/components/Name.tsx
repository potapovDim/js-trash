import * as React from "react";

export class Name extends React.Component<any, any> {
  onClick = () => {
    const { removeName, name } = this.props;
    removeName && removeName(name)
  };
  render() {
    const {name} = this.props
    return (
      <div>
        <span className="span">This name is {name} :)</span>
        <button onClick={this.onClick}>Remove Name</button>
      </div>
    );
  }
};
