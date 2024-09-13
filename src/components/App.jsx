// eslint-disable-next-line
import React, { Component } from 'react';
import MainApp from "./MainApp/MainApp";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap:10,
      }}
    >
  <MainApp/>
    </div>
  );
};
