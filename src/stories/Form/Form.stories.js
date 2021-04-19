import React from "react";

import { Form } from "../Form/Form";

export default {
  title: "Example/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Login = Template.bind({});
