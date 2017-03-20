import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/redeemActions';
import * as pointActions from '../../actions/pointsActions';
import { Link } from 'react-router';
import { routeTo } from '../../routes';

class DashboardMain extends React.Component {
  constructor(props) {
    super(props);

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.redeem = this.redeem.bind(this);
  }

  decrement() {
    let actions = this.props.actions;
    if (this.props.redeem >= 1000) {
      actions.decrement();
    }
  }

  increment() {
    let actions = this.props.actions;
    if ((this.props.redeem + 1000) <= this.props.reward_points) {
      actions.increment();
    }
  }

  redeem() {
    this.props.pointActions.currentPoints(this.props.auth.user.id, (this.props.reward_points - this.props.redeem));
    this.props.actions.reset();
    routeTo('/dashboard-confirm');
  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">
            Redeem Points
          </div>
          <div className="panel-body">
            <div className="col-md-5">
              <div className="box-panel panel panel-default">
                <img src="/pictures/dashboard/fuel-graphic.png" alt="Gas Image"/>
                <div className = "panel-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <span className="badge">{this.props.reward_points - this.props.redeem}</span>
                      Redeemable Points
                    </li>
                    <li className="list-group-item">
                      <span className="badge">{this.props.redeem}</span>
                      Points Redeemed
                    </li>
                  </ul>
                </div>
                <div className="panel-footer">
                  <div className="text-center">
                    <div className="btn-group btn-group-lg" role="group" aria-label="...">
                      <button type="button" className="btn btn-default" onClick={this.decrement}>-</button>
                      <button type="button" className="btn btn-default" onClick={this.redeem}>Redeem</button>
                      <button type="button" className="btn btn-default" onClick={this.increment}>+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4>Redeem 1000 points for a $10 fuel voucher!</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            Current stores with items available:
          </div>
          <div className="panel-body">
            <div>
              <div className="col-sm-4"><img className="redeem-img" src="/pictures/groceries/iga-square.png" /></div>
              <div className="col-sm-4"><img className="redeem-img" src="/pictures/groceries/nestersmarket-square.png" /></div>
              <div className="col-sm-4"><img className="redeem-img" src="/pictures/groceries/meinhardt-square.jpg" /></div>
            </div>
          </div>
          <div className="panel-footer">
          <Link className="page-scroll" to="/groceries">See more stores</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  reward_points: state.userPoints,
  redeem: state.redeem,
  // currentPoints: state.points,
  groceries: state.groceries,
  auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  pointActions: bindActionCreators(pointActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMain);