var N=Object.defineProperty;var i=(a,c)=>N(a,"name",{value:c,configurable:!0});import{r as p,b as g,j as o}from"./jsx-runtime.3a806c73.js";import"./iframe.b36d8265.js";const r=[{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+1_slider+propiedades.jpg",alt:"Neocasa living room",text:"1"},{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+2_slider+propiedades.jpg",alt:"Neocasa first home",text:"2"},{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+3_slider+propiedades.jpg",alt:"Neocasa second home",text:"3"},{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen_Propiedad+4.jpg",alt:"Neocasa living room",text:"4"},{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+4_slider+propiedades.jpg",alt:"Neocasa first home",text:"5"},{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+3_slider+propiedades.jpg",alt:"Neocasa second home",text:"6"},{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+4_slider+propiedades.jpg",alt:"Neocasa first home",text:"7"},{img:"https://polpo-assets.s3.amazonaws.com/production/+Neocasa-FrontOffice/Propiedades/Imagen+3_slider+propiedades.jpg",alt:"Neocasa second home",text:"8"}],n=i(({cantImage:a=3})=>{const c=r.length-(a-1),[f,y]=p.exports.useState([]),[C,m]=p.exports.useState(0),[s,l]=p.exports.useState(0);let u=[];const h=i(e=>{m(e);let t=[];for(let d=e;d<e+3;d++)t.push(r[d]);l(e)},"newImages");p.exports.useEffect(()=>{const e=setInterval(()=>l(t=>t+1),3500);return s>=c?(l(0),()=>{clearInterval(e)}):(y(r.slice(s,s+a)),m(s===r.length-2?0:s),()=>{clearInterval(e)})},[s,r,a]);for(let e=0;e<c;e++)u.push(o("button",{className:` buttons ${e===C?"borderYellow":"borderGray"}`,onClick:()=>h(e)},e));return g("div",{className:"p-content container",children:[o("h4",{className:"title",children:"featured"}),o("div",{className:"containerFlex",children:f.map((e,t)=>g("div",{className:"cardImage",children:[o("div",{className:"overlay"}),o("p",{className:"cardText",children:e.text}),o("img",{src:e.img,alt:e.alt})]},t))}),o("div",{children:u}),o("br",{}),o("button",{type:"button",className:"black-bottom ",children:"See"})]})},"MyCarrousel");try{n.displayName="MyCarrousel",n.__docgenInfo={description:"",displayName:"MyCarrousel",props:{cantImage:{defaultValue:{value:"3"},description:"cantidad de imagenes a mostrar en el carrousel",name:"cantImage",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/MyCarrousel.tsx#MyCarrousel"]={docgenInfo:n.__docgenInfo,name:"MyCarrousel",path:"src/components/MyCarrousel.tsx#MyCarrousel"})}catch{}const O={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { MyCarrousel } from "../../components/MyCarrousel";\r
\r
export default {\r
	title: "UI/MyCarrousel",\r
	component: MyCarrousel,\r
} as ComponentMeta<typeof MyCarrousel>;\r
\r
const Template: ComponentStory<typeof MyCarrousel> = (args) => (\r
	<MyCarrousel {...args} />\r
);\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
    cantImage: 3\r
};\r
`,locationsMap:{basic:{startLoc:{col:53,line:9},endLoc:{col:1,line:11},startBody:{col:53,line:9},endBody:{col:1,line:11}}}}},title:"UI/MyCarrousel",component:n},_=i(a=>o(n,{...a}),"Template"),x=_.bind({});x.args={cantImage:3};const S=["Basic"];export{x as Basic,S as __namedExportsOrder,O as default};
//# sourceMappingURL=MyCarrousel.stories.89c15941.js.map
