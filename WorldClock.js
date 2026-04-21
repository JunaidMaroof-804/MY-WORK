'use strict';

// ===== COUNTRY CODE MAP =====
const countryCodeMap = {
  'Afghanistan': 'af', 'Albania': 'al', 'Algeria': 'dz', 'Andorra': 'ad', 'Angola': 'ao',
  'Antigua and Barbuda': 'ag', 'Argentina': 'ar', 'Armenia': 'am', 'Australia': 'au', 'Austria': 'at',
  'Azerbaijan': 'az', 'Bahamas': 'bs', 'Bahrain': 'bh', 'Bangladesh': 'bd', 'Barbados': 'bb',
  'Belarus': 'by', 'Belgium': 'be', 'Belize': 'bz', 'Benin': 'bj', 'Bhutan': 'bt',
  'Bolivia': 'bo', 'Bosnia and Herzegovina': 'ba', 'Botswana': 'bw', 'Brazil': 'br', 'Brunei': 'bn',
  'Bulgaria': 'bg', 'Burkina Faso': 'bf', 'Burundi': 'bi', 'Cabo Verde': 'cv', 'Cambodia': 'kh',
  'Cameroon': 'cm', 'Canada': 'ca', 'Central African Republic': 'cf', 'Chad': 'td', 'Chile': 'cl',
  'China': 'cn', 'Colombia': 'co', 'Comoros': 'km', 'Congo': 'cg', 'Costa Rica': 'cr',
  "Côte d'Ivoire": 'ci', 'Croatia': 'hr', 'Cuba': 'cu', 'Cyprus': 'cy', 'Czechia': 'cz',
  'DR Congo': 'cd', 'Denmark': 'dk', 'Djibouti': 'dj', 'Dominica': 'dm', 'Dominican Republic': 'do',
  'Ecuador': 'ec', 'Egypt': 'eg', 'El Salvador': 'sv', 'Equatorial Guinea': 'gq', 'Eritrea': 'er',
  'Estonia': 'ee', 'Eswatini': 'sz', 'Ethiopia': 'et', 'Fiji': 'fj', 'Finland': 'fi',
  'France': 'fr', 'Gabon': 'ga', 'Gambia': 'gm', 'Georgia': 'ge', 'Germany': 'de',
  'Ghana': 'gh', 'Greece': 'gr', 'Grenada': 'gd', 'Guatemala': 'gt', 'Guinea': 'gn',
  'Guinea-Bissau': 'gw', 'Guyana': 'gy', 'Haiti': 'ht', 'Holy See': 'va', 'Honduras': 'hn',
  'Hungary': 'hu', 'Iceland': 'is', 'India': 'in', 'Indonesia': 'id', 'Iran': 'ir',
  'Iraq': 'iq', 'Ireland': 'ie', 'Israel': 'il', 'Italy': 'it', 'Jamaica': 'jm',
  'Japan': 'jp', 'Jordan': 'jo', 'Kazakhstan': 'kz', 'Kenya': 'ke', 'Kiribati': 'ki',
  'Kuwait': 'kw', 'Kyrgyzstan': 'kg', 'Laos': 'la', 'Latvia': 'lv', 'Lebanon': 'lb',
  'Lesotho': 'ls', 'Liberia': 'lr', 'Libya': 'ly', 'Liechtenstein': 'li', 'Lithuania': 'lt',
  'Luxembourg': 'lu', 'Madagascar': 'mg', 'Malawi': 'mw', 'Malaysia': 'my', 'Maldives': 'mv',
  'Mali': 'ml', 'Malta': 'mt', 'Marshall Islands': 'mh', 'Mauritania': 'mr', 'Mauritius': 'mu',
  'Mexico': 'mx', 'Micronesia': 'fm', 'Moldova': 'md', 'Monaco': 'mc', 'Mongolia': 'mn',
  'Montenegro': 'me', 'Morocco': 'ma', 'Mozambique': 'mz', 'Myanmar': 'mm', 'Namibia': 'na',
  'Nauru': 'nr', 'Nepal': 'np', 'Netherlands': 'nl', 'New Zealand': 'nz', 'Nicaragua': 'ni',
  'Niger': 'ne', 'Nigeria': 'ng', 'North Korea': 'kp', 'North Macedonia': 'mk', 'Norway': 'no',
  'Oman': 'om', 'Pakistan': 'pk', 'Palau': 'pw', 'Palestine': 'ps', 'Panama': 'pa',
  'Papua New Guinea': 'pg', 'Paraguay': 'py', 'Peru': 'pe', 'Philippines': 'ph', 'Poland': 'pl',
  'Portugal': 'pt', 'Qatar': 'qa', 'Romania': 'ro', 'Russia': 'ru', 'Rwanda': 'rw',
  'Saint Kitts and Nevis': 'kn', 'Saint Lucia': 'lc', 'Saint Vincent and the Grenadines': 'vc',
  'Samoa': 'ws', 'San Marino': 'sm', 'Sao Tome and Principe': 'st', 'Saudi Arabia': 'sa',
  'Senegal': 'sn', 'Serbia': 'rs', 'Seychelles': 'sc', 'Sierra Leone': 'sl', 'Singapore': 'sg',
  'Slovakia': 'sk', 'Slovenia': 'si', 'Solomon Islands': 'sb', 'Somalia': 'so', 'South Africa': 'za',
  'South Korea': 'kr', 'South Sudan': 'ss', 'Spain': 'es', 'Sri Lanka': 'lk', 'Sudan': 'sd',
  'Suriname': 'sr', 'Sweden': 'se', 'Switzerland': 'ch', 'Syria': 'sy', 'Tajikistan': 'tj',
  'Tanzania': 'tz', 'Thailand': 'th', 'Timor-Leste': 'tl', 'Togo': 'tg', 'Tonga': 'to',
  'Trinidad and Tobago': 'tt', 'Tunisia': 'tn', 'Turkey': 'tr', 'Turkmenistan': 'tm', 'Tuvalu': 'tv',
  'Uganda': 'ug', 'Ukraine': 'ua', 'United Arab Emirates': 'ae', 'United Kingdom': 'gb',
  'United States': 'us', 'Uruguay': 'uy', 'Uzbekistan': 'uz', 'Vanuatu': 'vu', 'Venezuela': 've',
  'Vietnam': 'vn', 'Yemen': 'ye', 'Zambia': 'zm', 'Zimbabwe': 'zw'
};

