---
layout: page
title: Property covariance and prediction
description: Predicting Large Scale Properties from Few-Atom Simulations
img: assets/img/gb_pairplot.png
importance: 1
category: work
---

First-principles approaches such as density functional theory (DFT) are the preferred methods for atomic scale simulations, as they are grounded in quantum theory.
Unfortunately, computational cost limits the scale of simulations that DFT can handle, leading researches to develop empirical approaches such as interatomic potentials (IPs).
Getting an IP to match reference property values (calculated from first-principles or experimental methods) and is transferable to larger systems or property predictions is a well-known challenge.

Classical IPs often have a functional form based on physical intuition.
They are typically fit against small-scale fundamental properties - which we call canonical properties - that are accessible through DFT or experimental methods. 
The hope is that when fit to the "right" canonical properties, we can extend the IP to larger scale simulations and quantities of interest that are outside the reach of DFT.
Validating this assumption, however, has always been tricky.
Machine learned IPs introduce another layer of complexity, as they are traditionally trained to reproduce forces from DFT simulations and might not be fit against the "right" canonical properties.

To help make sense of our prediction error, we can take advantage of the ensemble of IPs available in the [OpenKIM database](https://openkim.org/).
Each uploaded IP is run through a suite of verification checks and property predictions.
The nuances introduced through the fitting process result in different property predictions for each IP, especially for properties that the IP was not fit against.
We argue that these IPs, with their various physics-based functional forms and fitting variations, act as a type of "synthetic material," capturing true material property correlations. 
We use this data to uncover correlations between properties and develop a predictive regression model, with error estimates.

We apply this approach to predictions of plastic flow strength calculated from large-scale (~10<sup>8</sup> atoms) simulations, performed by collaborators at Lawrence Livermore National Laboratory.
Our data analysis reveals relationships between canonical properties and plastic flow strength, identifying highly correlated canonical properties (e.g., vacancy migration energies, surface energies) that inform our regression model.
We take a bold (and untested, for now) step and make the assumption that the IP data belongs to the same statistical pool as true materials (here, approximated by DFT).
With this assumption, we input DFT-calculated canonical property values into our regression model and make a prediction for what plastic flow strength would be calculated, if DFT-like forces could be used in the simulation.

In separate work, we attempt to validate our bold "same statistical pool" assumption from the plastic flow strength data.
We focus on symmetric-tilt grain boundaries (GBs), as DFT calculations are feasible for specific low-sigma configurations.
Again, we uncover correlations between IP calculated canonical properties and GB energies, which we use to develop our predictive model.
We then make GB energy predictions from DFT-calculated canonical properties.
This time, however, we compare our predictions with DFT-calculated GB energies, demonstrating that our model does indeed capture the underlying relationships between properties.

For more information, please see the following publication: [Cross-scale covariance for material property prediction (accepted manuscript, npj Computational Materials)](https://arxiv.org/abs/2406.05146)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/gb_pairplot.png" title="gb" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pairplot of indicator properties and scaling coefficient
</div>