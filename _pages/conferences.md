---
layout: page
title: Conferences
permalink: /conferences/
description: Tracking upcoming top-tier AI, ML, Computer Vision, Data Mining, HCI, Ubiquitous Computing, and Robotics conferences for 2026–2027.
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
  padding: 10px 8px;
  text-align: left;
  font-weight: 500;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid var(--global-divider-color);
}

.conference-tracker td {
  padding: 10px 8px;
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
  font-size: 0.78rem;
  color: var(--global-text-color-light);
  font-weight: 400;
  margin-top: 2px;
}

.deadline-info {
  font-size: 0.82rem;
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
  font-size: 0.88rem;
}

.dates-info {
  font-size: 0.88rem;
  white-space: nowrap;
}

.last-updated {
  font-size: 0.8rem;
  color: var(--global-text-color-light);
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--global-divider-color);
}

.controls-container {
  margin-bottom: 1.5rem;
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;
}

.controls-container label {
  font-size: 0.85rem;
  color: var(--global-text-color-light);
}

.controls-container select,
.controls-container input[type="text"] {
  padding: 5px 10px;
  border: 1px solid var(--global-divider-color);
  border-radius: 4px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  font-size: 0.82rem;
}

.controls-container input[type="text"] {
  min-width: 160px;
}

.controls-container input[type="text"]:focus,
.controls-container select:focus {
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

.deadline-passed {
  opacity: 0.5;
  border-left: 3px solid rgba(158, 158, 158, 0.4);
}

.deadline-upcoming {
  border-left: 3px solid rgba(76, 175, 80, 0.5);
}

.deadline-soon {
  border-left: 3px solid rgba(255, 152, 0, 0.8);
}

@media (max-width: 768px) {
  .conference-tracker {
    overflow-x: auto;
  }

  .conference-tracker table {
    min-width: 650px;
  }
}
</style>

<div class="controls-container">
  <label for="field-filter">Filter:</label>
  <select id="field-filter" onchange="applyControls()">
    <option value="all">All Fields</option>
    <option value="ai">AI & ML</option>
    <option value="cv">Computer Vision</option>
    <option value="dm">Data Mining</option>
    <option value="hci">HCI</option>
    <option value="ubi">Ubiquitous Computing</option>
    <option value="rob">Robotics</option>
  </select>
  <label for="sort-select">Sort:</label>
  <select id="sort-select" onchange="applyControls()">
    <option value="deadline">By CFP Deadline</option>
    <option value="conf-date">By Conference Date</option>
  </select>
  <input type="text" id="search-input" placeholder="Search..." onkeyup="applyControls()">
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
      <tr data-field="ubi" data-deadline="2025-12-05" data-conf-date="2026-06-21">
        <td class="conf-name">
          <a href="https://www.sigmobile.org/mobisys/2026/" target="_blank">MobiSys 2026</a>
          <span class="conf-full-name">ACM International Conference on Mobile Systems, Applications, and Services</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">Cambridge, UK</td>
        <td class="deadline-info">
          <span class="paper">Paper: Dec 05, 2025</span>
        </td>
        <td class="dates-info">Jun 21–25, 2026</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-03-14" data-conf-date="2026-07-02">
        <td class="conf-name">
          <a href="https://2026.aclweb.org/" target="_blank">ACL 2026</a>
          <span class="conf-full-name">Annual Meeting of the Association for Computational Linguistics</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">San Diego, CA, USA</td>
        <td class="deadline-info">
          <span class="abstract">ARR Submission: Jan 05, 2026</span><br>
          <span class="paper">Commitment: Mar 14, 2026</span>
        </td>
        <td class="dates-info">Jul 02–07, 2026</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-01-28" data-conf-date="2026-07-06">
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
      <tr data-field="rob" data-deadline="2026-01-30" data-conf-date="2026-07-13">
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
      <tr data-field="dm" data-deadline="2026-02-08" data-conf-date="2026-08-09">
        <td class="conf-name">
          <a href="https://kdd2026.kdd.org/" target="_blank">KDD 2026</a>
          <span class="conf-full-name">ACM SIGKDD Conference on Knowledge Discovery and Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Jeju, South Korea</td>
        <td class="deadline-info">
          <span class="abstract">Cycle 2 Abstract: Feb 01, 2026</span><br>
          <span class="paper">Cycle 2 Paper: Feb 08, 2026</span>
        </td>
        <td class="dates-info">Aug 09–13, 2026</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-01-19" data-conf-date="2026-08-15">
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
      <tr data-field="dm" data-deadline="2026-03-12" data-conf-date="2026-09-07">
        <td class="conf-name">
          <a href="https://ecmlpkdd.org/2026/" target="_blank">ECML-PKDD 2026</a>
          <span class="conf-full-name">European Conference on ML and Principles of Knowledge Discovery</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Naples, Italy</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Mar 05, 2026</span><br>
          <span class="paper">Paper: Mar 12, 2026</span>
        </td>
        <td class="dates-info">Sep 07–11, 2026</td>
      </tr>
      <tr data-field="cv" data-deadline="2026-03-05" data-conf-date="2026-09-08">
        <td class="conf-name">
          <a href="https://eccv.ecva.net/Conferences/2026" target="_blank">ECCV 2026</a>
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
      <tr data-field="rob" data-deadline="2026-03-02" data-conf-date="2026-09-27">
        <td class="conf-name">
          <a href="https://2026.ieee-iros.org/" target="_blank">IROS 2026</a>
          <span class="conf-full-name">IEEE/RSJ International Conference on Intelligent Robots and Systems</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">Pittsburgh, PA, USA</td>
        <td class="deadline-info">
          <span class="paper">Paper: Mar 02, 2026</span>
        </td>
        <td class="dates-info">Sep 27–Oct 01, 2026</td>
      </tr>
      <tr data-field="hci" data-deadline="2026-07-01" data-conf-date="2026-10-10">
        <td class="conf-name">
          <a href="https://cscw.acm.org/2026/" target="_blank">CSCW 2026</a>
          <span class="conf-full-name">ACM Conference on Computer-Supported Cooperative Work</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">Salt Lake City, UT, USA</td>
        <td class="deadline-info">
          <span class="paper">Rolling (pilot program)</span>
        </td>
        <td class="dates-info">Oct 10–14, 2026</td>
      </tr>
      <tr data-field="ubi" data-deadline="2026-05-17" data-conf-date="2026-10-13">
        <td class="conf-name">
          <a href="https://www.ubicomp.org/ubicomp-iswc-2026/" target="_blank">UbiComp 2026</a>
          <span class="conf-full-name">ACM International Joint Conference on Pervasive and Ubiquitous Computing</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">Shanghai, China</td>
        <td class="deadline-info">
          <span class="paper">Paper: May 17, 2026</span>
        </td>
        <td class="dates-info">Oct 13–15, 2026</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-08-02" data-conf-date="2026-10-24">
        <td class="conf-name">
          <a href="https://2026.emnlp.org/" target="_blank">EMNLP 2026</a>
          <span class="conf-full-name">Conference on Empirical Methods in Natural Language Processing</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Budapest, Hungary</td>
        <td class="deadline-info">
          <span class="abstract">ARR Submission: May 25, 2026</span><br>
          <span class="paper">Commitment: Aug 02, 2026</span>
        </td>
        <td class="dates-info">Oct 24–29, 2026</td>
      </tr>
      <tr data-field="ubi" data-deadline="2026-06-29" data-conf-date="2026-10-26">
        <td class="conf-name">
          <a href="https://www.sigmobile.org/mobicom/2026/" target="_blank">MobiCom 2026</a>
          <span class="conf-full-name">ACM International Conference on Mobile Computing and Networking</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">Austin, TX, USA</td>
        <td class="deadline-info">
          <span class="abstract">Paper: Mar 13, 2026 (passed)</span><br>
          <span class="paper">Posters: Jun 29, 2026</span>
        </td>
        <td class="dates-info">Oct 26–30, 2026</td>
      </tr>
      <tr data-field="hci" data-deadline="2026-07-10" data-conf-date="2026-11-02">
        <td class="conf-name">
          <a href="https://uist.acm.org/2026/" target="_blank">UIST 2026</a>
          <span class="conf-full-name">ACM Symposium on User Interface Software and Technology</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">Detroit, MI, USA</td>
        <td class="deadline-info">
          <span class="abstract">Paper: Mar 31, 2026 (passed)</span><br>
          <span class="paper">Posters/Demos: Jul 10, 2026</span>
        </td>
        <td class="dates-info">Nov 02–05, 2026</td>
      </tr>
      <tr data-field="rob" data-deadline="2026-05-28" data-conf-date="2026-11-09">
        <td class="conf-name">
          <a href="https://www.corl.org/" target="_blank">CoRL 2026</a>
          <span class="conf-full-name">Conference on Robot Learning</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">Austin, TX, USA</td>
        <td class="deadline-info">
          <span class="paper">Paper: May 28, 2026</span>
        </td>
        <td class="dates-info">Nov 09–12, 2026</td>
      </tr>
      <tr data-field="dm" data-deadline="2026-06-06" data-conf-date="2026-11-12">
        <td class="conf-name">
          <a href="https://www3.cs.stonybrook.edu/~icdm2026/" target="_blank">ICDM 2026</a>
          <span class="conf-full-name">IEEE International Conference on Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Shenyang, China</td>
        <td class="deadline-info">
          <span class="paper">Paper: Jun 06, 2026</span>
        </td>
        <td class="dates-info">Nov 12–15, 2026</td>
      </tr>
      <tr data-field="dm" data-deadline="2026-04-17" data-conf-date="2026-11-19">
        <td class="conf-name">
          <a href="https://www.siam.org/conferences-events/siam-conferences/sdm26/" target="_blank">SDM 2026</a>
          <span class="conf-full-name">SIAM International Conference on Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Salt Lake City, UT, USA</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Apr 10, 2026</span><br>
          <span class="paper">Paper: Apr 17, 2026</span>
        </td>
        <td class="dates-info">Nov 19–20, 2026</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-05-06" data-conf-date="2026-12-06">
        <td class="conf-name">
          <a href="https://neurips.cc/Conferences/2026" target="_blank">NeurIPS 2026</a>
          <span class="conf-full-name">Conference on Neural Information Processing Systems</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Sydney, Australia</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: May 04, 2026</span><br>
          <span class="paper">Paper: May 06, 2026</span>
        </td>
        <td class="dates-info">Dec 06–12, 2026</td>
      </tr>
      <tr data-field="dm" data-deadline="2026-08-24" data-conf-date="2027-02-15">
        <td class="conf-name">
          <a href="https://wsdm-conference.org/2027/" target="_blank">WSDM 2027</a>
          <span class="conf-full-name">ACM International Conference on Web Search and Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Hong Kong</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Aug 17, 2026</span><br>
          <span class="paper">Paper: Aug 24, 2026</span>
        </td>
        <td class="dates-info">Feb 15–19, 2027</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-07-28" data-conf-date="2027-02-16">
        <td class="conf-name">
          <a href="https://aaai.org/conference/aaai/aaai-27/" target="_blank">AAAI 2027</a>
          <span class="conf-full-name">AAAI Conference on Artificial Intelligence</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Montréal, Canada</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Jul 21, 2026</span><br>
          <span class="paper">Paper: Jul 28, 2026</span>
        </td>
        <td class="dates-info">Feb 16–23, 2027</td>
      </tr>
      <tr data-field="ubi" data-deadline="2026-09-11" data-conf-date="2027-03-08">
        <td class="conf-name">
          <a href="https://percom.org/" target="_blank">PerCom 2027</a>
          <span class="conf-full-name">IEEE International Conference on Pervasive Computing and Communications</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">Goa, India</td>
        <td class="deadline-info">
          <span class="abstract">Registration: Sep 04, 2026</span><br>
          <span class="paper">Paper: Sep 11, 2026</span>
        </td>
        <td class="dates-info">Mar 08–12, 2027</td>
      </tr>
      <tr data-field="hci" data-deadline="2026-09-10" data-conf-date="2027-05-10">
        <td class="conf-name">
          <a href="https://chi2027.acm.org/" target="_blank">CHI 2027</a>
          <span class="conf-full-name">ACM Conference on Human Factors in Computing Systems</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">Pittsburgh, PA, USA</td>
        <td class="deadline-info">
          <span class="paper">Paper: Sep 10, 2026</span>
        </td>
        <td class="dates-info">May 10–14, 2027</td>
      </tr>
      <tr data-field="rob" data-deadline="2026-09-15" data-conf-date="2027-05-24">
        <td class="conf-name">
          <a href="https://2027.ieee-icra.org/" target="_blank">ICRA 2027</a>
          <span class="conf-full-name">IEEE International Conference on Robotics and Automation</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">COEX, Seoul, South Korea</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Sep 2026 (TBA)</span>
        </td>
        <td class="dates-info">May 24–28, 2027</td>
      </tr>
      <tr data-field="cv" data-deadline="2026-11-13" data-conf-date="2027-06-19">
        <td class="conf-name">
          <a href="https://cvpr.thecvf.com/Conferences/2027" target="_blank">CVPR 2027</a>
          <span class="conf-full-name">IEEE/CVF Conference on Computer Vision and Pattern Recognition</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">Seattle, WA, USA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Nov 2026 (TBA)</span>
        </td>
        <td class="dates-info">Jun 19–26, 2027</td>
      </tr>
      <tr data-field="cv" data-deadline="2027-03-07" data-conf-date="2027-10-15">
        <td class="conf-name">
          <a href="https://iccv.thecvf.com/" target="_blank">ICCV 2027</a>
          <span class="conf-full-name">International Conference on Computer Vision</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">Hong Kong</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Mar 07, 2027</span>
        </td>
        <td class="dates-info">Oct 2027</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="last-updated">
  <i class="fa-solid fa-info-circle"></i> Deadlines prefixed with ~ are projected based on historical patterns. Please verify on official conference websites. Last updated: June 2026.
</p>

<script>
function applyControls() {
  filterConferences();
  sortConferences();
  classifyDeadlines();
}

function filterConferences() {
  var fieldFilter = document.getElementById('field-filter').value;
  var searchInput = document.getElementById('search-input').value.toLowerCase();
  var rows = document.querySelectorAll('#conference-table tbody tr');

  rows.forEach(function(row) {
    var field = row.getAttribute('data-field');
    var text = row.textContent.toLowerCase();

    var fieldMatch = fieldFilter === 'all' || field === fieldFilter;
    var searchMatch = searchInput === '' || text.includes(searchInput);

    row.style.display = fieldMatch && searchMatch ? '' : 'none';
  });
}

function sortConferences() {
  var sortBy = document.getElementById('sort-select').value;
  var tbody = document.querySelector('#conference-table tbody');
  var rows = Array.from(tbody.querySelectorAll('tr'));
  var today = new Date();
  today.setHours(0, 0, 0, 0);

  rows.sort(function(a, b) {
    var attrA, attrB;
    if (sortBy === 'conf-date') {
      attrA = a.getAttribute('data-conf-date') || '9999-12-31';
      attrB = b.getAttribute('data-conf-date') || '9999-12-31';
      return attrA.localeCompare(attrB);
    }

    attrA = a.getAttribute('data-deadline') || '9999-12-31';
    attrB = b.getAttribute('data-deadline') || '9999-12-31';

    var dateA = new Date(attrA);
    var dateB = new Date(attrB);
    var aIsPast = dateA < today;
    var bIsPast = dateB < today;

    if (aIsPast !== bIsPast) return aIsPast ? 1 : -1;
    return attrA.localeCompare(attrB);
  });

  rows.forEach(function(row) { tbody.appendChild(row); });
}

function classifyDeadlines() {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var soonThreshold = new Date(today);
  soonThreshold.setDate(soonThreshold.getDate() + 45);
  var rows = document.querySelectorAll('#conference-table tbody tr[data-deadline]');

  rows.forEach(function(row) {
    var deadlineStr = row.getAttribute('data-deadline');
    if (!deadlineStr) return;

    var deadline = new Date(deadlineStr);
    deadline.setHours(0, 0, 0, 0);

    row.classList.remove('deadline-passed', 'deadline-upcoming', 'deadline-soon');

    if (deadline < today) {
      row.classList.add('deadline-passed');
    } else if (deadline <= soonThreshold) {
      row.classList.add('deadline-soon');
    } else {
      row.classList.add('deadline-upcoming');
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  sortConferences();
  classifyDeadlines();
});
</script>
