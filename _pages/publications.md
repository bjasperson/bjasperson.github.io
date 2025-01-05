---
layout: page
permalink: /publications/
title: publications
description: Publications by categories in reversed chronological order. See Google Scholar for full list.
years: [2025, 2024, 2023, 2021, 2014, 2010, 2008]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f {{ site.scholar.bibliography }} -q @*[year={{y}}]* %}
{% endfor %}

</div>
