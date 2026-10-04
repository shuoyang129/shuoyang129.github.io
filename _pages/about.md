---
permalink: /
lang: en
layout: minimal
title: ""
excerpt: ""
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<section class="ml-section ml-about" id="about-me" markdown="0">
<h2>About Me</h2>
<ul class="ml-interests"><li>Computer Vision</li><li>Vision &amp; Language</li><li>Embodied AI</li></ul>
<p>My research lies at the intersection of computer vision, natural language, and robotics, with a recent focus on <strong>Embodied AI</strong>. I aim to build robots that can understand human instructions, perceive and reason about 3D environments, and act reliably in the physical world. My current work centers on:</p>
<ul class="ml-focus">
<li><b>Robot Manipulation</b>: language-guided manipulation with robotic arms, and mobile manipulation with arm-equipped quadruped robots.</li>
<li><b>Human-Robot Interaction</b>: interactive grounding that resolves ambiguous human instructions through dialogue.</li>
<li><b>Multimodal Perception</b>: 3D visual grounding and 3D affordance understanding for actionable scene perception.</li>
</ul>
<p>Previously, I worked on language-driven video understanding and open-vocabulary image/video recognition, as well as hand detection, hand pose estimation, face recognition, and person re-identification.</p>
<div class="ml-recruit">🎓 Welcome students who are interested in the research of <strong>Embodied AI</strong> and <strong>Vision &amp; Language</strong> to join us!</div>
<div class="ml-contact">
<span class="ml-contact__label">Contact</span>
<a class="ml-contact__item" href="mailto:yangshuo@smbu.edu.cn">{% include icon-mail.svg %}<span>yangshuo@smbu.edu.cn</span><em>Work</em></a>
<a class="ml-contact__item" href="mailto:yangshuo129@gmail.com">{% include icon-mail.svg %}<span>yangshuo129@gmail.com</span><em>Personal</em></a>
</div>
</section>

<section class="ml-section" id="news" markdown="1">
<h2>News</h2>

<div class="ml-news" markdown="1">
- *2026.10* A <a href="https://arxiv.org/abs/2505.24282"><span>language-driven action localization</span></a> paper is accepted by <span class="venue">IJCV</span> 2026 (<span class="venue">CCF-A, 中科院一区, JCR Q1, IF=10.3</span>)!
- *2026.07* An <a href="https://www.sciencedirect.com/science/article/pii/S1077314226002432"><span>open-vocabulary multi-label action recognition</span></a> paper is accepted by <span class="venue">CVIU</span> 2026 (<span class="venue">CCF-B, JCR Q2, IF=3.6</span>)!
- *2026.05* An <a href="https://openreview.net/forum?id=tkOMvqB6E9"><span>interactive 3D grounding framework and dataset</span></a> paper is accepted by <span class="venue">ICML</span> 2026 (<span class="venue">CCF-A</span> conference)!
- *2025.12* An <a href="https://www.sciencedirect.com/science/article/abs/pii/S0031320325016498"><span>image-free multi-label image recognition</span></a> paper is accepted by <span class="venue">Pattern Recognition</span> 2026 (<span class="venue">中科院一区, JCR Q1, IF=7.6</span>)!
- *2025.06* An <a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Tian_LLM-enhanced_Action-aware_Multi-modal_Prompt_Tuning_for_Image-Text_Matching_ICCV_2025_paper.pdf"><span>image-text matching</span></a> paper is accepted by <span class="venue">ICCV</span> 2025 (<span class="venue">CCF-A</span> conference)!
- *2025.04* A <a href="https://www.ijcai.org/proceedings/2025/0223.pdf"><span>video visual relationship detection</span></a> paper is accepted by <span class="venue">IJCAI</span> 2025 (<span class="venue">CCF-A</span> conference)!
- *2025.04* A <a href="https://ieeexplore.ieee.org/abstract/document/10966052/"><span>video visual relationship detection</span></a> paper is accepted by <span class="venue">IEEE TPAMI</span> 2025 (<span class="venue">CCF-A, 中科院一区, JCR Q1, IF=20.8</span>)!
- *2025.01* An <a href="https://crad.ict.ac.cn/article/cstr/32373.14.issn1000-1239.202440522"><span>open-vocabulary multi-label action classification</span></a> paper is published in <span class="venue">《计算机研究与发展》</span> 2025 (CCF-A Chinese, IF=2.65)!
- *2024.12* A <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32727"><span>video Summarization </span></a> paper is accepted by <span class="venue">AAAI</span> 2025 (<span class="venue">CCF-A</span> conference)!
- *2024.10* An <a href="https://ieeexplore.ieee.org/abstract/document/10740465"><span>image-text matching</span></a> paper is accepted by <span class="venue">IEEE Signal Processing Letter</span> 2024 (<span class="venue">JCR Q2, 中科院三区, IF=3.2</span>)!
- *2024.10* A <a href="https://link.springer.com/chapter/10.1007/978-981-97-8620-6_38"><span> language-driven action localization</span></a> paper is accepted by <span class="venue">PRCV</span> 2024 (CCF-C conference)!
- *2024.06* I graduated from Beijing Institute of Technology (北京理工大学) and got a position as an Associate Professor at <a href="https://www.smbu.edu.cn/info/5731/106871.htm"> Shenzhen MSU-BIT University (深圳北理莫斯科大学)! </a>
- *2024.02* A <a href="https://ieeexplore.ieee.org/document/10449438"><span>language-driven action localization</span></a> paper is accepted by <span class="venue">IEEE TMM</span> 2024 (<span class="venue">中科院一区, JCR Q1, IF=7.3</span>)!
- *2023.12* A <a href="https://ojs.aaai.org/index.php/AAAI/article/view/28472"><span>video visual relationship detection</span></a> paper is accepted by <span class="venue">AAAI</span> 2024 (<span class="venue">CCF-A</span> conference)!
- *2023.07* A <a href="https://dl.acm.org/doi/10.1145/3581783.3612512"><span>frame-supervised language-driven action localization</span></a> paper is accepted by <span class="venue">ACM MM</span> 2023 (<span class="venue">CCF-A</span> conference)!
- *2022.04* A <a href="http://arxiv.org/abs/2205.05854"><span> language-driven action localization</span></a> paper is accepted by <span class="venue">IJCAI</span> 2022 (<span class="venue">CCF-A</span> conference)!
- *2021.06* I attend a new research group under supervised by Prof.<a href="https://wuxinxiao.github.io/">Xinxiao Wu.</a>
- *2020.03* A <a href="https://arxiv.org/abs/2003.08177"><span>person re-identification</span></a> paper is accepted by <span class="venue">CVPR</span> 2020 (<span class="venue">CCF-A</span> conference)!
</div>
</section>

