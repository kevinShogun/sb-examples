import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
	title: "UI/MyLabel",
	component: MyLabel,
	argTypes: {
		color: { control: 'select' },
		fontColor: { control: 'color' }
	}
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
    size: 'normal',
	allCaps: false // true. capotalize the string
}

export const Allcaps = Template.bind({});
Allcaps.args = {
	size: 'normal',
	allCaps: true 
}

export const Secondary = Template.bind({});
Secondary.args = {
	size: "normal",
	color: "secondary"
}

export const Tertiary = Template.bind({});
Tertiary.args = {
	size: "normal",
	color: "tertiary"
}



export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
	fontColor: "#5517ac",
	size: "h1"
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
	backgroundColor: "#333",
	fontColor: "##d0c7dd",
	size: "h1"
}