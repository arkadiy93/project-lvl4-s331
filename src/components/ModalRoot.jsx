import React from 'react';
import InfoModal from './modals/InfoModal';
import AddChannelModal from './modals/AddChannelModal';
import connect from '../connect';


const MODAL_COMPONENTS = {
  INFO_MODAL: InfoModal,
  ADD_CHANNEL_MODAL: AddChannelModal,
  // other modals
};

const mapStateToProps = ({ modalData }) => {
  const props = {
    modalData,
  };
  return props;
};

@connect(mapStateToProps)
class ModalRoot extends React.Component {
  render() {
    const { modalData: { modalType } } = this.props;
    if (!modalType) {
      return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];
    return <SpecificModal />;
  }
}

export default ModalRoot;