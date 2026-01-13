---
layout: page
title: Conferences
permalink: /conferences/
description: Tracking upcoming top-tier AI, ML, Computer Vision, Data Mining, HCI, Ubiquitous Computing, and Robotics conferences for 2026.
nav: false
---

<style>
.conference-tracker {
  margin-top: 1.5rem;
}

.conference-tracker table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.conference-tracker th {
  color: var(--global-text-color);
  padding: 12px 10px;
  text-align: left;
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--global-divider-color);
}

.conference-tracker td {
  padding: 14px 10px;
  border-bottom: 1px solid var(--global-divider-color);
  vertical-align: top;
}

.conference-tracker tbody tr:hover {
  background: var(--global-code-bg-color);
}

.conference-tracker .conf-name {
  font-weight: 600;
}

.conference-tracker .conf-name a {
  color: var(--global-theme-color);
  text-decoration: none;
  border-bottom: 1px dashed var(--global-theme-color);
}

.conference-tracker .conf-name a:hover {
  border-bottom-style: solid;
}

.conference-tracker .conf-full-name {
  display: block;
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  font-weight: 400;
  margin-top: 2px;
}

.deadline-info {
  font-size: 0.85rem;
  line-height: 1.5;
}

.deadline-info .abstract {
  color: var(--global-text-color-light);
}

.deadline-info .paper {
  font-weight: 500;
}

.deadline-projected {
  font-style: italic;
  color: var(--global-text-color-light);
}

.deadline-projected::before {
  content: "~";
}

.venue-info {
  font-size: 0.9rem;
}

.dates-info {
  font-size: 0.9rem;
  white-space: nowrap;
}

.last-updated {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--global-divider-color);
}

