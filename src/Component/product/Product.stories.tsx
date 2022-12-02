import { ComponentMeta, ComponentStory } from "@storybook/react";
import Product from "./product";

export default {
  title: "Product",
  component: Product,
  argTypes: {},
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args}></Product>
);

export const dfdsd = Template.bind({});
dfdsd.args = {};
