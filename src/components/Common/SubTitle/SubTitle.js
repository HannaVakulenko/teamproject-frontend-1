import React from 'react';
import PropTypes from 'prop-types';
import { StyledSubTitle } from './SubTitle.styled';

const SubTitle = ({ title }) => <StyledSubTitle>{title}</StyledSubTitle>;

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubTitle;
