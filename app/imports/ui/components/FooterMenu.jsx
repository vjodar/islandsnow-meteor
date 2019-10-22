import React from 'react';
import { Segment, Grid, Input, Button } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Segment padded inverted className={'background'}>
          <Grid columns={3}>
            <Grid.Column>
              NAVIGATION
              <br/><hr/>
              About Us
              <br/>
              Videos
              <br/>
              Store Locations
            </Grid.Column>
            <Grid.Column>
              MAIN MENU
              <br/><hr/>
              Men <br/>
              Women <br/>
              Kids
            </Grid.Column>
            <Grid.Column>
              CONNECT
              <br/><hr/>
              Sign up for the latest updates
              <br/>
              <Input placeholder={'Enter email address'}/>
              <Button secondary>Join</Button>
            </Grid.Column>
          </Grid>
        </Segment>
    );
  }
}
