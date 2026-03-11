---
tags:
  - tool
keywords: 
  - thermal stress
  - thermal strain
  - heat health risk
  - prevention
  - heatwave
  - extreme heat
  - sports
description: The SMA Extreme Heat Tool is a free web application that provides personalized recommendations to mitigate heat stress risk during physical activity.
image: ./img/sma-app.png
last_update:
  author: Federico Tartarini
---

# SMA Extreme Heat Tool

**Purpose**: The Australian climate is characterized by hot and humid summers. 
While fatal heat injuries during sports in athletes are rare, thousands of people suffer from heat-related illnesses each year. 
In 2021, Sports Medicine Australia developed a new heat policy based on a biophysical model. 
It provides recommendations about which cooling strategies should be used by athletes to mitigate their heat stress risk. 

<div class="img-center" style={{"margin-bottom":"20px"}}> ![SMA Extreme Heat Policy](./img/sma-heat-policy.png)</div>

One major limitation of this policy is its accessibility and usability. 
Users need to consult a PDF online to determine whether environmental conditions may pose some risk to their health. 
This is a labour-intensive process that needs to be repeated multiple times. 
To overcome these issues we developed an [online, free-to-use, and cross-platform web tool](https://sma-heat-policy.sydney.edu.au/).

<div class="img-center" style={{"margin-bottom":"20px"}}> ![SMA Extreme Heat Policy](./img/sma-app.png)</div>

Coaches, medical teams, athletes, and people from the community can use it to check the current and forecasted heat stress risk conditions.

**Method**: We developed the tool using Plotly Dash and wrote the front-end and back-end in Python. 
We shared the code publicly. 
The recommendations provided in the application are personalized and are calculated based on the current location and the type of physical activity selected by the user. 
People can choose one of the 40 most popular sports played in Australia. 

**Results**: We were able to develop a free web application that is intuitive to use and allows anyone who has access to a smartphone to check their heat stress risk. 
Moreover, we can provide users with strategies that can be employed to minimize their risk of suffering from heat-related illnesses. 
The use of our application is not limited to Australia. 
It can be used in any country since weather forecast data are pooled as a function of the user's GPS coordinates.

**Conclusion**: Our application offers simple-to-access, evidence-based advice for avoiding unnecessary interruptions of play while safeguarding the health of people engaging in sports and physical activity from the negative effects of extreme heat.

---

## Recognition & Impact

- **Endorsed by Sports Medicine Australia** – officially featured as part of their heat policy guidance.
- **Media coverage:**
  - [ABC News: "Can you exercise safely in a heatwave?"](https://www.abc.net.au/news/2026-01-08/can-you-exercise-safely-in-a-heatwave-australia/106206302?utm_source=abc_news_app&utm_medium=content_shared&utm_campaign=abc_news_app&utm_content=other)
  - [Channel 7 Interview, Townsville/Mackay](https://app.mediaportal.com/isentia/#/playnow/v2?id=R00127113981&channel=Seven%20Mackay&location=Australia&date=2025-11-11T18:08:29&program=Seven%20News%20Mackay&item_id=1266581303&prospect_id=-50051930312&is_video=true&keywords=Sport&keywords=Heat%20tool&keywords=Sports&keywords=Sports%20Medicine%20Australia&keywords=Tool&expiry=1794420509&signature=4Ul7Iq4E9IaMBki7WUy~-PiUpv5CUaYz6JsPUBKw1DrudljrHZHnIBTTFABSeIfvJXVb2V7chnkWX1LtWBPye3JZrReeSPKZvVc~g5x-OyFlHGmFXhjTFuR6Pc21i5EA4YwZL~F0hFxvw4ujaV6kwqWhRi70EAjyN5xiLjZItWJVB6KSwIBJspSl0TUr9xilECuMPN91Ev1xZibCG4Akx8qQVPiwEOSQ7UxS4DBnFF79dMpuc27XBhBd-zzkP1G-FV1zGhSaLTLbd0wEoI-VnUxUHn5xRvRRFQZOkHjb5m5-Rs3UN8-JZX8~zJHdzLZnmMSNmG5N3P7rFEkq9aV-pg__&customStart=2025-11-11T08:08:29.000Z&customEnd=2025-11-11T08:09:08.000Z)
- **Real-world impact:**
  - Empowered athletes, event organizers, and the public to make safer decisions during extreme heat events for more than 40 sports.
  - Tool has seen national adoption and is referenced in major sporting safety protocols in Australia.
