export type Lang = 'zh' | 'fr'

export type Dict = {
  common: {
    companyShort: string
    companyFull: string
    companyEn: string
    slogan: string
    hotline: string
    contactNow: string
    learnMore: string
    consultPrice: string
    appointment: string
    tel: string
    ar: string
    currency: string
    seeMore: string
  }
  nav: { home: string; about: string; services: string; contact: string }
  footer: {
    intro: string
    quickNav: string
    bizTitle: string
    biz: [string, string, string, string]
    contact: string
    addrTitle: string
    phoneTitle: string
    wxTitle: string
    emailTitle: string
    copyright: string
    bizTagline: string
  }
  home: {
    location: string
    heroTitleLine1: string
    heroTitleLine2: string
    heroDesc: string
    heroButtons: { services: string; contact: string }
    stats: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string }
    ]
    coreBiz: string
    coreBizDesc: string
    services: [
      { title: string; desc: string },
      { title: string; desc: string },
      { title: string; desc: string },
      { title: string; desc: string }
    ]
    vehicleTitle: string
    vehicleDesc: string
    vehicleCta: string
    vehicleConsult: string
    whyTitle: string
    whyDesc: string
    whyPoints: string[]
    trustCard: string
    ctaTitle: string
    ctaDesc: string
  }
  vehicles: {
    van: Vehicle
    light: Vehicle
    tractor6x4: Vehicle
    tractor4x2: Vehicle
    dump6x4: Vehicle
  }
  about: {
    title: string
    sub: string
    desc: string
    aboutTitle: string
    p1: string
    p2: string
    p3: string
    checkList: string[]
    missionTitle: string
    missionDesc: string
    valueTitle: string
    valueDesc: string
    visionTitle: string
    visionDesc: string
    advTitle: string
    advSub: string
    milestonesTitle: string
  }
  servicesPage: {
    title: string
    sub: string
    desc: string
    vehicleSection: string
    vehicleSectionSub: string
    warehouseTitle: string
    warehouseSub: string
    warehouseDesc: string
    parkingTitle: string
    parkingSub: string
    parkingDesc: string
    parkingPoints: string[]
    parkingCardTitle: string
    partsTitle: string
    partsSub: string
    partsDesc: string
    cta: string
    ctaDesc: string
    ctaBtn: string
  }
  contactPage: {
    title: string
    sub: string
    desc: string
    cardPhone: string
    cardWx: string
    cardMail: string
    cardMailLabel: string
    cardMailValue: string
    addrTitle: string
    workTitle: string
    workSub: string
    businessHours: { day: string; time: string; status: string }[]
    photo1: string
    photo2: string
    cta: string
    ctaSub: string
    visitTitle: string
    visitSub: string
    mapTitle: string
    mapSub: string
    mapHint: string
    mapBtn1: string
    mapBtn2: string
    welcome: string
    welcomeDesc: string
    wayTitle: string
    wayDesc: string
    formTitle: string
    formDesc: string
    formName: string
    formPhone: string
    formSubject: string
    formSubjects: string[]
    formMessage: string
    formBtn: string
    formSent: string
  }
  contact: {
    phonesTitle: string
    wechatTitle: string
    addressTitle: string
    hoursTitle: string
    address: {
      zhLabel: string
      zh: string
      frLabel: string
      fr: string
      landmarkLabel: string
      landmark: string
    }
    phones: { role: string; display: string; tel: string }[]
    wechat: { role: string; id: string }[]
    hours: { day: string; time: string }[]
  }
}

type Vehicle = {
  name: string
  brand: string
  tag: string
  price: string
  priceShort: string
  specs: string[]
  desc: string
  highlight: string
}

