import { withKnobs, text } from '@storybook/addon-knobs';
import Main from './Main';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado 2')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
);