// ===== COUNTRIES DATA =====
const countries = [
  { name: 'Afghanistan', timezone: 'Asia/Kabul', cities: ['Kabul', 'Kandahar', 'Herat'], flag: '🇦🇫', offset: 4.5, population: 43844111, landArea: 652860, density: 67, animal: 'Snow Leopard', bird: 'Golden Eagle', food: 'Kabuli Pulao', currency: 'Afghan Afghani (؋)', independence: 'August 19, 1919', founder: 'Ahmad Shah Durrani', funFact: 'Afghanistan has a unique time zone: UTC+4:30, one of only two countries with a 30-minute offset!' },
  { name: 'Albania', timezone: 'Europe/Tirane', cities: ['Tirana', 'Durrës', 'Vlorë'], flag: '🇦🇱', offset: 1, population: 2771508, landArea: 27400, density: 101, animal: 'Golden Eagle', bird: 'Golden Eagle', food: 'Tavë Kosi', currency: 'Albanian Lek (L)', independence: 'November 28, 1912', founder: 'Ismail Qemali', funFact: 'Albania has over 750,000 bunkers built during the communist era — about one for every four people!' },
  { name: 'Algeria', timezone: 'Africa/Algiers', cities: ['Algiers', 'Oran', 'Constantine'], flag: '🇩🇿', offset: 1, population: 47435312, landArea: 2381740, density: 20, animal: 'Fennec Fox', bird: 'N/A', food: 'Couscous', currency: 'Algerian Dinar (د.ج)', independence: 'July 5, 1962', founder: 'Ahmed Ben Bella', funFact: 'Algeria is the largest country in Africa, covering 2.4 million km² — bigger than all of Western Europe!' },
  { name: 'Andorra', timezone: 'Europe/Andorra', cities: ['Andorra la Vella', 'Escaldes-Engordany'], flag: '🇦🇩', offset: 1, population: 82904, landArea: 470, density: 176, animal: 'Pyrenean Chamois', bird: 'N/A', food: 'Escudella', currency: 'Euro (€)', independence: '1278 (Co-principality)', founder: 'Charlemagne (legendary)', funFact: 'Andorra has no airport or railway, yet has over 300 sunny days per year and 10 million visitors!' },
  { name: 'Angola', timezone: 'Africa/Luanda', cities: ['Luanda', 'Huambo', 'Lobito'], flag: '🇦🇴', offset: 1, population: 39040039, landArea: 1246700, density: 31, animal: 'Giant Sable Antelope', bird: 'N/A', food: 'Moamba de galinha', currency: 'Angolan Kwanza (Kz)', independence: 'November 11, 1975', founder: 'Agostinho Neto', funFact: 'Angola is home to the endangered Giant Sable Antelope, found nowhere else on Earth!' },
  { name: 'Antigua and Barbuda', timezone: 'America/Antigua', cities: ["St. John's", 'All Saints'], flag: '🇦🇬', offset: -4, population: 94209, landArea: 440, density: 214, animal: 'Fallow Deer', bird: 'Magnificent Frigatebird', food: 'Fungee and Pepperpot', currency: 'East Caribbean Dollar ($)', independence: 'November 1, 1981', founder: 'Vere Bird', funFact: 'Antigua is said to have 365 beaches — one for each day of the year!' },
  { name: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', cities: ['Buenos Aires', 'Córdoba', 'Rosario'], flag: '🇦🇷', offset: -3, population: 45851378, landArea: 2736690, density: 17, animal: 'Jaguar', bird: 'Rufous Hornero', food: 'Asado', currency: 'Argentine Peso ($)', independence: 'July 9, 1816', founder: 'José de San Martín', funFact: "Argentina invented the tango and is home to the world's widest avenue — 9 de Julio at 140m wide!" },
  { name: 'Armenia', timezone: 'Asia/Yerevan', cities: ['Yerevan', 'Gyumri', 'Vanadzor'], flag: '🇦🇲', offset: 4, population: 2952365, landArea: 28470, density: 104, animal: 'Armenian Mouflon', bird: 'N/A', food: 'Khorovats', currency: 'Armenian Dram (֏)', independence: 'September 21, 1991', founder: 'Levon Ter-Petrosyan', funFact: 'Armenia was the first nation to officially adopt Christianity as state religion in 301 AD!' },
  { name: 'Australia', timezone: 'Australia/Sydney', cities: ['Sydney', 'Melbourne', 'Brisbane'], flag: '🇦🇺', offset: 11, population: 26974026, landArea: 7682300, density: 4, animal: 'Kangaroo', bird: 'Emu', food: 'Meat Pie', currency: 'Australian Dollar ($)', independence: 'January 1, 1901', founder: 'Sir Edmund Barton', funFact: 'Australia has 10,685 beaches — you could visit a new one every day for 29 years!' },
  { name: 'Austria', timezone: 'Europe/Vienna', cities: ['Vienna', 'Graz', 'Linz'], flag: '🇦🇹', offset: 1, population: 9113574, landArea: 82409, density: 111, animal: 'Alpine Ibex', bird: 'Barn Swallow', food: 'Wiener Schnitzel', currency: 'Euro (€)', independence: 'November 12, 1918', founder: 'Karl Renner', funFact: "Vienna is rated the world's most liveable city and birthplace of Mozart, Beethoven lived here too!" },
  { name: 'Azerbaijan', timezone: 'Asia/Baku', cities: ['Baku', 'Ganja', 'Sumqayit'], flag: '🇦🇿', offset: 4, population: 10397713, landArea: 82658, density: 126, animal: 'Karabakh Horse', bird: 'N/A', food: 'Plov', currency: 'Azerbaijani Manat (₼)', independence: 'October 18, 1991', founder: 'Heydar Aliyev', funFact: 'Azerbaijan is called the "Land of Fire" due to its natural gas fires that have been burning for thousands of years!' },
  { name: 'Bahamas', timezone: 'America/Nassau', cities: ['Nassau', 'Freeport', 'West End'], flag: '🇧🇸', offset: -5, population: 403033, landArea: 10010, density: 40, animal: 'Flamingo', bird: 'N/A', food: 'Conch', currency: 'Bahamian Dollar ($)', independence: 'July 10, 1973', founder: 'Lynden Pindling', funFact: "The Bahamas has the world's third-largest barrier reef system and stunning blue holes!" },
  { name: 'Bahrain', timezone: 'Asia/Bahrain', cities: ['Manama', 'Riffa', 'Muharraq'], flag: '🇧🇭', offset: 3, population: 1643332, landArea: 760, density: 2162, animal: 'Arabian Oryx', bird: 'N/A', food: 'Machboos', currency: 'Bahraini Dinar (BD)', independence: 'August 15, 1971', founder: 'Sheikh Isa bin Salman', funFact: 'Bahrain was the first Gulf state to discover oil in 1932 and has a Tree of Life that stands alone in the desert!' },
  { name: 'Bangladesh', timezone: 'Asia/Dhaka', cities: ['Dhaka', 'Chittagong', 'Khulna'], flag: '🇧🇩', offset: 6, population: 175686899, landArea: 130170, density: 1350, animal: 'Bengal Tiger', bird: 'Magpie Robin', food: 'Panta bhat', currency: 'Bangladeshi Taka (৳)', independence: 'March 26, 1971', founder: 'Sheikh Mujibur Rahman', funFact: 'Bangladesh has the world\'s largest river delta — the Ganges Delta — and the Sundarbans mangrove forest!' },
  { name: 'Barbados', timezone: 'America/Barbados', cities: ['Bridgetown', 'Speightstown'], flag: '🇧🇧', offset: -4, population: 282623, landArea: 430, density: 657, animal: 'Green Monkey', bird: 'N/A', food: 'Cou-cou and flying fish', currency: 'Barbadian Dollar ($)', independence: 'November 30, 1966', founder: 'Errol Barrow', funFact: 'Barbados is birthplace of pop star Rihanna and has stunning pink-coral sand beaches!' },
  { name: 'Belarus', timezone: 'Europe/Minsk', cities: ['Minsk', 'Gomel', 'Mogilev'], flag: '🇧🇾', offset: 3, population: 8997603, landArea: 202910, density: 44, animal: 'European Bison', bird: 'White Stork', food: 'Draniki', currency: 'Belarusian Ruble (Br)', independence: 'August 25, 1991', founder: 'Stanislav Shushkevich', funFact: 'Belarus means "White Russia" and has the Białowieża Forest, the largest primeval forest in Europe!' },
  { name: 'Belgium', timezone: 'Europe/Brussels', cities: ['Brussels', 'Antwerp', 'Ghent'], flag: '🇧🇪', offset: 1, population: 11758603, landArea: 30280, density: 388, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Moules-frites', currency: 'Euro (€)', independence: 'October 4, 1830', founder: 'Leopold I', funFact: 'Belgium produces 220,000 tons of chocolate per year — that\'s 22 kg per person — and invented French fries!' },
  { name: 'Belize', timezone: 'America/Belize', cities: ['Belize City', 'San Ignacio', 'Orange Walk'], flag: '🇧🇿', offset: -6, population: 422924, landArea: 22810, density: 19, animal: 'Tapir', bird: 'Keel-billed Toucan', food: 'Rice and Beans', currency: 'Belize Dollar ($)', independence: 'September 21, 1981', founder: 'George Cadle Price', funFact: 'Belize has the famous Great Blue Hole, a 300-meter wide underwater sinkhole and one of the top diving sites!' },
  { name: 'Benin', timezone: 'Africa/Porto-Novo', cities: ['Porto-Novo', 'Cotonou', 'Parakou'], flag: '🇧🇯', offset: 1, population: 14814460, landArea: 112760, density: 131, animal: 'Leopard', bird: 'N/A', food: 'Kuli-kuli', currency: 'West African CFA franc (Fr)', independence: 'August 1, 1960', founder: 'Hubert Maga', funFact: 'Benin was the birthplace of Voodoo religion and has amazing stilt villages on Lake Nokoué!' },
  { name: 'Bhutan', timezone: 'Asia/Thimphu', cities: ['Thimphu', 'Phuntsholing', 'Paro'], flag: '🇧🇹', offset: 6, population: 796682, landArea: 38117, density: 21, animal: 'Takin', bird: 'Raven', food: 'Ema Datshi', currency: 'Bhutanese Ngultrum (Nu.)', independence: '1907 (Monarchy)', founder: 'Ugyen Wangchuck', funFact: 'Bhutan measures Gross National Happiness instead of GDP, has no traffic lights, and bans tobacco sales!' },
  { name: 'Bolivia', timezone: 'America/La_Paz', cities: ['La Paz', 'Santa Cruz', 'Cochabamba'], flag: '🇧🇴', offset: -4, population: 12581843, landArea: 1083300, density: 12, animal: 'Llama', bird: 'Andean Condor', food: 'Salteñas', currency: 'Bolivian Boliviano (Bs.)', independence: 'August 6, 1825', founder: 'Simón Bolívar', funFact: "Bolivia has the world's largest salt flat — the stunning Salar de Uyuni at 10,582 km²!" },
  { name: 'Bosnia and Herzegovina', timezone: 'Europe/Sarajevo', cities: ['Sarajevo', 'Banja Luka', 'Tuzla'], flag: '🇧🇦', offset: 1, population: 3140095, landArea: 51000, density: 62, animal: 'Brown Bear', bird: 'N/A', food: 'Ćevapi', currency: 'Bosnia Mark (KM)', independence: 'March 1, 1992', founder: 'Alija Izetbegović', funFact: 'Sarajevo hosted the 1984 Winter Olympics and has the 500-year-old Stari Most bridge in Mostar!' },
  { name: 'Botswana', timezone: 'Africa/Gaborone', cities: ['Gaborone', 'Francistown', 'Molepolole'], flag: '🇧🇼', offset: 2, population: 2562122, landArea: 566730, density: 5, animal: 'Zebra', bird: 'N/A', food: 'Seswaa', currency: 'Botswana Pula (P)', independence: 'September 30, 1966', founder: 'Seretse Khama', funFact: "Botswana has the world's largest elephant population and the spectacular Okavango Delta — an inland river delta!" },
  { name: 'Brazil', timezone: 'America/Sao_Paulo', cities: ['São Paulo', 'Rio de Janeiro', 'Brasília'], flag: '🇧🇷', offset: -3, population: 212812405, landArea: 8358140, density: 25, animal: 'Jaguar', bird: 'Rufous-bellied Thrush', food: 'Feijoada', currency: 'Brazilian Real (R$)', independence: 'September 7, 1822', founder: 'Dom Pedro I', funFact: 'Brazil has won the FIFA World Cup 5 times and hosts the world\'s largest carnival — 2 million people dance daily!' },
  { name: 'Brunei', timezone: 'Asia/Brunei', cities: ['Bandar Seri Begawan', 'Kuala Belait'], flag: '🇧🇳', offset: 8, population: 466330, landArea: 5270, density: 88, animal: 'Proboscis Monkey', bird: 'N/A', food: 'Ambuyat', currency: 'Brunei Dollar ($)', independence: 'January 1, 1984', founder: 'Sultan Hassanal Bolkiah', funFact: "Brunei's Sultan has one of the world's largest car collections — over 7,000 vehicles including 600 Rolls-Royces!" },
  { name: 'Bulgaria', timezone: 'Europe/Sofia', cities: ['Sofia', 'Plovdiv', 'Varna'], flag: '🇧🇬', offset: 2, population: 6714560, landArea: 108560, density: 62, animal: 'Lion', bird: 'N/A', food: 'Banitsa', currency: 'Bulgarian Lev (лв)', independence: 'March 3, 1878', founder: 'Vasil Levski', funFact: "Bulgaria invented the Cyrillic alphabet used by 250+ million people, and produces 70% of the world's rose oil!" },
  { name: 'Burkina Faso', timezone: 'Africa/Ouagadougou', cities: ['Ouagadougou', 'Bobo-Dioulasso'], flag: '🇧🇫', offset: 0, population: 24074580, landArea: 273600, density: 88, animal: 'Horse', bird: 'N/A', food: 'Tô', currency: 'West African CFA franc (Fr)', independence: 'August 5, 1960', founder: 'Maurice Yaméogo', funFact: 'Burkina Faso means "Land of Honest People" in local languages — it\'s a name that embodies national pride!' },
  { name: 'Burundi', timezone: 'Africa/Bujumbura', cities: ['Gitega', 'Bujumbura', 'Muyinga'], flag: '🇧🇮', offset: 2, population: 14390003, landArea: 25680, density: 560, animal: 'Leopard', bird: 'N/A', food: 'Ugali', currency: 'Burundian Franc (Fr)', independence: 'July 1, 1962', founder: 'Mwami Mwambutsa IV', funFact: "Burundi has Lake Tanganyika, the world's second deepest lake at 1,470m and second longest freshwater lake!" },
  { name: 'Cabo Verde', timezone: 'Atlantic/Cape_Verde', cities: ['Praia', 'Mindelo', 'Santa Maria'], flag: '🇨🇻', offset: -1, population: 527326, landArea: 4030, density: 131, animal: 'N/A', bird: 'N/A', food: 'Cachupa', currency: 'Cape Verdean Escudo ($)', independence: 'July 5, 1975', founder: 'Amílcar Cabral', funFact: 'Cape Verde is made up of 10 volcanic islands and is famous for its Morna music, declared UNESCO intangible heritage!' },
  { name: 'Cambodia', timezone: 'Asia/Phnom_Penh', cities: ['Phnom Penh', 'Siem Reap', 'Battambang'], flag: '🇰🇭', offset: 7, population: 17847982, landArea: 176520, density: 101, animal: 'Kouprey', bird: 'Giant Ibis', food: 'Amok trey', currency: 'Cambodian Riel (៛)', independence: 'November 9, 1953', founder: 'Norodom Sihanouk', funFact: 'Cambodia has the magnificent Angkor Wat — the largest religious monument in the world at 162 hectares!' },
  { name: 'Cameroon', timezone: 'Africa/Douala', cities: ['Yaoundé', 'Douala', 'Garoua'], flag: '🇨🇲', offset: 1, population: 29879337, landArea: 472710, density: 63, animal: 'Lion', bird: 'N/A', food: 'Ndolé', currency: 'Central African CFA franc (Fr)', independence: 'January 1, 1960', founder: 'Ahmadou Ahidjo', funFact: 'Cameroon is called "Africa in Miniature" for its geological and cultural diversity — from desert to rainforest!' },
  { name: 'Canada', timezone: 'America/Toronto', cities: ['Toronto', 'Vancouver', 'Montreal'], flag: '🇨🇦', offset: -5, population: 40126723, landArea: 9093510, density: 4, animal: 'Beaver', bird: 'Canada Jay', food: 'Poutine', currency: 'Canadian Dollar ($)', independence: 'July 1, 1867', founder: 'John A. Macdonald', funFact: 'Canada has more lakes than all other countries combined — over 2 million lakes holding 20% of the world\'s fresh water!' },
  { name: 'Central African Republic', timezone: 'Africa/Bangui', cities: ['Bangui', 'Bimbo', 'Berbérati'], flag: '🇨🇫', offset: 1, population: 5513282, landArea: 622980, density: 9, animal: 'Lion (heraldic)', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 13, 1960', founder: 'David Dacko', funFact: 'This landlocked country has dense rainforests, diverse wildlife, and some of Africa\'s last untouched wildernesses!' },
  { name: 'Chad', timezone: 'Africa/Ndjamena', cities: ["N'Djamena", 'Moundou', 'Sarh'], flag: '🇹🇩', offset: 1, population: 21003705, landArea: 1259200, density: 17, animal: 'Goat', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 11, 1960', founder: 'François Tombalbaye', funFact: "Chad's Lake Chad was once the sixth largest lake in the world — it has shrunk by 90% due to climate change!" },
  { name: 'Chile', timezone: 'America/Santiago', cities: ['Santiago', 'Valparaíso', 'Concepción'], flag: '🇨🇱', offset: -3, population: 19859921, landArea: 743532, density: 27, animal: 'Andean Huemul', bird: 'Andean Condor', food: 'Empanada', currency: 'Chilean Peso ($)', independence: 'September 18, 1810', founder: "Bernardo O'Higgins", funFact: 'Chile is the longest north-south country in the world at 4,300 km — it spans 38 degrees of latitude!' },
  { name: 'China', timezone: 'Asia/Shanghai', cities: ['Shanghai', 'Beijing', 'Shenzhen'], flag: '🇨🇳', offset: 8, population: 1416096094, landArea: 9388211, density: 151, animal: 'Giant Panda', bird: 'Red-crowned Crane', food: 'Peking Duck', currency: 'Chinese Yuan (¥)', independence: 'October 1, 1949', founder: 'Mao Zedong', funFact: "China uses only one time zone despite being as wide as the US, so in western China the sun rises at 10 AM!" },
  { name: 'Colombia', timezone: 'America/Bogota', cities: ['Bogotá', 'Medellín', 'Cali'], flag: '🇨🇴', offset: -5, population: 53425635, landArea: 1109500, density: 48, animal: 'Andean Condor', bird: 'Andean Condor', food: 'Bandeja Paisa', currency: 'Colombian Peso ($)', independence: 'July 20, 1810', founder: 'Simón Bolívar', funFact: "Colombia is the world's leading source of emeralds and has more bird species than any other country — 1,900+!" },
  { name: 'Comoros', timezone: 'Indian/Comoro', cities: ['Moroni', 'Mutsamudu', 'Fomboni'], flag: '🇰🇲', offset: 3, population: 882847, landArea: 1861, density: 474, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Comorian Franc (Fr)', independence: 'July 6, 1975', founder: 'Ahmed Abdallah', funFact: 'Comoros is a volcanic archipelago known as the "Perfume Islands" — major exporter of ylang-ylang for perfumes!' },
  { name: 'Congo', timezone: 'Africa/Brazzaville', cities: ['Brazzaville', 'Pointe-Noire'], flag: '🇨🇬', offset: 1, population: 6484437, landArea: 341500, density: 19, animal: 'Chimpanzee', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 15, 1960', founder: 'Fulbert Youlou', funFact: 'Congo has the second-largest tropical rainforest after the Amazon and shares a capital city name with DR Congo!' },
  { name: 'Costa Rica', timezone: 'America/Costa_Rica', cities: ['San José', 'Limón', 'Alajuela'], flag: '🇨🇷', offset: -6, population: 5152950, landArea: 51060, density: 101, animal: 'White-tailed Deer', bird: 'Clay-colored Thrush', food: 'Gallo Pinto', currency: 'Costa Rican Colón (₡)', independence: 'September 15, 1821', founder: 'Juan Mora Fernández', funFact: 'Costa Rica has no army, runs on 99% renewable energy, and holds 5% of all the world\'s biodiversity!' },
  { name: "Côte d'Ivoire", timezone: 'Africa/Abidjan', cities: ['Abidjan', 'Bouaké', 'Yamoussoukro'], flag: '🇨🇮', offset: 0, population: 32711547, landArea: 318000, density: 103, animal: 'Elephant', bird: 'N/A', food: 'Attiéké', currency: 'West African CFA franc (Fr)', independence: 'August 7, 1960', founder: 'Félix Houphouët-Boigny', funFact: "Ivory Coast is the world's top producer of cocoa beans — powering 40% of global chocolate production!" },
  { name: 'Croatia', timezone: 'Europe/Zagreb', cities: ['Zagreb', 'Split', 'Rijeka'], flag: '🇭🇷', offset: 1, population: 3848160, landArea: 55960, density: 69, animal: 'Marten', bird: 'N/A', food: 'Peka', currency: 'Euro (€)', independence: 'June 25, 1991', founder: 'Franjo Tuđman', funFact: 'Croatia has 1,244 islands and invented the necktie (cravat) — now a global fashion staple!' },
  { name: 'Cuba', timezone: 'America/Havana', cities: ['Havana', 'Santiago de Cuba', 'Camagüey'], flag: '🇨🇺', offset: -5, population: 10937203, landArea: 106440, density: 103, animal: 'Cuban Trogon', bird: 'Cuban Trogon', food: 'Ropa vieja', currency: 'Cuban Peso ($)', independence: 'May 20, 1902', founder: 'José Martí', funFact: 'Cuba has a 99.8% literacy rate, produces world-famous cigars, and has 1950s classic cars still running!' },
  { name: 'Cyprus', timezone: 'Asia/Nicosia', cities: ['Nicosia', 'Limassol', 'Larnaca'], flag: '🇨🇾', offset: 2, population: 1370754, landArea: 9240, density: 148, animal: 'Mouflon', bird: 'N/A', food: 'Halloumi', currency: 'Euro (€)', independence: 'October 1, 1960', founder: 'Archbishop Makarios III', funFact: 'Cyprus is the mythological birthplace of Aphrodite, Greek goddess of love and beauty!' },
  { name: 'Czechia', timezone: 'Europe/Prague', cities: ['Prague', 'Brno', 'Ostrava'], flag: '🇨🇿', offset: 1, population: 10609239, landArea: 77240, density: 137, animal: 'Two-tailed Lion (heraldic)', bird: 'N/A', food: 'Svíčková', currency: 'Czech Koruna (Kč)', independence: 'January 1, 1993', founder: 'Václav Havel', funFact: 'Czechs drink more beer per capita than any other nation — 143 liters per year — and Prague has medieval astronomy!' },
  { name: 'DR Congo', timezone: 'Africa/Kinshasa', cities: ['Kinshasa', 'Lubumbashi', 'Goma'], flag: '🇨🇩', offset: 1, population: 112832473, landArea: 2267050, density: 50, animal: 'Okapi', bird: 'Congo Peafowl', food: 'Fufu', currency: 'Congolese Franc (Fr)', independence: 'June 30, 1960', founder: 'Patrice Lumumba', funFact: 'DR Congo has the world\'s deepest river — the Congo River reaches 220m deep and flows at incredible speed!' },
  { name: 'Denmark', timezone: 'Europe/Copenhagen', cities: ['Copenhagen', 'Aarhus', 'Odense'], flag: '🇩🇰', offset: 1, population: 6002507, landArea: 42430, density: 141, animal: 'Swan', bird: 'N/A', food: 'Smørrebrød', currency: 'Danish Krone (kr)', independence: 'Ancient Kingdom', founder: 'Harald Bluetooth', funFact: "Denmark is consistently ranked as the world's happiest country and invented LEGO!" },
  { name: 'Djibouti', timezone: 'Africa/Djibouti', cities: ['Djibouti City', 'Ali Sabieh'], flag: '🇩🇯', offset: 3, population: 1184076, landArea: 23180, density: 51, animal: 'N/A', bird: 'N/A', food: 'Fah-fah', currency: 'Djiboutian Franc (Fr)', independence: 'June 27, 1977', founder: 'Hassan Gouled Aptidon', funFact: 'Djibouti has Lake Assal, the saltiest body of water outside Antarctica — 10x saltier than the ocean!' },
  { name: 'Dominica', timezone: 'America/Dominica', cities: ['Roseau', 'Portsmouth'], flag: '🇩🇲', offset: -4, population: 65871, landArea: 750, density: 88, animal: 'Sisserou Parrot', bird: 'Sisserou Parrot', food: 'Callaloo Soup', currency: 'East Caribbean Dollar ($)', independence: 'November 3, 1978', founder: 'Patrick John', funFact: 'Dominica is the "Nature Island" with 365 rivers, boiling lakes, and the Caribbean\'s only remaining Carib people!' },
  { name: 'Dominican Republic', timezone: 'America/Santo_Domingo', cities: ['Santo Domingo', 'Santiago', 'La Romana'], flag: '🇩🇴', offset: -4, population: 11520487, landArea: 48320, density: 238, animal: 'Palmchat', bird: 'Palmchat', food: 'La Bandera', currency: 'Dominican Peso ($)', independence: 'February 27, 1844', founder: 'Juan Pablo Duarte', funFact: "The Dominican Republic has Santo Domingo — the oldest European settlement in the Americas, founded 1496!" },
  { name: 'Ecuador', timezone: 'America/Guayaquil', cities: ['Quito', 'Guayaquil', 'Cuenca'], flag: '🇪🇨', offset: -5, population: 18289896, landArea: 248360, density: 74, animal: 'Andean Condor', bird: 'Andean Condor', food: 'Ceviche', currency: 'US Dollar ($)', independence: 'May 24, 1822', founder: 'Simón Bolívar', funFact: 'Ecuador is named after the equator and the Galápagos Islands — where Darwin discovered evolution!' },
  { name: 'Egypt', timezone: 'Africa/Cairo', cities: ['Cairo', 'Alexandria', 'Giza'], flag: '🇪🇬', offset: 2, population: 118365995, landArea: 995450, density: 119, animal: 'Egyptian Eagle', bird: 'N/A', food: 'Koshary', currency: 'Egyptian Pound (£)', independence: 'February 28, 1922', founder: 'Gamal Abdel Nasser', funFact: "Egypt has pyramids older than 4,500 years and the Nile — the world's longest river at 6,650 km!" },
  { name: 'El Salvador', timezone: 'America/El_Salvador', cities: ['San Salvador', 'Santa Ana', 'San Miguel'], flag: '🇸🇻', offset: -6, population: 6365503, landArea: 20720, density: 307, animal: 'N/A', bird: 'Turquoise-browed Motmot', food: 'Pupusas', currency: 'US Dollar ($)', independence: 'September 15, 1821', founder: 'José Matías Delgado', funFact: 'El Salvador is the smallest Central American country but packs over 20 volcanoes into its tiny territory!' },
  { name: 'Equatorial Guinea', timezone: 'Africa/Malabo', cities: ['Malabo', 'Bata', 'Ebebiyin'], flag: '🇬🇶', offset: 1, population: 1938431, landArea: 28050, density: 69, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'October 12, 1968', founder: 'Francisco Macías Nguema', funFact: 'Equatorial Guinea is the only Spanish-speaking country in Africa, and its capital Malabo is on an island!' },
  { name: 'Eritrea', timezone: 'Africa/Asmara', cities: ['Asmara', 'Keren', 'Massawa'], flag: '🇪🇷', offset: 3, population: 3607003, landArea: 101000, density: 36, animal: 'N/A', bird: 'N/A', food: 'Zigni', currency: 'Eritrean Nakfa (Nfk)', independence: 'May 24, 1993', founder: 'Isaias Afwerki', funFact: "Eritrea's capital Asmara has stunning Art Deco Italian-colonial architecture and is a UNESCO World Heritage Site!" },
  { name: 'Estonia', timezone: 'Europe/Tallinn', cities: ['Tallinn', 'Tartu', 'Narva'], flag: '🇪🇪', offset: 2, population: 1344232, landArea: 42390, density: 32, animal: 'Wolf', bird: 'Barn Swallow', food: 'Verivorst', currency: 'Euro (€)', independence: 'February 24, 1918', founder: 'Konstantin Päts', funFact: 'Estonia has over 2,000 islands, invented Skype, and was the first country to hold national elections online in 2005!' },
  { name: 'Eswatini', timezone: 'Africa/Mbabane', cities: ['Mbabane', 'Manzini', 'Lobamba'], flag: '🇸🇿', offset: 2, population: 1256174, landArea: 17200, density: 73, animal: 'Lion', bird: 'N/A', food: 'Sishwala', currency: 'Swazi Lilangeni (L)', independence: 'September 6, 1968', founder: 'King Sobhuza II', funFact: "Eswatini (formerly Swaziland) is Africa's last absolute monarchy — ruled by King Mswati III!" },
  { name: 'Ethiopia', timezone: 'Africa/Addis_Ababa', cities: ['Addis Ababa', 'Dire Dawa', 'Mekelle'], flag: '🇪🇹', offset: 3, population: 135472051, landArea: 1000000, density: 135, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Injera', currency: 'Ethiopian Birr (Br)', independence: 'Ancient (Never colonized)', founder: 'Menelik II', funFact: 'Ethiopia has its own calendar with 13 months, uses a unique 12-hour clock, and discovered coffee!' },
  { name: 'Fiji', timezone: 'Pacific/Fiji', cities: ['Suva', 'Lautoka', 'Nadi'], flag: '🇫🇯', offset: 12, population: 933154, landArea: 18270, density: 51, animal: 'N/A', bird: 'N/A', food: 'Lovo', currency: 'Fijian Dollar ($)', independence: 'October 10, 1970', founder: 'Ratu Sir Kamisese Mara', funFact: 'Fiji has over 300 islands and is known as the "Soft Coral Capital of the World" for its stunning dive sites!' },
  { name: 'Finland', timezone: 'Europe/Helsinki', cities: ['Helsinki', 'Espoo', 'Tampere'], flag: '🇫🇮', offset: 2, population: 5623329, landArea: 303890, density: 19, animal: 'Brown Bear', bird: 'Whooper Swan', food: 'Karjalanpiirakka', currency: 'Euro (€)', independence: 'December 6, 1917', founder: 'C. G. E. Mannerheim', funFact: 'Finland has 188,000 lakes, home of Santa Claus in Lapland, and invented the sauna — 3 million saunas for 5.5M people!' },
  { name: 'France', timezone: 'Europe/Paris', cities: ['Paris', 'Lyon', 'Marseille'], flag: '🇫🇷', offset: 1, population: 66650804, landArea: 547557, density: 122, animal: 'Gallic Rooster', bird: 'N/A', food: 'Pot-au-feu', currency: 'Euro (€)', independence: 'July 14, 1789 (Republic)', founder: 'Napoleon Bonaparte', funFact: 'France is the most visited country in the world with over 89 million tourists per year — Paris alone has 38M!' },
  { name: 'Gabon', timezone: 'Africa/Libreville', cities: ['Libreville', 'Port-Gentil', 'Franceville'], flag: '🇬🇦', offset: 1, population: 2593130, landArea: 257670, density: 10, animal: 'Black Panther', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 17, 1960', founder: "Léon M'ba", funFact: 'Gabon is 88% covered by rainforest and is home to surfing hippos — forest elephants, gorillas, and mandrills too!' },
  { name: 'Gambia', timezone: 'Africa/Banjul', cities: ['Banjul', 'Serekunda', 'Brikama'], flag: '🇬🇲', offset: 0, population: 2822093, landArea: 10120, density: 279, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Domoda', currency: 'Gambian Dalasi (D)', independence: 'February 18, 1965', founder: 'Dawda Jawara', funFact: "Gambia is Africa's smallest mainland country — it's shaped like a snake entirely surrounded by Senegal!" },
  { name: 'Georgia', timezone: 'Asia/Tbilisi', cities: ['Tbilisi', 'Batumi', 'Kutaisi'], flag: '🇬🇪', offset: 4, population: 3806671, landArea: 69490, density: 55, animal: 'Wolf', bird: 'N/A', food: 'Khachapuri', currency: 'Georgian Lari (₾)', independence: 'April 9, 1991', founder: 'Zviad Gamsakhurdia', funFact: 'Georgia has 8,000 years of winemaking history — the oldest in the world, using ancient clay amphorae (qvevri)!' },
  { name: 'Germany', timezone: 'Europe/Berlin', cities: ['Berlin', 'Munich', 'Hamburg'], flag: '🇩🇪', offset: 1, population: 84075075, landArea: 348560, density: 241, animal: 'Eagle (heraldic)', bird: 'N/A', food: 'Sauerbraten', currency: 'Euro (€)', independence: 'October 3, 1990 (Reunification)', founder: 'Konrad Adenauer', funFact: 'Germany has over 1,500 varieties of beer and more than 20,000 castles — more than any other country!' },
  { name: 'Ghana', timezone: 'Africa/Accra', cities: ['Accra', 'Kumasi', 'Tamale'], flag: '🇬🇭', offset: 0, population: 35064272, landArea: 227540, density: 154, animal: 'Eagle', bird: 'N/A', food: 'Fufu', currency: 'Ghanaian Cedi (₵)', independence: 'March 6, 1957', founder: 'Kwame Nkrumah', funFact: 'Ghana was the first Sub-Saharan African nation to gain independence, inspiring liberation movements worldwide!' },
  { name: 'Greece', timezone: 'Europe/Athens', cities: ['Athens', 'Thessaloniki', 'Patras'], flag: '🇬🇷', offset: 2, population: 9938844, landArea: 128900, density: 77, animal: 'Dolphin', bird: 'N/A', food: 'Moussaka', currency: 'Euro (€)', independence: 'March 25, 1821', founder: 'Theodoros Kolokotronis', funFact: 'Greece has more than 6,000 islands, invented democracy, philosophy, the Olympics, and the word "alphabet"!' },
  { name: 'Grenada', timezone: 'America/Grenada', cities: ["St. George's", 'Gouyave'], flag: '🇬🇩', offset: -4, population: 117303, landArea: 340, density: 345, animal: 'N/A', bird: 'N/A', food: 'Oil Down', currency: 'East Caribbean Dollar ($)', independence: 'February 7, 1974', founder: 'Eric Gairy', funFact: "Grenada is the \"Spice Isle\" producing 20% of the world's nutmeg — and has underwater sculptures to dive past!" },
  { name: 'Guatemala', timezone: 'America/Guatemala', cities: ['Guatemala City', 'Mixco', 'Quetzaltenango'], flag: '🇬🇹', offset: -6, population: 18687881, landArea: 107160, density: 174, animal: 'Quetzal', bird: 'Resplendent Quetzal', food: 'Fiambre', currency: 'Guatemalan Quetzal (Q)', independence: 'September 15, 1821', founder: 'José María Orellana', funFact: 'Guatemala has 37 volcanoes, the ancient Mayan city of Tikal, and the sacred Quetzal bird on its flag!' },
  { name: 'Guinea', timezone: 'Africa/Conakry', cities: ['Conakry', 'Nzérékoré', 'Kankan'], flag: '🇬🇳', offset: 0, population: 15099727, landArea: 245720, density: 61, animal: 'Lion (heraldic)', bird: 'N/A', food: 'N/A', currency: 'Guinean Franc (Fr)', independence: 'October 2, 1958', founder: 'Ahmed Sékou Touré', funFact: 'Guinea has over 25% of the world\'s bauxite reserves — the primary ore for aluminum production!' },
  { name: 'Guinea-Bissau', timezone: 'Africa/Bissau', cities: ['Bissau', 'Bafatá', 'Gabú'], flag: '🇬🇼', offset: 0, population: 2249515, landArea: 28120, density: 80, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'West African CFA franc (Fr)', independence: 'September 24, 1973', founder: 'Amílcar Cabral', funFact: 'Guinea-Bissau has the Bijagós archipelago — 88 islands that are a UNESCO Biosphere Reserve and hippo habitat!' },
  { name: 'Guyana', timezone: 'America/Guyana', cities: ['Georgetown', 'Linden', 'New Amsterdam'], flag: '🇬🇾', offset: -4, population: 835986, landArea: 196850, density: 4, animal: 'Jaguar', bird: 'Hoatzin', food: 'Pepperpot', currency: 'Guyanese Dollar ($)', independence: 'May 26, 1966', founder: 'Cheddi Jagan', funFact: 'Guyana has Kaieteur Falls — one of the most powerful waterfalls on Earth — and is 87% covered by rainforest!' },
  { name: 'Haiti', timezone: 'America/Port-au-Prince', cities: ['Port-au-Prince', 'Cap-Haïtien', 'Gonaïves'], flag: '🇭🇹', offset: -5, population: 11906095, landArea: 27560, density: 432, animal: 'N/A', bird: 'N/A', food: 'Soup Joumou', currency: 'Haitian Gourde (G)', independence: 'January 1, 1804', founder: 'Jean-Jacques Dessalines', funFact: 'Haiti was the first black republic in history and the only nation born from a successful slave revolution!' },
  { name: 'Holy See', timezone: 'Europe/Vatican', cities: ['Vatican City'], flag: '🇻🇦', offset: 1, population: 501, landArea: 0, density: 1253, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Euro (€)', independence: 'February 11, 1929', founder: 'Pope Pius XI', funFact: 'Vatican City at 0.44 km² is the smallest country with its own post office, bank, radio, TV, and pharmacy!' },
  { name: 'Honduras', timezone: 'America/Tegucigalpa', cities: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba'], flag: '🇭🇳', offset: -6, population: 11005850, landArea: 111890, density: 98, animal: 'White-tailed Deer', bird: 'Emerald Toucanet', food: 'Baleada', currency: 'Honduran Lempira (L)', independence: 'September 15, 1821', founder: 'Francisco Morazán', funFact: "Honduras has the amazing Copán Mayan ruins — known as the 'Paris of the Maya World' — and the stunning Bay Islands!" },
  { name: 'Hungary', timezone: 'Europe/Budapest', cities: ['Budapest', 'Debrecen', 'Szeged'], flag: '🇭🇺', offset: 1, population: 9632287, landArea: 90530, density: 106, animal: 'Turul (mythical falcon)', bird: 'N/A', food: 'Goulash', currency: 'Hungarian Forint (Ft)', independence: 'October 23, 1989', founder: 'Stephen I (first king)', funFact: 'Hungary has won more Olympic medals per capita than almost any other nation and invented the Rubik\'s Cube!' },
  { name: 'Iceland', timezone: 'Atlantic/Reykjavik', cities: ['Reykjavík', 'Kópavogur', 'Hafnarfjörður'], flag: '🇮🇸', offset: 0, population: 398266, landArea: 100250, density: 4, animal: 'Icelandic Horse', bird: 'Gyrfalcon', food: 'Hákarl', currency: 'Icelandic Króna (kr)', independence: 'June 17, 1944', founder: 'Sveinn Björnsson', funFact: 'Iceland has no mosquitoes, runs on 100% renewable energy, and reads more books per capita than any country!' },
  { name: 'India', timezone: 'Asia/Kolkata', cities: ['Mumbai', 'Delhi', 'Bangalore'], flag: '🇮🇳', offset: 5.5, population: 1463865525, landArea: 2973190, density: 492, animal: 'Bengal Tiger', bird: 'Indian Peafowl', food: 'Biryani', currency: 'Indian Rupee (₹)', independence: 'August 15, 1947', founder: 'Mahatma Gandhi', funFact: "India is the world's largest democracy, invented chess, yoga, the decimal system, and zero!" },
  { name: 'Indonesia', timezone: 'Asia/Jakarta', cities: ['Jakarta', 'Surabaya', 'Bandung'], flag: '🇮🇩', offset: 7, population: 285721236, landArea: 1811570, density: 158, animal: 'Komodo Dragon', bird: 'Javan Hawk-Eagle', food: 'Nasi Goreng', currency: 'Indonesian Rupiah (Rp)', independence: 'August 17, 1945', founder: 'Sukarno', funFact: 'Indonesia has 17,000+ islands, more volcanoes than any other country, and 4th largest population worldwide!' },
  { name: 'Iran', timezone: 'Asia/Tehran', cities: ['Tehran', 'Mashhad', 'Isfahan'], flag: '🇮🇷', offset: 3.5, population: 92417681, landArea: 1628550, density: 57, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Chelow Kebab', currency: 'Iranian Rial (﷼)', independence: 'April 1, 1979 (Islamic Republic)', founder: 'Ayatollah Khomeini', funFact: 'Iran has 23 UNESCO World Heritage sites, invented ice cream 2,000 years ago, and has the Persepolis ruins!' },
  { name: 'Iraq', timezone: 'Asia/Baghdad', cities: ['Baghdad', 'Basra', 'Mosul'], flag: '🇮🇶', offset: 3, population: 47020774, landArea: 434320, density: 108, animal: 'Goat', bird: 'N/A', food: 'Masgouf', currency: 'Iraqi Dinar (ع.د)', independence: 'October 3, 1932', founder: 'Faisal I', funFact: 'Iraq is home to ancient Mesopotamia — the "Cradle of Civilization" where writing, laws, and cities were first invented!' },
  { name: 'Ireland', timezone: 'Europe/Dublin', cities: ['Dublin', 'Cork', 'Limerick'], flag: '🇮🇪', offset: 0, population: 5308039, landArea: 68890, density: 77, animal: 'Irish Wolfhound', bird: 'N/A', food: 'Irish Stew', currency: 'Euro (€)', independence: 'December 6, 1921', founder: 'Michael Collins', funFact: 'Ireland has no snakes — St. Patrick allegedly drove them out — and Halloween originated here over 2,000 years ago!' },
  { name: 'Israel', timezone: 'Asia/Jerusalem', cities: ['Jerusalem', 'Tel Aviv', 'Haifa'], flag: '🇮🇱', offset: 2, population: 9517181, landArea: 21640, density: 440, animal: 'Gazelle', bird: 'Hoopoe', food: 'Falafel', currency: 'Israeli Shekel (₪)', independence: 'May 14, 1948', founder: 'David Ben-Gurion', funFact: 'Israel has the Dead Sea — the lowest point on Earth at 430m below sea level — and floats you effortlessly!' },
  { name: 'Italy', timezone: 'Europe/Rome', cities: ['Rome', 'Milan', 'Naples'], flag: '🇮🇹', offset: 1, population: 59146260, landArea: 294140, density: 201, animal: 'Italian Wolf', bird: 'N/A', food: 'Pasta', currency: 'Euro (€)', independence: 'March 17, 1861', founder: 'Giuseppe Garibaldi', funFact: 'Italy has more UNESCO World Heritage sites than any other country — 58 sites — and invented pizza!' },
  { name: 'Jamaica', timezone: 'America/Jamaica', cities: ['Kingston', 'Montego Bay', 'Spanish Town'], flag: '🇯🇲', offset: -5, population: 2837077, landArea: 10830, density: 262, animal: 'Swallow-tail Butterfly', bird: 'Red-billed Streamertail', food: 'Ackee and Saltfish', currency: 'Jamaican Dollar ($)', independence: 'August 6, 1962', founder: 'Alexander Bustamante', funFact: 'Jamaica gave the world reggae music, Usain Bolt, and has produced more World and Olympic sprint champions per capita than any nation!' },
  { name: 'Japan', timezone: 'Asia/Tokyo', cities: ['Tokyo', 'Osaka', 'Kyoto'], flag: '🇯🇵', offset: 9, population: 123103479, landArea: 364555, density: 338, animal: 'Green Pheasant', bird: 'Green Pheasant', food: 'Sushi', currency: 'Japanese Yen (¥)', independence: 'February 11, 660 BC (Legendary)', founder: 'Emperor Jimmu', funFact: "Japan has 6,800+ islands, vending machines outnumber convenience stores, and Tokyo is the world's largest city!" },
  { name: 'Jordan', timezone: 'Asia/Amman', cities: ['Amman', 'Zarqa', 'Irbid'], flag: '🇯🇴', offset: 2, population: 11520684, landArea: 88780, density: 130, animal: 'Arabian Oryx', bird: 'N/A', food: 'Mansaf', currency: 'Jordanian Dinar (د.ا)', independence: 'May 25, 1946', founder: 'Abdullah I', funFact: 'Jordan has Petra — one of the New Seven Wonders — and Wadi Rum, the Mars-like desert where films are shot!' },
  { name: 'Kazakhstan', timezone: 'Asia/Almaty', cities: ['Almaty', 'Astana', 'Shymkent'], flag: '🇰🇿', offset: 6, population: 20843754, landArea: 2699700, density: 8, animal: 'Golden Eagle', bird: 'Golden Eagle', food: 'Beshbarmak', currency: 'Kazakhstani Tenge (₸)', independence: 'December 16, 1991', founder: 'Nursultan Nazarbayev', funFact: "Kazakhstan is the world's largest landlocked country — bigger than Western Europe — and launched the world's first satellite Sputnik!" },
  { name: 'Kenya', timezone: 'Africa/Nairobi', cities: ['Nairobi', 'Mombasa', 'Kisumu'], flag: '🇰🇪', offset: 3, population: 57532493, landArea: 569140, density: 101, animal: 'Lion', bird: 'N/A', food: 'Ugali', currency: 'Kenyan Shilling (Sh)', independence: 'December 12, 1963', founder: 'Jomo Kenyatta', funFact: 'Kenya is home to the Great Migration — 1.5 million wildebeest crossing the Mara River — the greatest wildlife show on Earth!' },
  { name: 'Kiribati', timezone: 'Pacific/Tarawa', cities: ['South Tarawa', 'Betio'], flag: '🇰🇮', offset: 12, population: 136488, landArea: 810, density: 169, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Australian Dollar ($)', independence: 'July 12, 1979', founder: 'Ieremia Tabai', funFact: 'Kiribati is the first country to see the sunrise each day and the first likely to disappear due to rising sea levels!' },
  { name: 'Kuwait', timezone: 'Asia/Kuwait', cities: ['Kuwait City', 'Al Ahmadi', 'Hawalli'], flag: '🇰🇼', offset: 3, population: 5026078, landArea: 17820, density: 282, animal: 'Arabian Camel', bird: 'N/A', food: 'Machboos', currency: 'Kuwaiti Dinar (د.ك)', independence: 'June 19, 1961', founder: 'Sheikh Abdullah Al-Salim', funFact: 'Kuwait has the world\'s sixth-largest oil reserves and the Kuwaiti Dinar is the highest-valued currency!' },
  { name: 'Kyrgyzstan', timezone: 'Asia/Bishkek', cities: ['Bishkek', 'Osh', 'Jalal-Abad'], flag: '🇰🇬', offset: 6, population: 7295034, landArea: 191800, density: 38, animal: 'Snow Leopard', bird: 'N/A', food: 'Beshbarmak', currency: 'Kyrgyzstani Som (с)', independence: 'August 31, 1991', founder: 'Askar Akayev', funFact: 'Kyrgyzstan is 90% mountainous with the stunning Son-Kul alpine lake and epic horseback nomadic culture!' },
  { name: 'Laos', timezone: 'Asia/Vientiane', cities: ['Vientiane', 'Pakse', 'Savannakhet'], flag: '🇱🇦', offset: 7, population: 7873046, landArea: 230800, density: 34, animal: 'Elephant', bird: 'N/A', food: 'Larbs', currency: 'Lao Kip (₭)', independence: 'October 22, 1953', founder: 'Souphanouvong', funFact: 'Laos is the most bombed country per capita in history — more bombs were dropped than in all of WWII Europe!' },
  { name: 'Latvia', timezone: 'Europe/Riga', cities: ['Riga', 'Daugavpils', 'Liepāja'], flag: '🇱🇻', offset: 2, population: 1853559, landArea: 62200, density: 30, animal: 'Roebuck', bird: 'White Wagtail', food: 'Grey Peas with Bacon', currency: 'Euro (€)', independence: 'November 18, 1918', founder: 'Kārlis Ulmanis', funFact: 'Latvia has the widest waterfall in Europe — Ventas Rumba at 270m — and Riga\'s old town is a UNESCO site!' },
  { name: 'Lebanon', timezone: 'Asia/Beirut', cities: ['Beirut', 'Tripoli', 'Sidon'], flag: '🇱🇧', offset: 2, population: 5849421, landArea: 10230, density: 572, animal: 'Striped Hyena', bird: 'N/A', food: 'Kibbeh', currency: 'Lebanese Pound (ل.ل)', independence: 'November 22, 1943', founder: 'Bechara El Khoury', funFact: "Lebanon has Byblos — the world's oldest continuously inhabited city at 7,000 years old!" },
  { name: 'Lesotho', timezone: 'Africa/Maseru', cities: ['Maseru', 'Teyateyaneng', 'Mafeteng'], flag: '🇱🇸', offset: 2, population: 2363325, landArea: 30360, density: 78, animal: 'Black Rhinoceros', bird: 'N/A', food: 'Pap-pap', currency: 'Lesotho Loti (L)', independence: 'October 4, 1966', founder: 'Moshoeshoe I', funFact: 'Lesotho is the only country entirely above 1,000m elevation — nicknamed the "Kingdom in the Sky"!' },
  { name: 'Liberia', timezone: 'Africa/Monrovia', cities: ['Monrovia', 'Gbarnga', 'Kakata'], flag: '🇱🇷', offset: 0, population: 5731206, landArea: 96320, density: 60, animal: 'Leopard', bird: 'N/A', food: 'N/A', currency: 'Liberian Dollar ($)', independence: 'July 26, 1847', founder: 'Joseph Jenkins Roberts', funFact: 'Liberia was founded by freed American slaves in 1847 — making it Africa\'s oldest republic!' },
  { name: 'Libya', timezone: 'Africa/Tripoli', cities: ['Tripoli', 'Benghazi', 'Misrata'], flag: '🇱🇾', offset: 2, population: 7458555, landArea: 1759540, density: 4, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Bazeen', currency: 'Libyan Dinar (ل.د)', independence: 'December 24, 1951', founder: 'Idris I', funFact: 'Libya is 90% desert but has some of the best-preserved Roman ruins — Leptis Magna is a UNESCO World Heritage Site!' },
  { name: 'Liechtenstein', timezone: 'Europe/Vaduz', cities: ['Vaduz', 'Schaan', 'Balzers'], flag: '🇱🇮', offset: 1, population: 40128, landArea: 160, density: 251, animal: 'N/A', bird: 'N/A', food: 'Käsknöpfle', currency: 'Swiss Franc (Fr)', independence: 'January 23, 1719', founder: 'Prince Johann Adam', funFact: "Liechtenstein is the world's sixth smallest country, has no army, and is one of only two doubly landlocked nations!" },
  { name: 'Lithuania', timezone: 'Europe/Vilnius', cities: ['Vilnius', 'Kaunas', 'Klaipėda'], flag: '🇱🇹', offset: 2, population: 2830144, landArea: 62674, density: 45, animal: 'White Stork', bird: 'White Stork', food: 'Cepelinai', currency: 'Euro (€)', independence: 'February 16, 1918', founder: 'Jonas Basanavičius', funFact: 'Lithuania has the fastest free public WiFi in the world and the geographical center of Europe is here!' },
  { name: 'Luxembourg', timezone: 'Europe/Luxembourg', cities: ['Luxembourg City', 'Esch-sur-Alzette'], flag: '🇱🇺', offset: 1, population: 680453, landArea: 2590, density: 263, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Judd mat Gaardebounen', currency: 'Euro (€)', independence: 'October 24, 1868', founder: 'William I', funFact: 'Luxembourg has the highest minimum wage in the EU and its residents are some of the wealthiest per capita globally!' },
  { name: 'Madagascar', timezone: 'Indian/Antananarivo', cities: ['Antananarivo', 'Toamasina', 'Antsirabe'], flag: '🇲🇬', offset: 3, population: 32740678, landArea: 581795, density: 56, animal: 'Lemur', bird: 'N/A', food: 'Romazava', currency: 'Malagasy Ariary (Ar)', independence: 'June 26, 1960', founder: 'Philibert Tsiranana', funFact: 'Madagascar has unique wildlife — 90% of its species exist nowhere else on Earth, including 100+ lemur species!' },
  { name: 'Malawi', timezone: 'Africa/Blantyre', cities: ['Lilongwe', 'Blantyre', 'Mzuzu'], flag: '🇲🇼', offset: 2, population: 22216120, landArea: 94280, density: 236, animal: 'N/A', bird: 'N/A', food: 'Nsima', currency: 'Malawian Kwacha (MK)', independence: 'July 6, 1964', founder: 'Hastings Banda', funFact: 'Malawi has Lake Malawi with more fish species than any other lake — over 1,000 cichlid species!' },
  { name: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', cities: ['Kuala Lumpur', 'George Town', 'Johor Bahru'], flag: '🇲🇾', offset: 8, population: 35977838, landArea: 328550, density: 110, animal: 'Malayan Tiger', bird: 'Rhinoceros Hornbill', food: 'Nasi Lemak', currency: 'Malaysian Ringgit (RM)', independence: 'August 31, 1957', founder: 'Tunku Abdul Rahman', funFact: "Malaysia has the world's oldest rainforest at 130 million years old — older than the Amazon!" },
  { name: 'Maldives', timezone: 'Indian/Maldives', cities: ['Malé', 'Addu City', 'Fuvahmulah'], flag: '🇲🇻', offset: 5, population: 529676, landArea: 300, density: 1766, animal: 'N/A', bird: 'N/A', food: 'Garudhiya', currency: 'Maldivian Rufiyaa (Rf)', independence: 'July 26, 1965', founder: 'Ibrahim Nasir', funFact: "Maldives is the world's flattest country with average elevation of just 1.5m — and the lowest-lying nation on Earth!" },
  { name: 'Mali', timezone: 'Africa/Bamako', cities: ['Bamako', 'Sikasso', 'Mopti'], flag: '🇲🇱', offset: 0, population: 25198821, landArea: 1220190, density: 21, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Tô', currency: 'West African CFA franc (Fr)', independence: 'September 22, 1960', founder: 'Modibo Keïta', funFact: 'Mali was home to the ancient empire of Timbuktu — a center of Islamic learning with 700,000+ manuscripts!' },
  { name: 'Malta', timezone: 'Europe/Malta', cities: ['Valletta', 'Birkirkara', 'Mosta'], flag: '🇲🇹', offset: 1, population: 545405, landArea: 320, density: 1704, animal: 'Pharaoh Hound', bird: 'Blue Rock Thrush', food: 'Fenkata', currency: 'Euro (€)', independence: 'September 21, 1964', founder: 'George Borg Olivier', funFact: "Malta's megalithic temples are older than Stonehenge and the Pyramids — built 5,700 years ago!" },
  { name: 'Marshall Islands', timezone: 'Pacific/Majuro', cities: ['Majuro', 'Ebeye'], flag: '🇲🇭', offset: 12, population: 36282, landArea: 180, density: 202, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'October 21, 1986', founder: 'Amata Kabua', funFact: 'Marshall Islands consists of 29 coral atolls and was used for US nuclear testing — 67 nuclear bombs!' },
  { name: 'Mauritania', timezone: 'Africa/Nouakchott', cities: ['Nouakchott', 'Nouadhibou', 'Kiffa'], flag: '🇲🇷', offset: 0, population: 5315065, landArea: 1030700, density: 5, animal: 'N/A', bird: 'N/A', food: 'Thieboudienne', currency: 'Mauritanian Ouguiya (UM)', independence: 'November 28, 1960', founder: 'Moktar Ould Daddah', funFact: 'Mauritania has the mysterious "Eye of Africa" (Richat Structure) — a 50km circular formation visible from space!' },
  { name: 'Mauritius', timezone: 'Indian/Mauritius', cities: ['Port Louis', 'Beau Bassin-Rose Hill'], flag: '🇲🇺', offset: 4, population: 1268280, landArea: 2030, density: 625, animal: 'Dodo (extinct)', bird: 'N/A', food: 'Dholl Puri', currency: 'Mauritian Rupee (₨)', independence: 'March 12, 1968', founder: 'Seewoosagur Ramgoolam', funFact: "Mauritius was the only home of the extinct Dodo bird — and has an underwater waterfall optical illusion!" },
  { name: 'Mexico', timezone: 'America/Mexico_City', cities: ['Mexico City', 'Guadalajara', 'Monterrey'], flag: '🇲🇽', offset: -6, population: 131946900, landArea: 1943950, density: 68, animal: 'Golden Eagle', bird: 'Golden Eagle', food: 'Tacos', currency: 'Mexican Peso ($)', independence: 'September 16, 1810', founder: 'Miguel Hidalgo', funFact: 'Mexico City is built on a dried lakebed, so it slowly sinks 10cm per year — and Mexico invented chocolate!' },
  { name: 'Micronesia', timezone: 'Pacific/Pohnpei', cities: ['Palikir', 'Weno', 'Kolonia'], flag: '🇫🇲', offset: 11, population: 113683, landArea: 700, density: 162, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'November 3, 1986', founder: 'Tosiwo Nakayama', funFact: 'Micronesia has ancient stone money — Rai stones — up to 4m in diameter, used as currency!' },
  { name: 'Moldova', timezone: 'Europe/Chisinau', cities: ['Chișinău', 'Tiraspol', 'Bălți'], flag: '🇲🇩', offset: 2, population: 2996106, landArea: 32850, density: 91, animal: 'Aurochs (heraldic)', bird: 'N/A', food: 'Mămăligă', currency: 'Moldovan Leu (L)', independence: 'August 27, 1991', founder: 'Mircea Snegur', funFact: "Moldova has the world's largest wine cellar — Milestii Mici with 200km of tunnels holding 1.5 million bottles!" },
  { name: 'Monaco', timezone: 'Europe/Monaco', cities: ['Monaco', 'Monte Carlo', 'La Condamine'], flag: '🇲🇨', offset: 1, population: 38341, landArea: 2, density: 25732, animal: 'N/A', bird: 'N/A', food: 'Barbagiuans', currency: 'Euro (€)', independence: 'January 8, 1297', founder: 'François Grimaldi', funFact: "Monaco is the world's second smallest country but most densely populated — and has no income tax!" },
  { name: 'Mongolia', timezone: 'Asia/Ulaanbaatar', cities: ['Ulaanbaatar', 'Erdenet', 'Darkhan'], flag: '🇲🇳', offset: 8, population: 3517100, landArea: 1553560, density: 2, animal: 'Horse', bird: 'N/A', food: 'Buuz', currency: 'Mongolian Tögrög (₮)', independence: 'December 29, 1911', founder: 'Bogd Khan', funFact: 'Mongolia has the lowest population density on Earth, the Gobi Desert, and 30% of people still live as nomads!' },
  { name: 'Montenegro', timezone: 'Europe/Podgorica', cities: ['Podgorica', 'Nikšić', 'Pljevlja'], flag: '🇲🇪', offset: 1, population: 632729, landArea: 13450, density: 47, animal: 'Eagle (heraldic)', bird: 'N/A', food: 'Kačamak', currency: 'Euro (€)', independence: 'June 3, 2006', founder: 'Milo Đukanović', funFact: "Montenegro means \"Black Mountain\" and has Europe's deepest canyon — the Tara River Canyon!" },
  { name: 'Morocco', timezone: 'Africa/Casablanca', cities: ['Casablanca', 'Rabat', 'Marrakech'], flag: '🇲🇦', offset: 1, population: 38430770, landArea: 446300, density: 86, animal: 'Barbary Lion', bird: 'N/A', food: 'Tagine', currency: 'Moroccan Dirham (د.م.)', independence: 'March 2, 1956', founder: 'Mohammed V', funFact: "Morocco has the world's oldest university — University of al-Qarawiyyin, founded in 859 AD!" },
  { name: 'Mozambique', timezone: 'Africa/Maputo', cities: ['Maputo', 'Matola', 'Beira'], flag: '🇲🇿', offset: 2, population: 35631653, landArea: 786380, density: 45, animal: 'N/A', bird: 'N/A', food: 'Piri-piri chicken', currency: 'Mozambican Metical (MT)', independence: 'June 25, 1975', founder: 'Samora Machel', funFact: "Mozambique is the only country whose flag features an AK-47 rifle — a symbol of its independence struggle!" },
  { name: 'Myanmar', timezone: 'Asia/Yangon', cities: ['Yangon', 'Mandalay', 'Naypyidaw'], flag: '🇲🇲', offset: 6.5, population: 54850648, landArea: 653290, density: 84, animal: 'Tiger', bird: 'N/A', food: 'Mohinga', currency: 'Myanmar Kyat (K)', independence: 'January 4, 1948', founder: 'Aung San', funFact: 'Myanmar has over 2,000 ancient temples and pagodas in Bagan — one of the greatest archaeological sites on Earth!' },
  { name: 'Namibia', timezone: 'Africa/Windhoek', cities: ['Windhoek', 'Swakopmund', 'Walvis Bay'], flag: '🇳🇦', offset: 2, population: 3092816, landArea: 823290, density: 4, animal: 'Oryx', bird: 'N/A', food: 'Kapana', currency: 'Namibian Dollar ($)', independence: 'March 21, 1990', founder: 'Sam Nujoma', funFact: "Namibia has the world's oldest desert — the Namib at 55 million years old — and the social weaver's giant communal nests!" },
  { name: 'Nauru', timezone: 'Pacific/Nauru', cities: ['Yaren'], flag: '🇳🇷', offset: 12, population: 12025, landArea: 20, density: 601, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Australian Dollar ($)', independence: 'January 31, 1968', founder: 'Hammer DeRoburt', funFact: 'Nauru is the world\'s smallest island nation at just 21 km² and the world\'s third smallest country overall!' },
  { name: 'Nepal', timezone: 'Asia/Kathmandu', cities: ['Kathmandu', 'Pokhara', 'Lalitpur'], flag: '🇳🇵', offset: 5.75, population: 29618118, landArea: 143350, density: 207, animal: 'Cow', bird: 'Lophophorus', food: 'Dal Bhat', currency: 'Nepalese Rupee (₨)', independence: '1768 (Unified)', founder: 'Prithvi Narayan Shah', funFact: "Nepal has 8 of the world's 10 highest mountains including Everest — and has a non-rectangular flag, unique in the world!" },
  { name: 'Netherlands', timezone: 'Europe/Amsterdam', cities: ['Amsterdam', 'Rotterdam', 'The Hague'], flag: '🇳🇱', offset: 1, population: 18346819, landArea: 33720, density: 544, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Stroopwafels', currency: 'Euro (€)', independence: 'July 26, 1581', founder: 'William of Orange', funFact: 'Netherlands has more bikes than people, invented the microscope, and 25% of the country is below sea level!' },
  { name: 'New Zealand', timezone: 'Pacific/Auckland', cities: ['Auckland', 'Wellington', 'Christchurch'], flag: '🇳🇿', offset: 13, population: 5251899, landArea: 263310, density: 20, animal: 'Kiwi', bird: 'Kiwi', food: 'Hāngi', currency: 'New Zealand Dollar ($)', independence: 'September 26, 1907', founder: 'Richard Seddon', funFact: 'New Zealand was the first country to give women the right to vote in 1893 and was used as Middle-earth in Lord of the Rings!' },
  { name: 'Nicaragua', timezone: 'America/Managua', cities: ['Managua', 'León', 'Masaya'], flag: '🇳🇮', offset: -6, population: 7007502, landArea: 120340, density: 58, animal: 'N/A', bird: 'Guardabarranco', food: 'Gallo Pinto', currency: 'Nicaraguan Córdoba (C$)', independence: 'September 15, 1821', founder: 'José Santos Zelaya', funFact: 'Nicaragua has the largest lake in Central America — Lake Nicaragua — which contains freshwater sharks!' },
  { name: 'Niger', timezone: 'Africa/Niamey', cities: ['Niamey', 'Zinder', 'Maradi'], flag: '🇳🇪', offset: 1, population: 27917831, landArea: 1266700, density: 22, animal: 'Giraffe', bird: 'N/A', food: 'N/A', currency: 'West African CFA franc (Fr)', independence: 'August 3, 1960', founder: 'Hamani Diori', funFact: 'Niger is 80% covered by the Sahara Desert and has the Air Mountains with prehistoric rock art!' },
  { name: 'Nigeria', timezone: 'Africa/Lagos', cities: ['Lagos', 'Kano', 'Ibadan'], flag: '🇳🇬', offset: 1, population: 237527782, landArea: 910770, density: 261, animal: 'Eagle', bird: 'N/A', food: 'Jollof Rice', currency: 'Nigerian Naira (₦)', independence: 'October 1, 1960', founder: 'Nnamdi Azikiwe', funFact: "Nigeria is Africa's most populous country with 250+ ethnic groups and Nollywood — the world's second largest film industry!" },
  { name: 'North Korea', timezone: 'Asia/Pyongyang', cities: ['Pyongyang', 'Hamhung', 'Chongjin'], flag: '🇰🇵', offset: 9, population: 26571036, landArea: 120410, density: 221, animal: 'Chollima (mythical horse)', bird: 'N/A', food: 'Kimchi', currency: 'North Korean Won (₩)', independence: 'September 9, 1948', founder: 'Kim Il-sung', funFact: 'North Korea has its own time zone — 30 minutes behind South Korea — and the world\'s tallest unoccupied hotel!' },
  { name: 'North Macedonia', timezone: 'Europe/Skopje', cities: ['Skopje', 'Bitola', 'Kumanovo'], flag: '🇲🇰', offset: 1, population: 1813791, landArea: 25220, density: 72, animal: 'N/A', bird: 'N/A', food: 'Tavče Gravče', currency: 'Macedonian Denar (ден)', independence: 'September 8, 1991', founder: 'Kiro Gligorov', funFact: 'North Macedonia has Lake Ohrid — one of Europe\'s oldest and deepest lakes — a UNESCO World Heritage Site!' },
  { name: 'Norway', timezone: 'Europe/Oslo', cities: ['Oslo', 'Bergen', 'Trondheim'], flag: '🇳🇴', offset: 1, population: 5623071, landArea: 365268, density: 15, animal: 'Moose', bird: 'White-throated Dipper', food: 'Fårikål', currency: 'Norwegian Krone (kr)', independence: 'June 7, 1905', founder: 'Haakon VII', funFact: "Norway has the world's longest road tunnel at 24.5 km, midnight sun in summer, and invented the cheese slicer!" },
  { name: 'Oman', timezone: 'Asia/Muscat', cities: ['Muscat', 'Salalah', 'Sohar'], flag: '🇴🇲', offset: 4, population: 5494691, landArea: 309500, density: 18, animal: 'Arabian Oryx', bird: 'N/A', food: 'Shuwa', currency: 'Omani Rial (ر.ع.)', independence: '1650 (Expelled Portuguese)', founder: 'Sultan Qaboos', funFact: "Oman has frankincense trees and was a major trading hub for 5,000 years — it's the Arabia of ancient spice routes!" },
  { name: 'Pakistan', timezone: 'Asia/Karachi', cities: ['Karachi', 'Lahore', 'Islamabad'], flag: '🇵🇰', offset: 5, population: 255219554, landArea: 770880, density: 331, animal: 'Markhor', bird: 'Chukar Partridge', food: 'Nihari', currency: 'Pakistani Rupee (₨)', independence: 'August 14, 1947', founder: 'Muhammad Ali Jinnah', funFact: 'Pakistan has K2 — the world\'s second highest and most dangerous mountain — and the Khewra Salt Mines, 2nd largest!' },
  { name: 'Palau', timezone: 'Pacific/Palau', cities: ['Ngerulmud', 'Koror'], flag: '🇵🇼', offset: 9, population: 17663, landArea: 460, density: 38, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'October 1, 1994', founder: 'Kuniwo Nakamura', funFact: "Palau has Jellyfish Lake with millions of harmless golden jellyfish — one of the world's most unique swimming experiences!" },
  { name: 'Palestine', timezone: 'Asia/Gaza', cities: ['Gaza', 'Ramallah', 'Hebron'], flag: '🇵🇸', offset: 2, population: 5589623, landArea: 6020, density: 929, animal: 'Palestinian Sunbird', bird: 'Palestinian Sunbird', food: 'Musakhan', currency: 'Israeli Shekel (₪)', independence: 'November 15, 1988 (Declared)', founder: 'Yasser Arafat', funFact: 'Palestine has Jericho — one of the oldest continuously inhabited cities at over 10,000 years old!' },
  { name: 'Panama', timezone: 'America/Panama', cities: ['Panama City', 'San Miguelito', 'David'], flag: '🇵🇦', offset: -5, population: 4571189, landArea: 74340, density: 61, animal: 'Harpy Eagle', bird: 'Harpy Eagle', food: 'Sancocho', currency: 'Panamanian Balboa (B/.)', independence: 'November 3, 1903', founder: 'Manuel Amador Guerrero', funFact: 'The Panama Canal connects two oceans and ships traveling through go east to west to get from Pacific to Atlantic!' },
  { name: 'Papua New Guinea', timezone: 'Pacific/Port_Moresby', cities: ['Port Moresby', 'Lae', 'Mount Hagen'], flag: '🇵🇬', offset: 10, population: 10762817, landArea: 452860, density: 24, animal: 'Dugong', bird: 'Raggiana Bird-of-Paradise', food: 'Mumu', currency: 'Papua New Guinean Kina (K)', independence: 'September 16, 1975', founder: 'Michael Somare', funFact: 'Papua New Guinea has over 800 languages — more than any other country — representing 12% of all world languages!' },
  { name: 'Paraguay', timezone: 'America/Asuncion', cities: ['Asunción', 'Ciudad del Este', 'San Lorenzo'], flag: '🇵🇾', offset: -4, population: 7013078, landArea: 397300, density: 18, animal: 'N/A', bird: 'Bare-throated Bellbird', food: 'Sopa paraguaya', currency: 'Paraguayan Guaraní (₲)', independence: 'May 14, 1811', founder: 'José Gaspar de Francia', funFact: "Paraguay has a flag with different emblems on each side — one of only three in the world with this distinction!" },
  { name: 'Peru', timezone: 'America/Lima', cities: ['Lima', 'Arequipa', 'Cusco'], flag: '🇵🇪', offset: -5, population: 34576665, landArea: 1280000, density: 27, animal: 'Vicuna', bird: 'Andean Cock-of-the-rock', food: 'Ceviche', currency: 'Peruvian Sol (S/.)', independence: 'July 28, 1821', founder: 'José de San Martín', funFact: 'Peru has Machu Picchu — the Lost City of the Incas — and over 5,000 varieties of native potato!' },
  { name: 'Philippines', timezone: 'Asia/Manila', cities: ['Manila', 'Quezon City', 'Cebu City'], flag: '🇵🇭', offset: 8, population: 116786962, landArea: 298170, density: 392, animal: 'Carabao', bird: 'Philippine Eagle', food: 'Adobo', currency: 'Philippine Peso (₱)', independence: 'June 12, 1898', founder: 'Emilio Aguinaldo', funFact: 'Philippines has 7,641 islands, the world\'s longest Christmas season (starts in September!), and the jeepney art bus!' },
  { name: 'Poland', timezone: 'Europe/Warsaw', cities: ['Warsaw', 'Kraków', 'Łódź'], flag: '🇵🇱', offset: 1, population: 38140910, landArea: 306230, density: 125, animal: 'White Eagle (heraldic)', bird: 'N/A', food: 'Bigos', currency: 'Polish Złoty (zł)', independence: 'November 11, 1918', founder: 'Józef Piłsudski', funFact: 'Poland gave the world Marie Curie (2 Nobel prizes), Copernicus, and Chopin — and has the Wieliczka Salt Mine!' },
  { name: 'Portugal', timezone: 'Europe/Lisbon', cities: ['Lisbon', 'Porto', 'Braga'], flag: '🇵🇹', offset: 0, population: 10411834, landArea: 91590, density: 114, animal: 'Galo de Barcelos (rooster)', bird: 'N/A', food: 'Bacalhau', currency: 'Euro (€)', independence: 'October 5, 1143', founder: 'Afonso I', funFact: "Portugal is the world's largest cork producer and has 365 ways to cook cod — one for each day of the year!" },
  { name: 'Qatar', timezone: 'Asia/Qatar', cities: ['Doha', 'Al Rayyan', 'Al Wakrah'], flag: '🇶🇦', offset: 3, population: 3115889, landArea: 11610, density: 268, animal: 'Arabian Oryx', bird: 'N/A', food: 'Machboos', currency: 'Qatari Riyal (ر.ق)', independence: 'September 3, 1971', founder: 'Sheikh Khalifa bin Hamad', funFact: 'Qatar has the world\'s highest GDP per capita, hosted FIFA 2022, and built indoor-cooled outdoor stadiums!' },
  { name: 'Romania', timezone: 'Europe/Bucharest', cities: ['Bucharest', 'Cluj-Napoca', 'Timișoara'], flag: '🇷🇴', offset: 2, population: 18908650, landArea: 230170, density: 82, animal: 'Lynx', bird: 'N/A', food: 'Mămăligă', currency: 'Romanian Leu (lei)', independence: 'May 9, 1877', founder: 'Carol I', funFact: "Romania has Bran Castle (Dracula's Castle), the Carpathian Mountains, and Europe's second largest building!" },
  { name: 'Russia', timezone: 'Europe/Moscow', cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk'], flag: '🇷🇺', offset: 3, population: 143997393, landArea: 16376870, density: 9, animal: 'Brown Bear', bird: 'N/A', food: 'Borscht', currency: 'Russian Ruble (₽)', independence: 'June 12, 1990', founder: 'Vladimir Lenin', funFact: 'Russia covers 11 time zones — the largest country on Earth — and Lake Baikal holds 20% of the world\'s fresh water!' },
  { name: 'Rwanda', timezone: 'Africa/Kigali', cities: ['Kigali', 'Butare', 'Gitarama'], flag: '🇷🇼', offset: 2, population: 14569341, landArea: 24670, density: 591, animal: 'Lion', bird: 'N/A', food: 'Ugali', currency: 'Rwandan Franc (Fr)', independence: 'July 1, 1962', founder: 'Grégoire Kayibanda', funFact: 'Rwanda banned plastic bags in 2008 and has the highest percentage of women in parliament in the world at 61%!' },
  { name: 'Saint Kitts and Nevis', timezone: 'America/St_Kitts', cities: ['Basseterre', 'Charlestown'], flag: '🇰🇳', offset: -4, population: 46922, landArea: 260, density: 180, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'East Caribbean Dollar ($)', independence: 'September 19, 1983', founder: 'Robert Bradshaw', funFact: 'St. Kitts is the smallest sovereign state in the Western Hemisphere and has a scenic circular railway tour!' },
  { name: 'Saint Lucia', timezone: 'America/St_Lucia', cities: ['Castries', 'Vieux Fort', 'Soufrière'], flag: '🇱🇨', offset: -4, population: 180149, landArea: 610, density: 295, animal: 'Saint Lucia Parrot', bird: 'Saint Lucia Parrot', food: 'N/A', currency: 'East Caribbean Dollar ($)', independence: 'February 22, 1979', founder: 'John Compton', funFact: 'St. Lucia has the iconic Pitons — two volcanic spires rising from the sea — a UNESCO World Heritage Site!' },
  { name: 'Saint Vincent and the Grenadines', timezone: 'America/St_Vincent', cities: ['Kingstown', 'Georgetown'], flag: '🇻🇨', offset: -4, population: 99924, landArea: 390, density: 256, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'East Caribbean Dollar ($)', independence: 'October 27, 1979', founder: 'Milton Cato', funFact: 'This country has 32 islands and cays in the Caribbean, and the Pirates of the Caribbean films were shot here!' },
  { name: 'Samoa', timezone: 'Pacific/Apia', cities: ['Apia', 'Vaitele', 'Faleula'], flag: '🇼🇸', offset: 13, population: 219306, landArea: 2830, density: 77, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Samoan Tālā (T)', independence: 'January 1, 1962', founder: "Tupua Tamasese Meaʻole", funFact: 'Samoa switched sides of the International Date Line in 2011 — skipping an entire day to align with Australia!' },
  { name: 'San Marino', timezone: 'Europe/San_Marino', cities: ['San Marino', 'Serravalle'], flag: '🇸🇲', offset: 1, population: 33572, landArea: 60, density: 560, animal: 'N/A', bird: 'N/A', food: 'Torta Tre Monti', currency: 'Euro (€)', independence: 'September 3, 301', founder: 'Saint Marinus', funFact: "San Marino is the world's oldest republic founded in 301 AD and is entirely surrounded by Italy!" },
  { name: 'Sao Tome and Principe', timezone: 'Africa/Sao_Tome', cities: ['São Tomé', 'Trindade'], flag: '🇸🇹', offset: 0, population: 240254, landArea: 960, density: 250, animal: 'N/A', bird: 'N/A', food: 'Calulu', currency: 'São Tomé and Príncipe Dobra (Db)', independence: 'July 12, 1975', founder: 'Manuel Pinto da Costa', funFact: 'These equatorial islands grow premium "fine aroma" cocoa and have exceptional birdlife found nowhere else!' },
  { name: 'Saudi Arabia', timezone: 'Asia/Riyadh', cities: ['Riyadh', 'Jeddah', 'Mecca'], flag: '🇸🇦', offset: 3, population: 34566328, landArea: 2149690, density: 16, animal: 'Arabian Camel', bird: 'N/A', food: 'Kabsa', currency: 'Saudi Riyal (ر.س)', independence: 'September 23, 1932', founder: 'Abdulaziz Ibn Saud', funFact: 'Saudi Arabia has no rivers — all water comes from aquifers — and hosts the two holiest cities in Islam!' },
  { name: 'Senegal', timezone: 'Africa/Dakar', cities: ['Dakar', 'Touba', 'Thiès'], flag: '🇸🇳', offset: 0, population: 18931966, landArea: 192530, density: 98, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Thieboudienne', currency: 'West African CFA franc (Fr)', independence: 'April 4, 1960', founder: 'Léopold Senghor', funFact: "Senegal has Pink Lake (Lac Rose) that turns vibrant pink due to algae, and has never had a coup d'état!" },
  { name: 'Serbia', timezone: 'Europe/Belgrade', cities: ['Belgrade', 'Novi Sad', 'Niš'], flag: '🇷🇸', offset: 1, population: 6689039, landArea: 87460, density: 76, animal: 'Wolf', bird: 'N/A', food: 'Ćevapi', currency: 'Serbian Dinar (дин)', independence: 'June 5, 2006', founder: 'Karadjordje Petrović', funFact: 'Serbia has the world-famous EXIT music festival and Nikola Tesla was born in a Serbian village!' },
  { name: 'Seychelles', timezone: 'Indian/Mahe', cities: ['Victoria', 'Anse Boileau', 'Beau Vallon'], flag: '🇸🇨', offset: 4, population: 132779, landArea: 460, density: 289, animal: 'Giant Tortoise', bird: 'N/A', food: 'Curry', currency: 'Seychellois Rupee (₨)', independence: 'June 29, 1976', founder: 'James Mancham', funFact: "Seychelles has the world's heaviest land tortoise, the smallest capital city (Victoria), and pristine coral reefs!" },
  { name: 'Sierra Leone', timezone: 'Africa/Freetown', cities: ['Freetown', 'Bo', 'Kenema'], flag: '🇸🇱', offset: 0, population: 8819794, landArea: 72180, density: 122, animal: 'Lion (heraldic)', bird: 'N/A', food: 'N/A', currency: 'Sierra Leonean Leone (Le)', independence: 'April 27, 1961', founder: 'Milton Margai', funFact: "Sierra Leone has the world's third-largest natural harbor and beautiful unspoiled beaches!" },
  { name: 'Singapore', timezone: 'Asia/Singapore', cities: ['Singapore'], flag: '🇸🇬', offset: 8, population: 5870750, landArea: 700, density: 8387, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Chilli Crab', currency: 'Singapore Dollar ($)', independence: 'August 9, 1965', founder: 'Lee Kuan Yew', funFact: "Singapore transformed from a fishing village to a global financial hub in 50 years — and chewing gum is restricted!" },
  { name: 'Slovakia', timezone: 'Europe/Bratislava', cities: ['Bratislava', 'Košice', 'Prešov'], flag: '🇸🇰', offset: 1, population: 5474881, landArea: 48088, density: 114, animal: 'Bear', bird: 'N/A', food: 'Bryndzové halušky', currency: 'Euro (€)', independence: 'January 1, 1993', founder: 'Michal Kováč', funFact: 'Slovakia has 180 castles and fortifications — more per square km than any other country in the world!' },
  { name: 'Slovenia', timezone: 'Europe/Ljubljana', cities: ['Ljubljana', 'Maribor', 'Celje'], flag: '🇸🇮', offset: 1, population: 2117072, landArea: 20140, density: 105, animal: 'Brown Bear', bird: 'N/A', food: 'Kranjska klobasa', currency: 'Euro (€)', independence: 'June 25, 1991', founder: 'Milan Kučan', funFact: 'Slovenia has 10,000 caves including Postojna Cave — one of the largest cave systems in the world!' },
  { name: 'Solomon Islands', timezone: 'Pacific/Guadalcanal', cities: ['Honiara', 'Gizo', 'Auki'], flag: '🇸🇧', offset: 11, population: 838645, landArea: 27990, density: 30, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Solomon Islands Dollar ($)', independence: 'July 7, 1978', founder: 'Peter Kenilorea', funFact: "Solomon Islands has some of the world's best WWII wreck diving sites from the intense Pacific battles!" },
  { name: 'Somalia', timezone: 'Africa/Mogadishu', cities: ['Mogadishu', 'Hargeisa', 'Bosaso'], flag: '🇸🇴', offset: 3, population: 19654739, landArea: 627340, density: 31, animal: 'Leopard', bird: 'N/A', food: 'Canjeero', currency: 'Somali Shilling (Sh)', independence: 'July 1, 1960', founder: 'Aden Abdullah Osman', funFact: 'Somalia has the longest coastline in mainland Africa at 3,333 km and was ancient center of the Indian Ocean trade!' },
  { name: 'South Africa', timezone: 'Africa/Johannesburg', cities: ['Johannesburg', 'Cape Town', 'Durban'], flag: '🇿🇦', offset: 2, population: 64747319, landArea: 1213090, density: 53, animal: 'Springbok', bird: 'Blue Crane', food: 'Biltong', currency: 'South African Rand (R)', independence: 'May 31, 1910', founder: 'Nelson Mandela', funFact: 'South Africa has 3 capital cities, 11 official languages, and the largest diamond — the Cullinan (3,106 carats)!' },
  { name: 'South Korea', timezone: 'Asia/Seoul', cities: ['Seoul', 'Busan', 'Incheon'], flag: '🇰🇷', offset: 9, population: 51667029, landArea: 97230, density: 531, animal: 'Siberian Tiger', bird: 'Korean Magpie', food: 'Kimchi', currency: 'South Korean Won (₩)', independence: 'August 15, 1945', founder: 'Syngman Rhee', funFact: 'South Korea has the fastest internet speeds in the world and invented K-pop, K-drama, and K-beauty!' },
  { name: 'South Sudan', timezone: 'Africa/Juba', cities: ['Juba', 'Wau', 'Malakal'], flag: '🇸🇸', offset: 2, population: 12188788, landArea: 610952, density: 20, animal: 'N/A', bird: 'N/A', food: 'Kisra', currency: 'South Sudanese Pound (£)', independence: 'July 9, 2011', founder: 'Salva Kiir Mayardit', funFact: "South Sudan is the world's youngest country, having declared independence on July 9, 2011!" },
  { name: 'Spain', timezone: 'Europe/Madrid', cities: ['Madrid', 'Barcelona', 'Valencia'], flag: '🇪🇸', offset: 1, population: 47889958, landArea: 498800, density: 96, animal: 'Bull', bird: 'N/A', food: 'Paella', currency: 'Euro (€)', independence: '1492 (Reconquista)', founder: 'Isabella I & Ferdinand II', funFact: "Spain has 48 UNESCO World Heritage sites, invented the mop, and La Tomatina throws 150,000 tomatoes each year!" },
  { name: 'Sri Lanka', timezone: 'Asia/Colombo', cities: ['Colombo', 'Kandy', 'Galle'], flag: '🇱🇰', offset: 5.5, population: 23229470, landArea: 62710, density: 370, animal: 'Sri Lankan Elephant', bird: 'Junglefowl', food: 'Rice and Curry', currency: 'Sri Lankan Rupee (Rs)', independence: 'February 4, 1948', founder: 'D. S. Senanayake', funFact: 'Sri Lanka has 8 UNESCO World Heritage sites on a small island and is the world\'s top producer of high-quality cinnamon!' },
  { name: 'Sudan', timezone: 'Africa/Khartoum', cities: ['Khartoum', 'Omdurman', 'Port Sudan'], flag: '🇸🇩', offset: 2, population: 51662147, landArea: 1765048, density: 29, animal: 'N/A', bird: 'N/A', food: 'Ful Medames', currency: 'Sudanese Pound (£)', independence: 'January 1, 1956', founder: 'Ismail al-Azhari', funFact: 'Sudan actually has more ancient pyramids than Egypt — 255 pyramids at Meroe, smaller but more numerous!' },
  { name: 'Suriname', timezone: 'America/Paramaribo', cities: ['Paramaribo', 'Lelydorp', 'Nieuw Nickerie'], flag: '🇸🇷', offset: -3, population: 639850, landArea: 156000, density: 4, animal: 'Jaguar', bird: 'N/A', food: 'Pom', currency: 'Surinamese Dollar ($)', independence: 'November 25, 1975', founder: 'Johan Ferrier', funFact: 'Suriname is the smallest country in South America, 90% rainforest, and has the most diverse mix of cultures!' },
  { name: 'Sweden', timezone: 'Europe/Stockholm', cities: ['Stockholm', 'Gothenburg', 'Malmö'], flag: '🇸🇪', offset: 1, population: 10656633, landArea: 410340, density: 26, animal: 'Moose', bird: 'N/A', food: 'Köttbullar', currency: 'Swedish Krona (kr)', independence: 'June 6, 1523', founder: 'Gustav I', funFact: 'Sweden gave us IKEA, Spotify, ABBA, the Icehotel, and Pippi Longstocking — and has 221,000 islands!' },
  { name: 'Switzerland', timezone: 'Europe/Zurich', cities: ['Zurich', 'Geneva', 'Basel'], flag: '🇨🇭', offset: 1, population: 8967407, landArea: 39516, density: 227, animal: 'Cow', bird: 'N/A', food: 'Fondue', currency: 'Swiss Franc (Fr)', independence: 'August 1, 1291', founder: 'William Tell (legendary)', funFact: 'Switzerland has 4 official languages, invented milk chocolate, and has been at peace for over 200 years!' },
  { name: 'Syria', timezone: 'Asia/Damascus', cities: ['Damascus', 'Aleppo', 'Homs'], flag: '🇸🇾', offset: 2, population: 25620427, landArea: 183630, density: 140, animal: 'N/A', bird: 'N/A', food: 'Kibbeh', currency: 'Syrian Pound (£)', independence: 'April 17, 1946', founder: 'Shukri al-Quwatli', funFact: "Damascus is the world's oldest continuously inhabited capital city — people have lived there for 11,000 years!" },
  { name: 'Tajikistan', timezone: 'Asia/Dushanbe', cities: ['Dushanbe', 'Khujand', 'Kulob'], flag: '🇹🇯', offset: 5, population: 10786734, landArea: 139960, density: 77, animal: 'Snow Leopard', bird: 'N/A', food: 'Oshi Palov', currency: 'Tajikistani Somoni (ЅМ)', independence: 'September 9, 1991', founder: 'Rahmon Nabiyev', funFact: 'Tajikistan is 93% mountainous with the legendary Pamir Highway — the "Roof of the World" at 4,655m elevation!' },
  { name: 'Tanzania', timezone: 'Africa/Dar_es_Salaam', cities: ['Dar es Salaam', 'Mwanza', 'Arusha'], flag: '🇹🇿', offset: 3, population: 70545865, landArea: 885800, density: 80, animal: 'Giraffe', bird: 'N/A', food: 'Ugali', currency: 'Tanzanian Shilling (Sh)', independence: 'December 9, 1961', founder: 'Julius Nyerere', funFact: "Tanzania has Africa's highest mountain Kilimanjaro, the Serengeti, and Zanzibar — the Spice Island!" },
  { name: 'Thailand', timezone: 'Asia/Bangkok', cities: ['Bangkok', 'Chiang Mai', 'Phuket'], flag: '🇹🇭', offset: 7, population: 71619863, landArea: 510890, density: 140, animal: 'Thai Elephant', bird: 'N/A', food: 'Pad Thai', currency: 'Thai Baht (฿)', independence: 'Never colonized', founder: 'King Rama I', funFact: "Thailand is the only Southeast Asian country never colonized, and Bangkok has the world's longest official city name!" },
  { name: 'Timor-Leste', timezone: 'Asia/Dili', cities: ['Dili', 'Dare', 'Baucau'], flag: '🇹🇱', offset: 9, population: 1418517, landArea: 14870, density: 95, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'May 20, 2002', founder: 'Xanana Gusmão', funFact: 'Timor-Leste is the youngest country in Southeast Asia and has exceptional coral reefs in the Coral Triangle!' },
  { name: 'Togo', timezone: 'Africa/Lome', cities: ['Lomé', 'Sokodé', 'Kara'], flag: '🇹🇬', offset: 0, population: 9721608, landArea: 54390, density: 179, animal: 'N/A', bird: 'N/A', food: 'Fufu', currency: 'West African CFA franc (Fr)', independence: 'April 27, 1960', founder: 'Sylvanus Olympio', funFact: "Togo is one of the smallest countries in Africa but has beautiful beaches and Africa's largest fetish market in Lomé!" },
  { name: 'Tonga', timezone: 'Pacific/Tongatapu', cities: ["Nuku'alofa", 'Neiafu'], flag: '🇹🇴', offset: 13, population: 103742, landArea: 720, density: 144, animal: 'N/A', bird: 'N/A', food: 'Ota Ika', currency: "Tongan Paʻanga (T$)", independence: 'June 4, 1970', founder: "King Taufa'ahau Tupou IV", funFact: 'Tonga is the only Pacific nation never formally colonized and the only Pacific monarchy!' },
  { name: 'Trinidad and Tobago', timezone: 'America/Port_of_Spain', cities: ['Port of Spain', 'San Fernando', 'Chaguanas'], flag: '🇹🇹', offset: -4, population: 1511155, landArea: 5130, density: 295, animal: 'Scarlet Ibis', bird: 'Scarlet Ibis', food: 'Doubles', currency: 'Trinidad and Tobago Dollar ($)', independence: 'August 31, 1962', founder: 'Eric Williams', funFact: 'Trinidad invented the steelpan — the only acoustic instrument invented in the 20th century — and Carnival!' },
  { name: 'Tunisia', timezone: 'Africa/Tunis', cities: ['Tunis', 'Sfax', 'Sousse'], flag: '🇹🇳', offset: 1, population: 12348573, landArea: 155360, density: 79, animal: 'Fennec Fox', bird: 'N/A', food: 'Couscous', currency: 'Tunisian Dinar (د.ت)', independence: 'March 20, 1956', founder: 'Habib Bourguiba', funFact: 'Tunisia has Carthage — one of the greatest cities of the ancient world — and was filming location for Star Wars!' },
  { name: 'Turkey', timezone: 'Europe/Istanbul', cities: ['Istanbul', 'Ankara', 'Izmir'], flag: '🇹🇷', offset: 3, population: 87685426, landArea: 769630, density: 114, animal: 'Grey Wolf', bird: 'N/A', food: 'Kebap', currency: 'Turkish Lira (₺)', independence: 'October 29, 1923', founder: 'Mustafa Kemal Atatürk', funFact: 'Turkey is the only country spanning two continents and Istanbul has been capital of three empires!' },
  { name: 'Turkmenistan', timezone: 'Asia/Ashgabat', cities: ['Ashgabat', 'Türkmenabat', 'Daşoguz'], flag: '🇹🇲', offset: 5, population: 7618847, landArea: 469930, density: 16, animal: 'Akhal-Teke Horse', bird: 'N/A', food: 'Palaw', currency: 'Turkmenistan Manat (m)', independence: 'October 27, 1991', founder: 'Saparmurat Niyazov', funFact: 'Turkmenistan has the "Door to Hell" — a burning natural gas crater that has been on fire since 1971!' },
  { name: 'Tuvalu', timezone: 'Pacific/Funafuti', cities: ['Funafuti', 'Vaiaku'], flag: '🇹🇻', offset: 12, population: 9492, landArea: 30, density: 316, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Australian Dollar ($)', independence: 'October 1, 1978', founder: 'Toaripi Lauti', funFact: 'Tuvalu is the 4th smallest country, threatened by rising seas, and earns income from the .tv internet domain!' },
  { name: 'Uganda', timezone: 'Africa/Kampala', cities: ['Kampala', 'Gulu', 'Lira'], flag: '🇺🇬', offset: 3, population: 51384894, landArea: 199810, density: 257, animal: 'Uganda Kob', bird: 'Grey Crowned Crane', food: 'Matoke', currency: 'Ugandan Shilling (Sh)', independence: 'October 9, 1962', founder: 'Milton Obote', funFact: 'Uganda is the "Pearl of Africa" with mountain gorillas in Bwindi and the source of the Nile!' },
  { name: 'Ukraine', timezone: 'Europe/Kiev', cities: ['Kyiv', 'Kharkiv', 'Odesa'], flag: '🇺🇦', offset: 2, population: 38980376, landArea: 579320, density: 67, animal: 'Nightingale', bird: 'Nightingale', food: 'Borscht', currency: 'Ukrainian Hryvnia (₴)', independence: 'August 24, 1991', founder: 'Leonid Kravchuk', funFact: "Ukraine is Europe's largest country and has 7 UNESCO World Heritage sites, from Kyiv's golden domes to ancient Crimea!" },
  { name: 'United Arab Emirates', timezone: 'Asia/Dubai', cities: ['Dubai', 'Abu Dhabi', 'Sharjah'], flag: '🇦🇪', offset: 4, population: 11346000, landArea: 83600, density: 136, animal: 'Arabian Oryx', bird: 'N/A', food: 'Harees', currency: 'UAE Dirham (د.إ)', independence: 'December 2, 1971', founder: 'Sheikh Zayed bin Sultan', funFact: "UAE has the Burj Khalifa — the world's tallest building at 828m — and 89% of residents are expatriates!" },
  { name: 'United Kingdom', timezone: 'Europe/London', cities: ['London', 'Manchester', 'Edinburgh'], flag: '🇬🇧', offset: 0, population: 69551332, landArea: 241930, density: 287, animal: 'Lion', bird: 'European Robin', food: 'Fish and Chips', currency: 'British Pound (£)', independence: 'Acts of Union 1707', founder: 'Alfred the Great (Anglo-Saxon)', funFact: 'UK invented the World Wide Web, the telephone, and the steam engine — and has no point more than 113km from the sea!' },
  { name: 'United States', timezone: 'America/New_York', cities: ['New York', 'Los Angeles', 'Chicago'], flag: '🇺🇸', offset: -5, population: 347275807, landArea: 9147420, density: 38, animal: 'Bald Eagle', bird: 'Bald Eagle', food: 'Hamburger', currency: 'US Dollar ($)', independence: 'July 4, 1776', founder: 'George Washington', funFact: "USA has 63 national parks, landed on the Moon 6 times, and invented the internet, airplane, and iPhone!" },
  { name: 'Uruguay', timezone: 'America/Montevideo', cities: ['Montevideo', 'Salto', 'Paysandú'], flag: '🇺🇾', offset: -3, population: 3384688, landArea: 175020, density: 19, animal: 'N/A', bird: 'Rufous Hornero', food: 'Chivito', currency: 'Uruguayan Peso ($)', independence: 'August 25, 1825', founder: 'José Gervasio Artigas', funFact: 'Uruguay was the first country to legalize marijuana nationally, has 95% renewable energy, and free education!' },
  { name: 'Uzbekistan', timezone: 'Asia/Tashkent', cities: ['Tashkent', 'Samarkand', 'Bukhara'], flag: '🇺🇿', offset: 5, population: 37053428, landArea: 425400, density: 87, animal: 'Snow Leopard', bird: 'N/A', food: 'Plov', currency: "Uzbekistani Som (so'm)", independence: 'September 1, 1991', founder: 'Islam Karimov', funFact: 'Uzbekistan has the ancient Silk Road cities of Samarkand and Bukhara — jewels of medieval Islamic architecture!' },
  { name: 'Vanuatu', timezone: 'Pacific/Efate', cities: ['Port Vila', 'Luganville'], flag: '🇻🇺', offset: 11, population: 335169, landArea: 12190, density: 27, animal: 'N/A', bird: 'N/A', food: 'Laplap', currency: 'Vanuatu Vatu (Vt)', independence: 'July 30, 1980', founder: 'Walter Lini', funFact: "Vanuatu invented land diving — the original bungee jumping — as a ritual and the country speaks 113 languages!" },
  { name: 'Venezuela', timezone: 'America/Caracas', cities: ['Caracas', 'Maracaibo', 'Valencia'], flag: '🇻🇪', offset: -4, population: 28516896, landArea: 882050, density: 32, animal: 'Jaguar', bird: 'Venezuelan Troupial', food: 'Arepas', currency: 'Venezuelan Bolívar (Bs.)', independence: 'July 5, 1811', founder: 'Simón Bolívar', funFact: "Venezuela has Angel Falls — the world's highest waterfall at 979 meters, nearly 20 times higher than Niagara!" },
  { name: 'Vietnam', timezone: 'Asia/Ho_Chi_Minh', cities: ['Ho Chi Minh City', 'Hanoi', 'Da Nang'], flag: '🇻🇳', offset: 7, population: 101598527, landArea: 310070, density: 328, animal: 'Water Buffalo', bird: 'N/A', food: 'Pho', currency: 'Vietnamese Dong (₫)', independence: 'September 2, 1945', founder: 'Ho Chi Minh', funFact: "Vietnam has Ha Long Bay with 1,600 limestone islands, and Vietnamese is the 15th most spoken language globally!" },
  { name: 'Yemen', timezone: 'Asia/Aden', cities: ["Sana'a", 'Aden', 'Taiz'], flag: '🇾🇪', offset: 3, population: 41773878, landArea: 527970, density: 79, animal: 'N/A', bird: 'N/A', food: 'Saltah', currency: 'Yemeni Rial (﷼)', independence: 'November 30, 1967', founder: 'Ali Saleh al-Sallal', funFact: "Yemen has Socotra Island with alien-looking dragon blood trees — 37% of its plants exist nowhere else on Earth!" },
  { name: 'Zambia', timezone: 'Africa/Lusaka', cities: ['Lusaka', 'Kitwe', 'Ndola'], flag: '🇿🇲', offset: 2, population: 21913874, landArea: 743390, density: 29, animal: 'African Fish Eagle', bird: 'African Fish Eagle', food: 'Nshima', currency: 'Zambian Kwacha (ZK)', independence: 'October 24, 1964', founder: 'Kenneth Kaunda', funFact: "Zambia has Victoria Falls — the world's largest curtain of falling water and one of the Seven Natural Wonders!" },
  { name: 'Zimbabwe', timezone: 'Africa/Harare', cities: ['Harare', 'Bulawayo', 'Chitungwiza'], flag: '🇿🇼', offset: 2, population: 16950795, landArea: 386850, density: 44, animal: 'Sable Antelope', bird: 'N/A', food: 'Sadza', currency: 'Zimbabwean Dollar ($)', independence: 'April 18, 1980', founder: 'Robert Mugabe', funFact: 'Zimbabwe has the Great Zimbabwe ruins (stone city built 900 years ago) and shares the majestic Victoria Falls!' },
];

// ===== UTILITY FUNCTIONS =====

function formatNumber(num) {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + 'B';
  if (num >= 1_000_000)     return (num / 1_000_000).toFixed(1) + 'M';
  if (num >= 1_000)         return (num / 1_000).toFixed(1) + 'K';
  return num.toLocaleString();
}

function getFlagUrl(code) {
  return `https://flagcdn.com/w80/${(code || '').toLowerCase()}.png`;
}

function getCurrentTime(timezone) {
  try {
    const now = new Date();
    const opts = { timeZone: timezone };
    const time = now.toLocaleTimeString('en-US', { ...opts, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString('en-US', { ...opts, weekday: 'short', month: 'short', day: 'numeric' });
    const hour = parseInt(now.toLocaleTimeString('en-US', { ...opts, hour: '2-digit', hour12: false }), 10);
    return { time, date, isDaytime: hour >= 6 && hour < 18 };
  } catch {
    return { time: '--:--:--', date: '---', isDaytime: true };
  }
}

function getAllCities(countriesArr) {
  return countriesArr.flatMap(c => c.cities.map(city => ({ city, country: c })));
}

function filterCountries(searchTerm) {
  if (!searchTerm) return countries;
  const t = searchTerm.toLowerCase();
  return countries.filter(c =>
    c.name.toLowerCase().includes(t) ||
    c.cities.some(city => city.toLowerCase().includes(t))
  );
}

function filterCities(allCities, searchTerm) {
  if (!searchTerm) return allCities;
  const t = searchTerm.toLowerCase();
  return allCities.filter(({ city, country }) =>
    city.toLowerCase().includes(t) ||
    country.name.toLowerCase().includes(t)
  );
}

// ===== SVG ICONS =====
const icons = {
  users:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="m16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  map:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
  activity:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  mapPin:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  info:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>',
  sparkles:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  clock:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  building:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></svg>',
  star:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  sun:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  bookOpen:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  award:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  bird:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/></svg>',
  utensils:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>',
  pawPrint:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><circle cx="9" cy="10" r="2"/><circle cx="15" cy="14" r="2"/><path d="M9 18h-.5a3.5 3.5 0 0 1 0-7h.5"/><path d="M15 18h.5a3.5 3.5 0 0 0 0-7h-.5"/></svg>',
  trendingUp:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
  globe:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>'
};

// ===== CARD BUILDERS =====

function createCountryCard(country) {
  const td = getCurrentTime(country.timezone);
  const code = countryCodeMap[country.name];
  const flagUrl = getFlagUrl(code);

  const card = document.createElement('div');
  card.className = 'card';
  card.addEventListener('click', () => openModal(country));

  const offsetStr = country.offset > 0 ? `+${country.offset}` : `${country.offset}`;

  // Truncate fun fact for card
  const shortFact = country.funFact.length > 100
    ? country.funFact.slice(0, 97) + '…'
    : country.funFact;

  card.innerHTML = `
    <div class="card-top-bar"></div>
    <div class="card-content">
      <div class="card-header">
        <div class="card-header-left">
          <div class="flag-container">
            <img src="${flagUrl}" alt="${country.name}" class="flag-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <span class="flag-emoji" style="display:none;">${country.flag}</span>
          </div>
          <div class="country-name-wrap">
            <h3 class="country-name">${country.name}</h3>
            <span class="timezone-badge">UTC ${offsetStr} · ${country.timezone.split('/').pop().replace('_',' ')}</span>
          </div>
        </div>
        <div class="time-icon ${td.isDaytime ? 'sun-icon' : 'moon-icon'}">${icons[td.isDaytime ? 'sun' : 'moon']}</div>
      </div>

      <div class="time-display">
        <div class="time-text" data-timezone="${country.timezone}">${td.time}</div>
        <div class="date-text">${td.date}</div>
      </div>

      <div class="stats-grid">
        <div class="stat-box blue">
          <div class="stat-icon">${icons.users}</div>
          <div class="stat-value">${formatNumber(country.population)}</div>
        </div>
        <div class="stat-box green">
          <div class="stat-icon">${icons.map}</div>
          <div class="stat-value">${formatNumber(country.landArea)}</div>
        </div>
        <div class="stat-box purple">
          <div class="stat-icon">${icons.activity}</div>
          <div class="stat-value">${country.density}/km²</div>
        </div>
      </div>

      <div class="cities-section">
        <div class="cities-label">${icons.mapPin} Top Cities</div>
        <div class="cities-badges">
          ${country.cities.slice(0, 3).map(c => `<span class="city-badge">${c}</span>`).join('')}
        </div>
      </div>

      <div class="card-info-strip">
        ${country.currency ? `<div class="info-row"><span class="info-label">Currency</span><span class="info-value">${country.currency}</span></div>` : ''}
        ${country.food && country.food !== 'N/A' ? `<div class="info-row"><span class="info-label">Nat. Dish</span><span class="info-value">${country.food}</span></div>` : ''}
        <div class="fun-fact-mini">💡 ${shortFact}</div>
      </div>

      <div class="learn-more">
        ${icons.info}<span>Learn More!</span>${icons.chevronRight}
      </div>
    </div>
    <div class="sparkles-icon">${icons.sparkles}</div>
  `;
  return card;
}

function createCityCard(city, country) {
  const td = getCurrentTime(country.timezone);
  const code = countryCodeMap[country.name];
  const flagUrl = getFlagUrl(code);
  const offsetStr = country.offset > 0 ? `+${country.offset}` : `${country.offset}`;

  const card = document.createElement('div');
  card.className = 'city-card';

  const shortFact = country.funFact.length > 90
    ? country.funFact.slice(0, 87) + '…'
    : country.funFact;

  card.innerHTML = `
    <div class="city-top-bar"></div>
    <div class="card-content" style="padding-top:1.75rem;">
      <div class="card-header">
        <div class="card-header-left">
          <div class="city-icon-wrapper">${icons.building}</div>
          <div class="country-name-wrap">
            <h3 class="city-name">${city}</h3>
            <div class="city-country-info">
              <img src="${flagUrl}" alt="${country.name}"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
              <span class="flag-emoji" style="display:none;font-size:1rem;">${country.flag}</span>
              <span class="city-country-name">${country.name}</span>
            </div>
          </div>
        </div>
        <div class="time-icon ${td.isDaytime ? 'sun-icon' : 'moon-icon'}">${icons[td.isDaytime ? 'sun' : 'moon']}</div>
      </div>

      <div class="time-display">
        <div style="display:flex;align-items:center;justify-content:center;gap:0.4rem;margin-bottom:0.4rem;">
          <div style="width:1rem;height:1rem;">${icons.clock}</div>
          <span style="font-size:0.6rem;font-weight:900;text-transform:uppercase;letter-spacing:0.05em;">Local Time</span>
        </div>
        <div class="time-text" data-timezone="${country.timezone}">${td.time}</div>
        <div class="date-text">${td.date}</div>
      </div>

      <div class="city-tz-info">
        <div class="city-tz-pill violet">
          <div class="pill-label">UTC Offset</div>
          <div class="pill-value">UTC ${offsetStr}</div>
        </div>
        <div class="city-tz-pill pink">
          <div class="pill-label">Timezone</div>
          <div class="pill-value">${country.timezone.split('/').pop().replace('_',' ')}</div>
        </div>
      </div>

      ${country.currency ? `
      <div class="city-tz-info" style="margin-top:0.4rem;">
        <div class="city-tz-pill violet" style="grid-column:1/-1;">
          <div class="pill-label">Currency</div>
          <div class="pill-value">${country.currency}</div>
        </div>
      </div>` : ''}

      <p class="city-fun-fact">💡 ${shortFact}</p>
    </div>
    <div class="star-icon">${icons.star}</div>
  `;
  return card;
}

// ===== MODAL =====

function createModalContent(country) {
  const td = getCurrentTime(country.timezone);
  const code = countryCodeMap[country.name];
  const flagUrl = getFlagUrl(code);
  const offsetStr = country.offset > 0 ? `+${country.offset}` : `${country.offset}`;

  const infoItems = [
    country.currency  ? { cls:'yellow',  icon:'pawPrint', label:'Currency',          val: country.currency }  : null,
    country.animal    ? { cls:'orange',  icon:'pawPrint', label:'National Animal',    val: country.animal }    : null,
    country.bird && country.bird !== 'N/A'
                      ? { cls:'sky',     icon:'bird',     label:'National Bird',      val: country.bird }      : null,
    country.food && country.food !== 'N/A'
                      ? { cls:'red',     icon:'utensils', label:'National Dish',      val: country.food }      : null,
    country.independence ? { cls:'teal', icon:'star',     label:'Independence Day',   val: country.independence }: null,
    country.founder   ? { cls:'violet', icon:'users',    label:'Key Founder',        val: country.founder }   : null,
  ].filter(Boolean);

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-body-inner">
      <div class="modal-flag-section">
        <div class="modal-flags-row">
          <img src="${flagUrl}" alt="${country.name}" class="modal-flag-img"
            onerror="this.style.display='none';">
          <span class="modal-flag-emoji">${country.flag}</span>
        </div>
        <h2 class="modal-country-title">${country.name}</h2>
        <span class="timezone-badge" style="font-size:0.875rem;padding:0.5rem 1rem;">UTC ${offsetStr}</span>
      </div>

      <div class="modal-time-block">
        <div class="modal-time-label">
          <div class="modal-time-label-icon">${icons.clock}</div>
          <span class="modal-time-label-text">Current Time</span>
          <div class="time-icon ${td.isDaytime ? 'sun-icon' : 'moon-icon'}" style="width:1.5rem;height:1.5rem;">
            ${icons[td.isDaytime ? 'sun' : 'moon']}
          </div>
        </div>
        <div class="modal-time-text" data-timezone="${country.timezone}">${td.time}</div>
        <div class="modal-time-date">${td.date}</div>
      </div>

      <div class="modal-pop-block">
        <div class="modal-pop-title-row">
          <div class="modal-pop-icon">${icons.users}</div>
          <h3 class="modal-pop-title">🔴 LIVE POPULATION</h3>
        </div>
        <div class="modal-pop-number-row">
          <span class="live-population" data-initial="${country.population}">${country.population.toLocaleString()}</span>
          <div class="modal-pop-trend-icon">${icons.trendingUp}</div>
        </div>
        <div class="modal-pop-live-badge">
          <div class="live-dot"></div>
          <span>Real-time updates every second!</span>
        </div>
      </div>

      <div class="modal-stats-row">
        <div class="modal-stat-box blue">
          <div class="modal-stat-icon">${icons.users}</div>
          <div class="modal-stat-value">${formatNumber(country.population)}</div>
          <div class="modal-stat-label">Population</div>
        </div>
        <div class="modal-stat-box green">
          <div class="modal-stat-icon">${icons.map}</div>
          <div class="modal-stat-value">${formatNumber(country.landArea)}</div>
          <div class="modal-stat-label">Area (km²)</div>
        </div>
        <div class="modal-stat-box purple">
          <div class="modal-stat-icon">${icons.activity}</div>
          <div class="modal-stat-value">${country.density}</div>
          <div class="modal-stat-label">Density/km²</div>
        </div>
      </div>

      <div class="modal-funfact">
        <div class="modal-funfact-title">
          <div class="modal-funfact-icon">${icons.bookOpen}</div>
          <h3 class="modal-funfact-heading">Did You Know?</h3>
        </div>
        <p class="modal-funfact-text">${country.funFact}</p>
      </div>

      <div>
        <h3 class="modal-symbols-title">
          <div class="modal-symbols-title-icon">${icons.award}</div>
          National Symbols &amp; History
        </h3>
        ${infoItems.map(item => `
          <div class="modal-info-item ${item.cls}">
            <div class="modal-info-icon-wrap">${icons[item.icon]}</div>
            <div>
              <div class="modal-info-text-label">${item.label}</div>
              <div class="modal-info-text-value">${item.val}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="modal-cities-block">
        <div class="modal-cities-title">
          <div class="modal-cities-icon">${icons.mapPin}</div>
          <h3 class="modal-cities-heading">Major Cities</h3>
        </div>
        <div class="modal-cities-list">
          ${country.cities.map(c => `<span class="modal-city-tag">${c}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  startLivePopulation();
}

// ===== APP STATE =====
let allCities = [];
let livePopInterval = null;
let timeInterval = null;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  allCities = getAllCities(countries);
  renderCountries(countries);
  renderCities(allCities);
  updateCounts(countries.length, allCities.length);
  setupListeners();
  startTimeUpdates();
});

// ===== LISTENERS =====
function setupListeners() {
  document.getElementById('searchInput').addEventListener('input', handleSearch);

  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });

  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

  // Close modal on ESC
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ===== SEARCH =====
function handleSearch(e) {
  const term = e.target.value;
  const fc = filterCountries(term);
  const ff = filterCities(allCities, term);
  renderCountries(fc);
  renderCities(ff);
  updateCounts(fc.length, ff.length);
}

// ===== TAB SWITCH =====
function switchTab(tab) {
  document.querySelectorAll('.tab-button').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.toggle('active', c.id === tab + 'Tab'));
}

// ===== RENDER =====
function renderCountries(data) {
  const grid  = document.getElementById('countriesGrid');
  const empty = document.getElementById('countriesEmpty');
  grid.innerHTML = '';
  empty.style.display = data.length ? 'none' : 'block';
  data.forEach(c => grid.appendChild(createCountryCard(c)));
}

function renderCities(data) {
  const grid  = document.getElementById('citiesGrid');
  const empty = document.getElementById('citiesEmpty');
  grid.innerHTML = '';
  empty.style.display = data.length ? 'none' : 'block';
  data.forEach(({ city, country }) => grid.appendChild(createCityCard(city, country)));
}

function updateCounts(c, ci) {
  document.getElementById('countriesCount').textContent = c;
  document.getElementById('citiesCount').textContent = ci;
}

// ===== MODAL =====
function openModal(country) {
  createModalContent(country);
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  // Scroll modal to top
  const content = overlay.querySelector('.modal-content');
  if (content) content.scrollTop = 0;
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  if (livePopInterval) { clearInterval(livePopInterval); livePopInterval = null; }
}

// ===== LIVE POPULATION =====
function startLivePopulation() {
  const el = document.querySelector('.live-population');
  if (!el) return;

  let pop = parseInt(el.dataset.initial, 10);
  const rate = 0.00000025 * pop; // world birth rate approximation

  livePopInterval = setInterval(() => {
    pop += rate;
    el.textContent = Math.floor(pop).toLocaleString();
  }, 1000);
}

// ===== LIVE TIME =====
function startTimeUpdates() {
  timeInterval = setInterval(() => {
    document.querySelectorAll('[data-timezone]').forEach(el => {
      const td = getCurrentTime(el.dataset.timezone);
      el.textContent = td.time;
    });
  }, 1000);
}

// ===== CLEANUP =====
window.addEventListener('beforeunload', () => {
  clearInterval(livePopInterval);
  clearInterval(timeInterval);
});
