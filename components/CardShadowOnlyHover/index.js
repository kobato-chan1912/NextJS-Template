import { Card, withStyles } from '@material-ui/core';

/* card thường chỉ shadow khi hover */
const CardShadowOnlyHover = withStyles(
  {
    root: {
      wordBreak: 'break-word',
      overflow: 'unset',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: `0px 3px 20px 0px rgba(44, 101, 144, 0.3)`,
      },
    },
  },
  { name: 'AtomCardShadowOnlyHover' },
)(Card);
export default CardShadowOnlyHover;