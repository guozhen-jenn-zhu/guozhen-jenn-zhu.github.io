---
layout: page
permalink: /patents/
title: patents
description: Patents and patent applications
nav: true
nav_order: 3
_styles: |
  .patent-intro {
    margin-bottom: 1.5rem;
    max-width: 52rem;
  }

  .patent-intro p {
    margin-bottom: 0.25rem;
  }

  .patent-stats {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .patent-stat-card {
    flex: 1 1 160px;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid var(--global-divider-color);
    background-color: rgba(0, 0, 0, 0.01);
  }

  .patent-stat-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--global-muted-text-color);
  }

  .patent-stat-value {
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 0.25rem;
  }
---

<div class="publications">
  {% assign granted_patents = site.data.patents | where: "status", "Granted" | sort: "year" | reverse %}
  {% assign pending_patents = site.data.patents | where: "status", "Pending" | sort: "year" | reverse %}
  {% assign jurisdictions = site.data.patents | map: "type" | uniq %}

  <div class="patent-intro">
    <p>My patents focus on wireless sensing, radio-based perception, and human-centered AI.</p>
    <p>They span applications from in-vehicle child presence detection to radio-assisted sound and sleep sensing.</p>
  </div>

  <div class="patent-stats">
    <div class="patent-stat-card">
      <div class="patent-stat-label">Granted patents</div>
      <div class="patent-stat-value">{{ granted_patents | size }}</div>
    </div>
    <div class="patent-stat-card">
      <div class="patent-stat-label">Pending applications</div>
      <div class="patent-stat-value">{{ pending_patents | size }}</div>
    </div>
    <div class="patent-stat-card">
      <div class="patent-stat-label">Jurisdictions</div>
      <div class="patent-stat-value">{{ jurisdictions | size }}</div>
    </div>
  </div>

  <h2 class="bibliography">Granted Patents</h2>
  <ol class="bibliography">
    {% for patent in granted_patents %}
    <li>
      <div class="row">
        <div class="col-sm-2 abbr">
          <abbr class="badge rounded w-100" style="background-color: var(--global-theme-color);">{{ patent.year }}</abbr>
        </div>
        <div id="{{ patent.number | slugify }}" class="col-sm-10">
          <div class="title">
            {% if patent.url %}
              <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;" onmouseover="this.style.color='var(--global-theme-color)'" onmouseout="this.style.color='inherit'">{{ patent.title }}</a>
            {% else %}
              {{ patent.title }}
            {% endif %}
          </div>
          <div class="author">
            {{ patent.authors }}
          </div>
          <div class="periodical">
            <em>{{ patent.type }} No. {{ patent.number }}. (Granted {{ patent.year }})</em>
          </div>
          {% if patent.url %}
            <div class="links">
              <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm z-depth-0" role="button">Full text</a>
            </div>
          {% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>

  <h2 class="bibliography">Pending Patent Applications</h2>
  <ol class="bibliography">
    {% for patent in pending_patents %}
    <li>
      <div class="row">
        <div class="col-sm-2 abbr">
          <abbr class="badge rounded w-100" style="background-color: var(--global-divider-color);">{{ patent.year }}</abbr>
        </div>
        <div id="{{ patent.number | slugify }}" class="col-sm-10">
          <div class="title">
            {% if patent.url %}
              <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;" onmouseover="this.style.color='var(--global-theme-color)'" onmouseout="this.style.color='inherit'">{{ patent.title }}</a>
            {% else %}
              {{ patent.title }}
            {% endif %}
          </div>
          <div class="author">
            {{ patent.authors }}
          </div>
          <div class="periodical">
            <em>{{ patent.type }} No. {{ patent.number }}.</em>
          </div>
          {% if patent.url %}
            <div class="links">
              <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm z-depth-0" role="button">Full text</a>
            </div>
          {% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ol>
</div>

