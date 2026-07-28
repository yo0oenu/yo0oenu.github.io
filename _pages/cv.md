---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
B.S. in Global Technology Management & ICT Artificial Intelligence (2020 - Expected Aug 2026)
* Seoul National University of Science and Technology (SeoulTech), South Korea

Research experience
======
Research Intern, GLOW Lab, KAIST (Aug 2026 - Present)
* Advisor: Prof. Seung Wook Kim
  
Undergraduate Researcher, SeoulTech (Feb 2025 - Jun 2026)
* Research areas: Computer Vision, Knowledge Distillation

Honors and Awards
======
* Academic Excellence Scholarship, SeoulTech — 2021 Spring
* Academic Excellence Scholarship, SeoulTech — 2025 Spring
* Academic Excellence Scholarship, SeoulTech — 2025 Fall

Skills
======
* Python
* C
* C++
* PyTorch

Publications
======
{% for post in site.publications reversed %}
  {% include publication-simple.html %}
{% endfor %}
