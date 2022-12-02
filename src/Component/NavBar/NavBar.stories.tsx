import { ComponentMeta, ComponentStory } from "@storybook/react";
import NavBar from "./NavBar";

export default {
  title: "NavBar",
  component: NavBar,
  argTypes: {},
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args}></NavBar>
);

export const defaultNav = Template.bind({});
defaultNav.args = {};
