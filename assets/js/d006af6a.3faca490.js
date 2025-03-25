"use strict";(self.webpackChunkmy_personal_website=self.webpackChunkmy_personal_website||[]).push([[5767],{46:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/pmv-comparison-tsv-ta-90b13160c487186b6621c4f8277870ae.png"},1470:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/pmv-comparison-lowess-7ba52a0ba1fe32f3f34b6ef2e58c678a.png"},1515:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/pmv-comparison-table-2e17f224cf9a62047423095543c3e918.png"},3335:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"my-research/25-03-pmv-comparison-paper","title":"On the accuracy of ASHRAE and ISO PMV models","description":"A paper comparing the accuracy of the PMV and PMV-CE models used in the ISO 7730:2005 and ASHRAE 55:2023 standards, respectively.","source":"@site/docs/my-research/25-03-pmv-comparison-paper.md","sourceDirName":"my-research","slug":"/my-research/25-03-pmv-comparison-paper","permalink":"/docs/my-research/25-03-pmv-comparison-paper","draft":false,"unlisted":false,"editUrl":"https://github.com/FedericoTartarini/FedericoTartarini.github.io/tree/master/docs/my-research/25-03-pmv-comparison-paper.md","tags":[{"inline":true,"label":"research","permalink":"/docs/tags/research"}],"version":"current","frontMatter":{"tags":["research"],"keywords":["predicted mean vote","thermal sensation","thermal comfort","PMV","PMV-CE","ISO 7730","ASHRAE 55","thermal comfort standards"],"image":"./img/pmv-comparison-graphical-abstract.png","description":"A paper comparing the accuracy of the PMV and PMV-CE models used in the ISO 7730:2005 and ASHRAE 55:2023 standards, respectively.","last_update":{"author":"Federico Tartarini"}},"sidebar":"tutorialSidebar","previous":{"title":"The \\"Burn Survivor Heat Risk Calculator\\": A Tool for Safe Physical Activity","permalink":"/docs/my-research/25-03-burn-survivor-tool"},"next":{"title":"Tools","permalink":"/docs/category/tools"}}');var o=t(4848),i=t(8453);const r={tags:["research"],keywords:["predicted mean vote","thermal sensation","thermal comfort","PMV","PMV-CE","ISO 7730","ASHRAE 55","thermal comfort standards"],image:"./img/pmv-comparison-graphical-abstract.png",description:"A paper comparing the accuracy of the PMV and PMV-CE models used in the ISO 7730:2005 and ASHRAE 55:2023 standards, respectively.",last_update:{author:"Federico Tartarini"}},s="On the accuracy of ASHRAE and ISO PMV models",l={image:t(9651).A},d=[{value:"Background",id:"background",level:2},{value:"Objectives of the paper",id:"objectives-of-the-paper",level:2},{value:"Results",id:"results",level:2},{value:"ASHRAE Global Thermal Comfort Database II",id:"ashrae-global-thermal-comfort-database-ii",level:3},{value:"Comparison of PMV accuracy in predicting thermal sensation",id:"comparison-of-pmv-accuracy-in-predicting-thermal-sensation",level:3},{value:"Models overall bias",id:"models-overall-bias",level:3},{value:"Implications for the ASHRAE 55:2023 and ISO 7730:2005 standards and PMV users",id:"implications-for-the-ashrae-552023-and-iso-77302005-standards-and-pmv-users",level:2},{value:"Read the paper",id:"read-the-paper",level:2}];function h(e){const a={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.header,{children:(0,o.jsx)(a.h1,{id:"on-the-accuracy-of-ashrae-and-iso-pmv-models",children:"On the accuracy of ASHRAE and ISO PMV models"})}),"\n",(0,o.jsx)(a.p,{children:"We have compared the accuracy of the Predicted Mean Vote (PMV) model used in the ISO 7730:2005 standard and the PMV model used in the ASHRAE 55:2023 standard (named here PMV-CE) in predicting thermal sensation."}),"\n",(0,o.jsx)(a.p,{children:"We used data from the ASHRAE Global Thermal Comfort Database II to evaluate the performance of these two models and we concluded that:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Both PMV and PMV-CE models have low and similar prediction accuracy, correctly predicting thermal sensation only about one-third of the time."}),"\n",(0,o.jsx)(a.li,{children:"The PMV-CE model has a higher bias (i.e., is worse) than the PMV model in predicting thermal sensation, especially at relative air speeds \u2265 0.2 m/s."}),"\n",(0,o.jsx)(a.li,{children:"Both models have an accuracy lower than or equal to 5% when predicting 'warm', 'hot', or 'cold' thermal sensations, which is lower than random guessing (14%)."}),"\n",(0,o.jsx)(a.li,{children:"We recommend limiting the applicability of both models to |PMV| \u2264 0.5, as a PMV value higher than 0.5 or lower than -0.5 only indicates that people's thermal sensation is on the 'warm' or 'cold' side, respectively, without the ability to distinguish between the different thermal sensation steps (cold, cool, slightly cool, slightly warm, warm, and hot)"}),"\n",(0,o.jsx)(a.li,{children:"Assuming that individuals who feel 'slightly warm' or 'slightly cool' are thermally neutral leads to underestimating thermal discomfort."}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"background",children:"Background"}),"\n",(0,o.jsx)(a.p,{children:"Fanger developed the PMV model, which is now incorporated into the ISO 7730:2005 standard in its original form. The ASHRAE 55:2023 standard uses a modified version of the original model, the PMV-CE."}),"\n",(0,o.jsx)(a.p,{children:"The two PMV formulations mainly differ when the relative air speed (Vr) value is higher than 0.1 m/s. Vr is not equal to the measured airspeed (V). According to both standards, V should be adjusted as a function of the metabolic rate."}),"\n",(0,o.jsx)(a.p,{children:"The Figure below shows how the output of the two models differ using the same inputs (i.e., met = 1.2, and clo = 0.5). The PMV-CE models allow for higher temperatures."}),"\n",(0,o.jsxs)("div",{class:"img-center",style:{"margin-bottom":"20px",width:"80%"},children:[" ",(0,o.jsx)(a.img,{alt:"PMV comfort regions",src:t(8631).A+"",width:"2100",height:"1800"})]}),"\n",(0,o.jsx)(a.h2,{id:"objectives-of-the-paper",children:"Objectives of the paper"}),"\n",(0,o.jsx)(a.p,{children:"Choosing between the PMV and PMV-CE is a source of confusion for researchers, educators, and practitioners worldwide since both models are widely used in guidelines and certification programs. For example, the WELL certification allows both compliance with ISO 7730 and ASHRAE 55 standards, even though the two models have different outputs under the same environmental and personal conditions."}),"\n",(0,o.jsx)(a.p,{children:"In this paper, we compare the accuracy of the PMV and PMV-CE models used in the ISO 7730:2005 and ASHRAE 55:2023 standards, respectively. We used the TSV recorded in the ASHRAE Global Thermal Comfort Database II (DB). We aim to determine which PMV model is more accurate and the models\u2019 applicability limits."}),"\n",(0,o.jsx)(a.h2,{id:"results",children:"Results"}),"\n",(0,o.jsx)(a.h3,{id:"ashrae-global-thermal-comfort-database-ii",children:"ASHRAE Global Thermal Comfort Database II"}),"\n",(0,o.jsx)(a.p,{children:"The thermal sensation vote (TSV) dataset is unbalanced. Approximately 42% of all the entries have a TSV of \u2018neutral\u2019. While less than 3% of the total sample of participants reported to be either \u2018hot\u2019 or \u2018cold\u2019."}),"\n",(0,o.jsx)(a.p,{children:"In thermal comfort research, it is generally assumed that people who are \u2018slightly warm\u2019 or \u2018slightly cool\u2019 are thermally neutral. However, 68 % of participants who were \u2018slightly warm\u2019 wanted to be \u2018cooler\u2019 and 54 % of participants who were \u2018slightly cool\u2019 wanted to be \u2018warmer\u2019. This finding challenges the above assumption, as shown in the Figure below."}),"\n",(0,o.jsxs)("div",{class:"img-center",style:{"margin-bottom":"20px",width:"80%"},children:[" ",(0,o.jsx)(a.img,{alt:"Thermal preference, sensation, and acceptability",src:t(46).A+"",width:"2667",height:"2856"})]}),"\n",(0,o.jsx)(a.h3,{id:"comparison-of-pmv-accuracy-in-predicting-thermal-sensation",children:"Comparison of PMV accuracy in predicting thermal sensation"}),"\n",(0,o.jsx)(a.p,{children:"The intended aim of the PMV model is not to accurately predict individual thermal responses from participants. Even if also used by Standard in single occupancy spaces, the PMV model was developed to predict the average thermal sensation of an undefined large group of occupants sharing the same environment. Hence, we plotted the PMV and PMV-CE values as a function of TSV in the Figure below, and we plotted a LOcally WEighted Scatterplot Smoothing (LOWESS) curve. The curve, in the Figure, is calculated using the individual data and not the binned data. We only binned the data to aid the visualization of a large dataset."}),"\n",(0,o.jsx)(a.p,{children:"The intercept for the PMV is -0.27 and for the PMV-CE is -0.24 which means that the model has a bias of less than one-quarter of a thermal sensation interval. However, both PMV formulations always under-predict the thermal sensation of people who reported to be on the extremes of the TSV."}),"\n",(0,o.jsxs)("div",{class:"img-center",style:{"margin-bottom":"20px",width:"80%"},children:[" ",(0,o.jsx)(a.img,{alt:"Thermal preference, sensation, and acceptability",src:t(1470).A+"",width:"2667",height:"1328"})]}),"\n",(0,o.jsx)(a.h3,{id:"models-overall-bias",children:"Models overall bias"}),"\n",(0,o.jsx)(a.p,{children:"We subtracted the PMV and PMV CE values from the thermal sensation vote (TSV). These differences, also known as bias, quantify the success of the model in predicting TSV. If the PMV or PMV CE formulations are bias-free, the distribution of any batch derived from these differences would have a mean value that is zero. The standard deviation would reflect the combined effect of the people\u2019s differences, any errors in the model formulation or in the data collection method (accuracy or precision of the instrumentation used). This is a similar assumption to the one used by the PMV model, which ignores individual differences and calculates the average thermal sensation of a \u2018typical\u2019 average person."}),"\n",(0,o.jsx)(a.p,{children:"Overall, both the PMV and PMV-CE models have a median bias lower than half of a thermal sensation interval. When including only the data with Vr >= 0.2 m/s the median bias of the PMV model reduces to -0.29 from -0.41, meaning that at higher speed the PMV model improves. The median bias for the PMV-CE also decreases to -0.34 from -0.37 but it is higher than the one for the PMV."}),"\n",(0,o.jsxs)("div",{class:"img-center",style:{"margin-bottom":"20px",width:"80%"},children:[" ",(0,o.jsx)(a.img,{alt:"Thermal preference, sensation, and acceptability",src:t(3736).A+"",width:"2667",height:"1697"})]}),"\n",(0,o.jsx)(a.h2,{id:"implications-for-the-ashrae-552023-and-iso-77302005-standards-and-pmv-users",children:"Implications for the ASHRAE 55:2023 and ISO 7730:2005 standards and PMV users"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Researchers, educators, and practitioners worldwide may wonder which model they should use. The PMV-CE is more complex and computationally intensive to run, while not being more accurate than the original PMV model. Hence, we suggest researchers should calculate the PMV values according to the ISO 7730:2005 standards."}),"\n",(0,o.jsx)(a.li,{children:"The low prediction accuracy of both model formulations, along with the lack of data at the extremes of their applicability limits, suggests that these limits should be reconsidered. Based on our results, we recommend restricting the use of the PMV only to absolute values below 0.5 (|PMV| \u2264 0.5). In other words, we only recommend using it to determine whether an environment may be deemed thermally neutral by a large group of occupants."}),"\n"]}),"\n",(0,o.jsxs)("div",{class:"img-center",style:{"margin-bottom":"20px",width:"37%"},children:[" ",(0,o.jsx)(a.img,{alt:"Thermal preference, sensation, and acceptability",src:t(1515).A+"",width:"2144",height:"1602"})]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"We also recommend restricting the ranges on both environmental and personal factors set by both ASHRAE 55:2023 and ISO 7730:2005 standards."}),"\n",(0,o.jsx)(a.li,{children:"The TSV is ambiguous and does not allow determining if an action should be taken to increase the participant\u2019s thermal comfort. Assuming that people who are \u2018slightly warm\u2019 or \u2018slightly cool\u2019 are thermally neutral leads to undercounting thermal discomfort in our dataset, which is not a valid assumption. We recommend the use of the thermal preference scale to determine how people perceive their thermal environment. This scale more clearly allows an HVAC system to decide whether to change or not the thermal environment."}),"\n",(0,o.jsx)(a.li,{children:"Finally, we would like to highlight that the current definition of the PMV model which states that the model aims \u201c\u2026to predict the average thermal sensation of a large group of occupants\u201d is ambiguous. Both the ASHRAE 55:2023 and ISO 7730:2005 standards should clarify the minimum number of occupants required to use the PMV model. For example, can it be used for a space with only one occupant?"}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"read-the-paper",children:"Read the paper"}),"\n",(0,o.jsxs)(a.p,{children:["Federico Tartarini, Stefano Schiavon, Comparative analysis of PMV Models accuracy implemented in the ISO 7730:2005 and ASHRAE 55:2023, Building and Environment,\n",(0,o.jsx)(a.a,{href:"https://doi.org/10.1016/j.buildenv.2025.112766",children:"https://doi.org/10.1016/j.buildenv.2025.112766"})," (open access)"]})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},3736:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/pmv-comparison-bias-3764d42fa0ab996656efaabe8888b698.png"},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>s});var n=t(6540);const o={},i=n.createContext(o);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:a},e.children)}},8631:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/pmv-comparison-comfort-regions-f2d913f382884bb0617f79cd8c378025.png"},9651:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/pmv-comparison-graphical-abstract-25245bdfb825b4338dd96efc3f7fe939.png"}}]);