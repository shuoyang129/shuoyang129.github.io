---
permalink: /
title: ""
excerpt: ""
author_profile: true
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

<span class='anchor' id='about-me'></span>

My primary research focuses on the intersection of vision and language. Currently, I am exploring the application of large language models (LLMs) to tasks involving vision, language, and robotics, such as language-driven video understanding, open-vocabulary multi-label image recognition, and interactional robots. Previously, my work centered on hand detection, hand pose estimation, face recognition, and person re-identification.

You can contact me via e-mail: yangshuo@smbu.edu.cn; yangshuo129@gmail.com.
<!-- All of my publications can be found at Google Scholar <a href='https://scholar.google.com/citations?user=JJEEfUIAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"/></a> -->
<!-- Additionally, I maintain a keen interest in 3D vision encompassing reconstruction and understanding of 3D scenes. -->

<!-- I have published about 10 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->

# 🔥 News
- *2024.06* &nbsp;😊😊 I graduated from Beijing Institute of Technology (北京理工大学) and got a position as an associate professor at Shenzhen MSU-BIT University (深圳北理莫斯科大学)!
- *2024.02*: &nbsp;🎉🎉 <a href="https://ieeexplore.ieee.org/document/10449438"><span style="font-style: italic;">A language-driven action localization</span></a> paper is accepted by IEEE <span style="color: #A93226;">T-MM</span> 2024 (<span style="color: #A93226;">JCR1, IF=7.3</span>)! 
- *2023.12*: &nbsp;🎉🎉 <a href="https://ojs.aaai.org/index.php/AAAI/article/view/28472"><span style="font-style: italic;">A video visual relationship detection</span></a> paper is accepted by <span style="color: #A93226;">AAAI</span> 2024 (<span style="color: #A93226;">CCF-A</span> conference)!
- *2023.07*: &nbsp;🎉🎉 <a href="https://dl.acm.org/doi/10.1145/3581783.3612512"><span style="font-style: italic;">A frame-supervised language-driven action localization</span></a> paper is accepted by <span style="color: #A93226;">ACM MM</span> 2023 (<span style="color: #A93226;">CCF-A</span> conference)!
- *2022.04*: &nbsp;🎉🎉 <a href="http://arxiv.org/abs/2205.05854"><span style="font-style: italic;">A language-driven action localization</span></a> paper is accepted by <span style="color: #A93226;">IJCAI</span> 2022 (<span style="color: #A93226;">CCF-A</span> conference)!
- *2021.06*: &nbsp;😊😊 I attend a new research group under supervised by Prof.<a href="https://wuxinxiao.github.io/">Xinxiao Wu.</a>
- *2020.03*: &nbsp;🎉🎉 <a href="https://arxiv.org/abs/2003.08177"><span style="font-style: italic;">A person re-identification</span></a> paper is accepted by <span style="color: #A93226;">CVPR</span> 2020 (<span style="color: #A93226;">CCF-A</span> conference)!

# 📝 Publications
<a href='https://scholar.google.com/citations?user=JJEEfUIAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"/></a> &emsp; ($\ast$ means equal contribution)

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TMM 2024</div><img src='images/TMM24.png' alt="sym" width="100%" height="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Dynamic Pathway for Query-Aware Feature Learning in Language-Driven Action Localization](https://ieeexplore.ieee.org/document/10449438)
<strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:eQOLeE2rZwMC'></span></strong>

- **Shuo Yang**, Xinxiao Wu, Zirui Shang, Jiebo Luo
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- *IEEE Transactions on Multimedia (TMM), 2024.*
  
  [[Paper]](images/TMM24.pdf) [[BibTex]](images/TMM24.bib)
  <!-- <a href="https://ieeexplore.ieee.org/document/10449438" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">paper</a>
  <a  href="images/TMM24.bib" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">BibTex</a> -->
  <!-- <a  href="" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">Code</a> -->
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='images/AAAI24.png' alt="sym" width="100%" height="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Multi-Modal Prompting for Open-Vocabulary Video Visual Relationship Detection](https://ojs.aaai.org/index.php/AAAI/article/view/28472)
<strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:_FxGoFyzp5QC'></span></strong>

