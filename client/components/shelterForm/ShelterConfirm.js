import React from 'react';
import { connect } from 'react-redux';
import { postDeliveredAt } from '../../actions/shelterConfirmActions';
import { routeTo } from '../../routes';
import moment from 'moment';
import { addFlashMessage } from '../../actions/flashMessages.js';

class ShelterForm extends React.Component {

  onClick() {
    this.props.validateDelivery();
    // routeTo('/');
    this.props.addFlashMessage({
      type: 'success',
      text: 'Enjoy your food!'
    });
  }

  fetchDeliveryData(infoType, businessType, deliveryID) {
    let result;
    businessType.forEach(business => {
      if (business.id === deliveryId) {
        result = business[infoType];
      }
    });
    return result;
  }

  typeNum(type, boxArr) {
    let typeArr = boxArr.filter(box => {
      if(box.type === type) {
        return box;
      }
    })
    return typeArr.length;
  }

  render() {
    return(
      <div>
        <header className="page-header">
          <h1>New delivery! </h1>
        </header>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Transporter</th>
              <th>Boxes of Produce</th>
              <th>Boxes of Baked Goods</th>
              <th>Boxes of Dairy</th>
              <th>Expected Delivery</th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row">
              <td>{this.props.user.first_name} {this.props.user.last_name}</td>
              <td>{this.typeNum('Produce', this.props.boxes)}</td>
              <td>{this.typeNum('Baked Goods', this.props.boxes)}</td>
              <td>{this.typeNum('Dairy', this.props.boxes)}</td>
              <td>{this.props.expected_delivery}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary btn-outline" type="submit" onClick={() => this.onClick()}>
          Package Arrived!
        </button>
      </div>
    );
  }
}

ShelterForm.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {

  const expected_delivery = moment(state.packages.created_at).add(1.25, "hours").calendar();//.format('MMMM Do YYYY, h:mm:ss a')
  const shelter = state.packages.shelter;
  const grocery = state.packages.grocery;
  const boxes = state.packages.box;
  const user = state.packages.user;

  return {
    expected_delivery,
    shelter,
    grocery,
    boxes,
    user
  };
}

function mapDispatchToProps(dispatch){
  return {
    validateDelivery: (data) => {
      return dispatch(postDeliveredAt(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShelterForm);