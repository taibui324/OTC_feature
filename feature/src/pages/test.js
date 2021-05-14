import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import * as React from 'react';
import instagram from '../src/components/pages';

test('should render self and sub-components', () => {
  const tree = shallow(<InstagramEmbed url="https://instagr.am/p/Zw9o4/" clientAccessToken="abc|123" />);
  expect(toJson(tree)).toMatchSnapshot();
});