import React from 'react';
import ShelterConfirm from './ShelterConfirm';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages.js';

class ShelterPage extends React.Component {

  render() {
    const { addFlashMessage } = this.props;
    return (
      <main>
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <ShelterConfirm
            addFlashMessage={addFlashMessage}
          />
        </div>
        <div className="col-md-2"></div>
      </main>
    );
  }
}

ShelterPage.propTypes = {
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { addFlashMessage })(ShelterPage);