<section class="ml-section" id="publications" markdown="0">
<h2>Publications</h2>
<div class="ml-pub-meta">
<a href="https://scholar.google.com/citations?user=JJEEfUIAAAAJ" target="_blank" rel="noopener"><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations" alt="Google Scholar citations"></a>
<span><sup>*</sup> equal contribution &nbsp;·&nbsp; <sup>†</sup> corresponding author</span>
</div>
{% include publications.html zh=false step=5 %}
</section>

<section class="ml-section" id="educations" markdown="0">
<h2>Education</h2>
<ul class="ml-timeline">
  <li><span class="ml-when">2018.09 - 2024.06</span><div><div class="ml-where">Ph.D. in Computer Science, School of Computer Science &amp; Technology, Beijing Institute of Technology</div><div class="ml-note">Advisor: <a href="https://cs.bit.edu.cn/szdw/jsml/bssds/e33ed58303834b8bacb757f38538e00d.htm">Shuliang Wang</a>(2018.09 - 2021.06) and <a href="https://wuxinxiao.github.io/">Xinxiao Wu</a> from 2021.06.</div></div></li>
  <li><span class="ml-when">2014.09 - 2017.07</span><div><div class="ml-where">M.S. in Computer Science, Institute of Software, Chinese Academic of Science</div><div class="ml-note">Advisor: <a href="http://www.idengxm.com/">Xiaoming Deng</a>.</div></div></li>
  <li><span class="ml-when">2010.09 - 2014.07</span><div><div class="ml-where">B.S. in Computer Science, School of Information, Beijing Union University.</div></div></li>
</ul>
</section>

<section class="ml-section" id="experiences" markdown="0">
<h2>Experience</h2>
<ul class="ml-timeline">
  <li><span class="ml-when">2024.06 - now</span><div><div class="ml-where">Associate Professor at <a href="https://en.smbu.edu.cn/">Shenzhen MSU-BIT University</a>, Shenzhen, China.</div></div></li>
  <li><span class="ml-when">2019.05 - 2020.02</span><div><div class="ml-where">Research intern at <a href="https://en.megvii.com/">Megvii-inc</a>, Beijing, China.</div></div></li>
  <li><span class="ml-when">2017.07 - 2018.08</span><div><div class="ml-where">Algorithm engineer at <a href="https://jr.jddinnovation.com/">JD Finance</a>, Beijing, China.</div></div></li>
</ul>
</section>
