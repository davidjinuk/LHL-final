import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Greetings extends React.Component {

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      this.context.router.push('/groceries');
    }
  }

  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container">
            <div className="row">
              <div className="tag-line col-lg-12">
                <h2>Help reduce food waste. Earn some reward points while you're at it.</h2>
              </div>
              <div className="row">
              <div className="image-container col-lg-12">
                <img className="masthead-image" src="/pictures/landing/food-graphic.png" />
                <img className="masthead-image" src="/pictures/landing/food-graphic2.png" />
                <img className="masthead-image" src="/pictures/landing/food-graphic3.png" />
              </div>
              </div>
            </div>
          </div>
        </header>
        <div className="overview container">
          <div className="row">
            <div className="heading col-sm-12">
              <h3>How it works, and why you should care</h3>
              <span className="glyphicon glyphicon-chevron-down"/>
            </div>
          </div>
          <div className="row">
            <img src="/pictures/landing/diagram.png" />
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h2>Pick up surplus food</h2>
            </div>
            <div className="col-sm-4">
              <h2>Deliver the goods to those in need</h2>
            </div>
            <div className="col-sm-4">
              <h2>Earn reward points while reducing waste</h2>
            </div>
          </div>
        </div>
        <footer className="landing-footer">
          <div className="row">
            <div className="col-lg-12">
              <h2>Join in, make a difference, and save a few bucks.</h2>
              <Link className="page-scroll" to="/signup"><button className="btn btn-lg">Sign up</button></Link>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}


Greetings.propTypes = {
  auth: React.PropTypes.object.isRequired,
}

Greetings.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Greetings);
