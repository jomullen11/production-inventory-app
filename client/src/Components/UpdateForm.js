import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import sleep from "sleep-promise";

class UpdateForm extends Component {
  state = {
    redirect: false,
    activeRoute: this.props.activeRoute,
    name: this.props.read.name,
    type: this.props.read.type,
    location: this.props.read.location,
    desc: this.props.read.desc,
    expire: this.props.read.expire,
    from: this.props.location
  };

  handleSubmit = async (event, resolve) => {
    event.preventDefault();
    await fetch(`${'/api' + this.props.location.pathname}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(this.state)
    })
      .then(sleep(100))
      .then(() => this.setState({ redirect: !this.state.redirect }))
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const redirect = this.state.redirect;
    return (
      <Fragment>
        {redirect ? (
          <Redirect
            to={{
              pathname: `/refresh${this.state.activeRoute}`,
              state: { from: this.props.location }
            }}
          />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              placeholder="Update Name"
              onChange={this.handleChange}
              required
            />
            <br />
            <input
              type="text"
              name="type"
              value={this.state.type}
              placeholder="Update Type"
              onChange={this.handleChange}
              required
            />
            <br />
            <input
              type="text"
              name="location"
              value={this.state.location}
              placeholder="Update Location"
              onChange={this.handleChange}
            />
            <br />
            <textarea
              type="text"
              name="desc"
              value={this.state.desc}
              placeholder="Update Description"
              onChange={this.handleChange}
            />
            <br />
            Update Expiration:{" "}
            <input
              type="date"
              name="expire"
              value={this.state.expire}
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Update" />
          </form>
        )}
      </Fragment>
    );
  }
}

export default UpdateForm;
