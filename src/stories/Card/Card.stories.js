import React from "react";

import { Card } from "../Card/Card";

export default {
  title: "Example/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  hoverable: true,
  title: "This is a title",
  description: "This is a description",
  cover: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
};