export const translations: Record<Lang, Dict> = {
  zh: {
    common: {
      companyShort: '中盛贸易',
      companyFull: '马达加斯加中盛贸易有限公司',
      companyEn: 'Madagascar Zhong Sheng Trade Co., Ltd.',
      slogan: '专业·诚信·共赢',
      hotline: '立即咨询',
      contactNow: '立即联系',
      learnMore: '了解详情',
      consultPrice: '咨询报价',
      appointment: '预约看车',
      tel: 'TEL',
      ar: 'Ar',
      currency: '阿里亚里',
      seeMore: '查看详情 →',
    },
    nav: { home: '首页', about: '关于我们', services: '产品服务', contact: '联系我们' },
    footer: {
      intro: '扎根马达加斯加，专业从事各类车辆销售、仓库与停车场出租、汽车配件供应等业务，致力于为客户提供一站式贸易解决方案，以诚信经营赢得市场信赖。',
      quickNav: '快速导航',
      bizTitle: '主营业务',
      biz: ['🚚 各类车辆销售', '🏭 仓库场地出租', '🅿️ 停车场出租', '🔧 汽车配件销售'],
      contact: '联系方式',
      addrTitle: '公司地址',
      phoneTitle: '咨询热线',
      wxTitle: '微信 / WhatsApp',
      emailTitle: '商务邮箱',
      copyright: '© 马达加斯加中盛贸易有限公司 版权所有',
      bizTagline: 'Vente de véhicules · Location d\'entrepôts · Pièces détachées automobiles',
    },
    home: {
      location: '🇲🇬 马达加斯加 · 塔马塔夫',
      heroTitleLine1: '马达加斯加',
      heroTitleLine2: '中盛贸易有限公司',
      heroDesc: '专业车辆销售 · 仓库和停车场出租 · 车辆配件销售',
      heroButtons: { services: '浏览业务', contact: '联系我们' },
      stats: [
        { value: '500+', label: '成功交易' },
        { value: '10+', label: '年行业经验' },
        { value: '20,000㎡+', label: '仓储面积' },
        { value: '98%', label: '客户好评率' },
      ],
      coreBiz: '核心业务',
      coreBizDesc: '涵盖车辆销售、仓储租赁、配件供应等全链条服务，满足客户多样化需求',
      services: [
        { title: '车辆销售', desc: '徐工重卡、开瑞轻卡、厢式货车等各类车型，品质可靠，价格公道。' },
        { title: '仓库租赁', desc: '大型仓库场地出租，配套完善，交通便利，灵活租期。' },
        { title: '配件销售', desc: '各类汽车零配件供应，原厂品质，快速配送。' },
        { title: '停车场出租', desc: '专业大型停车场，24小时安保，安心停放。' },
      ],
      vehicleTitle: '精品车型 · 品质保障',
      vehicleDesc: '徐工 XCMG 官方合作，现车充足，阿里亚里本地报价',
      vehicleCta: '查看全部车型',
      vehicleConsult: '咨询报价 →',
      whyTitle: '扎根马达加斯加，值得信赖的贸易伙伴',
      whyDesc: '中盛贸易深耕马达加斯加市场多年，拥有完善的本地资源和服务网络。我们始终坚持"客户至上、诚信为本"的经营理念，为众多客户提供了优质的产品和服务。',
      whyPoints: [
        '本地实体仓库与展示场地，看车看仓更放心',
        '车型齐全、库存充足，可满足不同规模采购需求',
        '灵活的租赁方案，长租短租均可洽谈',
        '中文、法语双语服务，沟通零障碍',
      ],
      trustCard: '马达加斯加本地服务',
      ctaTitle: '有购车、租仓需求？立即联系我们！',
      ctaDesc: '专业团队为您提供一对一服务，中盛贸易期待与您合作共赢',
    },
    vehicles: {
      van: {
        name: '厢式物流面包车',
        brand: '中盛车队指定车型',
        tag: '城市配送',
        price: '66,000,000',
        priceShort: '6600万 Ar',
        specs: ['封闭式货箱', '适合快递/电商运输', '经济实用', '安全防盗'],
        desc: '封闭式厢式货车，适合马达加斯加本地快递物流、日用百货、电商包裹等运输场景，保护货物不受日晒雨淋，出勤率高。',
        highlight: '城市配送首选',
      },
      light: {
        name: '开瑞 · 轻型载货小货车',
        brand: '开瑞 KARRY',
        tag: '城乡货运',
        price: '64,000,000',
        priceShort: '6400万 Ar',
        specs: ['灵活机动', '经济省油', '货箱宽敞', '城乡畅行'],
        desc: '轻型载货卡车，车身灵巧，适合马达加斯加工厂配送、乡镇批发、小商家货物转运等场景，油耗经济、维护成本低。',
        highlight: '城乡配送首选',
      },
      tractor6x4: {
        name: '徐工 XCMG · 6×4 重型牵引车',
        brand: '徐工 XCMG 官方合作',
        tag: '重型牵引',
        price: '315,000,000',
        priceShort: '3.15亿 Ar',
        specs: ['6×4 后双桥驱动', '大功率柴油发动机', '大扭矩变速箱', '长途/重货/集装箱首选'],
        desc: '徐工汉风系列 6×4 牵引车，双桥驱动、动力强劲，适配重型挂车、集装箱运输、矿业重货等长距离重载场景。',
        highlight: '重货长距离运输首选',
      },
      tractor4x2: {
        name: '徐工 XCMG · 4×2 牵引车',
        brand: '徐工 XCMG 官方合作',
        tag: '中型牵引',
        price: '290,000,000',
        priceShort: '2.9亿 Ar',
        specs: ['4×2 单后轴', '高顶驾驶室', '灵活省油', '中短途物流最佳'],
        desc: '徐工 4×2 单轴牵引车，驾驶室配置舒适，性价比高，适合马达加斯加州际中短途挂车运输、港口转运等场景。',
        highlight: '中短途性价比之选',
      },
      dump6x4: {
        name: '徐工 XCMG · 6×4 自卸车（翻斗车）',
        brand: '徐工 XCMG 官方合作',
        tag: '工程建设',
        price: '348,000,000',
        priceShort: '3.48亿 Ar',
        specs: ['6×4 双桥自卸', '高强度加厚货箱', '稳定液压举升', '矿山/工地利器'],
        desc: '专为矿山、基建、工程工地设计的徐工 6×4 自卸车，货箱容量大、液压系统稳定，可胜任土石方、砂石、建材等大宗运输。',
        highlight: '矿山·基建工地利器',
      },
    },
    about: {
      title: '关于我们',
      sub: '专业·诚信·共赢',
      desc: '我们是一家在马达加斯加注册运营的综合性贸易公司，主营车辆销售、仓库与停车场出租、汽车配件销售，致力于为本地及外来客户提供高品质、一站式的贸易解决方案。',
      aboutTitle: '扎根马达加斯加的综合性贸易服务商',
      p1: '马达加斯加中盛贸易有限公司（Madagascar Zhong Sheng Trade Co., Ltd.），位于马达加斯加重要港口城市塔马塔夫（Toamasina II），地理位置优越，交通物流便利。',
      p2: '公司自成立以来，始终秉持"诚信经营、客户至上"的理念，业务涵盖车辆销售、仓库及停车场出租、零配件供应等多个领域。我们与徐工 XCMG、开瑞等知名厂商建立了长期稳定的合作关系，车型品类齐全、库存充足。',
      p3: '在仓储租赁方面，我们拥有大面积标准仓库和配套停车场，安保设施完善，可满足货物存储、车辆停放等多元需求，租期灵活，服务周到。',
      checkList: [
        '合法注册企业，资质齐全',
        '实体仓库与展场，可实地考察',
        '多年本地运营经验，资源丰富',
        '中/法双语服务，沟通便捷',
      ],
      missionTitle: '企业使命',
      missionDesc: '为马达加斯加及周边区域客户提供高性价比的车辆、仓储与配件服务，助力当地经济发展，推动贸易便利化。',
      valueTitle: '核心价值',
      valueDesc: '诚信为本，品质先行。我们坚信唯有以诚待人、以质取胜，方能赢得客户的长久信任与合作。',
      visionTitle: '企业愿景',
      visionDesc: '成为马达加斯加领先的综合性贸易服务品牌，打造车辆销售、仓储租赁一体化服务标杆。',
      advTitle: '六大核心优势，选择更放心',
      advSub: '专业团队 + 本地资源 + 诚信服务 = 您的理想合作伙伴',
      milestonesTitle: '一路走来，稳健前行',
    },
    servicesPage: {
      title: '产品与服务',
      sub: '车辆 · 仓储 · 配件',
      desc: '中盛贸易提供车辆销售、仓库及停车场出租、汽车零配件供应等一体化服务，满足您采购、仓储、运维的全流程需求。',
      vehicleSection: '各类车辆销售',
      vehicleSectionSub: '徐工 XCMG、开瑞等品牌车型，现车充足，阿里亚里本地报价',
      warehouseTitle: '仓库场地出租',
      warehouseSub: '20,000㎡+ 大型仓储园区',
      warehouseDesc: '我司在塔马塔夫拥有大型仓储园区，仓库结构标准、场地开阔、配套完善、交通便利。可根据客户需求灵活划分租赁面积，租期灵活（日租、月租、年租均可洽谈）。',
      parkingTitle: '停车场出租',
      parkingSub: '配套仓库的大型露天停车场',
      parkingDesc: '大型露天停车场配套仓库园区一同提供，场地平整、硬化路面，特别适合大型货车、工程车辆、集装箱拖车等长期或临时停放。',
      parkingPoints: [
        '场地平整开阔，支持大型车辆进出',
        '24小时安保巡逻，监控全覆盖',
        '紧邻仓库区，装卸货便利',
        '灵活计费：按天/月/年均可',
      ],
      parkingCardTitle: 'Parking Lot',
      partsTitle: '汽车配件销售',
      partsSub: '覆盖主力车型常用易损件',
      partsDesc: '我司同时经营各类汽车零配件销售业务，覆盖徐工重卡、开瑞等主力销售车型的常用易损件、保养件及底盘件等，品质可靠，价格公道，支持本地配送。',
      cta: '想进一步了解？请立即联系我们',
      ctaDesc: '专业顾问一对一为您解答购车、租仓、配件等全部问题',
      ctaBtn: '查看联系方式',
    },
    contactPage: {
      title: '期待与您合作，随时为您服务',
      sub: '联系我们',
      desc: '欢迎通过电话、微信等方式联系中盛贸易团队。无论购车、租仓还是配件咨询，我们都会第一时间为您提供专业方案。',
      cardPhone: '电话咨询',
      cardWx: '微信 / WhatsApp',
      cardMail: '邮箱 / 留言',
      cardMailLabel: '商务咨询',
      cardMailValue: '欢迎电话或微信联系',
      addrTitle: '公司地址',
      workTitle: '工作时间',
      workSub: 'Business Hours',
      businessHours: [
        { day: '周一 ~ 周五', time: '08:00 - 18:00', status: '营业中' },
        { day: '周六', time: '08:00 - 17:00', status: '营业中' },
        { day: '周日 / 节假日', time: '提前预约', status: '预约制' },
        { day: '紧急业务', time: '24H 电话', status: '随时响应' },
      ],
      photo1: '仓储园区大门 / Location d\'entrepôt',
      photo2: '公司宣传 / Affiche de l\'entreprise',
      cta: '📞 立即致电咨询',
      ctaSub: '立即致电咨询',
      visitTitle: '欢迎来访 · 实地考察',
      visitSub: '塔马塔夫 Toamasina II · 中盛贸易',
      mapTitle: '中盛贸易 · 公司地址',
      mapSub: 'Carrière Ivodro en face, Tanantava Toamasina II, Atsinanana, Madagascar',
      mapHint: '💡 如需地图导航，建议使用 Google Maps 搜索 Toamasina II 相关路段，或直接电话联系我们获取定位',
      mapBtn1: '在 Google Maps 查看',
      mapBtn2: '电话指引路线',
      welcome: '欢迎亲临考察 · 看车看仓',
      welcomeDesc: '中盛贸易位于塔马塔夫二号公路，拥有实体展场和大型仓储园区。欢迎您提前预约到访，我们将安排专人接待，实地看车、看仓、看停车场。',
      wayTitle: '多种联系方式 · 总有一种适合您',
      wayDesc: '电话直拨、微信沟通、到访面谈，请选择您最方便的方式与我们取得联系',
      formTitle: '直接联系 · 快速对接',
      formDesc: '电话、微信、到访面谈 —— 三种方式任选，专业顾问全程对接，报价、看车、参观仓库、配件采购均可直接沟通。',
      formName: '您的称呼 / 公司名',
      formPhone: '联系电话 / WhatsApp / WeChat',
      formSubject: '咨询类型',
      formSubjects: ['车辆销售咨询（重卡/轻卡/面包车）', '仓库租赁咨询', '停车场租赁咨询', '汽车配件采购', '合作洽谈 / 其他'],
      formMessage: '需求详情（车型、数量、租期等）',
      formBtn: '提交需求 · 等待回访',
      formSent: '✓ 提交成功！我们将尽快与您联系',
    },
    contact: {
      phonesTitle: '📞 电话 / Téléphone',
      wechatTitle: '💬 WeChat / WhatsApp',
      addressTitle: '📍 公司地址 / Adresse',
      hoursTitle: '🕐 工作时间 / Horaires',
      address: {
        zhLabel: '中文地址',
        zh: '马达加斯加 · 塔马塔夫二号公路傅山集团大院',
        frLabel: 'Adresse (Français)',
        fr: 'Carrière Ivodro en face, Tanantava Toamasina II, Atsinanana, Madagascar',
        landmarkLabel: '📍 地标 / Repère',
        landmark: 'Toamasina II（二号公路）· 傅山集团大院内 / Dans l\'enceinte de Fu Shan Group',
      },
      phones: [
        { role: '🇲🇬 马达加斯加 · 销售热线 1', display: '038 6677 999', tel: '+261386677999' },
        { role: '🇲🇬 马达加斯加 · 销售热线 2', display: '038 4626 677', tel: '+261384626677' },
      ],
      wechat: [
        { role: '📱 微信 / WhatsApp ①（销售）', id: '13956319188' },
        { role: '📱 微信 / WhatsApp ②（销售）', id: '18075259501' },
      ],
      hours: [
        { day: '周一 ~ 周五 / Lun-Ven', time: '08:00 – 18:00' },
        { day: '周六 / Samedi', time: '08:00 – 17:00' },
        { day: '周日 · 节假日 / Dim & Férié', time: '预约制 / Sur rendez-vous' },
        { day: '紧急业务 / Urgences', time: '24H 电话 / 24h sur 24' },
      ],
    },
  },
  fr: {
    common: {
      companyShort: 'ZHONG SHENG',
      companyFull: 'Madagascar Zhong Sheng Trade Co., Ltd.',
      companyEn: 'Madagascar Zhong Sheng Trade Co., Ltd.',
      slogan: 'Professionnel · Intègre · Gagnant-gagnant',
      hotline: 'Contactez-nous',
      contactNow: 'Contact',
      learnMore: 'En savoir plus',
      consultPrice: 'Demander un devis',
      appointment: 'Réserver une visite',
      tel: 'TEL',
      ar: 'Ar',
      currency: 'Ariary',
      seeMore: 'Découvrir →',
    },
    nav: { home: 'Accueil', about: 'À propos', services: 'Services', contact: 'Contact' },
    footer: {
      intro: 'Implanté à Madagascar, Zhong Sheng Trade est spécialisé dans la vente de véhicules, la location d\'entrepôts et de parkings ainsi que la vente de pièces détachées automobiles. Nous fournissons des solutions commerciales complètes et fiables.',
      quickNav: 'Navigation',
      bizTitle: 'Nos Activités',
      biz: ['🚚 Vente de véhicules', '🏭 Location d\'entrepôts', '🅿️ Location de parkings', '🔧 Pièces détachées'],
      contact: 'Contact',
      addrTitle: 'Adresse',
      phoneTitle: 'Téléphone',
      wxTitle: 'WeChat / WhatsApp',
      emailTitle: 'Email',
      copyright: '© Madagascar Zhong Sheng Trade Co., Ltd. Tous droits réservés',
      bizTagline: 'Vente de véhicules · Location d\'entrepôts · Pièces détachées automobiles',
    },
    home: {
      location: '🇲🇬 Madagascar · Toamasina',
      heroTitleLine1: 'Madagascar',
      heroTitleLine2: 'Zhong Sheng Trade',
      heroDesc: 'Vente de véhicules · Location d\'entrepôts et parkings · Pièces détachées',
      heroButtons: { services: 'Nos services', contact: 'Contact' },
      stats: [
        { value: '500+', label: 'Transactions' },
        { value: '10+', label: "Années d'expérience" },
        { value: '20 000m²+', label: 'Surface d\'entrepôt' },
        { value: '98%', label: 'Satisfaction client' },
      ],
      coreBiz: 'Nos Activités',
      coreBizDesc: 'Des services complets : vente de véhicules, location d\'entrepôts, fourniture de pièces détachées.',
      services: [
        { title: 'Vente de véhicules', desc: 'Camions lourds XCMG, camions légers KARRY, fourgons : qualité garantie et prix équitables.' },
        { title: "Location d'entrepôts", desc: "Grands entrepôts équipés, accès facile, loyers flexibles." },
        { title: 'Pièces détachées', desc: 'Large choix de pièces automobiles d\'origine, livraison rapide.' },
        { title: 'Location de parkings', desc: 'Grand parking sécurisé 24h/24 pour tous types de véhicules.' },
      ],
      vehicleTitle: 'Gamme Véhicules · Qualité Garantie',
      vehicleDesc: 'Partenaire officiel XCMG, stock disponible, tarifs en Ariary',
      vehicleCta: 'Voir toute la gamme',
      vehicleConsult: 'Devis →',
      whyTitle: 'Votre partenaire commercial de confiance à Madagascar',
      whyDesc: 'Implanté depuis de nombreuses années sur le marché malgache, Zhong Sheng Trade dispose d\'un solide réseau local et d\'un service client de qualité. Notre philosophie : "Client d\'abord, intégrité avant tout".',
      whyPoints: [
        'Entrepôts et parc automobile locaux : visitez en toute confiance',
        'Large gamme de véhicules et stock suffisant',
        'Solutions de location flexibles (courte / longue durée)',
        'Service bilingue Chinois / Français sans barrière',
      ],
      trustCard: 'Service local à Madagascar',
      ctaTitle: "Achat de véhicule ou location d'entrepôt ? Contactez-nous !",
      ctaDesc: "Notre équipe vous accompagne personnellement. Zhong Sheng Trade espère collaborer avec vous.",
    },
    vehicles: {
      van: {
        name: 'Fourgon utilitaire fermé',
        brand: 'Zhong Sheng Fleet',
        tag: 'Livraison urbaine',
        price: '66 000 000',
        priceShort: '66 M Ar',
        specs: ['Caisse fermée', 'Livraison express / e-commerce', 'Économique', 'Sécurisé'],
        desc: 'Fourgon fermé idéal pour la livraison urbaine, transport de colis, marchandises diverses. Protège les marchandises contre la pluie et le soleil.',
        highlight: 'Le choix de la livraison urbaine',
      },
      light: {
        name: 'Camion léger KARRY',
        brand: 'KARRY',
        tag: 'Transport urbain/rural',
        price: '64 000 000',
        priceShort: '64 M Ar',
        specs: ['Maniable', 'Économe en carburant', 'Benne spacieuse', 'Polyvalent'],
        desc: 'Camion léger compact et économique, parfait pour les livraisons en ville, la distribution rurale et les petits commerces. Entretien peu coûteux.',
        highlight: 'Polyvalent et économique',
      },
      tractor6x4: {
        name: 'Tracteur XCMG 6×4 lourd',
        brand: 'Partenaire officiel XCMG',
        tag: 'Traction lourde',
        price: '315 000 000',
        priceShort: '315 M Ar',
        specs: ['6×4 double essieu arrière', 'Moteur diesel haute puissance', 'Boîte robuste', 'Idéal long-courrier / conteneurs'],
        desc: "Tracteur XCMG série Hanfeng 6×4 : puissance et couple élevés, conçu pour les remorques lourdes, le transport de conteneurs et le transport minier sur longue distance.",
        highlight: 'Pour charges lourdes et longues distances',
      },
      tractor4x2: {
        name: 'Tracteur XCMG 4×2',
        brand: 'Partenaire officiel XCMG',
        tag: 'Traction moyenne',
        price: '290 000 000',
        priceShort: '290 M Ar',
        specs: ['4×2 essieu simple', 'Cabine confort', 'Économe', 'Idéal moyenne distance'],
        desc: 'Tracteur 4×2 avec cabine confort, excellent rapport qualité-prix. Parfait pour le transport régional et la circulation portuaire.',
        highlight: 'Rapport qualité-prix optimal',
      },
      dump6x4: {
        name: 'Benne XCMG 6×4',
        brand: 'Partenaire officiel XCMG',
        tag: 'Construction / Mines',
        price: '348 000 000',
        priceShort: '348 M Ar',
        specs: ['6×4 double essieu', 'Caisse renforcée', 'Benne hydraulique stable', 'Mine / chantier'],
        desc: "Benne XCMG 6×4 spécialement conçue pour la mine, le bâtiment et les chantiers. Grande capacité de charge et système hydraulique fiable.",
        highlight: "L'atout des mines et chantiers",
      },
    },
    about: {
      title: 'À propos de nous',
      sub: 'Professionnel · Intègre · Gagnant-gagnant',
      desc: "Zhong Sheng Trade est une société commerciale polyvalente enregistrée à Madagascar. Nous vendons des véhicules, louons des entrepôts et parkings, et fournissons des pièces détachées automobiles.",
      aboutTitle: 'Un acteur commercial implanté durablement à Madagascar',
      p1: "Madagascar Zhong Sheng Trade Co., Ltd. est située dans la ville portuaire stratégique de Toamasina II (Tamatave), avec un accès privilégié aux principales infrastructures logistiques.",
      p2: "Depuis notre création, nous opérons avec pour principe : « Intégrité et client d'abord ». Nous entretenons des partenariats durables avec XCMG, KARRY et d'autres constructeurs pour une offre variée et un stock permanent.",
      p3: "Pour la location, nous disposons d'entrepôts standards et de parkings équipés et sécurisés. Nos tarifs et durées de location s'adaptent à chaque besoin.",
      checkList: [
        'Entreprise enregistrée légalement',
        'Entrepôts et parc automobile visitables',
        "Longue expérience d'exploitation locale",
        'Service bilingue Chinois / Français',
      ],
      missionTitle: 'Notre Mission',
      missionDesc: "Fournir à nos clients malgaches et internationaux des véhicules, entrepôts et pièces de qualité au meilleur prix, pour dynamiser le commerce local.",
      valueTitle: 'Nos Valeurs',
      valueDesc: "Intégrité et qualité. Nous sommes convaincus que la confiance se gagne par la transparence et l'exigence de qualité.",
      visionTitle: 'Notre Vision',
      visionDesc: "Devenir la référence commerciale polyvalente à Madagascar, en combinant vente de véhicules et location d'entrepôts dans un service unique.",
      advTitle: "Six atouts majeurs pour notre confiance mutuelle",
      advSub: 'Équipe pro + ressources locales + service intègre = votre partenaire idéal',
      milestonesTitle: 'Une progression solide et durable',
    },
    servicesPage: {
      title: 'Produits & Services',
      sub: 'Véhicules · Entrepôts · Pièces',
      desc: "Zhong Sheng Trade propose un service intégré : vente de véhicules, location d'entrepôts et parkings, fourniture de pièces détachées.",
      vehicleSection: 'Vente de véhicules',
      vehicleSectionSub: 'Gamme XCMG, KARRY, stock disponible, tarifs en Ariary',
      warehouseTitle: "Location d'entrepôts",
      warehouseSub: "Parc logistique de 20 000 m² +",
      warehouseDesc: "Notre parc logistique à Toamasina II propose des entrepôts standards avec accès facile et équipements complets. Surfaces et durées de location adaptables (jour, mois, année).",
      parkingTitle: 'Location de parkings',
      parkingSub: 'Grand parking sécurisé adossé aux entrepôts',
      parkingDesc: "Grand parking en dur adossé à nos entrepôts, pour camions, véhicules de chantier et semi-remorques, en stationnement court ou long terme.",
      parkingPoints: [
        'Surface plane et accessible aux grands véhicules',
        'Sécurité 24h/24 et vidéosurveillance',
        "Proximité immédiate des entrepôts pour chargement/déchargement",
        'Tarification flexible : à la journée / au mois / à l\'année',
      ],
      parkingCardTitle: 'Parking',
      partsTitle: 'Pièces détachées automobiles',
      partsSub: 'Pièces courantes pour notre gamme de véhicules',
      partsDesc: "Nous fournissons également toutes pièces courantes, consommables et éléments de châssis pour camions XCMG et KARRY. Qualité garantie, livraison locale possible.",
      cta: 'Besoin de plus de renseignements ? Contactez-nous',
      ctaDesc: 'Un conseiller dédié répond à toutes vos questions',
      ctaBtn: 'Voir les coordonnées',
    },
    contactPage: {
      title: 'Nous avons hâte de collaborer avec vous',
      sub: 'Contact',
      desc: "Contactez notre équipe par téléphone ou WeChat. Nous vous répondrons rapidement pour tout achat de véhicule, location d'entrepôt ou commande de pièces.",
      cardPhone: 'Téléphone',
      cardWx: 'WeChat / WhatsApp',
      cardMail: 'Email / Message',
      cardMailLabel: 'Contact commercial',
      cardMailValue: 'Téléphone ou WeChat préférés',
      addrTitle: 'Adresse',
      workTitle: 'Horaires',
      workSub: 'Business Hours',
      businessHours: [
        { day: 'Lun ~ Ven', time: '08h00 - 18h00', status: 'Ouvert' },
        { day: 'Samedi', time: '08h00 - 17h00', status: 'Ouvert' },
        { day: 'Dim / Férié', time: 'Sur rendez-vous', status: 'Rendez-vous' },
        { day: 'Urgences', time: '24H / 24', status: 'Disponible' },
      ],
      photo1: "Entrée de l'entrepôt",
      photo2: 'Affiche de l\'entreprise',
      cta: '📞 Appelez-nous',
      ctaSub: 'Appelez-nous maintenant',
      visitTitle: 'Bienvenue sur place',
      visitSub: 'Toamasina II · Zhong Sheng Trade',
      mapTitle: 'Zhong Sheng Trade · Adresse',
      mapSub: 'Carrière Ivodro en face, Tanantava Toamasina II, Atsinanana, Madagascar',
      mapHint: "💡 Pour l'itinéraire, recherche Toamasina II sur Google Maps ou appelez-nous pour un point GPS précis.",
      mapBtn1: 'Voir sur Google Maps',
      mapBtn2: 'Nous appeler',
      welcome: 'Bienvenue sur place · Visite & Découverte',
      welcomeDesc: "Zhong Sheng Trade est situé sur la Route Nationale 2 à Toamasina II, avec un parc d'exposition et de grands entrepôts. Prenez rendez-vous : nous vous accueillons personnellement pour visiter les véhicules, entrepôts et parkings.",
      wayTitle: 'Plusieurs façons de nous contacter',
      wayDesc: 'Téléphone, WeChat, ou visite sur place : choisissez le canal qui vous convient le mieux',
      formTitle: 'Contact direct · réponse rapide',
      formDesc: "Téléphone, WeChat, ou visite sur place : trois canaux à votre disposition. Nos commerciaux vous accompagnent pour un devis, un essai, la visite d'entrepôt ou l'achat de pièces.",
      formName: 'Votre nom / Société',
      formPhone: 'Téléphone / WhatsApp / WeChat',
      formSubject: 'Sujet de votre demande',
      formSubjects: ['Vente de véhicules (camions / légers / fourgons)', "Location d'entrepôts", 'Location de parkings', 'Pièces détachées automobiles', 'Partenariat / Autre'],
      formMessage: 'Détails de votre demande (modèle, quantité, durée…)',
      formBtn: 'Envoyer ma demande',
      formSent: '✓ Demande envoyée ! Nous revenons vers vous très vite',
    },
    contact: {
      phonesTitle: '📞 Téléphone / Tel',
      wechatTitle: '💬 WeChat / WhatsApp',
      addressTitle: '📍 Adresse',
      hoursTitle: '🕐 Horaires',
      address: {
        zhLabel: 'Adresse (Chinois)',
        zh: '塔马塔夫二号公路傅山集团大院',
        frLabel: 'Adresse complète',
        fr: 'Carrière Ivodro en face, Tanantava Toamasina II, Atsinanana, Madagascar',
        landmarkLabel: '📍 Repère',
        landmark: 'RN2 Toamasina II · Dans l\'enceinte de Fu Shan Group',
      },
      phones: [
        { role: '🇲🇬 Madagascar · Ligne 1', display: '038 6677 999', tel: '+261386677999' },
        { role: '🇲🇬 Madagascar · Ligne 2', display: '038 4626 677', tel: '+261384626677' },
      ],
      wechat: [
        { role: '📱 WeChat / WhatsApp ① (Ventes)', id: '13956319188' },
        { role: '📱 WeChat / WhatsApp ② (Ventes)', id: '18075259501' },
      ],
      hours: [
        { day: 'Lundi ~ Vendredi', time: '08h00 – 18h00' },
        { day: 'Samedi', time: '08h00 – 17h00' },
        { day: 'Dimanche & Jours fériés', time: 'Sur rendez-vous' },
        { day: 'Urgences', time: '24h/24 sur téléphone' },
      ],
    },
  },
}
