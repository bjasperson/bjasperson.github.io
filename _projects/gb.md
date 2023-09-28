---
layout: page
title: Predicting Grain Boundary Energy from Few-Atom Simulations 
description: Towards an Interatomic Potential for Grain Boundary Energy: Predicting Grain Boundary Energy from Few-Atom Simulations
img: assets/img/gb_pairplot.png
importance: 1
category: work
---

We are exploring covariance between indicator properties (lattice constant, elastic constants, etc.) and predicted energy for symmetric tilt grain boundaries. The benefit of these indicator properties is that they can be calculated automatically and efficiently from few-atom simulationsand automatically within the OpenKIM framework. These indicator properties are used to predict the required scaling coefficient for an analytical grain boundary energy model (Runnels et al 2016). We plan to expand this approach to other hard-to-compute properties such as material strength.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/gb_pairplot.png" title="gb" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pairplot of indicator properties and scaling coefficient
</div>
