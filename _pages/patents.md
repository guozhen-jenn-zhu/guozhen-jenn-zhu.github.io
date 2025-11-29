---
layout: page
permalink: /patents/
title: patents
description: Patents and patent applications
nav: true
nav_order: 3
---

<div class="publications">
  <h2 class="bibliography">Granted Patents</h2>
  <ol class="bibliography">
    {% assign granted_patents = site.data.patents | where: "status", "Granted" | sort: "year" | reverse %}
    {% for patent in granted_patents %}
    <li>
      <div class="row">
        <div class="col-sm-2 abbr">
          <abbr class="badge rounded w-100">{{ patent.year }}</abbr>
        </div>
        <div id="{{ patent.number | slugify }}" class="col-sm-10">
          <div class="title">{{ patent.title }}</div>
          <div class="author">
            {{ patent.authors }}
          </div>
          <div class="periodical">
            <em>{{ patent.type }} No. {{ patent.number }}. (Granted {{ patent.year }})</em>
            {% if patent.url %}
              <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" class="links">[Link]</a>
            {% endif %}
          </div>
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>

  <h2 class="bibliography">Pending Patent Applications</h2>
  <ol class="bibliography">
    {% assign pending_patents = site.data.patents | where: "status", "Pending" | sort: "year" | reverse %}
    {% for patent in pending_patents %}
    <li>
      <div class="row">
        <div class="col-sm-2 abbr">
          <abbr class="badge rounded w-100">{{ patent.year }}</abbr>
        </div>
        <div id="{{ patent.number | slugify }}" class="col-sm-10">
          <div class="title">{{ patent.title }}</div>
          <div class="author">
            {{ patent.authors }}
          </div>
          <div class="periodical">
            <em>{{ patent.type }} No. {{ patent.number }}.</em>
            {% if patent.url %}
              <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" class="links">[Link]</a>
            {% endif %}
          </div>
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>
</div>

