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

  .patent-domain-heading {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--global-muted-text-color);
    text-align: right;
  }

  .publications h2.bibliography {
    margin-top: 1.5rem;
    padding-top: 0.75rem;
  }

  .publications ol.bibliography.patent-list {
    margin-bottom: 0.75rem;
  }

  .publications ol.bibliography.patent-list > li {
    margin-bottom: 0.5rem;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--global-divider-color);
  }

  .publications .patent-list .title {
    font-size: 1rem;
    margin-bottom: 0.15rem;
  }

  .publications .patent-list .author {
    font-size: 0.9rem;
    margin-bottom: 0.15rem;
    color: var(--global-text-color-light);
  }

  .publications .patent-list .periodical {
    font-size: 0.85rem;
  }

  .author-me {
    font-weight: 600;
    color: var(--global-theme-color);
  }

  .patent-entry {
    width: 100%;
  }

  .patent-year-label {
    font-weight: 600;
    margin-right: 0.35rem;
  }

  .patent-meta {
    font-size: 0.85rem;
    color: var(--global-text-color-light);
  }
---

<div class="publications">
  {% assign granted_patents = site.data.patents | where: "status", "Granted" | sort: "year" | reverse %}
  {% assign pending_patents = site.data.patents | where: "status", "Pending" | sort: "year" | reverse %}
  {% assign jurisdictions = site.data.patents | map: "type" | uniq %}
  {% assign granted_domains = granted_patents | map: "domain" | uniq %}
  {% assign pending_domains = pending_patents | map: "domain" | uniq %}
  {% assign domain_order = 'Automotive safety|Healthcare & wellbeing|Human activity & behavior|Core wireless sensing & learning|Localization & mapping|Sound & audio sensing|Assistive & wearable devices' | split: '|' %}

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
  {% for domain in domain_order %}
    {% unless granted_domains contains domain %}
      {% continue %}
    {% endunless %}
    <h3 class="patent-domain-heading">{{ domain }}</h3>
    <ol class="bibliography patent-list">
      {% for patent in granted_patents %}
        {% if patent.domain == domain %}
        <li>
          <div id="{{ patent.number | slugify }}" class="patent-entry">
            <div class="title">
              {% if patent.url %}
                <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;" onmouseover="this.style.color='var(--global-theme-color)'" onmouseout="this.style.color='inherit'">{{ patent.title }}</a>
              {% else %}
                {{ patent.title }}
              {% endif %}
            </div>
            <div class="author" title="{{ patent.authors }}">
              {% assign authors_array = patent.authors | split: ', ' %}
              {% assign max_authors = 3 %}
              {% assign authors_count = authors_array | size %}

              {% for author in authors_array %}
                {% if forloop.index0 < max_authors %}
                  {% assign is_self = false %}
                  {% if author contains 'Guozhen Zhu' %}
                    {% assign is_self = true %}
                  {% endif %}
                  {% if is_self %}
                    <span class="author-me">{{ author }}</span>
                  {% else %}
                    {{ author }}
                  {% endif %}
                  {% if forloop.index0 < max_authors - 1 and forloop.index0 < authors_count - 1 %}
                    , 
                  {% endif %}
                {% endif %}
              {% endfor %}

              {% assign remaining = authors_count | minus: max_authors %}
              {% if remaining > 0 %}
                , <span class="more-authors">+ {{ remaining }} more</span>
              {% endif %}
            </div>
            <div class="periodical patent-meta">
              <span class="patent-year-label">{{ patent.year }}</span>
              <em>{{ patent.type }} No. {{ patent.number }}. Granted</em>
            </div>
            {% if patent.url %}
              <div class="links">
                <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm z-depth-0" role="button">Full text</a>
              </div>
            {% endif %}
          </div>
        </li>
        {% endif %}
      {% endfor %}
    </ol>
  {% endfor %}

  <h2 class="bibliography">Pending Patent Applications</h2>
  {% for domain in domain_order %}
    {% unless pending_domains contains domain %}
      {% continue %}
    {% endunless %}
    <h3 class="patent-domain-heading">{{ domain }}</h3>
    <ol class="bibliography patent-list">
      {% for patent in pending_patents %}
        {% if patent.domain == domain %}
        <li>
          <div id="{{ patent.number | slugify }}" class="patent-entry">
            <div class="title">
              {% if patent.url %}
                <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;" onmouseover="this.style.color='var(--global-theme-color)'" onmouseout="this.style.color='inherit'">{{ patent.title }}</a>
              {% else %}
                {{ patent.title }}
              {% endif %}
            </div>
            <div class="author" title="{{ patent.authors }}">
              {% assign authors_array = patent.authors | split: ', ' %}
              {% assign max_authors = 3 %}
              {% assign authors_count = authors_array | size %}

              {% for author in authors_array %}
                {% if forloop.index0 < max_authors %}
                  {% assign is_self = false %}
                  {% if author contains 'Guozhen Zhu' %}
                    {% assign is_self = true %}
                  {% endif %}
                  {% if is_self %}
                    <span class="author-me">{{ author }}</span>
                  {% else %}
                    {{ author }}
                  {% endif %}
                  {% if forloop.index0 < max_authors - 1 and forloop.index0 < authors_count - 1 %}
                    , 
                  {% endif %}
                {% endif %}
              {% endfor %}

              {% assign remaining = authors_count | minus: max_authors %}
              {% if remaining > 0 %}
                , <span class="more-authors">+ {{ remaining }} more</span>
              {% endif %}
            </div>
            <div class="periodical patent-meta">
              <span class="patent-year-label">{{ patent.year }}</span>
              <em>{{ patent.type }} No. {{ patent.number }}.</em>
            </div>
            {% if patent.url %}
              <div class="links">
                <a href="{{ patent.url }}" target="_blank" rel="noopener noreferrer" class="btn btn-sm z-depth-0" role="button">Full text</a>
              </div>
            {% endif %}
          </div>
        </li>
        {% endif %}
      {% endfor %}
    </ol>
  {% endfor %}
</div>

