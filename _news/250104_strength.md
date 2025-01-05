---
layout: post
date: 2025-01-04 15:20:00-0400
inline: true
related_posts: false
---
The unknown accuracy of interatomic potentials (IPs) is a major source of prediction uncertainty in large-scale classical atomistic simulations.
Many quantities of interest (QoIs), such as plastic flow strength, require simulation domains (~10^8 atoms) far too large for first-principles calculations (e.g., DFT).
We would like to estimate this prediction uncertainty while also obtaining an estimate for what a first-principles simulation would predict if we could run it. 

In our recent work published in npj Computational Materials, we follow an approach similar to statistical studies in public health.
To uncover useful correlations in our population of interest (first-principles calculations), we turn to a related dataset (IP-generated data from the OpenKIM framework) and analyze covariance between indicator properties (small-scale properties) and our QoI (plastic flow strength).
We identify the best predictors and build a cross-scale “strength-on-predictors” regression model.
This model is used to estimate regression error based on the available statistical pool of IP data.
We then compute small-scale predictor properties with expensive quantum-accurate simulations and use them with the regression model to make a prediction for plastic ﬂow strength, along with statistical error bounds established from the study.

This work is the result of a wonderful collaboration between the University of Minnesota (Ilia Nikiforov, Ellad Tadmor), Lawrence Livermore National Laboratory (Amit Samanta, Fei Zhou, Vincenzo Lordi, and Vasily Bulatov), and the University of Illinois Urbana-Champaign.

You can find all the details in our article, [here](https://doi.org/10.1038/s41524-024-01453-w) 
Github code, [here](https://github.com/bjasperson/strength_covariance)