- **Shuo Yang**$\ast$, Yongqi Wang$\ast$, Xiaofeng Ji, Xinxiao Wu
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- *The 38th Annual AAAI Conference on Artificial Intelligence (AAAI), 2024.*
  
  [[Paper]](https://ojs.aaai.org/index.php/AAAI/article/view/28472/28919) [[BibTex]](images/AAAI24.bib) [[Code]](https://github.com/wangyongqi558/MMP_OV_VidVRD)
  <!-- <a href="" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">paper</a>
  <a  href="" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">BibTex</a>
  <a  href="https://github.com/wangyongqi558/MMP_OV_VidVRD" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">Code</a> -->
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ACM MM 2023</div><img src='images/MM23.png' alt="sym" width="100%" height="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Probability Distribution Based Frame-supervised Language-driven Action Localization](https://dl.acm.org/doi/10.1145/3581783.3612512)
<strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:YsMSGLbcyi4C'></span></strong>

- **Shuo Yang**, Zirui Shang, Xinxiao Wu
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- *The 31st ACM International Conference on Multimedia (ACM MM), 2023.*
  
  [[Paper]](images/MM23.pdf) [[BibTex]](images/MM23.bib) [[Code]](https://github.com/shuoyang129/Distrbution-based-Frame-Supervised-LDAL)
  <!-- <a href="https://dl.acm.org/doi/10.1145/3581783.3612512" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">paper</a>
  <a  href="images/mm23.bib" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">BibTex</a>
  <a  href="https://github.com/shuoyang129/Distrbution-based-Frame-Supervised-LDAL" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">Code</a> -->
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2022</div><img src='images/IJCAI22.png' alt="sym" width="100%" height="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Entity-aware and Motion-aware Transformers for Language-driven Action Localization](https://www.ijcai.org/proceedings/2022/0216.pdf) 
<strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:ufrVoPGSRksC'></span></strong>

- **Shuo Yang**, Xinxiao Wu
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- *The 31st International Joint Conference on Artificial Intelligence (IJCAI), 2022.*
  
  [[Paper]](https://www.ijcai.org/proceedings/2022/0216.pdf) [[BibTex]](images/IJCAI22.bib) [[Code]](https://github.com/shuoyang129/EAMAT/)
  <!-- <a href="https://www.ijcai.org/proceedings/2022/0216.pdf" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">paper</a>
  <a  href="images/IJCAI22.bib" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">BibTex</a>
  <a  href="https://github.com/shuoyang129/EAMAT/" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">Code</a> -->
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2020</div><img src='images/CVPR20.png' alt="sym" width="100%" height="50%"></div></div>
<div class='paper-box-text' markdown="1">

[High-Order Information Matters: Learning Relation and Topology for Occluded Person Re-Identification](https://openaccess.thecvf.com/content_CVPR_2020/papers/Wang_High-Order_Information_Matters_Learning_Relation_and_Topology_for_Occluded_Person_CVPR_2020_paper.pdf) 
<strong><span class="show_paper_citations" data="JJEEfUIAAAAJ:9yKSN-GCB0IC"></span></strong>

- Guan'an Wang$\ast$, **Shuo Yang**$\ast$, Huanyu Liu, Zhicheng Wang, Yang Yang, Shuliang Wang, Gang Yu, Jian Sun

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- *In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2020.*
  
  [[Paper]](https://openaccess.thecvf.com/content_CVPR_2020/papers/Wang_High-Order_Information_Matters_Learning_Relation_and_Topology_for_Occluded_Person_CVPR_2020_paper.pdf) [[BibTex]](images/CVPR20.bib) [[Code]](https://github.com/wangguanan/HOReID/)
  <!-- <a href="https://openaccess.thecvf.com/content_CVPR_2020/papers/Wang_High-Order_Information_Matters_Learning_Relation_and_Topology_for_Occluded_Person_CVPR_2020_paper.pdf" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">paper</a>
  <a  href="images/CVPR20.bib" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">BibTex</a>
  <a  href="https://github.com/wangguanan/HOReID/" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">Code</a> -->
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TIP 2028</div><img src='images/TIP18.png' alt="sym" width="100%" height="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Joint Hand Detection and Rotation Estimation Using CNN](https://ieeexplore.ieee.org/document/8128503) 
<strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:u-x6o8ySG0sC'></span></strong>

- Xiaoming Deng, Yinda Zhang, **Shuo Yang**, Ping Tan, Liang Chang, Ye Yuan, Hongan Wang
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong> -->
- *IEEE Transactions on Image Processing (TIP), 27(4):1888-1900, 2018.* 

  [[Paper]](images/TIP18.pdf) [[Project Page]](http://www.idengxm.com/handdetection/index.html)
  <!-- <a href="http://www.idengxm.com/handdetection/TIP2018_handdeteciton_cameraready.pdf" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">paper</a>
  <a  href="images/CVPR20.bib" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">BibTex</a>
  <a  href="http://www.idengxm.com/handdetection/index.html" style="background: linear-gradient(to bottom, #0074D9, #0056b3); color: #fff; padding: 10px 20px; border-radius: 20px; text-decoration: none; display: inline-block;">Project Page</a> -->
  
</div>
</div>

<li><code class="language-plaintext highlighter-rouge">Arxiv 2024</code><strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:WF5omc3nYNoC'></span></strong>, <a href="https://arxiv.org/pdf/2403.01209.pdf">Data-free Multi-label Image Recognition via LLM-powered Prompt Tuning</a>, <strong>Shuo Yang</strong>, Zirui Shang, Yongqi Wang, Derong Deng, Hongwei Chen, Qiyuan Cheng, Xinxiao Wu </li>
<li><code class="language-plaintext highlighter-rouge">Arxiv 2017</code><strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:d1gkVwhDpl0C'></span></strong>,  <a href="https://arxiv.org/pdf/1704.02224.pdf">Hand3D: Hand Pose Estimation using 3D Neural Network</a>, Xiaoming Deng$\ast$, <strong>Shuo Yang</strong>$\ast$, Yinda Zhang$\ast$, Ping Tan, Liang Chang, Hongan Wang </li>
<li><code class="language-plaintext highlighter-rouge">Acta Automatica Sinica 2016</code><strong><span class='show_paper_citations' data='JJEEfUIAAAAJ:qjMakFHDy7sC'></span></strong>, <a href="https://faculty.csu.edu.cn/_resources/group1/M00/00/67/wKiylWIpceKAYBdpAA4EeS6lmws466.pdf">Convolutional neural networks in image understanding</a>, Liang Chang, Xiaoming Deng, Mingquan Zhou, Zhongke Wu, Ye Yuan, <strong>Shuo Yang</strong>, Hongan Wang  </li> 

<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  
  -->

# 📖 Educations
- *2018.09 - 2024.06*, Ph.D. in Computer Science, School of Computer Science & Technology, Beijing Institute of Technology. 
    
    Advisor: [Shuliang Wang](https://cs.bit.edu.cn/szdw/jsml/gjjgccrc/wsl_6564a5dd48a047d2a3944b3abb23108e/index.htm)(2018.09 - 2021.06) and [Xinxiao Wu](https://wuxinxiao.github.io/) from 2021.06. 
- *2014.09 - 2017.07*, M.S. in Computer Science, Institute of Software, Chinese Academic of Science. 

  Advisor: [Xiaoming Deng](http://www.idengxm.com/). 
- *2010.09 - 2014.07*, B.S. in Computer Science, School of Information, Beijing Union University. 

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)
 -->
# 💻 Experiences
- *2024.06 - now*, associate professor at [Shenzhen MSU-BIT University](https://szmsubit.ru/en/), Shenzhen, China.
- *2019.05 - 2020.02*, Research intern at [Megvii-inc](https://en.megvii.com/), Beijing, China.
- *2017.07 - 2018.08*, Algorithm engineer at [JD Finance](https://jr.jddinnovation.com/), Beijing, China.