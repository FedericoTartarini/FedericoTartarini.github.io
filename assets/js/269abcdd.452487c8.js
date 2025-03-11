"use strict";(self.webpackChunkmy_personal_website=self.webpackChunkmy_personal_website||[]).push([[3432],{299:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(4848),s=t(8453);const a={tags:["research"],keywords:["heat stress","burn survivors","web tool","heat risk","physical activity","burn injury","thermoregulation","heat-related illness"],image:"./img/burn-tool.png",description:'The "Burn Survivor Heat Risk Calculator" is a free online tool designed to provide personalised heat risk assessments for burn survivors during physical activity.',last_update:{author:"Federico Tartarini"}},n='The "Burn Survivor Heat Risk Calculator": A Tool for Safe Physical Activity',o={id:"my-research/25-03-burn-survivor-tool",title:'The "Burn Survivor Heat Risk Calculator": A Tool for Safe Physical Activity',description:'The "Burn Survivor Heat Risk Calculator" is a free online tool designed to provide personalised heat risk assessments for burn survivors during physical activity.',source:"@site/docs/my-research/25-03-burn-survivor-tool.md",sourceDirName:"my-research",slug:"/my-research/25-03-burn-survivor-tool",permalink:"/docs/my-research/25-03-burn-survivor-tool",draft:!1,unlisted:!1,editUrl:"https://github.com/FedericoTartarini/FedericoTartarini.github.io/tree/master/docs/my-research/25-03-burn-survivor-tool.md",tags:[{inline:!0,label:"research",permalink:"/docs/tags/research"}],version:"current",frontMatter:{tags:["research"],keywords:["heat stress","burn survivors","web tool","heat risk","physical activity","burn injury","thermoregulation","heat-related illness"],image:"./img/burn-tool.png",description:'The "Burn Survivor Heat Risk Calculator" is a free online tool designed to provide personalised heat risk assessments for burn survivors during physical activity.',last_update:{author:"Federico Tartarini"}},sidebar:"tutorialSidebar",previous:{title:"Do Typical Indoor Air Temperatures Affect Work Performance? No\ufe0f",permalink:"/docs/my-research/24-08-towp"},next:{title:"Tools",permalink:"/docs/category/tools"}},l={image:t(9964).A},c=[{value:"Development of the Heat Risk Calculator",id:"development-of-the-heat-risk-calculator",level:2},{value:"Validation of the Predictive Model",id:"validation-of-the-predictive-model",level:2},{value:"Implications",id:"implications",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const i={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"the-burn-survivor-heat-risk-calculator-a-tool-for-safe-physical-activity",children:'The "Burn Survivor Heat Risk Calculator": A Tool for Safe Physical Activity'})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Burn survivors have unique challenges in regulating their body temperature"})," due to permanent impairments in their skin's ability to dissipate heat through sweating and blood flow.\nThis can lead to a ",(0,r.jsx)(i.strong,{children:"heightened risk of heat-related illnesses"})," and increased perceived exertion during physical activity, potentially discouraging them from engaging in much-needed exercise."]}),"\n",(0,r.jsxs)(i.p,{children:["To address this critical issue, we have developed and validated a free online tool, the ",(0,r.jsxs)(i.strong,{children:['"Burn Survivor Heat Risk Calculator" (',(0,r.jsx)(i.a,{href:"http://www.bsrcalculator.org",children:"www.bsrcalculator.org"}),")"]}),", designed to provide personalised heat risk assessments for burn survivors during physical activity."]}),"\n",(0,r.jsxs)("div",{class:"img-center",style:{"margin-bottom":"20px"},children:[" ",(0,r.jsx)(i.img,{alt:"BCA building",src:t(1465).A+"",width:"3015",height:"1984"})]}),"\n",(0,r.jsx)(i.h2,{id:"development-of-the-heat-risk-calculator",children:"Development of the Heat Risk Calculator"}),"\n",(0,r.jsxs)(i.p,{children:["The foundation of the calculator lies in a ",(0,r.jsx)(i.strong,{children:"modified two-node thermal physiological model"}),".\nWe adapted this model to account for the ",(0,r.jsx)(i.strong,{children:"reduced sweating capacity"})," in burn-injured skin by adjusting the maximal skin wettedness value based on the ",(0,r.jsx)(i.strong,{children:"percentage of total body surface area (TBSA) affected by the burn"}),".\nThis acknowledges that only the uninjured skin can effectively produce sweat for evaporative cooling, the primary mechanism for thermoregulation in hot environments."]}),"\n",(0,r.jsx)(i.p,{children:"The calculator requires users to input several key pieces of information:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"User's location:"})," This is used to estimate dry-bulb air temperature (shaded), relative humidity, and wind velocity, obtained via a weather forecast data API. The tool also considers ",(0,r.jsx)(i.strong,{children:"sun exposure"})," to account for radiant heat gain during daylight hours."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Intensity of physical activity:"})," Users select from categories ranging from rest to very high, each corresponding to an estimated rate of metabolic heat production."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Duration of physical activity:"})," The anticipated length of the activity is a crucial factor in estimating core temperature changes."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Clothing:"})," Users select from simplified categories (very light to very heavy) that correspond to established clo values, a measure of thermal insulation provided by garments."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Body size:"})," The model incorporates user-inputted mass and height to estimate body surface area."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Size of burn injury:"})," Users input the percentage of their total body surface area that was burned, which directly influences the model's adjustment of maximal skin wettedness."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The calculator then processes these inputs to estimate the user's ",(0,r.jsx)(i.strong,{children:"core temperature change"})," and categorises their heat risk as either ",(0,r.jsx)(i.strong,{children:"low to moderate (change in core temperature < 1.7\xb0C)"})," or ",(0,r.jsx)(i.strong,{children:"high to extreme (change in core temperature \u2265 1.7\xb0C)"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Furthermore, the application provides a ",(0,r.jsx)(i.strong,{children:"20-hour forecasted heat risk"})," and offers recommendations, such as considering postponing activity or moving it indoors if the predicted risk is high to extreme."]}),"\n",(0,r.jsx)(i.h2,{id:"validation-of-the-predictive-model",children:"Validation of the Predictive Model"}),"\n",(0,r.jsxs)(i.p,{children:['To assess the accuracy of the "Burn Survivor Heat Risk Calculator", the researchers compared its predictions against historical data from laboratory trials.\nThese trials involved ',(0,r.jsx)(i.strong,{children:"134 adults with well-healed burn injuries (\u2265 13% TBSA, \u2265 50% grafted)"})," and ",(0,r.jsx)(i.strong,{children:"157 healthy control participants with simulated burn injuries"}),".\nThe simulated injuries involved covering predetermined percentages of body surface area with a vapor-impermeable material to impede sweat evaporation."]}),"\n",(0,r.jsx)(i.p,{children:"Trials were conducted across a range of environmental conditions (25 to 39\xb0C and 20 to 40% relative humidity) and exercise intensities (45 to 357 W/m\xb2)."}),"\n",(0,r.jsx)(i.p,{children:"The model inputs from these historical trials were used to predict the change in core temperature and the associated heat risk category.\nThe results of the validation process were as follows:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The model achieved an ",(0,r.jsx)(i.strong,{children:"overall predictive accuracy of 85%"})," in categorising heat risk (low to moderate or high to extreme)."]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.strong,{children:"specificity was 85%"}),", indicating that the model correctly identified low to moderate risk in 85% of the cases where it was actually low to moderate."]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.strong,{children:"sensitivity was 79%"}),", meaning the model correctly identified high to extreme risk in 79% of the cases where it was actually high to extreme."]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.strong,{children:"negative predictive value was remarkably high at 98%"}),", suggesting a very low chance of experiencing a high to extreme core temperature increase when the model predicts a low to moderate risk."]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.strong,{children:"positive predictive value was 27%"}),", indicating that when the model predicted a high to extreme risk, it was correct only 27% of the time, suggesting a tendency to overpredict risk in this category."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The researchers also found that the model appropriately predicted ",(0,r.jsx)(i.strong,{children:"greater increases in core temperature with larger burn injury sizes"})," across various environmental conditions.\nThis highlights the model's ability to account for the physiological impact of burn injury on thermoregulation."]}),"\n",(0,r.jsx)(i.h2,{id:"implications",children:"Implications"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.strong,{children:"Burn Survivor Heat Risk Calculator"})," offers a valuable tool for burn survivors and their caregivers to ",(0,r.jsx)(i.strong,{children:"proactively manage heat risk"})," during physical activity.\nBy providing a personalised risk assessment, the tool can empower individuals to make informed decisions about when, where, and how intensely they can exercise safely, potentially promoting a more active lifestyle crucial for their long-term health.\nGiven the increasing global temperatures and the frequency of heatwaves, such a tool is becoming increasingly important for this vulnerable population."]}),"\n",(0,r.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsx)(i.p,{children:"However, the researchers acknowledge several limitations:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The validation data did not account for repeated measures from the same participant, which might modestly inflate the accuracy."}),"\n",(0,r.jsx)(i.li,{children:"While the binary risk prediction is good, the model's ability to precisely predict the actual elevation in core temperature (\xb0C) is more variable."}),"\n",(0,r.jsx)(i.li,{children:"The model assumes a uniform resting core temperature, which may affect the accuracy for individuals with different baseline temperatures."}),"\n",(0,r.jsx)(i.li,{children:"The model focuses primarily on impairments in evaporative heat loss (sweating) and does not fully incorporate the impact of impaired cutaneous vasodilation in burn survivors, as its effect on dry heat exchange is still unclear."}),"\n",(0,r.jsx)(i.li,{children:"Wind speed data is obtained from weather APIs at a height that may differ from ground level, and the model does not account for convective airflow during activities like cycling."}),"\n",(0,r.jsx)(i.li,{children:"Different clothing combinations were not systematically tested during validation."}),"\n",(0,r.jsx)(i.li,{children:"The validation participants were not heat-acclimated, so the risk categorisation might overestimate risk for individuals regularly exposed to heat."}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Despite these limitations, the ",(0,r.jsx)(i.strong,{children:"Burn Survivor Heat Risk Calculator"})," represents a significant step forward in providing burn survivors with a means to understand and mitigate their heat risk during physical activity.\nThe tool's strong negative predictive value suggests it is reliable in identifying low-risk scenarios, offering confidence to individuals seeking to engage in a more physically active lifestyle."]}),"\n",(0,r.jsx)(i.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.a,{href:"https://journals.lww.com/acsm-msse/abstract/9900/development_and_validation_of_a_heat_risk.749.aspx",children:"McKenna, Z.J., Foster, J., Atkins, W.C., Gideon, E.A., Jay, O., Tartarini, F. and Crandall, C.G., 2025. Development and Validation of a Heat Risk Mitigation Tool for Burn Survivors. Medicine and science in sports and exercise."})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9964:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/burn-tool-ecaa2dbd0f26dd2432ef819421760e59.png"},1465:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/burn-tool-ecaa2dbd0f26dd2432ef819421760e59.png"},8453:(e,i,t)=>{t.d(i,{R:()=>n,x:()=>o});var r=t(6540);const s={},a=r.createContext(s);function n(e){const i=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),r.createElement(a.Provider,{value:i},e.children)}}}]);