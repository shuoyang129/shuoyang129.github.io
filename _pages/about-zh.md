---
permalink: /zh/
lang: zh
layout: minimal
title: ""
excerpt: ""
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<section class="ml-section ml-about" id="about-me" markdown="0">
<h2>个人简介</h2>
<ul class="ml-interests"><li>计算机视觉</li><li>视觉与语言</li><li>具身智能</li></ul>
<p>本人研究方向为计算机视觉、自然语言与机器人的交叉领域，近期主要聚焦于<strong>具身智能</strong>，致力于让机器人能够理解人类指令、感知并推理三维环境，并在真实物理世界中可靠地完成任务。目前的研究主要包括：</p>
<ul class="ml-focus">
<li><b>机器人操作</b>：语言引导的机械臂操作，以及机器狗搭载机械臂的移动操作。</li>
<li><b>人机交互</b>：交互式视觉定位，通过对话消解人类指令中的歧义。</li>
<li><b>多模态感知</b>：三维视觉定位（3D Visual Grounding）与三维可供性（3D Affordance）理解，面向可执行的场景感知。</li>
</ul>
<p>此前从事语言驱动的视频理解、开放词汇图像/视频识别，以及手部检测、手部姿态估计、人脸识别与行人重识别等研究。</p>
<div class="ml-recruit">🎓 欢迎对<strong>具身智能</strong>、<strong>视觉与语言</strong>等方向感兴趣的同学加入课题组！</div>
<div class="ml-contact">
<span class="ml-contact__label">联系方式</span>
<a class="ml-contact__item" href="mailto:yangshuo@smbu.edu.cn">{% include icon-mail.svg %}<span>yangshuo@smbu.edu.cn</span><em>工作</em></a>
<a class="ml-contact__item" href="mailto:yangshuo129@gmail.com">{% include icon-mail.svg %}<span>yangshuo129@gmail.com</span><em>个人</em></a>
</div>
</section>

<section class="ml-section" id="news" markdown="1">
<h2>学术动态</h2>

<div class="ml-news" markdown="1">
- *2026.10* <a href="https://arxiv.org/abs/2505.24282"><span>语言驱动的动作定位</span></a> 论文被 <span class="venue">IJCV</span> 2026 录用（<span class="venue">CCF-A, 中科院一区, JCR Q1, IF=10.3</span>）！
- *2026.07* <a href="https://www.sciencedirect.com/science/article/pii/S1077314226002432"><span>开放词汇多标签动作识别</span></a> 论文被 <span class="venue">CVIU</span> 2026 录用（<span class="venue">CCF-B, JCR Q2, IF=3.6</span>）！
- *2026.05* <a href="https://openreview.net/forum?id=tkOMvqB6E9"><span>交互式三维场景定位（3D grounding）框架与数据集</span></a> 论文被 <span class="venue">ICML</span> 2026 录用（<span class="venue">CCF-A</span>）！
- *2025.12* <a href="https://www.sciencedirect.com/science/article/abs/pii/S0031320325016498"><span>无图像多标签图像识别</span></a> 论文被 <span class="venue">Pattern Recognition</span> 2026 录用（<span class="venue">中科院一区, JCR Q1, IF=7.6</span>）！
- *2025.06* <a href="https://openaccess.thecvf.com/content/ICCV2025/papers/Tian_LLM-enhanced_Action-aware_Multi-modal_Prompt_Tuning_for_Image-Text_Matching_ICCV_2025_paper.pdf"><span>图像—文本匹配</span></a> 论文被 <span class="venue">ICCV</span> 2025 录用（<span class="venue">CCF-A</span>）！
- *2025.04* <a href="https://www.ijcai.org/proceedings/2025/0223.pdf"><span>开放词汇视频视觉关系检测</span></a> 论文被 <span class="venue">IJCAI</span> 2025 录用（<span class="venue">CCF-A</span>）！
- *2025.04* <a href="https://ieeexplore.ieee.org/abstract/document/10966052/"><span>开放词汇视频视觉关系检测</span></a> 论文发表于 <span class="venue">IEEE TPAMI</span> 2025（<span class="venue">CCF-A, 中科院一区, JCR Q1, IF=20.8</span>）！
- *2025.01* <a href="https://crad.ict.ac.cn/article/cstr/32373.14.issn1000-1239.202440522"><span>开放词汇多标签动作分类</span></a> 论文发表于 <span class="venue">《计算机研究与发展》</span> 2025（CCF-A 中文期刊, IF=2.65）！
- *2024.12* <a href="https://ojs.aaai.org/index.php/AAAI/article/view/32727"><span>视频摘要</span></a> 论文被 <span class="venue">AAAI</span> 2025 录用（<span class="venue">CCF-A</span>）！
- *2024.10* <a href="https://ieeexplore.ieee.org/abstract/document/10740465"><span>图像—文本匹配</span></a> 论文被 <span class="venue">IEEE SPL</span> 2024 录用（<span class="venue">JCR Q2, 中科院三区, IF=3.2</span>）！
- *2024.10* <a href="https://link.springer.com/chapter/10.1007/978-981-97-8620-6_38"><span>语言驱动的动作定位</span></a> 论文被 <span class="venue">PRCV</span> 2024 录用（CCF-C）！
- *2024.06* 毕业于北京理工大学，入职 <a href="https://www.smbu.edu.cn/info/5731/106871.htm">深圳北理莫斯科大学</a> 任副教授。
- *2024.02* <a href="https://ieeexplore.ieee.org/document/10449438"><span>语言驱动的动作定位</span></a> 论文被 <span class="venue">IEEE TMM</span> 2024 录用（<span class="venue">中科院一区, JCR Q1, IF=7.3</span>）！
- *2023.12* <a href="https://ojs.aaai.org/index.php/AAAI/article/view/28472"><span>开放词汇视频视觉关系检测</span></a> 论文被 <span class="venue">AAAI</span> 2024 录用（<span class="venue">CCF-A</span>）！
- *2023.07* <a href="https://dl.acm.org/doi/10.1145/3581783.3612512"><span>帧监督语言驱动的动作定位</span></a> 论文被 <span class="venue">ACM MM</span> 2023 录用（<span class="venue">CCF-A</span>）！
- *2022.04* <a href="http://arxiv.org/abs/2205.05854"><span>语言驱动的动作定位</span></a> 论文被 <span class="venue">IJCAI</span> 2022 录用（<span class="venue">CCF-A</span>）！
- *2021.06* 加入 <a href="https://wuxinxiao.github.io/">吴心筱</a> 教授课题组。
- *2020.03* <a href="https://arxiv.org/abs/2003.08177"><span>行人重识别</span></a> 论文被 <span class="venue">CVPR</span> 2020 录用（<span class="venue">CCF-A</span>）！
</div>
</section>

