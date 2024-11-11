---
layout: page
title: Topology Optimization using Machine Learning
description: Topology Optimization using Machine Learning
img: assets/img/shutter.png
importance: 1
category: work
---

Traditional inverse design approaches can be costly, especially when considering dual objective function problems with multi-physics and multi-timescale considerations.
We use a dual neural network optimization algorithm to design a 3D thermal-electromagnetic device (optical shutter).
The devices utilize a phase change material (vanadium dioxide) to achieve the shuttering effect.
The first neural network (convolutional neural network, CNN) acts as a surrogate model, supplementing the traditional solver calls and making predictions for device performance.
This CNN was trained on easy-to-produce, single physics data as opposed to the more costly fully-coupled simulations that would traditionally be required.
The second neural network optimizes the design while taking into account given manufacturing limitations (feature size).
We show how the reduced computational cost of the trained model allows for generation of an optimized design front (Pareto front), enabling informed optimization of the device.

For more information, please see the following publication: [A Dual Neural Network Approach to Topology Optimization for Thermal-Electromagnetic Device Design](https://doi.org/10.1016/j.cad.2023.103665)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/to_workflow.png" title="TO workflow" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/to_pareto.png" title="Design front" class="img-fluid rounded z-depth-1" %}          
    </div>
<div class="caption">
    (a) Dual neural network topology optimization workflow. (b) Optimized design front across range of target extinction ratios
</div>
