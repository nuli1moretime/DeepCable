
/* ============================================================
   Scroll reveal — IntersectionObserver for .reveal elements
   ============================================================ */
(function() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
})();


/* ============================================================
   Chinese / English language switcher
   ============================================================ */
(function() {
  var langDict = {
    'zh': {
      'nav-about': '团队简介',
      'nav-news': '新闻动态',
      'nav-members': '成员介绍',
      'nav-papers': '发表论文',
      'nav-join': '招生计划',
      'dir-1-title': '阻燃电缆火蔓延研究',
      'dir-1-desc': '揭示电缆火焰竖直向上传播的宏观机理与关键影响因素，为电缆防火设计提供理论基础。',
      'dir-1-tag': '火蔓延机制 · 电缆火灾安全',
      'dir-2-title': '微观热解与鼓泡碳化',
      'dir-2-desc': '探究多组分材料在高温下的热解行为、气体鼓泡动力学及膨胀成炭的耦合发展过程。',
      'dir-2-tag': '热解机理 · 鼓泡 · 成炭',
      'dir-3-title': 'AI 阻燃配方优化',
      'dir-3-desc': '突破传统"乱枪打鸟"试错模式，基于耦合阻燃机理实现"有的放矢"的智能阻燃配方预测。',
      'dir-3-tag': 'AI 预测 · 阻燃配方',
      'hero-badge': '火灾安全全国重点实验室 · USTC',
      'hero-title-line1': '聚焦电缆火灾机制',
      'hero-title-line2': '支撑基础设施安全',
      'hero-desc': '面向阻燃电缆火灾防控需求，聚焦燃烧蔓延与烟毒释放机制，开展阻燃机理、风险评估及工程应用研究。',
      'about-title': '团队简介',
      'about-p1': 'DeepCable Lab 依托中国科学技术大学火灾安全全国重点实验室（SKLFS），面向阻燃电缆及多组分复合材料的火灾安全需求，系统研究材料在真实火灾场景下的热解、引燃、燃烧与火焰蔓延机制。课题组通过实验表征、理论建模与机理推理相结合，揭示材料组成、结构演化与火灾行为之间的内在关联。',
      'about-p2': '面向新一代阻燃材料设计，课题组致力于融合人工智能与火灾科学机理，突破传统试错式实验模式的效率瓶颈，开展安全、清洁、低成本阻燃体系的智能配方优化，为火灾安全工程提供可预测、可解释、可验证的设计方法与技术支撑。',
      'news-title': '新闻动态',
      'news-1-title': '开关柜绝缘阻燃配方研究发表于 <em>Fire Technology</em>',
      'news-1-desc': '课题组关于高压电弧作用下开关柜绝缘材料阻燃配方的研究被 <em>Fire Technology</em> 接收发表。系统评估了不同阻燃配方在高压电弧引燃条件下的耐火性能。',
      'news-2-title': '阻燃电缆火蔓延行为研究发表于 <em>Fire Safety Journal</em>',
      'news-2-desc': '博士研究生方谦为第一作者的研究发表于 <em>Fire Safety Journal</em>，定量揭示了不同 ATH 含量电缆在火蔓延过程中的膨胀、流动与内部传热机制。',
      'news-3-title': '气泡破裂与成炭动力学耦合模型取得进展',
      'news-3-desc': '课题组建立了定量耦合热解机理模型，实现了对复合材料中气泡破裂与成炭动力学行为的预测，为提升火灾演化预测精度提供了理论基础。',
      'members-title': '成员介绍',
      'pi-name': '谢启源',
      'pi-role': '博士生导师 · 火灾安全全国重点实验室教授',
      'pi-bio': '担任科技部国家重点研发计划"基础科研条件与重大科学仪器设备研发"重点专项总体专家组成员、中国消防协会防火材料分会副主任委员、国际热分析期刊JTAC副主编等。主要研究兴趣:（阻燃电缆等）阻燃聚合材料的燃烧机制与优化设计、高压电弧成灾机制及安全文化等。',
      'pi-tag-1': '安徽省科学技术一等奖',
      'pi-tag-2': '国家电网科技进步一等奖',
      'tier-phd': '博士研究生',
      'phd-1-name': '何灿星',
      'phd-1-label': '博士研究生',
      'phd-1-topic': '阻燃复合材料火蔓延机理研究',
      'phd-2-name': '方谦',
      'phd-2-label': '博士研究生',
      'phd-2-topic': '电缆火灾传热与热解建模',
      'tier-master': '硕士研究生',
      'm-1-name': '刘羽琦',
      'm-1-label': '硕士研究生',
      'm-2-name': '朱宇喆',
      'm-2-label': '硕士研究生',
      'm-3-name': '邹红宇',
      'm-3-label': '硕士研究生',
      'm-4-name': '杜彦薇',
      'm-4-label': '硕士研究生',
      'm-5-name': '石银领',
      'm-5-label': '硕士研究生',
      'm-6-name': '金志勇',
      'm-6-label': '硕士研究生',
      'm-7-name': '张洋',
      'm-7-label': '硕士研究生',
      'papers-title': '发表论文',
      'join-title': '招生计划',
      'join-card-phd-title': '博士研究生',
      'join-card-phd-slots': '1–2 名',
      'join-card-phd-desc': '每年招收 1–2 名博士研究生，从事聚合物燃烧机理、电缆火灾安全、AI 驱动阻燃配方优化等前沿研究。',
      'join-card-ms-title': '硕士研究生',
      'join-card-ms-slots': '2–3 名',
      'join-card-ms-desc': '每年招收 2–3 名硕士研究生，欢迎具有以下学科背景的同学申请。',
      'join-disc-1': '工程热物理',
      'join-disc-2': '安全科学与工程',
      'join-disc-3': '工程力学',
      'join-disc-4': '计算机科学',
      'join-disc-5': '应用数学',
      'join-contact-title': '欢迎有志于火灾安全研究的同学加入！请将个人简历及本科/硕士成绩单发送至：',
      'footer-ustc': '中国科学技术大学',
    },
    'en': {
      'nav-about': 'About',
      'nav-news': 'News',
      'nav-members': 'Members',
      'nav-papers': 'Publications',
      'nav-join': 'Join Us',
      'dir-1-title': 'Upward Flame Spread of FR Cables',
      'dir-1-desc': 'Revealing the macroscopic mechanisms and key influencing factors of vertical flame propagation along cables, providing theoretical foundations for cable fire protection design.',
      'dir-1-tag': 'Flame Spread · Cable Fire Safety',
      'dir-2-title': 'Micro-Pyrolysis & Bubbling/Charring',
      'dir-2-desc': 'Investigating high-temperature pyrolysis behavior, gas bubble kinetics, and the coupled swelling-charring development of multicomponent materials.',
      'dir-2-tag': 'Pyrolysis · Bubbling · Charring',
      'dir-3-title': 'AI-Driven Formulation Optimization',
      'dir-3-desc': 'Breaking the conventional trial-and-error approach to achieve targeted, mechanism-informed intelligent prediction of flame-retardant formulations.',
      'dir-3-tag': 'AI Prediction · FR Formulations',
      'hero-badge': 'State Key Laboratory of Fire Safety · USTC',
      'hero-title-line1': 'Advancing Cable Fire Mechanism Research',
      'hero-title-line2': 'for Safer Infrastructure',
      'hero-desc': 'Addressing fire prevention and control needs for flame-retardant cables, we focus on flame spread and smoke toxicity mechanisms, and conduct research on flame-retardant mechanisms, risk assessment, and engineering applications.',
      'about-title': 'About the Lab',
      'about-p1': 'DeepCable Lab is affiliated with the State Key Laboratory of Fire Science (SKLFS) at the University of Science and Technology of China. Focusing on the fire safety of flame-retardant cables and multicomponent composite materials, the lab systematically investigates the pyrolysis, ignition, combustion, and flame spread mechanisms of materials under realistic fire scenarios. By integrating experimental characterization, theoretical modeling, and mechanism-based reasoning, the lab aims to reveal the intrinsic relationships among material composition, structural evolution, and fire behavior.',
      'about-p2': 'Toward the design of next-generation flame-retardant materials, the lab is committed to integrating artificial intelligence with fire science mechanisms to overcome the efficiency limitations of traditional trial-and-error experimental approaches. Its research focuses on the intelligent formulation optimization of safe, clean, and low-cost flame-retardant systems, providing predictable, interpretable, and verifiable design methodologies and technical support for fire safety engineering.',
      'news-title': 'Research News',
      'news-1-title': 'FR insulation for switchgears published in <em>Fire Technology</em>',
      'news-1-desc': 'The team\'s research on flame-retardant formulations for switchgear insulator materials under high-voltage arcing has been accepted by <em>Fire Technology</em>, systematically evaluating the fire resistance of different formulations.',
      'news-2-title': 'FR cable fire spread study featured in <em>Fire Safety Journal</em>',
      'news-2-desc': 'PhD candidate Qian Fang\'s first-author study published in <em>Fire Safety Journal</em> quantitatively reveals the swelling, flow, and internal heat transfer mechanisms of cables with varying ATH content during flame spread.',
      'news-3-title': 'Bubble-cracking-charring coupling model milestone',
      'news-3-desc': 'The lab established a quantitatively coupled pyrolysis mechanism model that predicts bubble rupture and charring kinetics in composites, providing a theoretical foundation for improved fire evolution prediction accuracy.',
      'members-title': 'Research Team',
      'pi-name': 'Qiyuan Xie',
      'pi-role': 'Professor \u00b7 State Key Laboratory of Fire Safety, USTC',
      'pi-bio': 'He serves as a member of the General Expert Panel for the National Key R&D Program\'s "Basic Research Infrastructure and Major Scientific Instrumentation R&D" project under the Ministry of Science and Technology, Vice Chair of the Fire-Retardant Materials Branch of the China Fire Protection Association, and Associate Editor of the Journal of Thermal Analysis (JTAC). His primary research interests include the combustion mechanisms and optimized design of flame-retardant polymer materials (such as flame-retardant cables), the mechanisms of high-voltage arc-induced fires, and safety culture.',
      'pi-tag-1': 'The First Prize for Science and Technology from Anhui Province',
      'pi-tag-2': 'The First Prize for Scientific and Technological Progress from State Grid Corporation of China',
      'tier-phd': 'Ph.D. Candidates',
      'phd-1-name': 'Canxing He',
      'phd-1-label': 'Ph.D. Candidate',
      'phd-1-topic': 'Flame spread mechanism of FR composites',
      'phd-2-name': 'Qian Fang',
      'phd-2-label': 'Ph.D. Candidate',
      'phd-2-topic': 'Cable fire heat transfer & pyrolysis kinetics',
      'tier-master': 'Master Candidates',
      'm-1-name': 'Yuqi Liu',
      'm-1-label': 'Master Candidate',
      'm-2-name': 'Yuzhe Zhu',
      'm-2-label': 'Master Candidate',
      'm-3-name': 'Hongyu Zou',
      'm-3-label': 'Master Candidate',
      'm-4-name': 'Yanwei Du',
      'm-4-label': 'Master Candidate',
      'm-5-name': 'Yinling Shi',
      'm-5-label': 'Master Candidate',
      'm-6-name': 'Zhiyong Jin',
      'm-6-label': 'Master Candidate',
      'm-7-name': 'Yang Zhang',
      'm-7-label': 'Master Candidate',
      'papers-title': 'Selected Publications',
      'join-title': 'Recruitment & Openings',
      'join-card-phd-title': 'Ph.D. Positions',
      'join-card-phd-slots': '1\u20132 Openings',
      'join-card-phd-desc': '1\u20132 Ph.D. positions open annually for cutting-edge research in polymer combustion mechanisms, cable fire safety, and AI-driven FR formulation optimization.',
      'join-card-ms-title': 'Master Positions',
      'join-card-ms-slots': '2\u20133 Openings',
      'join-card-ms-desc': '2\u20133 Master positions open annually. Students with backgrounds in the following disciplines are encouraged to apply.',
      'join-disc-1': 'Engineering Thermophysics',
      'join-disc-2': 'Safety Science & Engineering',
      'join-disc-3': 'Engineering Mechanics',
      'join-disc-4': 'Computer Science',
      'join-disc-5': 'Applied Mathematics',
      'join-contact-title': 'Interested candidates should send their CV and transcripts to:',
      'footer-ustc': 'USTC',
    }
  };

  var currentLang = 'en';
  var langBtn = document.getElementById('lang-btn');

  function matchHeroLineWidth() {
    var line2 = document.querySelector('.hero-line2');
    var decor = document.querySelector('.hero-line-decor');
    if (line2 && decor) {
      decor.style.width = line2.offsetWidth + 'px';
    }
  }

  function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (langDict[lang] && langDict[lang][key]) {
        var val = langDict[lang][key];
        if (val.indexOf('<') !== -1) {
          el.innerHTML = val;
        } else {
          el.innerText = val;
        }
      }
    });
    if (langBtn) langBtn.innerText = lang === 'zh' ? 'EN' : '中文';
  }

  applyLanguage(currentLang);
  matchHeroLineWidth();

  if (langBtn) {
    langBtn.addEventListener('click', function() {
      var targets = document.querySelectorAll('[data-i18n]');
      targets.forEach(function(el) { el.classList.add('lang-exit'); });
      setTimeout(function() {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        applyLanguage(currentLang);
        matchHeroLineWidth();
        targets.forEach(function(el) { el.classList.remove('lang-exit'); });
      }, 280);
    });
  }
  window.addEventListener('resize', matchHeroLineWidth);
})();

/* ============================================================
   Keyboard scroll navigation — Up/Down arrows scroll sections
   ============================================================ */
(function() {
  var sections = Array.prototype.slice.call(
    document.querySelectorAll('.hero, .section')
  );
  document.addEventListener('keydown', function(e) {
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      var cur = sections.findIndex(function(s) {
        var r = s.getBoundingClientRect();
        return r.top >= -1 && r.top < window.innerHeight - 100;
      });
      if (cur >= 0 && cur < sections.length - 1) {
        sections[cur + 1].scrollIntoView({ behavior: 'smooth' });
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      var curIdx = -1;
      for (var i = sections.length - 1; i >= 0; i--) {
        var r = sections[i].getBoundingClientRect();
        if (r.top < window.innerHeight - 100 && r.top >= -1) {
          curIdx = i;
          break;
        }
      }
      if (curIdx > 0) {
        sections[curIdx - 1].scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
})();
