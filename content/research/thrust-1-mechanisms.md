---
title: Thrust 1 — Which mechanisms fire, and how often?
order: 10
figures:
  - assets/img/gb_pairplot.png | Small-scale properties as predictors of grain boundary energy trends.
  - assets/img/multimodal_te_plot.png | Stochastic agent populations: fraction of agents in each state over time for single, bimodal, and multimodal exposure-time distributions (five runs, ±1 standard deviation).
tags:
  - Atomistic simulation
  - Multiscale mechanics
  - Stochastic modeling
---

Whether a crack grows or stops is decided by mechanisms competing at small scales. This thrust connects those mechanisms, and how often they occur, to the behavior of materials and parts.

**Cross-scale property prediction:** In my Ph.D. work, I used ensembles of classical interatomic potentials as synthetic materials. I built regression models, with uncertainty estimates, that link small-scale properties such as stacking-fault energies to larger-scale quantities like plastic flow strength and grain boundary energy trends. I also developed data-driven methods for optimizing interatomic potentials and an OpenKIM stacking fault test driver.

**Mechanism ensembles:** As part of the [MIRAGE project](https://mirage.cint.science/), I contribute to a probabilistic framework that treats materials behavior as a competition among mechanisms whose probabilities and couplings must be inferred from data.

**Stochastic populations:** I study how stochastic populations of interacting agents coarse-grain into continuum reaction–diffusion laws, starting with coupled models of the state-based movement of agents.

Related work: [Cross-scale covariance for material property prediction](https://doi.org/10.1038/s41524-024-01453-w), [Fundamental microscopic properties as predictors of grain boundary energy trends](https://doi.org/10.1016/j.actamat.2025.120722), [A data-driven method for optimization of classical interatomic potentials](https://link.springer.com/article/10.1557/s43580-024-00802-7), [Stacking Fault Test Driver](https://github.com/openkim-hackathons/StackingFault), [Materials Behavior as Mechanism Ensembles](https://arxiv.org/abs/2607.27163), and [The coupled spread of information and potential-driven motion in evacuating agent populations](https://arxiv.org/abs/2610.40081).
