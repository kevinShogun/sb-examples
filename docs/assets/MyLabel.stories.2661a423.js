var i=Object.defineProperty;var a=(e,n)=>i(e,"name",{value:n,configurable:!0});import{j as l}from"./jsx-runtime.3a806c73.js";import"./iframe.b36d8265.js";const o=a(({allCaps:e=!1,color:n="primary",label:t="no label",size:s="normal",fontColor:c})=>l("span",{className:`label ${s}  text-${n} ${e&&"allCaps"}`,style:{color:c},children:t}),"MyLabel");try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:{value:"no label"},description:"String a colocar",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Tipo del tama\xF1o de fuente a utilizar",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},color:{defaultValue:{value:"primary"},description:"Tipo de  color de fuente a utilizar",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},allCaps:{defaultValue:{value:"false"},description:"Todas mayusculas",name:"allCaps",required:!1,type:{name:"boolean"}},fontColor:{defaultValue:null,description:"Selector de colores personalizados",name:"fontColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyLabel.tsx#MyLabel"]={docgenInfo:o.__docgenInfo,name:"MyLabel",path:"src/components/MyLabel.tsx#MyLabel"})}catch{}const C={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { MyLabel } from "../../components/MyLabel";\r
\r
export default {\r
	title: "UI/MyLabel",\r
	component: MyLabel,\r
	argTypes: {\r
		color: { control: 'select' },\r
		fontColor: { control: 'color' }\r
	}\r
} as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => (\r
	<MyLabel {...args} />\r
);\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
    size: 'normal',\r
	allCaps: false // true. capotalize the string\r
}\r
\r
export const Allcaps = Template.bind({});\r
Allcaps.args = {\r
	size: 'normal',\r
	allCaps: true \r
}\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
	size: "normal",\r
	color: "secondary"\r
}\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
	size: "normal",\r
	color: "tertiary"\r
}\r
\r
\r
\r
export const CustomFontColor = Template.bind({});\r
CustomFontColor.args = {\r
	fontColor: "#5517ac",\r
	size: "h1"\r
}`,locationsMap:{basic:{startLoc:{col:49,line:13},endLoc:{col:1,line:15},startBody:{col:49,line:13},endBody:{col:1,line:15}},allcaps:{startLoc:{col:49,line:13},endLoc:{col:1,line:15},startBody:{col:49,line:13},endBody:{col:1,line:15}},secondary:{startLoc:{col:49,line:13},endLoc:{col:1,line:15},startBody:{col:49,line:13},endBody:{col:1,line:15}},tertiary:{startLoc:{col:49,line:13},endLoc:{col:1,line:15},startBody:{col:49,line:13},endBody:{col:1,line:15}},"custom-font-color":{startLoc:{col:49,line:13},endLoc:{col:1,line:15},startBody:{col:49,line:13},endBody:{col:1,line:15}}}}},title:"UI/MyLabel",component:o,argTypes:{color:{control:"select"},fontColor:{control:"color"}}},r=a(e=>l(o,{...e}),"Template"),d=r.bind({});d.args={size:"normal",allCaps:!1};const p=r.bind({});p.args={size:"normal",allCaps:!0};const y=r.bind({});y.args={size:"normal",color:"secondary"};const m=r.bind({});m.args={size:"normal",color:"tertiary"};const u=r.bind({});u.args={fontColor:"#5517ac",size:"h1"};const g=["Basic","Allcaps","Secondary","Tertiary","CustomFontColor"];export{p as Allcaps,d as Basic,u as CustomFontColor,y as Secondary,m as Tertiary,g as __namedExportsOrder,C as default};
//# sourceMappingURL=MyLabel.stories.2661a423.js.map