<section class="ml-section" id="publications" markdown="0">
<h2>论文</h2>
<div class="ml-pub-meta">
<a href="https://scholar.google.com/citations?user=JJEEfUIAAAAJ" target="_blank" rel="noopener"><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations" alt="Google Scholar 引用"></a>
<span><sup>*</sup> 共同一作 &nbsp;·&nbsp; <sup>†</sup> 通讯作者</span>
</div>
{% include publications.html zh=true step=5 %}
</section>

<section class="ml-section" id="educations" markdown="0">
<h2>教育背景</h2>
<ul class="ml-timeline">
  <li><span class="ml-when">2018.09 - 2024.06</span><div><div class="ml-where">计算机科学与技术博士，北京理工大学计算机学院</div><div class="ml-note">导师：<a href="https://cs.bit.edu.cn/szdw/jsml/bssds/e33ed58303834b8bacb757f38538e00d.htm">王树良</a>（2018.09 - 2021.06），2021.06 起师从 <a href="https://wuxinxiao.github.io/">吴心筱</a>。</div></div></li>
  <li><span class="ml-when">2014.09 - 2017.07</span><div><div class="ml-where">计算机科学与技术硕士，中国科学院软件研究所</div><div class="ml-note">导师：<a href="http://www.idengxm.com/">邓小明</a>。</div></div></li>
  <li><span class="ml-when">2010.09 - 2014.07</span><div><div class="ml-where">计算机科学与技术学士，北京联合大学信息学院。</div></div></li>
</ul>
</section>

<section class="ml-section" id="experiences" markdown="0">
<h2>工作经历</h2>
<ul class="ml-timeline">
  <li><span class="ml-when">2024.06 - 至今</span><div><div class="ml-where"><a href="https://en.smbu.edu.cn/">深圳北理莫斯科大学</a> 副教授，深圳。</div></div></li>
  <li><span class="ml-when">2019.05 - 2020.02</span><div><div class="ml-where"><a href="https://en.megvii.com/">旷视科技</a> 研究实习生，北京。</div></div></li>
  <li><span class="ml-when">2017.07 - 2018.08</span><div><div class="ml-where"><a href="https://jr.jddinnovation.com/">京东金融</a> 算法工程师，北京。</div></div></li>
</ul>
</section>
