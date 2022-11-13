import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyCarrousel } from "../../components/MyCarrousel";

export default {
	title: "UI/MyCarrousel",
	component: MyCarrousel,
} as ComponentMeta<typeof MyCarrousel>;

const Template: ComponentStory<typeof MyCarrousel> = (args) => (
	<MyCarrousel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
    cantImage: 3
};
