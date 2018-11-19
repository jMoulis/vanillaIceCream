import jss from 'jss';
import preset from 'jss-preset-default';

export const withStyles = style => {
  jss.setup(preset());
  const { classes } = jss.createStyleSheet(style).attach();
  return classes;
};

export default withStyles;
