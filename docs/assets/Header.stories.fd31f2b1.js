var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{H as n}from"./Header.880f0e2c.js";import{j as s}from"./jsx-runtime.3a806c73.js";import"./Button.289c002a.js";import"./iframe.b36d8265.js";const u={title:"Example/Header",component:n,parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}},"logged-out":{startLoc:{col:48,line:15},endLoc:{col:78,line:15},startBody:{col:48,line:15},endBody:{col:78,line:15}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),d=t.bind({});d.args={user:{name:"Jane Doe"}};const l=t.bind({});l.args={};const y=["LoggedIn","LoggedOut"];export{d as LoggedIn,l as LoggedOut,y as __namedExportsOrder,u as default};
//# sourceMappingURL=Header.stories.fd31f2b1.js.map
