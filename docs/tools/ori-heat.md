---
tags:
  - tool
  - web application
keywords:
  - heat stress
  - outdoor education
  - heat risk forecast
  - NatCORR
  - Outward Bound Australia
  - EMU Systems
description: A free web-based heat-risk planning tool for the outdoor sector, built for NatCORR and Outward Bound Australia.
image: ./img/ori-heat.png
last_update:
  author: Federico Tartarini
---

# ORI Heat

**Purpose**: Heat is now the deadliest weather hazard in Australia, claiming more lives than storms, floods, and bushfires combined.
Educators, event organisers, and expedition leaders working outdoors need a way to predict and manage this risk.
ORI Heat is a free, web-based planning tool, developed as part of the EMU Systems startup for NatCORR (National Centre of Outdoor Risk and Resilience) and Outward Bound Australia, that delivers a 7-day heat stress forecast, tailored activity recommendations, and specific guidance for outdoor programs.

**My contribution**: I was the main developer of ORI Heat — I built the website and its visuals, the automated PDF report generation, and worked on the underlying heat stress model.

Features:
- **7-day heat stress risk forecast**, calculated from activity level, clothing, and duration paired with environmental data.
- **Monthly heat stress risk planner** to explore anticipated conditions and risk ratings at a chosen location and date, using typical meteorological data.
- **Simple, one-click PDF heat risk reports** summarising the actions taken to prepare for and mitigate heat stress, ready to share with managers, clients, or guests.
- Free to use for the entire outdoor sector, with no locked features.

**How it works**: The risk score is calculated from air temperature, humidity, solar radiation, and wind speed, combined with the specific activity details provided by the user. These inputs are processed through a validated human thermophysiological model that simulates how the body responds to heat, producing a science-backed heat stress risk estimate for any outdoor activity and location in Australia.

**Impact**: ORI Heat supports the outdoor education and adventure sector — including school groups, guides, and event organisers — in planning around and mitigating heat risk in a changing climate.

Link: [outdoorrisk.org](https://outdoorrisk.org)
