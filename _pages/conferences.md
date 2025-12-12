---
layout: page
title: Conferences
permalink: /conferences/
description: Tracking upcoming AI, ML, Computer Vision, Data Mining, HCI, Ubiquittic/Pervasive Computing, and Robotics conferences.
nav: false
---

<style>
.conference-tracker {
  margin-top: 1rem;
}

.conference-tracker table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}

.conference-tracker th {
  background: var(--global-theme-color);
  color: white;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 10;
}

.conference-tracker td {
  padding: 12px 15px;
  border-bottom: 1px solid var(--global-divider-color);
  vertical-align: top;
}

.conference-tracker tr:hover {
  background: var(--global-hover-color);
}

.conference-tracker .conf-name {
  font-weight: 600;
}

.conference-tracker .conf-name a {
  color: var(--global-theme-color);
  text-decoration: none;
}

.conference-tracker .conf-name a:hover {
  text-decoration: underline;
}

.conference-tracker .deadline-passed {
  text-decoration: line-through;
  color: var(--global-text-color-light);
}

.conference-tracker .deadline-upcoming {
  color: #d9534f;
  font-weight: 600;
}

.conference-tracker .deadline-soon {
  color: #f0ad4e;
  font-weight: 600;
}

.field-section {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.field-section h2 {
  color: var(--global-theme-color);
  border-bottom: 2px solid var(--global-theme-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.field-section h2 i {
  margin-right: 0.5rem;
}

.last-updated {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
  margin-top: 2rem;
  font-style: italic;
}

.tbd {
  color: var(--global-text-color-light);
  font-style: italic;
}

.filter-container {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.filter-container select {
  padding: 8px 12px;
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-size: 0.9rem;
}

.filter-container input[type="text"] {
  padding: 8px 12px;
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-size: 0.9rem;
  min-width: 200px;
}

.badge-field {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 4px;
}

.badge-ai { background: #e3f2fd; color: #1565c0; }
.badge-cv { background: #f3e5f5; color: #7b1fa2; }
.badge-dm { background: #e8f5e9; color: #2e7d32; }
.badge-hci { background: #fff3e0; color: #ef6c00; }
.badge-ubi { background: #e0f7fa; color: #00838f; }
.badge-rob { background: #fce4ec; color: #c2185b; }

@media (max-width: 768px) {
  .conference-tracker {
    overflow-x: auto;
  }
  
  .conference-tracker table {
    min-width: 700px;
  }
}
</style>

<div class="filter-container">
  <label for="field-filter"><strong>Filter by field:</strong></label>
  <select id="field-filter" onchange="filterConferences()">
    <option value="all">All Fields</option>
    <option value="ai">AI & Machine Learning</option>
    <option value="cv">Computer Vision</option>
    <option value="dm">Data Mining</option>
    <option value="hci">Human-Computer Interaction</option>
    <option value="ubi">Ubiquitous Computing</option>
    <option value="rob">Robotics</option>
  </select>
  <input type="text" id="search-input" placeholder="Search conferences..." onkeyup="filterConferences()">
</div>

<div class="conference-tracker">
  <table id="conference-table">
    <thead>
      <tr>
        <th>Conference</th>
        <th>Field</th>
        <th>Venue</th>
        <th>Deadline</th>
        <th>Dates</th>
      </tr>
    </thead>
    <tbody>
      <!-- AI & Machine Learning -->
      <tr data-field="ai">
        <td class="conf-name"><a href="https://neurips.cc/Conferences/2025" target="_blank">NeurIPS 2025</a><br><small>Conference on Neural Information Processing Systems</small></td>
        <td><span class="badge-field badge-ai">AI/ML</span></td>
        <td>San Diego, USA</td>
        <td><span class="deadline-passed">Abstract: May 11, 2025</span><br><span class="deadline-passed">Paper: May 15, 2025</span></td>
        <td>Dec 02 – Dec 07, 2025</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name"><a href="https://aaai.org/conference/aaai/aaai-26/" target="_blank">AAAI 2026</a><br><small>AAAI Conference on Artificial Intelligence</small></td>
        <td><span class="badge-field badge-ai">AI/ML</span></td>
        <td>Singapore</td>
        <td><span class="deadline-passed">Abstract: Jul 25, 2025</span><br><span class="deadline-passed">Paper: Aug 01, 2025</span></td>
        <td>Jan 20 – Jan 27, 2026</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name"><a href="https://iclr.cc/Conferences/2026" target="_blank">ICLR 2026</a><br><small>International Conference on Learning Representations</small></td>
        <td><span class="badge-field badge-ai">AI/ML</span></td>
        <td>Rio de Janeiro, Brazil</td>
        <td><span class="deadline-passed">Abstract: Sep 19, 2025</span><br><span class="deadline-passed">Paper: Sep 24, 2025</span></td>
        <td>Apr 23 – Apr 27, 2026</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name"><a href="https://icml.cc/Conferences/2026" target="_blank">ICML 2026</a><br><small>International Conference on Machine Learning</small></td>
        <td><span class="badge-field badge-ai">AI/ML</span></td>
        <td>Seoul, South Korea</td>
        <td>Abstract: Jan 23, 2026<br>Paper: Jan 28, 2026</td>
        <td>Jul 07 – Jul 12, 2026</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name"><a href="https://2026.ijcai.org" target="_blank">IJCAI-ECAI 2026</a><br><small>International Joint Conference on Artificial Intelligence</small></td>
        <td><span class="badge-field badge-ai">AI/ML</span></td>
        <td>Bremen, Germany</td>
        <td>Abstract: Jan 12, 2026<br>Paper: Jan 19, 2026</td>
        <td>Aug 15 – Aug 21, 2026</td>
      </tr>
      
      <!-- Computer Vision -->
      <tr data-field="cv">
        <td class="conf-name"><a href="https://cvpr.thecvf.com/" target="_blank">CVPR 2026</a><br><small>IEEE Conference on Computer Vision and Pattern Recognition</small></td>
        <td><span class="badge-field badge-cv">CV</span></td>
        <td class="tbd">TBD</td>
        <td class="tbd">TBD</td>
        <td>June 2026 (expected)</td>
      </tr>
      <tr data-field="cv">
        <td class="conf-name"><a href="https://iccv.thecvf.com/" target="_blank">ICCV 2025</a><br><small>International Conference on Computer Vision</small></td>
        <td><span class="badge-field badge-cv">CV</span></td>
        <td>Honolulu, Hawaii, USA</td>
        <td><span class="deadline-passed">Paper: Mar 07, 2025</span></td>
        <td>Oct 19 – Oct 25, 2025</td>
      </tr>
      <tr data-field="cv">
        <td class="conf-name"><a href="https://eccv.ecva.net/" target="_blank">ECCV 2026</a><br><small>European Conference on Computer Vision</small></td>
        <td><span class="badge-field badge-cv">CV</span></td>
        <td class="tbd">TBD</td>
        <td class="tbd">TBD</td>
        <td>Fall 2026 (expected)</td>
      </tr>
      
      <!-- Data Mining & Knowledge Discovery -->
      <tr data-field="dm">
        <td class="conf-name"><a href="https://kdd.org/kdd2025/" target="_blank">KDD 2025</a><br><small>ACM SIGKDD Conference on Knowledge Discovery and Data Mining</small></td>
        <td><span class="badge-field badge-dm">Data Mining</span></td>
        <td>Toronto, Canada</td>
        <td><span class="deadline-passed">Abstract: Feb 01, 2025</span><br><span class="deadline-passed">Paper: Feb 08, 2025</span></td>
        <td>Aug 03 – Aug 07, 2025</td>
      </tr>
      <tr data-field="dm">
        <td class="conf-name"><a href="https://www.siam.org/conferences/cm/conference/sdm26" target="_blank">SDM 2026</a><br><small>SIAM International Conference on Data Mining</small></td>
        <td><span class="badge-field badge-dm">Data Mining</span></td>
        <td class="tbd">TBD</td>
        <td class="tbd">TBD</td>
        <td>Spring 2026 (expected)</td>
      </tr>
      <tr data-field="dm">
        <td class="conf-name"><a href="https://ecmlpkdd.org/" target="_blank">ECML-PKDD 2025</a><br><small>European Conference on Machine Learning and Principles/Practice of Knowledge Discovery</small></td>
        <td><span class="badge-field badge-dm">Data Mining</span></td>
        <td>Porto, Portugal</td>
        <td><span class="deadline-passed">Abstract: Mar 21, 2025</span><br><span class="deadline-passed">Paper: Mar 28, 2025</span></td>
        <td>Sep 15 – Sep 19, 2025</td>
      </tr>
      
      <!-- Human-Computer Interaction -->
      <tr data-field="hci">
        <td class="conf-name"><a href="https://chi2026.acm.org/" target="_blank">CHI 2026</a><br><small>ACM Conference on Human Factors in Computing Systems</small></td>
        <td><span class="badge-field badge-hci">HCI</span></td>
        <td>Barcelona, Spain</td>
        <td><span class="deadline-passed">Abstract: Sep 04, 2025</span><br><span class="deadline-passed">Paper: Sep 11, 2025</span></td>
        <td>Apr 13 – Apr 17, 2026</td>
      </tr>
      <tr data-field="hci">
        <td class="conf-name"><a href="https://uist.acm.org/" target="_blank">UIST 2025</a><br><small>ACM Symposium on User Interface Software and Technology</small></td>
        <td><span class="badge-field badge-hci">HCI</span></td>
        <td>Seoul, South Korea</td>
        <td><span class="deadline-passed">Paper: Apr 02, 2025</span></td>
        <td>Sep 28 – Oct 01, 2025</td>
      </tr>
      <tr data-field="hci">
        <td class="conf-name"><a href="https://cscw.acm.org/" target="_blank">CSCW 2025</a><br><small>ACM Conference on Computer-Supported Cooperative Work</small></td>
        <td><span class="badge-field badge-hci">HCI</span></td>
        <td>Bergen, Norway</td>
        <td>Rolling deadlines (Jan 15, Apr 15, Jul 15)</td>
        <td>Nov 08 – Nov 12, 2025</td>
      </tr>
      <tr data-field="hci">
        <td class="conf-name"><a href="https://humanrobotinteraction.org/2026/" target="_blank">HRI 2026</a><br><small>IEEE/ACM International Conference on Human-Robot Interaction</small></td>
        <td><span class="badge-field badge-hci">HCI</span><span class="badge-field badge-rob">Robotics</span></td>
        <td>Edinburgh, Scotland, UK</td>
        <td><span class="deadline-passed">Abstract: Sep 22, 2025</span><br><span class="deadline-passed">Paper: Sep 30, 2025</span></td>
        <td>Mar 16 – Mar 19, 2026</td>
      </tr>
      
      <!-- Ubiquitous & Pervasive Computing -->
      <tr data-field="ubi">
        <td class="conf-name"><a href="https://ubicomp.org/" target="_blank">UbiComp 2025</a><br><small>ACM International Joint Conference on Pervasive and Ubiquitous Computing</small></td>
        <td><span class="badge-field badge-ubi">Ubicomp</span></td>
        <td>Melbourne, Australia</td>
        <td>Rolling deadlines (Feb 1, May 1, Aug 1, Nov 1)</td>
        <td>Oct 05 – Oct 09, 2025</td>
      </tr>
      <tr data-field="ubi">
        <td class="conf-name"><a href="https://www.percom.org/" target="_blank">PerCom 2026</a><br><small>IEEE International Conference on Pervasive Computing and Communications</small></td>
        <td><span class="badge-field badge-ubi">Ubicomp</span></td>
        <td class="tbd">TBD</td>
        <td class="tbd">TBD</td>
        <td>Mar 2026 (expected)</td>
      </tr>
      <tr data-field="ubi">
        <td class="conf-name"><a href="https://sensys.acm.org/" target="_blank">SenSys 2025</a><br><small>ACM Conference on Embedded Networked Sensor Systems</small></td>
        <td><span class="badge-field badge-ubi">Ubicomp</span></td>
        <td class="tbd">TBD</td>
        <td class="tbd">TBD</td>
        <td>Nov 2025 (expected)</td>
      </tr>
      <tr data-field="ubi">
        <td class="conf-name"><a href="https://sigmobile.org/mobisys/" target="_blank">MobiSys 2026</a><br><small>ACM International Conference on Mobile Systems, Applications, and Services</small></td>
        <td><span class="badge-field badge-ubi">Ubicomp</span></td>
        <td class="tbd">TBD</td>
        <td class="tbd">TBD</td>
        <td>Jun 2026 (expected)</td>
      </tr>
      
      <!-- Robotics -->
      <tr data-field="rob">
        <td class="conf-name"><a href="https://2026.ieee-icra.org" target="_blank">ICRA 2026</a><br><small>IEEE International Conference on Robotics and Automation</small></td>
        <td><span class="badge-field badge-rob">Robotics</span></td>
        <td>Vienna, Austria</td>
        <td><span class="deadline-passed">Paper: Sep 15, 2025</span></td>
        <td>Jun 01 – Jun 05, 2026</td>
      </tr>
      <tr data-field="rob">
        <td class="conf-name"><a href="https://iros2025.org/" target="_blank">IROS 2025</a><br><small>IEEE/RSJ International Conference on Intelligent Robots and Systems</small></td>
        <td><span class="badge-field badge-rob">Robotics</span></td>
        <td>Hangzhou, China</td>
        <td><span class="deadline-passed">Paper: Mar 01, 2025</span></td>
        <td>Oct 19 – Oct 25, 2025</td>
      </tr>
      <tr data-field="rob">
        <td class="conf-name"><a href="https://roboticsconference.org" target="_blank">RSS 2026</a><br><small>Robotics: Science and Systems</small></td>
        <td><span class="badge-field badge-rob">Robotics</span></td>
        <td>Sydney, Australia</td>
        <td class="tbd">TBD</td>
        <td>Jul 13 – Jul 17, 2026</td>
      </tr>
      <tr data-field="rob">
        <td class="conf-name"><a href="https://www.corl.org/" target="_blank">CoRL 2026</a><br><small>Conference on Robot Learning</small></td>
        <td><span class="badge-field badge-rob">Robotics</span><span class="badge-field badge-ai">AI/ML</span></td>
        <td>Austin, USA</td>
        <td class="tbd">TBD</td>
        <td>Nov 2026 (expected)</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="last-updated">
  <i class="fa-solid fa-clock"></i> Last updated: December 2024. Conference dates and deadlines are subject to change. Please verify on official conference websites.
</p>

<script>
function filterConferences() {
  const fieldFilter = document.getElementById('field-filter').value;
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const rows = document.querySelectorAll('#conference-table tbody tr');
  
  rows.forEach(row => {
    const field = row.getAttribute('data-field');
    const text = row.textContent.toLowerCase();
    
    const fieldMatch = fieldFilter === 'all' || field === fieldFilter;
    const searchMatch = searchInput === '' || text.includes(searchInput);
    
    row.style.display = fieldMatch && searchMatch ? '' : 'none';
  });
}

// Highlight upcoming deadlines
document.addEventListener('DOMContentLoaded', function() {
  const today = new Date();
  const thirtyDaysFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  const sixtyDaysFromNow = new Date(today.getTime() + 60 * 24 * 60 * 60 * 1000);
  
  // This could be enhanced to parse dates and apply dynamic styling
  // For now, the styling is applied manually based on known dates
});
</script>

