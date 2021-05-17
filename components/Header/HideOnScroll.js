import React from 'react';
import PropTypes from 'prop-types';
import { useScrollTrigger } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

/* ẩn hiện appbar hoặc navigation bottom */
/* https://material-ui.com/components/app-bar/#usescrolltrigger-options-trigger */
export default function HideOnScroll({ children, slideProps }) {
  const trigger = useScrollTrigger();

  return (
    <Slide in={!trigger} {...slideProps}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  slideProps: PropTypes.object,
};