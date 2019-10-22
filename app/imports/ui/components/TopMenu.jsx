import React from 'react';
import { Menu, Container, Icon, Dropdown } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu secondary className={'topmenu'}><Container>
          <Menu.Item fitted><Icon name={'facebook f'}/></Menu.Item>
          <Menu.Item fitted><Icon name={'twitter'}/></Menu.Item>
          <Menu.Item fitted><Icon name={'pinterest'}/></Menu.Item>
          <Menu.Item fitted><Icon name={'instagram'}/></Menu.Item>
          <Menu.Item fitted position={'right'}><Icon name={'home'}/></Menu.Item>
          <Menu.Item fitted><Icon name={'search'}/></Menu.Item>
          <Menu.Item fitted><Icon name={'user'}/></Menu.Item>
          <Menu.Item fitted>
            <Dropdown item text={'MY CART'} icon={'shopping cart'}>
              <Dropdown.Menu>
                <Dropdown.Item>Your cart is currently empty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container></Menu>
    );
  }
}
