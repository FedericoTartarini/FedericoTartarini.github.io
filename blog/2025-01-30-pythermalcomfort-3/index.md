---
title: pythermalcomfort v3.0 - The Ultimate Tool for Thermal Comfort Calculations
authors: fede
tags: [productivity]
keywords: 
    - thermal comfort
    - pythermalcomfort
    - Python
    - HVAC
    - sustainability
    - innovation
    - building science
image: ./pythermalcomfort-3.png
description: pythermalcomfort v3.0 is here! Discover the new features, improvements, and benefits of this powerful Python package for thermal comfort calculations.
unlisted: true
---

### LinkedIn Post

![pythermalcomfort](./pythermalcomfort-3.png)

🚀 **Big News! pythermalcomfort v3.0 is Here!** 🚀

We’re thrilled to announce the release of **pythermalcomfort v3.0**! 🎉 
This major update brings a host of exciting new models, features, improvements, and a more intuitive way to calculate thermal comfort and heat and cold stress indices. 
Whether you're a researcher, engineer, or building science professional, this release is designed to make your work easier, faster, and more accurate.

<!--truncate-->

✨ **What’s New?**
- **Structured Results:** Functions now return dataclass instances, making it easier to access and organize your results.
- **Enhanced Usability:** Updated function names, better documentation, and support for arrays as inputs for faster calculations.
- **And much more!**

🔥 **Why should you use pythermalcomfort?**  
pythermalcomfort v3.0 is your go-to tool for accurate thermal comfort assessments, saving you time and helping you make informed decisions in HVAC design, building performance, and occupant comfort.

👉 Ready to dive in? install pythermalcomfort v3.0 using `pip install pythermalcomfort`.
📄 What to learn more? read the [documentation](https://pythermalcomfort.readthedocs.io/en/latest/).

#ThermalComfort #BuildingScience #Python #HVAC #Sustainability #Innovation #pythermalcomfort

---

### LinkedIn Article: Deep Dive into pythermalcomfort v3.0

#### **Why Should You Use pythermalcomfort?**
Thermal comfort is a critical factor in building design, HVAC systems, and occupant well-being. 
However, calculating thermal comfort, heat, or cold stress indices can be complex and time-consuming. 
That’s where **pythermalcomfort** comes in. 
This Python package simplifies the process by providing accurate, standards-compliant calculations for thermal comfort and stress indices. 
Whether you're designing energy-efficient buildings, optimizing HVAC systems, or conducting research, pythermalcomfort saves you time, ensures accuracy, and enhances decision-making. 
It’s a must-have tool for researchers, engineers, and professionals in building science and environmental design.

---

#### **What’s New in pythermalcomfort v3.0?**
Version 3.0 is a major leap forward, packed with new features and improvements:

1. **Structured Results with Dataclasses**  
   Functions now return dataclass instances, making it easier to access and organize results. For example:
   ```python
   from pythermalcomfort.models import pmv_ppd_iso
   result = pmv_ppd_iso(tdb=[22, 25], tr=25, vr=0.1, rh=50, met=1.4, clo=0.5, model='7730-2005')
   print(result.pmv)
   print(result.ppd)
   ```  
   This change enhances readability and usability, especially when working with multiple outputs.

2. **Updated Function Names and Organization**
    - PMV functions are now named consistently (e.g., `pmv_ppd_ashrae`, `pmv_ppd_iso`).
    - Psychrometric functions have been moved to `utilities.py` for better organization.

3. **Array as inputs**  
   All functions now accept arrays as inputs, enabling faster batch processing of multiple inputs.

4. **Enhanced Documentation and Testing**
    - More examples and detailed descriptions of models.
    - Added input validation to ensure inputs are within model applicability limits.

5. **New Features**
    - Added surveys to assess thermal comfort in the documentation.
    - Included a detailed section on clothing insulation.

---

#### **How to Get Started**
Using pythermalcomfort v3.0 is easier than ever. Here’s a simple example to calculate PMV (Predicted Mean Vote) using the ISO 7730 standard:

```python
from pythermalcomfort.models import pmv_ppd_iso

# Input parameters
result = pmv_ppd_iso(tdb=[22, 25], tr=25, vr=0.1, rh=50, met=1.4, clo=0.5, model='7730-2005')

# Access results
print("PMV:", result.pmv)
print("PPD:", result.ppd)
```  

This example demonstrates how straightforward it is to perform thermal comfort calculations with pythermalcomfort.

---

#### **Upgrading from to v2.0 to v3.0?**
Please note that pythermalcomfort v3.0 introduces several breaking changes, including updated function names and structured results.
Hence, this upgrade may require adjustments to your existing codebase.

👉 **Upgrade today and experience the future of thermal comfort calculations!**

#ThermalComfort #BuildingScience #Python #HVAC #Sustainability #Innovation #pythermalcomfort