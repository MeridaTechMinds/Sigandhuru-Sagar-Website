import { Service, ZodiacSign, Testimonial } from './types';

export const ASTROLOGER_CONTACT = {
  name: 'Sagar Narayan',
  phone: '+91 98455 15558',
  whatsappUrl: 'https://wa.me/919845515558',
  whatsappText: 'Hello Guruji Sagar Narayan, I read about your powerful astrologer services and I am bringing my problem to you for spiritual guidance. Please help me.',
  address: 'Sagar Astrological Center, Bengaluru, Karnataka, India',
};

export const SERVICES: Service[] = [
  {
    id: 'love-problems',
    title: 'Love Problem Solution',
    description: 'Facing relationship conflicts, trust issues, or partner distance? Bring back lost warmth, affection, and resolve recurring conflicts with powerful planetary balances.',
    iconName: 'Heart',
    category: 'love',
    remedyHint: 'Venus (Shukra) strengthening rituals and love compatibility balancing.'
  },
  {
    id: 'breakup-solutions',
    title: 'Breakup & Divorce Problem',
    description: 'Do you want to stop an impending divorce or bring back an ex-lover? Guruji Sagar Narayan specializes in resolving severe breakups and restoring broken emotional bonds.',
    iconName: 'HeartCrack',
    category: 'love',
    remedyHint: 'Rapprochement mantras and relationship-healing planetary prayers.'
  },
  {
    id: 'marriage-disputes',
    title: 'Marriage Problem Solution',
    description: 'Are you facing delayed marriage, familial opposition, compatibility issues, or marital friction? Get customized guidance for Manglik Dosha and planetary remedies.',
    iconName: 'Flame',
    category: 'love',
    remedyHint: 'Jupiter (Guru) strengthening and auspicious matching analysis.'
  },
  {
    id: 'family-problems',
    title: 'Family Disputes & Peace',
    description: 'Solve property disputes, silent treatments, inter-generational gaps, and sibling tensions. Bring home the peace, mutual respect, and prosperity you deserve.',
    iconName: 'Users',
    category: 'family',
    remedyHint: 'Peace-inducing home poojas and 4th house astrological balancing.'
  },
  {
    id: 'black-magic',
    title: 'Black Magic Removal',
    description: 'Feeling constantly drained, experiencing unexplained bad luck, or suspecting negative external forces? Cleanse negative energies, evil eyes, and establish permanent protective shields.',
    iconName: 'ShieldAlert',
    category: 'dark_forces',
    remedyHint: 'Spiritual energy cleansing, protective talismans, and negative hex neutralization.'
  },
  {
    id: 'hand-reading',
    title: 'Hand Reading & Palmistry',
    description: 'Discover what your life line, heart line, career line, and destiny line say about your future. Gain deep clarity on your marriage age, health, and wealth potential.',
    iconName: 'Hand',
    category: 'destiny',
    remedyHint: 'Deep direct analysis of palm mounts, lines, and potential remedies.'
  },
  {
    id: 'horoscope-consultation',
    title: 'Horoscope Consultations',
    description: 'Get deep analysis of your Janam Kundali (Birth Chart). Learn the impacts of Rahu, Ketu, Shani Sade Sati, and find remedies such as matching gemstones or specific mantras.',
    iconName: 'Compass',
    category: 'destiny',
    remedyHint: 'Personalized zodiac transit mappings and planetary transit remediation.'
  }
];

