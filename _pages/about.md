---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---
<p class="eyebrow">Diffusion model · Latent representation · World model</p>

I'm Yeonwoo — I am currently with the [GLOW Lab](https://glow-lab-kaist.github.io/index.html) at **KAIST**, as a Research Intern.

The question that drives my research is whether generative models can acquire semantic intuition—the innate human ability to infer the underlying meaning and rules of the visual world. My research explores how machines can genuinely internalize this intuition, with the ultimate goal of enabling generative AI to perceive, understand, and model the world just as humans do.

Education
======
* B.S. in ICT Artificial Intelligence, Seoul National University of Science and Technology (SeoulTech), 2020 – Aug 2026
* B.S. in Global Technology Management, Seoul National University of Science and Technology (SeoulTech), 2020 – Aug 2026

Research Interests
======
* Latent representations of the visual world
* Diffusion model
* World models
* Knowledge distillation

Publications
======
{% for post in site.publications reversed %}
  {% include publication-card.html %}
{% endfor %}
