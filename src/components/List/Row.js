import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import Votes from '../../components/Votes';

const RowWrapper = styled.View`
  flex-direction: row;
  padding-left: 27;
  padding-right: 10;
  padding-top: 10;
  padding-bottom: 10;
  border-bottom-width: 1;
  border-bottom-color: #c8c7cc;
`;

const TextContent = styled.View`
  flex: 1;
`;

const SideContent = styled.View`
  width: 48;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 17;
  letter-spacing: -0.41;
  color: #030303;
`;
const Subtitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  padding-top: 5;
  font-size: 15;
  letter-spacing: -0.24;
  color: #8f8e94;
`;
const Date = styled.Text`
  color: green;
`;

const Row = ({
  title, subtitle, votes, onPress,
}) => (
  <TouchableOpacity onPress={onPress}>
    <RowWrapper>
      <TextContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContent>
      <SideContent>
        <Votes votes={votes} />
        <Date>3:13</Date>
      </SideContent>
    </RowWrapper>
  </TouchableOpacity>
);

Row.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Row;
