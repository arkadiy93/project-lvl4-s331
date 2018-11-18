import React from 'react';
import SideBarContainer from '../containers/SideBarContainer';
import MainFieldContainer from '../containers/MainFieldContainer';
import ModalWindowContainer from '../containers/ModalWindowContainer';

const App = () => (
  <div className="row h-100">
    <SideBarContainer />
    <MainFieldContainer />
    <ModalWindowContainer />
  </div>
);


export default App;
