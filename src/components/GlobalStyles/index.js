import PropTypes from 'prop-types';
import React from 'react';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    // chỉ chấp nhận một phần tử con duy nhất
    return React.Children.only(children);
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
