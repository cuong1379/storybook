import React from "react";

import { Input } from "../Input/Input";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputType: "text",
  inputName: "usename",
  placeholder: "Basic input",
  size: "large",
  disable: "false",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  inputType: "number",
  inputName: "phone",
  placeholder: "Number input",
  size: "small",
  disable: "false",
};

export const Disable = Template.bind({});
Disable.args = {
  inputType: "text",
  inputName: "usename",
  placeholder: "Disable input",
  size: "large",
  disable: "false",
};
