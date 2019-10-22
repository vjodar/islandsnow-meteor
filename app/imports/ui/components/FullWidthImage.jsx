import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        <Image>
          src={'https://bit.ly/2MzoC2c'} fluid
        </Image>
    );
  }
}