.filter-container {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.filter-container label {
  font-size: 0.9rem;
  color: var(--global-text-color-light);
}

.filter-container select,
.filter-container input[type="text"] {
  padding: 6px 10px;
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-size: 0.85rem;
}

.filter-container input[type="text"] {
  min-width: 180px;
}

.filter-container input[type="text"]:focus,
.filter-container select:focus {
  outline: none;
  border-color: var(--global-theme-color);
}

.field-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 3px;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.field-ai { background: rgba(33, 150, 243, 0.15); color: #1976d2; }
.field-cv { background: rgba(156, 39, 176, 0.15); color: #7b1fa2; }
.field-dm { background: rgba(76, 175, 80, 0.15); color: #388e3c; }
.field-hci { background: rgba(255, 152, 0, 0.15); color: #f57c00; }
.field-ubi { background: rgba(0, 188, 212, 0.15); color: #0097a7; }
.field-rob { background: rgba(233, 30, 99, 0.15); color: #c2185b; }

@media (max-width: 768px) {
  .conference-tracker {
    overflow-x: auto;
  }
  
  .conference-tracker table {
    min-width: 650px;
  }
}
</style>

<div class="filter-container">
  <label for="field-filter">Filter:</label>
  <select id="field-filter" onchange="filterConferences()">
    <option value="all">All Fields</option>
    <option value="ai">AI & ML</option>
    <option value="cv">Computer Vision</option>
    <option value="dm">Data Mining</option>
    <option value="hci">HCI</option>
    <option value="ubi">Ubiquittic Computing</option>
    <option value="rob">Robotics</option>
  </select>
  <input type="text" id="search-input" placeholder="Search..." onkeyup="filterConferences()">
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
        <td class="conf-name">
          <a href="https://aaai.org/conference/aaai/aaai-26/" target="_blank">AAAI 2026</a>
          <span class="conf-full-name">AAAI Conference on Artificial Intelligence</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Singapore</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Jul 25, 2025</span><br>
          <span class="paper">Paper: Aug 01, 2025</span>
        </td>
        <td class="dates-info">Jan 20–27, 2026</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name">
          <a href="https://iclr.cc/Conferences/2026" target="_blank">ICLR 2026</a>
          <span class="conf-full-name">International Conference on Learning Representations</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Rio de Janeiro, Brazil</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Sep 19, 2025</span><br>
          <span class="paper">Paper: Sep 24, 2025</span>
        </td>
        <td class="dates-info">Apr 23–27, 2026</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name">
          <a href="https://icml.cc/Conferences/2026" target="_blank">ICML 2026</a>
          <span class="conf-full-name">International Conference on Machine Learning</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Seoul, South Korea</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Jan 23, 2026</span><br>
          <span class="paper">Paper: Jan 28, 2026</span>
        </td>
        <td class="dates-info">Jul 06–11, 2026</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name">
          <a href="https://2026.ijcai.org" target="_blank">IJCAI 2026</a>
          <span class="conf-full-name">International Joint Conference on Artificial Intelligence</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Bremen, Germany</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Jan 12, 2026</span><br>
          <span class="paper">Paper: Jan 19, 2026</span>
        </td>
        <td class="dates-info">Aug 15–21, 2026</td>
      </tr>
      <tr data-field="ai">
        <td class="conf-name">
          <a href="https://neurips.cc/" target="_blank">NeurIPS 2026</a>
          <span class="conf-full-name">Conference on Neural Information Processing Systems</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: May 2026</span><br>
          <span class="deadline-projected">Paper: May 2026</span>
        </td>
        <td class="dates-info">Dec 2026</td>
      </tr>
      
      <!-- Computer Vision -->
      <tr data-field="cv">
        <td class="conf-name">
          <a href="https://cvpr.thecvf.com/Conferences/2026" target="_blank">CVPR 2026</a>
          <span class="conf-full-name">IEEE/CVF Conference on Computer Vision and Pattern Recognition</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">Denver, CO, USA</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Nov 07, 2025</span><br>
          <span class="paper">Paper: Nov 13, 2025</span>
        </td>
        <td class="dates-info">Jun 03–07, 2026</td>
      </tr>
      <tr data-field="cv">
        <td class="conf-name">
          <a href="https://eccv.ecva.net/" target="_blank">ECCV 2026</a>
          <span class="conf-full-name">European Conference on Computer Vision</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">Malmö, Sweden</td>
        <td class="deadline-info">
          <span class="abstract">Registration: Feb 26, 2026</span><br>
          <span class="paper">Paper: Mar 05, 2026</span>
        </td>
        <td class="dates-info">Sep 08–13, 2026</td>
      </tr>
      <tr data-field="cv">
        <td class="conf-name">
          <a href="https://iccv.thecvf.com/" target="_blank">ICCV 2027</a>
          <span class="conf-full-name">International Conference on Computer Vision</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Mar 2027</span>
        </td>
        <td class="dates-info">Oct 2027</td>
      </tr>
      
      <!-- Data Mining & Knowledge Discovery -->
      <tr data-field="dm">
        <td class="conf-name">
          <a href="https://kdd2026.kdd.org/" target="_blank">KDD 2026</a>
          <span class="conf-full-name">ACM SIGKDD Conference on Knowledge Discovery and Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Jeju, South Korea</td>
        <td class="deadline-info">
          <span class="abstract">Cycle 1 Abstract: Jul 24, 2025</span><br>
          <span class="paper">Cycle 1 Paper: Jul 31, 2025</span>
        </td>
        <td class="dates-info">Aug 09–13, 2026</td>
      </tr>
      <tr data-field="dm">
        <td class="conf-name">
          <a href="https://www.siam.org/conferences-events/siam-conferences/sdm26/" target="_blank">SDM 2026</a>
          <span class="conf-full-name">SIAM International Conference on Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Oct 2025</span>
        </td>
        <td class="dates-info">Apr 2026</td>
      </tr>
      <tr data-field="dm">
        <td class="conf-name">
          <a href="https://ecmlpkdd.org/" target="_blank">ECML-PKDD 2026</a>
          <span class="conf-full-name">European Conference on ML and Principles of Knowledge Discovery</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Mar 2026</span><br>
          <span class="deadline-projected">Paper: Mar 2026</span>
        </td>
        <td class="dates-info">Sep 2026</td>
      </tr>
      
      <!-- Human-Computer Interaction -->
      <tr data-field="hci">
        <td class="conf-name">
          <a href="https://chi2026.acm.org" target="_blank">CHI 2026</a>
          <span class="conf-full-name">ACM Conference on Human Factors in Computing Systems</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">Barcelona, Spain</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Sep 04, 2025</span><br>
          <span class="paper">Paper: Sep 11, 2025</span>
        </td>
        <td class="dates-info">Apr 13–17, 2026</td>
      </tr>
      <tr data-field="hci">
        <td class="conf-name">
          <a href="https://uist.acm.org/" target="_blank">UIST 2026</a>
          <span class="conf-full-name">ACM Symposium on User Interface Software and Technology</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Apr 2026</span>
        </td>
        <td class="dates-info">Oct 2026</td>
      </tr>
      <tr data-field="hci">
        <td class="conf-name">
          <a href="https://cscw.acm.org/" target="_blank">CSCW 2026</a>
          <span class="conf-full-name">ACM Conference on Computer-Supported Cooperative Work</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="paper">Rolling (Jan, Apr, Jul)</span>
        </td>
        <td class="dates-info">Nov 2026</td>
      </tr>
      <tr data-field="hci">
        <td class="conf-name">
          <a href="https://humanrobotinteraction.org/2026/" target="_blank">HRI 2026</a>
          <span class="conf-full-name">IEEE/ACM International Conference on Human-Robot Interaction</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">Edinburgh, UK</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Sep 22, 2025</span><br>
          <span class="paper">Paper: Sep 30, 2025</span>
        </td>
        <td class="dates-info">Mar 16–19, 2026</td>
      </tr>
      
      <!-- Ubiquitous & Pervasive Computing -->
      <tr data-field="ubi">
        <td class="conf-name">
          <a href="https://ubicomp.org/" target="_blank">UbiComp 2026</a>
          <span class="conf-full-name">ACM International Joint Conference on Pervasive and Ubiquitous Computing</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="paper">Rolling (Feb, May, Aug, Nov)</span>
        </td>
        <td class="dates-info">Oct 2026</td>
      </tr>
      <tr data-field="ubi">
        <td class="conf-name">
          <a href="https://www.percom.org/" target="_blank">PerCom 2026</a>
          <span class="conf-full-name">IEEE International Conference on Pervasive Computing and Communications</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Sep 2025</span>
        </td>
        <td class="dates-info">Mar 2026</td>
      </tr>
      <tr data-field="ubi">
        <td class="conf-name">
          <a href="https://sensys.acm.org/" target="_blank">SenSys 2026</a>
          <span class="conf-full-name">ACM Conference on Embedded Networked Sensor Systems</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Jun 2026</span>
        </td>
        <td class="dates-info">Nov 2026</td>
      </tr>
      <tr data-field="ubi">
        <td class="conf-name">
          <a href="https://sigmobile.org/mobisys/" target="_blank">MobiSys 2026</a>
          <span class="conf-full-name">ACM International Conference on Mobile Systems, Applications, and Services</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Dec 2025</span>
        </td>
        <td class="dates-info">Jun 2026</td>
      </tr>
      
      <!-- Robotics -->
      <tr data-field="rob">
        <td class="conf-name">
          <a href="https://2026.ieee-icra.org/" target="_blank">ICRA 2026</a>
          <span class="conf-full-name">IEEE International Conference on Robotics and Automation</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">Vienna, Austria</td>
        <td class="deadline-info">
          <span class="paper">Paper: Sep 15, 2025</span>
        </td>
        <td class="dates-info">Jun 01–05, 2026</td>
      </tr>
      <tr data-field="rob">
        <td class="conf-name">
          <a href="https://ieee-iros.org/" target="_blank">IROS 2026</a>
          <span class="conf-full-name">IEEE/RSJ International Conference on Intelligent Robots and Systems</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">TBD</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Mar 2026</span>
        </td>
        <td class="dates-info">Oct 2026</td>
      </tr>
      <tr data-field="rob">
        <td class="conf-name">
          <a href="https://roboticsconference.org" target="_blank">RSS 2026</a>
          <span class="conf-full-name">Robotics: Science and Systems</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">Sydney, Australia</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Jan 23, 2026</span><br>
          <span class="paper">Paper: Jan 30, 2026</span>
        </td>
        <td class="dates-info">Jul 13–17, 2026</td>
      </tr>
      <tr data-field="rob">
        <td class="conf-name">
          <a href="https://www.corl.org/" target="_blank">CoRL 2026</a>
          <span class="conf-full-name">Conference on Robot Learning</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">Austin, TX, USA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Jun 2026</span>
        </td>
        <td class="dates-info">Nov 2026</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="last-updated">
  <i class="fa-solid fa-info-circle"></i> Deadlines prefixed with ~ are projected based on historical patterns. Please verify on official conference websites. Last updated: January 2026.
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
</script>

