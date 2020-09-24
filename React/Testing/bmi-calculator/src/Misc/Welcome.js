import React from 'react';

export default function Welcome(props) {
    const name = props.name;
    return (
      <h2>Hi there! I am {name}.</h2>
    );
}