export const ZODIAC_SIGNS: ZodiacSign[] = [
  {
    id: 'aries',
    name: 'Aries',
    symbol: '♈',
    dateRange: 'Mar 21 - Apr 19',
    rulingPlanet: 'Mars',
    element: 'Fire',
    trait: 'Passionate, energetic, and natural-born leaders, but sometimes prone to sudden anger or impulsive decision-making.',
    prediction: 'Under Mars\' direct transition, sudden obstacles might arise in your love or business life. Practicing patience and conducting a Mars alignment remedy through Sagar Narayan will remove delays.'
  },
  {
    id: 'taurus',
    name: 'Taurus',
    symbol: '♉',
    dateRange: 'Apr 20 - May 20',
    rulingPlanet: 'Venus',
    element: 'Earth',
    trait: 'Reliable, stable, and deeply loving, but highly stubborn and resistant to change in relationships.',
    prediction: 'Venus suggests a shift in how you express your true desires. Sagar Narayan offers powerful relationship balancing to resolve stubborn distance with your partner.'
  },
  {
    id: 'gemini',
    name: 'Gemini',
    symbol: '♊',
    dateRange: 'May 21 - Jun 20',
    rulingPlanet: 'Mercury',
    element: 'Air',
    trait: 'Expressive, highly intellectual, and adaptable, but struggles with confusion, dual minds, and anxiety.',
    prediction: 'Mercury influence could create minor misunderstandings. Guruji Sagar Narayan recommends a speech-clarity and destiny-strengthening remedy to secure family support.'
  },
  {
    id: 'cancer',
    name: 'Cancer',
    symbol: '♋',
    dateRange: 'Jun 21 - Jul 22',
    rulingPlanet: 'Moon',
    element: 'Water',
    trait: 'Deeply intuitive, romantic, and nurturing, but extremely vulnerable to mood swings and breakup pain.',
    prediction: 'Your planetary emotions are highly active. Emotional blockages can be completely swept away through Guruji\'s sacred healing and aura-cleansing consultations.'
  },
  {
    id: 'leo',
    name: 'Leo',
    symbol: '♌',
    dateRange: 'Jul 23 - Aug 22',
    rulingPlanet: 'Sun',
    element: 'Fire',
    trait: 'Generous, proud, loyal, and possessive, with high ego that sometimes creates partner and marriage friction.',
    prediction: 'Ego conflicts are threatening a critical partnership or family bond. A Sun-harmonizing ritual with Sagar Narayan can bring genuine sweet companionship back.'
  },
  {
    id: 'virgo',
    name: 'Virgo',
    symbol: '♍',
    dateRange: 'Aug 23 - Sep 22',
    rulingPlanet: 'Mercury',
    element: 'Earth',
    trait: 'Analytical, caring, and detail-oriented, but incredibly overcritical of themselves and their spouse.',
    prediction: 'A perfect time to resolve longstanding property or domestic disputes. A quick consultation with Sagar Narayan will clarify confusing issues.'
  },
  {
    id: 'libra',
    name: 'Libra',
    symbol: '♎',
    dateRange: 'Sep 23 - Oct 22',
    rulingPlanet: 'Venus',
    element: 'Air',
    trait: 'Diplomatic, charming, and peaceful, but struggles immensely with decision-making and relationship breakups.',
    prediction: 'A significant transition awaits your marriage or relationship. Harness the blessing of Venus by seeking Sagar Narayan\'s personalized matching advice.'
  },
  {
    id: 'scorpio',
    name: 'Scorpio',
    symbol: '♏',
    dateRange: 'Oct 23 - Nov 21',
    rulingPlanet: 'Pluto & Mars',
    element: 'Water',
    trait: 'Intense, secretive, highly protective, and passionate, but vulnerable to extreme jealousy, bad vibes, or dark energy.',
    prediction: 'Unseen opposing forces are affecting your inner peace. Protect your career and relationship from evil eyes with Sagar Narayan\'s potent protective talismans.'
  },
  {
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: '♐',
    dateRange: 'Nov 22 - Dec 21',
    rulingPlanet: 'Jupiter',
    element: 'Fire',
    trait: 'Optimistic, free-spirited, and honest, but can overlook partner feelings and delay marriage decisions.',
    prediction: 'Your current stellar chart indicates a golden opportunity for true love and career breakthroughs. Guruji can guide you to maximize these Jupiter transits.'
  },
  {
    id: 'capricorn',
    name: 'Capricorn',
    symbol: '♑',
    dateRange: 'Dec 22 - Jan 19',
    rulingPlanet: 'Saturn',
    element: 'Earth',
    trait: 'Disciplined, ambitious, and patient, but experiences deep delays, slow progress, and emotional isolation.',
    prediction: 'Saturn\'s powerful position indicates hard changes or Shani Sade Sati challenges. Let Sagar Narayan perform the sacred Shani pacification to bring rapid, stress-free relief.'
  },
  {
    id: 'aquarius',
    name: 'Aquarius',
    symbol: '♒',
    dateRange: 'Jan 20 - Feb 18',
    rulingPlanet: 'Saturn & Uranus',
    element: 'Air',
    trait: 'Independent, humanitarian, and highly intellectual, but emotionally detached or deeply misunderstood.',
    prediction: 'Unexpected changes are manifesting in family circles. Clear the spiritual pathway and secure future harmony by matching your horoscope Kundali today.'
  },
  {
    id: 'pisces',
    name: 'Pisces',
    symbol: '♓',
    dateRange: 'Feb 19 - Mar 20',
    rulingPlanet: 'Neptune & Jupiter',
    element: 'Water',
    trait: 'Compassionate, artistic, and deeply spiritual, but can get absorbed in dream worlds and relationships that drain them.',
    prediction: 'Your water element calls for energetic borders. Protect your psychological and physical fields from toxic and dark energy through Guruji\'s customized energy shields.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Arjun Sharma',
    location: 'Bengaluru',
    issue: 'Inter-caste Marriage Delay & Family Anger',
    resolution: 'Spiritual planetary alignment & Jupiter pooja',
    message: 'My parents were strongly against our marriage for two years. Guruji analyzed our horoscopes, identified structural delays in my Jupiter placement, and suggested simple home remedies. Within 45 days, our families miraculously agreed and we are happily married now!',
    stars: 5,
  },
  {
    id: '2',
    name: 'Priyanka Sen',
    location: 'Mumbai (via Call)',
    issue: 'Severe Relationship Breakup & Pain',
    resolution: 'Venus (Shukra) harmony rituals & counseling',
    message: 'My partner suddenly blocked me everywhere after a minor misunderstanding, and I was in deep despair. Astrologer Sagar Narayanji analyzed my profile, assured me it was a passing planet transit, and did an energy healing prayer. After just 3 weeks, my partner reached out, apologized, and we are back together.',
    stars: 5,
  },
  {
    id: '3',
    name: 'Kshitij Gowda',
    location: 'Mysuru',
    issue: 'Unseen Black Magic Symptoms & Health Drain',
    resolution: 'Negative energy cleansing & copper protective kavach',
    message: 'I was suffering from severe professional downfalls and sudden health drops that doctors couldn\'t cure. Pandit Sagar Narayan identified strong jealous negative eyes (disturbing dark energies) and did a purification process. Life returned to complete normalcy instantly. Deeply grateful!',
    stars: 5,
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How does Astrologer Sagar Narayan perform the analysis?',
    answer: 'Guruji uses an intricate combination of calculations based on Vedic Astrology, matching your birth dates (Janam Kundali), transit of beneficial planets (Venus, Jupiter, Sun), and deep hand line analysis (Palmistry).'
  },
  {
    question: 'Can I consult if I do not have my exact birth time?',
    answer: 'Yes! If you do not have your exact birth time, Sagar Narayan utilizes Face Reading, Palmistry (Hand lines), and Prashna Kundali (Current planetary alignments of the question hour) to make accurate predictions.'
  },
  {
    question: 'Are my personal details and problems kept confidential?',
    answer: 'Absolutely. Every consultation, call, name, and background detail is 100% confidential. Guruji values human privacy and treats every query with absolute sanctity and care.'
  },
  {
    question: 'What are his primary remedial suggestions?',
    answer: 'Depending on your planetary charts, Guruji suggests highly scientific and spiritual remedies such as positive mantra incantations, charity/daan advices, wearing certified natural astrological gemstones to amplify weak positive planets, or custom space energetic cleanings.'
  }
];
