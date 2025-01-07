---
layout: page
title: Property covariance and prediction
description: Predicting Large Scale Properties from Few-Atom Simulations
img: assets/img/gb_pairplot.png
importance: 1
category: work
---

First principles approaches such as density functional theory (DFT) are the preferred methods for atomic scale simulations, as they are grounded in quantum theory.
Unfortunately, computational cost limits the scale of simulations that DFT can handle, leading researchers to develop empirical approaches such as interatomic potentials (IPs).
Getting an IP to match reference property values (calculated from first principles or experimental methods) while being transferable to different systems is a well-known challenge.

Classical IPs often have a functional form based on physical intuition.
They are typically fit against small-scale fundamental properties - which we call canonical properties - that are accessible with DFT or experimental methods. 
The hope is that when an IP is fit to the "right" canonical properties, we can extend it to larger scale simulations and quantities of interest that are outside the reach of DFT.
Validating this assumption, however, is tricky.
Machine learned IPs introduce another layer of complexity, as they are traditionally trained to reproduce forces from DFT simulations and might not be fit against the "right" canonical properties.

To help make sense of this prediction error, we can take advantage of the ensemble of IPs available in the [OpenKIM database](https://openkim.org/).
Each uploaded IP is run through a suite of verification checks and property predictions.
The nuances introduced through the fitting process result in different property predictions for each IP, especially for properties that the IP was not fit against.
We argue that these IPs, with their various physics-based functional forms and fitting variations, act as a type of "synthetic material," capturing true material property correlations. 
We use this data to uncover correlations between properties and develop a predictive regression model, with error estimates.

We apply this approach to predictions of plastic flow strength calculated from large-scale (~10<sup>8</sup> atoms) simulations, performed by our collaborators at Lawrence Livermore National Laboratory.
Our data analysis reveals which canonical properties are highly correlated with plastic flow strength (e.g., vacancy migration energies, surface energies) and thus well suited for our regression model.
We take a bold (and untested for now, see next paragraph) step and make the assumption that the IP data belongs to the same statistical pool as true materials (here, approximated by DFT).
With this assumption, we input DFT-calculated canonical property values into our regression model and make a prediction for what plastic flow strength would be calculated, if DFT predicted forces could be used in the simulation.

In separate work, we attempt to validate our "same statistical pool" assumption from the plastic flow strength data.
We focus on symmetric-tilt grain boundaries (GBs), as DFT calculations are feasible for specific low-sigma configurations.
Again, we uncover correlations between IP calculated canonical properties and GB energies, which we use to develop our predictive model.
We then make GB energy predictions from DFT calculated canonical properties.
This time, however, we compare our predictions with DFT calculated GB energies, demonstrating that our IP fit model does indeed capture the underlying physical relationships.

For more information, please see the following publications: [Cross-scale covariance for material property prediction](https://doi.org/10.1038/s41524-024-01453-w), [Fundamental Microscopic Properties as Predictors of Grain Boundary Energy Trends (accepted manuscript, *Acta Materialia*)](https://arxiv.org/abs/2411.16770)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/gb_pairplot.png" title="gb" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Pairplot of indicator properties and scaling coefficient
</div>
