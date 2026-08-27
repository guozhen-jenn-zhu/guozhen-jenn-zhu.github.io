---
layout: page
title: Conferences
permalink: /conferences/
description: Next open submission deadline for each top-tier AI, ML, Computer Vision, Data Mining, HCI, Ubiquitous Computing, and Robotics venue.
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
      <tr data-field="dm" data-deadline="2026-08-24" data-conf-date="2027-02-15">
        <td class="conf-name">
          <a href="https://wsdm-conference.org/2027/" target="_blank">WSDM 2027</a>
          <span class="conf-full-name">ACM International Conference on Web Search and Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Hong Kong</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Aug 17, 2026</span><br>
          <span class="paper">Full Paper: Aug 24, 2026</span>
        </td>
        <td class="dates-info">Feb 15–19, 2027</td>
      </tr>
      <tr data-field="cv" data-deadline="2026-08-28" data-conf-date="2027-01-04">
        <td class="conf-name">
          <a href="https://wacv.thecvf.com/" target="_blank">WACV 2027</a>
          <span class="conf-full-name">IEEE/CVF Winter Conference on Applications of Computer Vision</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">Orlando, FL, USA</td>
        <td class="deadline-info">
          <span class="abstract">Round 2 Registration: Aug 21, 2026</span><br>
          <span class="paper">Round 2 Paper: Aug 28, 2026</span>
        </td>
        <td class="dates-info">Jan 04–08, 2027</td>
      </tr>
      <tr data-field="ubi" data-deadline="2026-09-02" data-conf-date="2027-10-18">
        <td class="conf-name">
          <a href="https://www.sigmobile.org/mobicom/2027/" target="_blank">MobiCom 2027</a>
          <span class="conf-full-name">ACM International Conference on Mobile Computing and Networking</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="abstract">Summer Abstract: Aug 26, 2026</span><br>
          <span class="paper">Summer Paper: Sep 02, 2026</span>
        </td>
        <td class="dates-info">Oct 18–22, 2027</td>
      </tr>
      <tr data-field="hci" data-deadline="2026-09-10" data-conf-date="2027-05-10">
        <td class="conf-name">
          <a href="https://chi2027.acm.org/" target="_blank">CHI 2027</a>
          <span class="conf-full-name">ACM Conference on Human Factors in Computing Systems</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">Pittsburgh, PA, USA</td>
        <td class="deadline-info">
          <span class="paper">Paper: Sep 10, 2026</span><br>
          <span class="abstract">No abstract deadline</span>
        </td>
        <td class="dates-info">May 10–14, 2027</td>
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
      <tr data-field="rob" data-deadline="2026-09-15" data-conf-date="2027-05-24">
        <td class="conf-name">
          <a href="https://2027.ieee-icra.org/" target="_blank">ICRA 2027</a>
          <span class="conf-full-name">IEEE International Conference on Robotics and Automation</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">COEX, Seoul, South Korea</td>
        <td class="deadline-info">
          <span class="paper">Paper: Sep 15, 2026</span>
        </td>
        <td class="dates-info">May 24–28, 2027</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-09-25" data-conf-date="2027-04-26">
        <td class="conf-name">
          <a href="https://iclr.cc/Conferences/2027" target="_blank">ICLR 2027</a>
          <span class="conf-full-name">International Conference on Learning Representations</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">West Coast, USA (TBA)</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Sep 18, 2026</span><br>
          <span class="paper">Paper: Sep 25, 2026</span>
        </td>
        <td class="dates-info">Apr 26–30, 2027</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-10-08" data-conf-date="2027-05-01">
        <td class="conf-name">
          <a href="https://aistats.org/" target="_blank">AISTATS 2027</a>
          <span class="conf-full-name">International Conference on Artificial Intelligence and Statistics</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Oct 2026</span>
        </td>
        <td class="dates-info">May 2027 (TBA)</td>
      </tr>
      <tr data-field="ai" data-deadline="2026-10-12" data-conf-date="2027-06-01">
        <td class="conf-name">
          <a href="https://2027.naacl.org/" target="_blank">NAACL 2027</a>
          <span class="conf-full-name">Annual Conference of the North American Chapter of the ACL</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">San Francisco, CA, USA</td>
        <td class="deadline-info">
          <span class="paper">ARR Submission: Oct 12, 2026</span>
        </td>
        <td class="dates-info">Jun 01–05, 2027</td>
      </tr>
      <tr data-field="dm" data-deadline="2026-10-25" data-conf-date="2027-05-10">
        <td class="conf-name">
          <a href="https://acmweb2027.org/" target="_blank">WWW 2027</a>
          <span class="conf-full-name">ACM Web Conference</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Dublin, Ireland</td>
        <td class="deadline-info">
          <span class="abstract">Abstract: Oct 18, 2026</span><br>
          <span class="paper">Paper: Oct 25, 2026</span>
        </td>
        <td class="dates-info">May 10–14, 2027</td>
      </tr>
      <tr data-field="ubi" data-deadline="2026-11-01" data-conf-date="2027-10-03">
        <td class="conf-name">
          <a href="https://www.ubicomp.org/" target="_blank">UbiComp/ISWC 2027</a>
          <span class="conf-full-name">ACM International Joint Conference on Pervasive and Ubiquitous Computing</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">Seoul, South Korea</td>
        <td class="deadline-info">
          <span class="paper">IMWUT: Nov 01, 2026</span><br>
          <span class="abstract">Then Feb 01 &amp; May 01, 2027</span>
        </td>
        <td class="dates-info">Oct 03–07, 2027</td>
      </tr>
      <tr data-field="ubi" data-deadline="2026-11-13" data-conf-date="2027-05-01">
        <td class="conf-name">
          <a href="https://sensys.acm.org/2027/" target="_blank">SenSys 2027</a>
          <span class="conf-full-name">ACM Conference on Embedded Networked Sensor Systems</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">New York, NY, USA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Round 2 Paper: Nov 2026</span>
        </td>
        <td class="dates-info">2027 (TBA)</td>
      </tr>
      <tr data-field="cv" data-deadline="2026-11-13" data-conf-date="2027-06-20">
        <td class="conf-name">
          <a href="https://cvpr.thecvf.com/Conferences/2027" target="_blank">CVPR 2027</a>
          <span class="conf-full-name">IEEE/CVF Conference on Computer Vision and Pattern Recognition</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">Seattle, WA, USA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Nov 06, 2026</span><br>
          <span class="deadline-projected">Paper: Nov 13, 2026</span>
        </td>
        <td class="dates-info">Jun 20–24, 2027</td>
      </tr>
      <tr data-field="ubi" data-deadline="2026-12-04" data-conf-date="2027-06-01">
        <td class="conf-name">
          <a href="https://www.sigmobile.org/mobisys/" target="_blank">MobiSys 2027</a>
          <span class="conf-full-name">ACM International Conference on Mobile Systems, Applications, and Services</span>
        </td>
        <td><span class="field-tag field-ubi">Ubicomp</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Dec 2026</span>
        </td>
        <td class="dates-info">Jun 2027 (TBA)</td>
      </tr>
      <tr data-field="ai" data-deadline="2027-01-05" data-conf-date="2027-08-17">
        <td class="conf-name">
          <a href="https://2027.aclweb.org/" target="_blank">ACL 2027</a>
          <span class="conf-full-name">Annual Meeting of the Association for Computational Linguistics</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Kyoto, Japan</td>
        <td class="deadline-info">
          <span class="deadline-projected">ARR Submission: Jan 2027</span><br>
          <span class="deadline-projected">Commitment: Mar 2027</span>
        </td>
        <td class="dates-info">Aug 17–22, 2027</td>
      </tr>
      <tr data-field="ai" data-deadline="2027-01-19" data-conf-date="2027-08-07">
        <td class="conf-name">
          <a href="https://www.ijcai.org/" target="_blank">IJCAI 2027</a>
          <span class="conf-full-name">International Joint Conference on Artificial Intelligence</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Kyoto, Japan</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Jan 2027</span><br>
          <span class="deadline-projected">Paper: Jan 2027</span>
        </td>
        <td class="dates-info">Aug 07–13, 2027</td>
      </tr>
      <tr data-field="dm" data-deadline="2027-01-22" data-conf-date="2027-07-25">
        <td class="conf-name">
          <a href="https://sigir.org/" target="_blank">SIGIR 2027</a>
          <span class="conf-full-name">ACM SIGIR Conference on Research and Development in Information Retrieval</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Silicon Valley, CA, USA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Jan 2027</span><br>
          <span class="deadline-projected">Paper: Jan 2027</span>
        </td>
        <td class="dates-info">Jul 2027 (TBA)</td>
      </tr>
      <tr data-field="ai" data-deadline="2027-01-28" data-conf-date="2027-07-01">
        <td class="conf-name">
          <a href="https://icml.cc/Conferences/2027" target="_blank">ICML 2027</a>
          <span class="conf-full-name">International Conference on Machine Learning</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">South America (TBA)</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Jan 2027</span><br>
          <span class="deadline-projected">Paper: Jan 2027</span>
        </td>
        <td class="dates-info">Jul 2027 (TBA)</td>
      </tr>
      <tr data-field="rob" data-deadline="2027-01-29" data-conf-date="2027-07-06">
        <td class="conf-name">
          <a href="https://roboticsconference.org" target="_blank">RSS 2027</a>
          <span class="conf-full-name">Robotics: Science and Systems</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">Athens, Greece</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Jan 2027</span><br>
          <span class="deadline-projected">Paper: Jan 2027</span>
        </td>
        <td class="dates-info">Jul 06–11, 2027</td>
      </tr>
      <tr data-field="dm" data-deadline="2027-02-01" data-conf-date="2027-08-01">
        <td class="conf-name">
          <a href="https://kdd2027.kdd.org/" target="_blank">KDD 2027</a>
          <span class="conf-full-name">ACM SIGKDD Conference on Knowledge Discovery and Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">San Jose, CA, USA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Cycle 2 Paper: Feb 2027</span><br>
          <span class="abstract">New &amp; revised papers</span>
        </td>
        <td class="dates-info">Aug 01–05, 2027</td>
      </tr>
      <tr data-field="rob" data-deadline="2027-03-01" data-conf-date="2027-09-26">
        <td class="conf-name">
          <a href="https://www.ieee-ras.org/conferences-workshops/financially-co-sponsored/iros" target="_blank">IROS 2027</a>
          <span class="conf-full-name">IEEE/RSJ International Conference on Intelligent Robots and Systems</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">Florence, Italy</td>
        <td class="deadline-info">
          <span class="paper">Paper: Mar 01, 2027</span>
        </td>
        <td class="dates-info">Sep 26–Oct 01, 2027</td>
      </tr>
      <tr data-field="cv" data-deadline="2027-03-07" data-conf-date="2027-10-02">
        <td class="conf-name">
          <a href="https://iccv.thecvf.com/" target="_blank">ICCV 2027</a>
          <span class="conf-full-name">IEEE/CVF International Conference on Computer Vision</span>
        </td>
        <td><span class="field-tag field-cv">CV</span></td>
        <td class="venue-info">Hong Kong</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Mar 2027</span>
        </td>
        <td class="dates-info">Oct 02–08, 2027</td>
      </tr>
      <tr data-field="dm" data-deadline="2027-03-12" data-conf-date="2027-09-20">
        <td class="conf-name">
          <a href="https://ecmlpkdd.org/2027/" target="_blank">ECML-PKDD 2027</a>
          <span class="conf-full-name">European Conference on ML and Principles of Knowledge Discovery</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Eindhoven, Netherlands</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Mar 2027</span>
        </td>
        <td class="dates-info">Sep 20–24, 2027</td>
      </tr>
      <tr data-field="ai" data-deadline="2027-03-30" data-conf-date="2027-10-06">
        <td class="conf-name">
          <a href="https://colmweb.org/" target="_blank">COLM 2027</a>
          <span class="conf-full-name">Conference on Language Modeling</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Mar 2027</span><br>
          <span class="deadline-projected">Paper: Mar 2027</span>
        </td>
        <td class="dates-info">Oct 2027 (TBA)</td>
      </tr>
      <tr data-field="hci" data-deadline="2027-04-02" data-conf-date="2027-10-01">
        <td class="conf-name">
          <a href="https://uist.acm.org/" target="_blank">UIST 2027</a>
          <span class="conf-full-name">ACM Symposium on User Interface Software and Technology</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Mar 2027</span><br>
          <span class="deadline-projected">Paper: Apr 02, 2027</span>
        </td>
        <td class="dates-info">Oct 2027 (TBA)</td>
      </tr>
      <tr data-field="rob" data-deadline="2027-05-01" data-conf-date="2027-11-01">
        <td class="conf-name">
          <a href="https://www.corl.org/" target="_blank">CoRL 2027</a>
          <span class="conf-full-name">Conference on Robot Learning</span>
        </td>
        <td><span class="field-tag field-rob">Robotics</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: May 2027</span>
        </td>
        <td class="dates-info">Nov 2027 (TBA)</td>
      </tr>
      <tr data-field="ai" data-deadline="2027-05-06" data-conf-date="2027-12-05">
        <td class="conf-name">
          <a href="https://neurips.cc/Conferences/2027" target="_blank">NeurIPS 2027</a>
          <span class="conf-full-name">Conference on Neural Information Processing Systems</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Europe (TBA)</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: May 2027</span><br>
          <span class="deadline-projected">Paper: May 2027</span>
        </td>
        <td class="dates-info">Dec 2027 (TBA)</td>
      </tr>
      <tr data-field="dm" data-deadline="2027-05-23" data-conf-date="2027-10-25">
        <td class="conf-name">
          <a href="http://www.cikmconference.org/" target="_blank">CIKM 2027</a>
          <span class="conf-full-name">ACM International Conference on Information and Knowledge Management</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">Sydney, Australia</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: May 2027</span><br>
          <span class="deadline-projected">Paper: May 2027</span>
        </td>
        <td class="dates-info">Oct 2027 (TBA)</td>
      </tr>
      <tr data-field="ai" data-deadline="2027-05-25" data-conf-date="2027-11-01">
        <td class="conf-name">
          <a href="https://2027.emnlp.org/" target="_blank">EMNLP 2027</a>
          <span class="conf-full-name">Conference on Empirical Methods in Natural Language Processing</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">Mexico / Central America (TBA)</td>
        <td class="deadline-info">
          <span class="deadline-projected">ARR Submission: May 2027</span><br>
          <span class="deadline-projected">Commitment: Aug 2027</span>
        </td>
        <td class="dates-info">Nov 2027 (TBA)</td>
      </tr>
      <tr data-field="dm" data-deadline="2027-06-06" data-conf-date="2027-11-12">
        <td class="conf-name">
          <a href="https://www.icdm-conference.org/" target="_blank">ICDM 2027</a>
          <span class="conf-full-name">IEEE International Conference on Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Paper: Jun 2027</span>
        </td>
        <td class="dates-info">Nov 2027 (TBA)</td>
      </tr>
      <tr data-field="ai" data-deadline="2027-07-27" data-conf-date="2028-01-20">
        <td class="conf-name">
          <a href="https://aaai.org/conference/aaai/" target="_blank">AAAI 2028</a>
          <span class="conf-full-name">AAAI Conference on Artificial Intelligence</span>
        </td>
        <td><span class="field-tag field-ai">AI/ML</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="deadline-projected">Abstract: Jul 2027</span><br>
          <span class="deadline-projected">Paper: Jul 2027</span>
        </td>
        <td class="dates-info">Jan 2028 (TBA)</td>
      </tr>
      <tr data-field="hci" data-conf-date="2027-10-01">
        <td class="conf-name">
          <a href="https://cscw.acm.org/rolling.html" target="_blank">CSCW 2027</a>
          <span class="conf-full-name">ACM Conference on Computer-Supported Cooperative Work</span>
        </td>
        <td><span class="field-tag field-hci">HCI</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="paper">Rolling — submit anytime</span><br>
          <span class="abstract">via PACM HCI, no fixed deadline</span>
        </td>
        <td class="dates-info">Oct 2027 (TBA)</td>
      </tr>
      <tr data-field="dm" data-conf-date="2027-05-01">
        <td class="conf-name">
          <a href="https://www.siam.org/conferences-events/siam-conferences/" target="_blank">SDM 2027</a>
          <span class="conf-full-name">SIAM International Conference on Data Mining</span>
        </td>
        <td><span class="field-tag field-dm">Data Mining</span></td>
        <td class="venue-info">TBA</td>
        <td class="deadline-info">
          <span class="abstract">Not yet announced</span>
        </td>
        <td class="dates-info">2027 (TBA)</td>
      </tr>
    </tbody>
  </table>
</div>

<p class="last-updated">
  <i class="fa-solid fa-info-circle"></i> Each venue shows its next open submission deadline; editions whose deadline has already passed are rolled forward. Deadlines prefixed with ~ are projected from historical patterns and not yet officially announced. All dates are Anywhere on Earth (AoE) — please verify on the official conference website before submitting. Last updated: August 26, 2026.
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
