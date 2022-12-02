import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args}></Footer>
);

export const footer = Template.bind({});
footer.args = {};
