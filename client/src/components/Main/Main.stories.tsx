import { Meta, Story } from '@storybook/react/types-6-0';
import Main from './Main';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'teste',
    description: 'description'
  }
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
