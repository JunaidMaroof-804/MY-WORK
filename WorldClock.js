const countryCodeMap = {
  'Afghanistan': 'af', 'Albania': 'al', 'Algeria': 'dz', 'Andorra': 'ad', 'Angola': 'ao',
  'Antigua and Barbuda': 'ag', 'Argentina': 'ar', 'Armenia': 'am', 'Australia': 'au', 'Austria': 'at',
  'Azerbaijan': 'az', 'Bahamas': 'bs', 'Bahrain': 'bh', 'Bangladesh': 'bd', 'Barbados': 'bb',
  'Belarus': 'by', 'Belgium': 'be', 'Belize': 'bz', 'Benin': 'bj', 'Bhutan': 'bt',
  'Bolivia': 'bo', 'Bosnia and Herzegovina': 'ba', 'Botswana': 'bw', 'Brazil': 'br', 'Brunei': 'bn',
  'Bulgaria': 'bg', 'Burkina Faso': 'bf', 'Burundi': 'bi', 'Cabo Verde': 'cv', 'Cambodia': 'kh',
  'Cameroon': 'cm', 'Canada': 'ca', 'Central African Republic': 'cf', 'Chad': 'td', 'Chile': 'cl',
  'China': 'cn', 'Colombia': 'co', 'Comoros': 'km', 'Congo': 'cg', 'Costa Rica': 'cr',
  'Côte d\'Ivoire': 'ci', 'Croatia': 'hr', 'Cuba': 'cu', 'Cyprus': 'cy', 'Czechia': 'cz',
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

const countries = [
  { name: 'Afghanistan', timezone: 'Asia/Kabul', cities: ['Kabul', 'Kandahar', 'Herat'], flag: '🇦🇫', offset: 4.5, population: 43844111, landArea: 652860, density: 67, animal: 'Snow Leopard', bird: 'Golden Eagle', food: 'Kabuli Pulao', currency: 'Afghan Afghani (؋)', independence: 'August 19, 1919', founder: 'Ahmad Shah Durrani', funFact: 'Afghanistan has a unique time zone: UTC+4:30, one of only two countries with a 30-minute offset!' },
  { name: 'Albania', timezone: 'Europe/Tirane', cities: ['Tirana', 'Durrës', 'Vlorë'], flag: '🇦🇱', offset: 1, population: 2771508, landArea: 27400, density: 101, animal: 'Golden Eagle', bird: 'Golden Eagle', food: 'Tavë Kosi', currency: 'Albanian Lek (L)', independence: 'November 28, 1912', founder: 'Ismail Qemali', funFact: 'Albania has over 750,000 bunkers built during the communist era!' },
  { name: 'Algeria', timezone: 'Africa/Algiers', cities: ['Algiers', 'Oran', 'Constantine'], flag: '🇩🇿', offset: 1, population: 47435312, landArea: 2381740, density: 20, animal: 'Fennec Fox', bird: 'N/A', food: 'Couscous', currency: 'Algerian Dinar (د.ج)', independence: 'July 5, 1962', founder: 'Ahmed Ben Bella', funFact: 'Algeria is the largest country in Africa, covering 2.4 million km²!' },
  { name: 'Andorra', timezone: 'Europe/Andorra', cities: ['Andorra la Vella', 'Escaldes-Engordany'], flag: '🇦🇩', offset: 1, population: 82904, landArea: 470, density: 176, animal: 'Pyrenean Chamois', bird: 'N/A', food: 'Escudella', currency: 'Euro (€)', independence: '1278 (Co-principality)', founder: 'Charlemagne (legendary)', funFact: 'Andorra has no airport or railway station but has over 300 sunny days per year!' },
  { name: 'Angola', timezone: 'Africa/Luanda', cities: ['Luanda', 'Huambo', 'Lobito'], flag: '🇦🇴', offset: 1, population: 39040039, landArea: 1246700, density: 31, animal: 'Giant Sable Antelope', bird: 'N/A', food: 'Moamba de galinha', currency: 'Angolan Kwanza (Kz)', independence: 'November 11, 1975', founder: 'Agostinho Neto', funFact: 'Angola is home to the endangered Giant Sable Antelope, found nowhere else on Earth!' },
  { name: 'Antigua and Barbuda', timezone: 'America/Antigua', cities: ['St. John\'s', 'All Saints'], flag: '🇦🇬', offset: -4, population: 94209, landArea: 440, density: 214, animal: 'Fallow Deer', bird: 'Magnificent Frigatebird', food: 'Fungee and Pepperpot', currency: 'East Caribbean Dollar ($)', independence: 'November 1, 1981', founder: 'Vere Bird', funFact: 'Antigua is said to have 365 beaches - one for each day of the year!' },
  { name: 'Argentina', timezone: 'America/Argentina/Buenos_Aires', cities: ['Buenos Aires', 'Córdoba', 'Rosario'], flag: '🇦🇷', offset: -3, population: 45851378, landArea: 2736690, density: 17, animal: 'Jaguar', bird: 'Rufous Hornero', food: 'Asado', currency: 'Argentine Peso ($)', independence: 'July 9, 1816', founder: 'José de San Martín', funFact: 'Argentina invented the tango and is home to the world\'s widest avenue, 9 de Julio!' },
  { name: 'Armenia', timezone: 'Asia/Yerevan', cities: ['Yerevan', 'Gyumri', 'Vanadzor'], flag: '🇦🇲', offset: 4, population: 2952365, landArea: 28470, density: 104, animal: 'Armenian Mouflon', bird: 'N/A', food: 'Khorovats', currency: 'Armenian Dram (֏)', independence: 'September 21, 1991', founder: 'Levon Ter-Petrosyan', funFact: 'Armenia was the first nation to officially adopt Christianity as state religion in 301 AD!' },
  { name: 'Australia', timezone: 'Australia/Sydney', cities: ['Sydney', 'Melbourne', 'Brisbane'], flag: '🇦🇺', offset: 11, population: 26974026, landArea: 7682300, density: 4, animal: 'Kangaroo', bird: 'Emu', food: 'Meat Pie', currency: 'Australian Dollar ($)', independence: 'January 1, 1901', founder: 'Sir Edmund Barton', funFact: 'Australia has 10,685 beaches - you could visit a new beach every day for 29 years!' },
  { name: 'Austria', timezone: 'Europe/Vienna', cities: ['Vienna', 'Graz', 'Linz'], flag: '🇦🇹', offset: 1, population: 9113574, landArea: 82409, density: 111, animal: 'Alpine Ibex', bird: 'Barn Swallow', food: 'Wiener Schnitzel', currency: 'Euro (€)', independence: 'November 12, 1918', founder: 'Karl Renner', funFact: 'Vienna was rated the world\'s most liveable city and is the birthplace of Mozart!' },
  { name: 'Azerbaijan', timezone: 'Asia/Baku', cities: ['Baku', 'Ganja', 'Sumqayit'], flag: '🇦🇿', offset: 4, population: 10397713, landArea: 82658, density: 126, animal: 'Karabakh Horse', bird: 'N/A', food: 'Plov', currency: 'Azerbaijani Manat (₼)', independence: 'October 18, 1991', founder: 'Heydar Aliyev', funFact: 'Azerbaijan is called the "Land of Fire" due to its natural gas fires!' },
  { name: 'Bahamas', timezone: 'America/Nassau', cities: ['Nassau', 'Freeport', 'West End'], flag: '🇧🇸', offset: -5, population: 403033, landArea: 10010, density: 40, animal: 'Flamingo', bird: 'N/A', food: 'Conch', currency: 'Bahamian Dollar ($)', independence: 'July 10, 1973', founder: 'Lynden Pindling', funFact: 'The Bahamas has the world\'s third-largest barrier reef system!' },
  { name: 'Bahrain', timezone: 'Asia/Bahrain', cities: ['Manama', 'Riffa', 'Muharraq'], flag: '🇧🇭', offset: 3, population: 1643332, landArea: 760, density: 2162, animal: 'Arabian Oryx', bird: 'N/A', food: 'Machboos', currency: 'Bahraini Dinar (BD)', independence: 'August 15, 1971', founder: 'Sheikh Isa bin Salman', funFact: 'Bahrain was the first Gulf state to discover oil in 1932!' },
  { name: 'Bangladesh', timezone: 'Asia/Dhaka', cities: ['Dhaka', 'Chittagong', 'Khulna'], flag: '🇧🇩', offset: 6, population: 175686899, landArea: 130170, density: 1350, animal: 'Bengal Tiger', bird: 'Magpie Robin', food: 'Panta bhat', currency: 'Bangladeshi Taka (৳)', independence: 'March 26, 1971', founder: 'Sheikh Mujibur Rahman', funFact: 'Bangladesh has the world\'s largest river delta - the Ganges Delta!' },
  { name: 'Barbados', timezone: 'America/Barbados', cities: ['Bridgetown', 'Speightstown'], flag: '🇧🇧', offset: -4, population: 282623, landArea: 430, density: 657, animal: 'Green Monkey', bird: 'N/A', food: 'Cou-cou and flying fish', currency: 'Barbadian Dollar ($)', independence: 'November 30, 1966', founder: 'Errol Barrow', funFact: 'Barbados is birthplace of pop star Rihanna and has beautiful pink sand beaches!' },
  { name: 'Belarus', timezone: 'Europe/Minsk', cities: ['Minsk', 'Gomel', 'Mogilev'], flag: '🇧🇾', offset: 3, population: 8997603, landArea: 202910, density: 44, animal: 'European Bison', bird: 'White Stork', food: 'Draniki', currency: 'Belarusian Ruble (Br)', independence: 'August 25, 1991', founder: 'Stanislav Shushkevich', funFact: 'Belarus means "White Russia" and has the largest primeval forest in Europe!' },
  { name: 'Belgium', timezone: 'Europe/Brussels', cities: ['Brussels', 'Antwerp', 'Ghent'], flag: '🇧🇪', offset: 1, population: 11758603, landArea: 30280, density: 388, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Moules-frites', currency: 'Euro (€)', independence: 'October 4, 1830', founder: 'Leopold I', funFact: 'Belgium produces 220,000 tons of chocolate per year - that\'s 22 kg per person!' },
  { name: 'Belize', timezone: 'America/Belize', cities: ['Belize City', 'San Ignacio', 'Orange Walk'], flag: '🇧🇿', offset: -6, population: 422924, landArea: 22810, density: 19, animal: 'Tapir', bird: 'Keel-billed Toucan', food: 'Rice and Beans', currency: 'Belize Dollar ($)', independence: 'September 21, 1981', founder: 'George Cadle Price', funFact: 'Belize has the famous Great Blue Hole, a 300-meter wide underwater sinkhole!' },
  { name: 'Benin', timezone: 'Africa/Porto-Novo', cities: ['Porto-Novo', 'Cotonou', 'Parakou'], flag: '🇧🇯', offset: 1, population: 14814460, landArea: 112760, density: 131, animal: 'Leopard', bird: 'N/A', food: 'Kuli-kuli', currency: 'West African CFA franc (Fr)', independence: 'August 1, 1960', founder: 'Hubert Maga', funFact: 'Benin was the birthplace of Voodoo religion and has amazing stilt villages!' },
  { name: 'Bhutan', timezone: 'Asia/Thimphu', cities: ['Thimphu', 'Phuntsholing', 'Paro'], flag: '🇧🇹', offset: 6, population: 796682, landArea: 38117, density: 21, animal: 'Takin', bird: 'Raven', food: 'Ema Datshi', currency: 'Bhutanese Ngultrum (Nu.)', independence: '1907 (Monarchy)', founder: 'Ugyen Wangchuck', funFact: 'Bhutan measures Gross National Happiness instead of GDP and has no traffic lights!' },
  { name: 'Bolivia', timezone: 'America/La_Paz', cities: ['La Paz', 'Santa Cruz', 'Cochabamba'], flag: '🇧🇴', offset: -4, population: 12581843, landArea: 1083300, density: 12, animal: 'Llama', bird: 'Andean Condor', food: 'Salteñas', currency: 'Bolivian Boliviano (Bs.)', independence: 'August 6, 1825', founder: 'Simón Bolívar', funFact: 'Bolivia has the world\'s largest salt flat - the stunning Salar de Uyuni!' },
  { name: 'Bosnia and Herzegovina', timezone: 'Europe/Sarajevo', cities: ['Sarajevo', 'Banja Luka', 'Tuzla'], flag: '🇧🇦', offset: 1, population: 3140095, landArea: 51000, density: 62, animal: 'Brown Bear', bird: 'N/A', food: 'Ćevapi', currency: 'Bosnia Mark (KM)', independence: 'March 1, 1992', founder: 'Alija Izetbegović', funFact: 'Sarajevo hosted the 1984 Winter Olympics and has a 500-year-old bridge!' },
  { name: 'Botswana', timezone: 'Africa/Gaborone', cities: ['Gaborone', 'Francistown', 'Molepolole'], flag: '🇧🇼', offset: 2, population: 2562122, landArea: 566730, density: 5, animal: 'Zebra', bird: 'N/A', food: 'Seswaa', currency: 'Botswana Pula (P)', independence: 'September 30, 1966', founder: 'Seretse Khama', funFact: 'Botswana has the world\'s largest elephant population and the Okavango Delta!' },
  { name: 'Brazil', timezone: 'America/Sao_Paulo', cities: ['São Paulo', 'Rio de Janeiro', 'Brasília'], flag: '🇧🇷', offset: -3, population: 212812405, landArea: 8358140, density: 25, animal: 'Jaguar', bird: 'Rufous-bellied Thrush', food: 'Feijoada', currency: 'Brazilian Real (R$)', independence: 'September 7, 1822', founder: 'Dom Pedro I', funFact: 'Brazil has won the FIFA World Cup 5 times and hosts the largest carnival celebration!' },
  { name: 'Brunei', timezone: 'Asia/Brunei', cities: ['Bandar Seri Begawan', 'Kuala Belait'], flag: '🇧🇳', offset: 8, population: 466330, landArea: 5270, density: 88, animal: 'Proboscis Monkey', bird: 'N/A', food: 'Ambuyat', currency: 'Brunei Dollar ($)', independence: 'January 1, 1984', founder: 'Sultan Hassanal Bolkiah', funFact: 'Brunei\'s Sultan has one of the world\'s largest car collections with over 7,000 vehicles!' },
  { name: 'Bulgaria', timezone: 'Europe/Sofia', cities: ['Sofia', 'Plovdiv', 'Varna'], flag: '🇧🇬', offset: 2, population: 6714560, landArea: 108560, density: 62, animal: 'Lion', bird: 'N/A', food: 'Banitsa', currency: 'Bulgarian Lev (лв)', independence: 'March 3, 1878', founder: 'Vasil Levski', funFact: 'Bulgaria invented the Cyrillic alphabet and produces 70% of world\'s rose oil!' },
  { name: 'Burkina Faso', timezone: 'Africa/Ouagadougou', cities: ['Ouagadougou', 'Bobo-Dioulasso'], flag: '🇧🇫', offset: 0, population: 24074580, landArea: 273600, density: 88, animal: 'Horse', bird: 'N/A', food: 'Tô', currency: 'West African CFA franc (Fr)', independence: 'August 5, 1960', founder: 'Maurice Yaméogo', funFact: 'Burkina Faso means "Land of Honest People" in local languages!' },
  { name: 'Burundi', timezone: 'Africa/Bujumbura', cities: ['Gitega', 'Bujumbura', 'Muyinga'], flag: '🇧🇮', offset: 2, population: 14390003, landArea: 25680, density: 560, animal: 'Leopard', bird: 'N/A', food: 'Ugali', currency: 'Burundian Franc (Fr)', independence: 'July 1, 1962', founder: 'Mwami Mwambutsa IV', funFact: 'Burundi has Lake Tanganyika, the world\'s second deepest and longest freshwater lake!' },
  { name: 'Cabo Verde', timezone: 'Atlantic/Cape_Verde', cities: ['Praia', 'Mindelo', 'Santa Maria'], flag: '🇨🇻', offset: -1, population: 527326, landArea: 4030, density: 131, animal: 'N/A', bird: 'N/A', food: 'Cachupa', currency: 'Cape Verdean Escudo ($)', independence: 'July 5, 1975', founder: 'Amílcar Cabral', funFact: 'Cape Verde is made up of 10 volcanic islands and is famous for its music!' },
  { name: 'Cambodia', timezone: 'Asia/Phnom_Penh', cities: ['Phnom Penh', 'Siem Reap', 'Battambang'], flag: '🇰🇭', offset: 7, population: 17847982, landArea: 176520, density: 101, animal: 'Kouprey', bird: 'Giant Ibis', food: 'Amok trey', currency: 'Cambodian Riel (៛)', independence: 'November 9, 1953', founder: 'Norodom Sihanouk', funFact: 'Cambodia has the magnificent Angkor Wat, the largest religious monument in the world!' },
  { name: 'Cameroon', timezone: 'Africa/Douala', cities: ['Yaoundé', 'Douala', 'Garoua'], flag: '🇨🇲', offset: 1, population: 29879337, landArea: 472710, density: 63, animal: 'Lion', bird: 'N/A', food: 'Ndolé', currency: 'Central African CFA franc (Fr)', independence: 'January 1, 1960', founder: 'Ahmadou Ahidjo', funFact: 'Cameroon is called "Africa in Miniature" for its geological and cultural diversity!' },
  { name: 'Canada', timezone: 'America/Toronto', cities: ['Toronto', 'Vancouver', 'Montreal'], flag: '🇨🇦', offset: -5, population: 40126723, landArea: 9093510, density: 4, animal: 'Beaver', bird: 'Canada Jay', food: 'Poutine', currency: 'Canadian Dollar ($)', independence: 'July 1, 1867', founder: 'John A. Macdonald', funFact: 'Canada has more lakes than all other countries combined - over 2 million lakes!' },
  { name: 'Central African Republic', timezone: 'Africa/Bangui', cities: ['Bangui', 'Bimbo', 'Berbérati'], flag: '🇨🇫', offset: 1, population: 5513282, landArea: 622980, density: 9, animal: 'Lion (heraldic)', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 13, 1960', founder: 'David Dacko', funFact: 'This landlocked country has dense rainforests and diverse wildlife!' },
  { name: 'Chad', timezone: 'Africa/Ndjamena', cities: ['N\'Djamena', 'Moundou', 'Sarh'], flag: '🇹🇩', offset: 1, population: 21003705, landArea: 1259200, density: 17, animal: 'Goat', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 11, 1960', founder: 'François Tombalbaye', funFact: 'Chad\'s Lake Chad was once the sixth largest lake in the world!' },
  { name: 'Chile', timezone: 'America/Santiago', cities: ['Santiago', 'Valparaíso', 'Concepción'], flag: '🇨🇱', offset: -3, population: 19859921, landArea: 743532, density: 27, animal: 'Andean Huemul', bird: 'Andean Condor', food: 'Empanada', currency: 'Chilean Peso ($)', independence: 'September 18, 1810', founder: 'Bernardo O\'Higgins', funFact: 'Chile is the longest north-south country in the world, stretching 4,300 km!' },
  { name: 'China', timezone: 'Asia/Shanghai', cities: ['Shanghai', 'Beijing', 'Shenzhen'], flag: '🇨🇳', offset: 8, population: 1416096094, landArea: 9388211, density: 151, animal: 'Giant Panda', bird: 'Red-crowned Crane', food: 'Peking Duck', currency: 'Chinese Yuan (¥)', independence: 'October 1, 1949', founder: 'Mao Zedong', funFact: 'China has only one time zone despite being wider than the United States!' },
  { name: 'Colombia', timezone: 'America/Bogota', cities: ['Bogotá', 'Medellín', 'Cali'], flag: '🇨🇴', offset: -5, population: 53425635, landArea: 1109500, density: 48, animal: 'Andean Condor', bird: 'Andean Condor', food: 'Bandeja Paisa', currency: 'Colombian Peso ($)', independence: 'July 20, 1810', founder: 'Simón Bolívar', funFact: 'Colombia is the world\'s leading source of emeralds and has 60 national parks!' },
  { name: 'Comoros', timezone: 'Indian/Comoro', cities: ['Moroni', 'Mutsamudu', 'Fomboni'], flag: '🇰🇲', offset: 3, population: 882847, landArea: 1861, density: 474, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Comorian Franc (Fr)', independence: 'July 6, 1975', founder: 'Ahmed Abdallah', funFact: 'Comoros is a volcanic archipelago known as the "Perfume Islands"!' },
  { name: 'Congo', timezone: 'Africa/Brazzaville', cities: ['Brazzaville', 'Pointe-Noire'], flag: '🇨🇬', offset: 1, population: 6484437, landArea: 341500, density: 19, animal: 'Chimpanzee', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 15, 1960', founder: 'Fulbert Youlou', funFact: 'Congo has the second-largest tropical rainforest after the Amazon!' },
  { name: 'Costa Rica', timezone: 'America/Costa_Rica', cities: ['San José', 'Limón', 'Alajuela'], flag: '🇨🇷', offset: -6, population: 5152950, landArea: 51060, density: 101, animal: 'White-tailed Deer', bird: 'Clay-colored Thrush', food: 'Gallo Pinto', currency: 'Costa Rican Colón (₡)', independence: 'September 15, 1821', founder: 'Juan Mora Fernández', funFact: 'Costa Rica has no army and runs on 99% renewable energy!' },
  { name: 'Côte d\'Ivoire', timezone: 'Africa/Abidjan', cities: ['Abidjan', 'Bouaké', 'Yamoussoukro'], flag: '🇨🇮', offset: 0, population: 32711547, landArea: 318000, density: 103, animal: 'Elephant', bird: 'N/A', food: 'Attiéké', currency: 'West African CFA franc (Fr)', independence: 'August 7, 1960', founder: 'Félix Houphouët-Boigny', funFact: 'Ivory Coast is the world\'s top producer of cocoa beans!' },
  { name: 'Croatia', timezone: 'Europe/Zagreb', cities: ['Zagreb', 'Split', 'Rijeka'], flag: '🇭🇷', offset: 1, population: 3848160, landArea: 55960, density: 69, animal: 'Marten', bird: 'N/A', food: 'Peka', currency: 'Euro (€)', independence: 'June 25, 1991', founder: 'Franjo Tuđman', funFact: 'Croatia has 1,244 islands and invented the necktie (cravat)!' },
  { name: 'Cuba', timezone: 'America/Havana', cities: ['Havana', 'Santiago de Cuba', 'Camagüey'], flag: '🇨🇺', offset: -5, population: 10937203, landArea: 106440, density: 103, animal: 'Cuban Trogon', bird: 'Cuban Trogon', food: 'Ropa vieja', currency: 'Cuban Peso ($)', independence: 'May 20, 1902', founder: 'José Martí', funFact: 'Cuba has a 99.8% literacy rate and produces world-famous cigars!' },
  { name: 'Cyprus', timezone: 'Asia/Nicosia', cities: ['Nicosia', 'Limassol', 'Larnaca'], flag: '🇨🇾', offset: 2, population: 1370754, landArea: 9240, density: 148, animal: 'Mouflon', bird: 'N/A', food: 'Halloumi', currency: 'Euro (€)', independence: 'October 1, 1960', founder: 'Archbishop Makarios III', funFact: 'Cyprus is the birthplace of Aphrodite, Greek goddess of love!' },
  { name: 'Czechia', timezone: 'Europe/Prague', cities: ['Prague', 'Brno', 'Ostrava'], flag: '🇨🇿', offset: 1, population: 10609239, landArea: 77240, density: 137, animal: 'Two-tailed Lion (heraldic)', bird: 'N/A', food: 'Svíčková', currency: 'Czech Koruna (Kč)', independence: 'January 1, 1993', founder: 'Václav Havel', funFact: 'Czechs drink more beer per capita than any other nation - 143 liters per year!' },
  { name: 'DR Congo', timezone: 'Africa/Kinshasa', cities: ['Kinshasa', 'Lubumbashi', 'Goma'], flag: '🇨🇩', offset: 1, population: 112832473, landArea: 2267050, density: 50, animal: 'Okapi', bird: 'Congo Peafowl', food: 'Fufu', currency: 'Congolese Franc (Fr)', independence: 'June 30, 1960', founder: 'Patrice Lumumba', funFact: 'DR Congo has the world\'s deepest river - the Congo River reaches 220m deep!' },
  { name: 'Denmark', timezone: 'Europe/Copenhagen', cities: ['Copenhagen', 'Aarhus', 'Odense'], flag: '🇩🇰', offset: 1, population: 6002507, landArea: 42430, density: 141, animal: 'Swan', bird: 'N/A', food: 'Smørrebrød', currency: 'Danish Krone (kr)', independence: 'Ancient Kingdom', founder: 'Harald Bluetooth', funFact: 'Denmark is consistently ranked as the world\'s happiest country!' },
  { name: 'Djibouti', timezone: 'Africa/Djibouti', cities: ['Djibouti City', 'Ali Sabieh'], flag: '🇩🇯', offset: 3, population: 1184076, landArea: 23180, density: 51, animal: 'N/A', bird: 'N/A', food: 'Fah-fah', currency: 'Djiboutian Franc (Fr)', independence: 'June 27, 1977', founder: 'Hassan Gouled Aptidon', funFact: 'Djibouti has Lake Assal, the saltiest body of water in the world!' },
  { name: 'Dominica', timezone: 'America/Dominica', cities: ['Roseau', 'Portsmouth'], flag: '🇩🇲', offset: -4, population: 65871, landArea: 750, density: 88, animal: 'Sisserou Parrot', bird: 'Sisserou Parrot', food: 'Callaloo Soup', currency: 'East Caribbean Dollar ($)', independence: 'November 3, 1978', founder: 'Patrick John', funFact: 'Dominica is the "Nature Island" with 365 rivers and boiling lakes!' },
  { name: 'Dominican Republic', timezone: 'America/Santo_Domingo', cities: ['Santo Domingo', 'Santiago', 'La Romana'], flag: '🇩🇴', offset: -4, population: 11520487, landArea: 48320, density: 238, animal: 'Palmchat', bird: 'Palmchat', food: 'La Bandera', currency: 'Dominican Peso ($)', independence: 'February 27, 1844', founder: 'Juan Pablo Duarte', funFact: 'The Dominican Republic has the oldest European settlement in the Americas!' },
  { name: 'Ecuador', timezone: 'America/Guayaquil', cities: ['Quito', 'Guayaquil', 'Cuenca'], flag: '🇪🇨', offset: -5, population: 18289896, landArea: 248360, density: 74, animal: 'Andean Condor', bird: 'Andean Condor', food: 'Ceviche', currency: 'US Dollar ($)', independence: 'May 24, 1822', founder: 'Simón Bolívar', funFact: 'Ecuador is named after the equator and the Galápagos Islands are here!' },
  { name: 'Egypt', timezone: 'Africa/Cairo', cities: ['Cairo', 'Alexandria', 'Giza'], flag: '🇪🇬', offset: 2, population: 118365995, landArea: 995450, density: 119, animal: 'Egyptian Eagle', bird: 'N/A', food: 'Koshary', currency: 'Egyptian Pound (£)', independence: 'February 28, 1922', founder: 'Gamal Abdel Nasser', funFact: 'Egypt has pyramids older than 4,500 years and the Nile, world\'s longest river!' },
  { name: 'El Salvador', timezone: 'America/El_Salvador', cities: ['San Salvador', 'Santa Ana', 'San Miguel'], flag: '🇸🇻', offset: -6, population: 6365503, landArea: 20720, density: 307, animal: 'N/A', bird: 'Turquoise-browed Motmot', food: 'Pupusas', currency: 'US Dollar ($)', independence: 'September 15, 1821', founder: 'José Matías Delgado', funFact: 'El Salvador is the smallest Central American country but has over 20 volcanoes!' },
  { name: 'Equatorial Guinea', timezone: 'Africa/Malabo', cities: ['Malabo', 'Bata', 'Ebebiyin'], flag: '🇬🇶', offset: 1, population: 1938431, landArea: 28050, density: 69, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'October 12, 1968', founder: 'Francisco Macías Nguema', funFact: 'The capital Malabo is on an island, not the mainland!' },
  { name: 'Eritrea', timezone: 'Africa/Asmara', cities: ['Asmara', 'Keren', 'Massawa'], flag: '🇪🇷', offset: 3, population: 3607003, landArea: 101000, density: 36, animal: 'N/A', bird: 'N/A', food: 'Zigni', currency: 'Eritrean Nakfa (Nfk)', independence: 'May 24, 1993', founder: 'Isaias Afwerki', funFact: 'Eritrea has an Italian-influenced capital with Art Deco architecture!' },
  { name: 'Estonia', timezone: 'Europe/Tallinn', cities: ['Tallinn', 'Tartu', 'Narva'], flag: '🇪🇪', offset: 2, population: 1344232, landArea: 42390, density: 32, animal: 'Wolf', bird: 'Barn Swallow', food: 'Verivorst', currency: 'Euro (€)', independence: 'February 24, 1918', founder: 'Konstantin Päts', funFact: 'Estonia has over 2,000 islands and invented Skype!' },
  { name: 'Eswatini', timezone: 'Africa/Mbabane', cities: ['Mbabane', 'Manzini', 'Lobamba'], flag: '🇸🇿', offset: 2, population: 1256174, landArea: 17200, density: 73, animal: 'Lion', bird: 'N/A', food: 'Sishwala', currency: 'Swazi Lilangeni (L)', independence: 'September 6, 1968', founder: 'King Sobhuza II', funFact: 'Eswatini (Swaziland) is Africa\'s last absolute monarchy!' },
  { name: 'Ethiopia', timezone: 'Africa/Addis_Ababa', cities: ['Addis Ababa', 'Dire Dawa', 'Mekelle'], flag: '🇪🇹', offset: 3, population: 135472051, landArea: 1000000, density: 135, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Injera', currency: 'Ethiopian Birr (Br)', independence: 'Ancient (Never colonized)', founder: 'Menelik II', funFact: 'Ethiopia has its own calendar and uses a 12-hour time system starting at sunrise!' },
  { name: 'Fiji', timezone: 'Pacific/Fiji', cities: ['Suva', 'Lautoka', 'Nadi'], flag: '🇫🇯', offset: 12, population: 933154, landArea: 18270, density: 51, animal: 'N/A', bird: 'N/A', food: 'Lovo', currency: 'Fijian Dollar ($)', independence: 'October 10, 1970', founder: 'Ratu Sir Kamisese Mara', funFact: 'Fiji has over 300 islands and is known as the "Soft Coral Capital of the World"!' },
  { name: 'Finland', timezone: 'Europe/Helsinki', cities: ['Helsinki', 'Espoo', 'Tampere'], flag: '🇫🇮', offset: 2, population: 5623329, landArea: 303890, density: 19, animal: 'Brown Bear', bird: 'Whooper Swan', food: 'Karjalanpiirakka', currency: 'Euro (€)', independence: 'December 6, 1917', founder: 'C. G. E. Mannerheim', funFact: 'Finland has 188,000 lakes and is home to Santa Claus in Lapland!' },
  { name: 'France', timezone: 'Europe/Paris', cities: ['Paris', 'Lyon', 'Marseille'], flag: '🇫🇷', offset: 1, population: 66650804, landArea: 547557, density: 122, animal: 'Gallic Rooster', bird: 'N/A', food: 'Pot-au-feu', currency: 'Euro (€)', independence: 'July 14, 1789 (Republic)', founder: 'Napoleon Bonaparte', funFact: 'France is the most visited country in the world with over 89 million tourists per year!' },
  { name: 'Gabon', timezone: 'Africa/Libreville', cities: ['Libreville', 'Port-Gentil', 'Franceville'], flag: '🇬🇦', offset: 1, population: 2593130, landArea: 257670, density: 10, animal: 'Black Panther', bird: 'N/A', food: 'N/A', currency: 'Central African CFA franc (Fr)', independence: 'August 17, 1960', founder: 'Léon M\'ba', funFact: 'Gabon is 88% covered by rainforest and has surfing hippos!' },
  { name: 'Gambia', timezone: 'Africa/Banjul', cities: ['Banjul', 'Serekunda', 'Brikama'], flag: '🇬🇲', offset: 0, population: 2822093, landArea: 10120, density: 279, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Domoda', currency: 'Gambian Dalasi (D)', independence: 'February 18, 1965', founder: 'Dawda Jawara', funFact: 'The Gambia is Africa\'s smallest mainland country, surrounded by Senegal!' },
  { name: 'Georgia', timezone: 'Asia/Tbilisi', cities: ['Tbilisi', 'Batumi', 'Kutaisi'], flag: '🇬🇪', offset: 4, population: 3806671, landArea: 69490, density: 55, animal: 'Wolf', bird: 'N/A', food: 'Khachapuri', currency: 'Georgian Lari (₾)', independence: 'April 9, 1991', founder: 'Zviad Gamsakhurdia', funFact: 'Georgia has 8,000 years of winemaking history - the oldest in the world!' },
  { name: 'Germany', timezone: 'Europe/Berlin', cities: ['Berlin', 'Munich', 'Hamburg'], flag: '🇩🇪', offset: 1, population: 84075075, landArea: 348560, density: 241, animal: 'Eagle (heraldic)', bird: 'N/A', food: 'Sauerbraten', currency: 'Euro (€)', independence: 'October 3, 1990 (Reunification)', founder: 'Konrad Adenauer', funFact: 'Germany has over 1,500 varieties of beer and 20,000 castles!' },
  { name: 'Ghana', timezone: 'Africa/Accra', cities: ['Accra', 'Kumasi', 'Tamale'], flag: '🇬🇭', offset: 0, population: 35064272, landArea: 227540, density: 154, animal: 'Eagle', bird: 'N/A', food: 'Fufu', currency: 'Ghanaian Cedi (₵)', independence: 'March 6, 1957', founder: 'Kwame Nkrumah', funFact: 'Ghana was the first Sub-Saharan African nation to gain independence!' },
  { name: 'Greece', timezone: 'Europe/Athens', cities: ['Athens', 'Thessaloniki', 'Patras'], flag: '🇬🇷', offset: 2, population: 9938844, landArea: 128900, density: 77, animal: 'Dolphin', bird: 'N/A', food: 'Moussaka', currency: 'Euro (€)', independence: 'March 25, 1821', founder: 'Theodoros Kolokotronis', funFact: 'Greece has more than 6,000 islands and invented democracy and the Olympics!' },
  { name: 'Grenada', timezone: 'America/Grenada', cities: ['St. George\'s', 'Gouyave'], flag: '🇬🇩', offset: -4, population: 117303, landArea: 340, density: 345, animal: 'N/A', bird: 'N/A', food: 'Oil Down', currency: 'East Caribbean Dollar ($)', independence: 'February 7, 1974', founder: 'Eric Gairy', funFact: 'Grenada is the "Spice Isle" producing 20% of the world\'s nutmeg!' },
  { name: 'Guatemala', timezone: 'America/Guatemala', cities: ['Guatemala City', 'Mixco', 'Quetzaltenango'], flag: '🇬🇹', offset: -6, population: 18687881, landArea: 107160, density: 174, animal: 'Quetzal', bird: 'Resplendent Quetzal', food: 'Fiambre', currency: 'Guatemalan Quetzal (Q)', independence: 'September 15, 1821', founder: 'José María Orellana', funFact: 'Guatemala has 37 volcanoes and the ancient Mayan city of Tikal!' },
  { name: 'Guinea', timezone: 'Africa/Conakry', cities: ['Conakry', 'Nzérékoré', 'Kankan'], flag: '🇬🇳', offset: 0, population: 15099727, landArea: 245720, density: 61, animal: 'Lion (heraldic)', bird: 'N/A', food: 'N/A', currency: 'Guinean Franc (Fr)', independence: 'October 2, 1958', founder: 'Ahmed Sékou Touré', funFact: 'Guinea has over 25% of the world\'s bauxite reserves (aluminum ore)!' },
  { name: 'Guinea-Bissau', timezone: 'Africa/Bissau', cities: ['Bissau', 'Bafatá', 'Gabú'], flag: '🇬🇼', offset: 0, population: 2249515, landArea: 28120, density: 80, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'West African CFA franc (Fr)', independence: 'September 24, 1973', founder: 'Amílcar Cabral', funFact: 'Guinea-Bissau has the Bijagós archipelago with 88 islands!' },
  { name: 'Guyana', timezone: 'America/Guyana', cities: ['Georgetown', 'Linden', 'New Amsterdam'], flag: '🇬🇾', offset: -4, population: 835986, landArea: 196850, density: 4, animal: 'Jaguar', bird: 'Hoatzin', food: 'Pepperpot', currency: 'Guyanese Dollar ($)', independence: 'May 26, 1966', founder: 'Cheddi Jagan', funFact: 'Guyana has Kaieteur Falls, one of the world\'s most powerful waterfalls!' },
  { name: 'Haiti', timezone: 'America/Port-au-Prince', cities: ['Port-au-Prince', 'Cap-Haïtien', 'Gonaïves'], flag: '🇭🇹', offset: -5, population: 11906095, landArea: 27560, density: 432, animal: 'N/A', bird: 'N/A', food: 'Soup Joumou', currency: 'Haitian Gourde (G)', independence: 'January 1, 1804', founder: 'Jean-Jacques Dessalines', funFact: 'Haiti was the first black republic and second independent nation in the Americas!' },
  { name: 'Holy See', timezone: 'Europe/Vatican', cities: ['Vatican City'], flag: '🇻🇦', offset: 1, population: 501, landArea: 0, density: 1253, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Euro (€)', independence: 'February 11, 1929', founder: 'Pope Pius XI', funFact: 'Vatican City is the smallest country at 0.44 km² with its own post office!' },
  { name: 'Honduras', timezone: 'America/Tegucigalpa', cities: ['Tegucigalpa', 'San Pedro Sula', 'La Ceiba'], flag: '🇭🇳', offset: -6, population: 11005850, landArea: 111890, density: 98, animal: 'White-tailed Deer', bird: 'Emerald Toucanet', food: 'Baleada', currency: 'Honduran Lempira (L)', independence: 'September 15, 1821', founder: 'Francisco Morazán', funFact: 'Honduras has the amazing Copán Mayan ruins and stunning Bay Islands!' },
  { name: 'Hungary', timezone: 'Europe/Budapest', cities: ['Budapest', 'Debrecen', 'Szeged'], flag: '🇭🇺', offset: 1, population: 9632287, landArea: 90530, density: 106, animal: 'Turul (mythical falcon)', bird: 'N/A', food: 'Goulash', currency: 'Hungarian Forint (Ft)', independence: 'October 23, 1989', founder: 'Stephen I (first king)', funFact: 'Hungary has won more Olympic medals per capita than any other nation!' },
  { name: 'Iceland', timezone: 'Atlantic/Reykjavik', cities: ['Reykjavík', 'Kópavogur', 'Hafnarfjörður'], flag: '🇮🇸', offset: 0, population: 398266, landArea: 100250, density: 4, animal: 'Icelandic Horse', bird: 'Gyrfalcon', food: 'Hákarl', currency: 'Icelandic Króna (kr)', independence: 'June 17, 1944', founder: 'Sveinn Björnsson', funFact: 'Iceland has no mosquitoes and runs entirely on renewable energy!' },
  { name: 'India', timezone: 'Asia/Kolkata', cities: ['Mumbai', 'Delhi', 'Bangalore'], flag: '🇮🇳', offset: 5.5, population: 1463865525, landArea: 2973190, density: 492, animal: 'Bengal Tiger', bird: 'Indian Peafowl', food: 'Biryani', currency: 'Indian Rupee (₹)', independence: 'August 15, 1947', founder: 'Mahatma Gandhi', funFact: 'India is the world\'s largest democracy and invented chess and yoga!' },
  { name: 'Indonesia', timezone: 'Asia/Jakarta', cities: ['Jakarta', 'Surabaya', 'Bandung'], flag: '🇮🇩', offset: 7, population: 285721236, landArea: 1811570, density: 158, animal: 'Komodo Dragon', bird: 'Javan Hawk-Eagle', food: 'Nasi Goreng', currency: 'Indonesian Rupiah (Rp)', independence: 'August 17, 1945', founder: 'Sukarno', funFact: 'Indonesia has 17,000+ islands and more volcanoes than any other country!' },
  { name: 'Iran', timezone: 'Asia/Tehran', cities: ['Tehran', 'Mashhad', 'Isfahan'], flag: '🇮🇷', offset: 3.5, population: 92417681, landArea: 1628550, density: 57, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Chelow Kebab', currency: 'Iranian Rial (﷼)', independence: 'April 1, 1979 (Islamic Republic)', founder: 'Ayatollah Khomeini', funFact: 'Iran has 23 UNESCO World Heritage sites and invented ice cream 2,000 years ago!' },
  { name: 'Iraq', timezone: 'Asia/Baghdad', cities: ['Baghdad', 'Basra', 'Mosul'], flag: '🇮🇶', offset: 3, population: 47020774, landArea: 434320, density: 108, animal: 'Goat', bird: 'N/A', food: 'Masgouf', currency: 'Iraqi Dinar (ع.د)', independence: 'October 3, 1932', founder: 'Faisal I', funFact: 'Iraq is home to ancient Mesopotamia, the "Cradle of Civilization"!' },
  { name: 'Ireland', timezone: 'Europe/Dublin', cities: ['Dublin', 'Cork', 'Limerick'], flag: '🇮🇪', offset: 0, population: 5308039, landArea: 68890, density: 77, animal: 'Irish Wolfhound', bird: 'N/A', food: 'Irish Stew', currency: 'Euro (€)', independence: 'December 6, 1921', founder: 'Michael Collins', funFact: 'Ireland has no snakes - St. Patrick allegedly drove them out!' },
  { name: 'Israel', timezone: 'Asia/Jerusalem', cities: ['Jerusalem', 'Tel Aviv', 'Haifa'], flag: '🇮🇱', offset: 2, population: 9517181, landArea: 21640, density: 440, animal: 'Gazelle', bird: 'Hoopoe', food: 'Falafel', currency: 'Israeli Shekel (₪)', independence: 'May 14, 1948', founder: 'David Ben-Gurion', funFact: 'Israel has the Dead Sea, the lowest point on Earth at 430m below sea level!' },
  { name: 'Italy', timezone: 'Europe/Rome', cities: ['Rome', 'Milan', 'Naples'], flag: '🇮🇹', offset: 1, population: 59146260, landArea: 294140, density: 201, animal: 'Italian Wolf', bird: 'N/A', food: 'Pasta', currency: 'Euro (€)', independence: 'March 17, 1861', founder: 'Giuseppe Garibaldi', funFact: 'Italy has more UNESCO World Heritage sites than any other country - 58 sites!' },
  { name: 'Jamaica', timezone: 'America/Jamaica', cities: ['Kingston', 'Montego Bay', 'Spanish Town'], flag: '🇯🇲', offset: -5, population: 2837077, landArea: 10830, density: 262, animal: 'Swallow-tail Butterfly', bird: 'Red-billed Streamertail', food: 'Ackee and Saltfish', currency: 'Jamaican Dollar ($)', independence: 'August 6, 1962', founder: 'Alexander Bustamante', funFact: 'Jamaica gave the world reggae music and Usain Bolt, the fastest man alive!' },
  { name: 'Japan', timezone: 'Asia/Tokyo', cities: ['Tokyo', 'Osaka', 'Kyoto'], flag: '🇯🇵', offset: 9, population: 123103479, landArea: 364555, density: 338, animal: 'Green Pheasant', bird: 'Green Pheasant', food: 'Sushi', currency: 'Japanese Yen (¥)', independence: 'February 11, 660 BC (Legendary)', founder: 'Emperor Jimmu', funFact: 'Japan has over 6,800 islands and more than 3,000 McDonald\'s restaurants!' },
  { name: 'Jordan', timezone: 'Asia/Amman', cities: ['Amman', 'Zarqa', 'Irbid'], flag: '🇯🇴', offset: 2, population: 11520684, landArea: 88780, density: 130, animal: 'Arabian Oryx', bird: 'N/A', food: 'Mansaf', currency: 'Jordanian Dinar (د.ا)', independence: 'May 25, 1946', founder: 'Abdullah I', funFact: 'Jordan has Petra, one of the New Seven Wonders of the World!' },
  { name: 'Kazakhstan', timezone: 'Asia/Almaty', cities: ['Almaty', 'Astana', 'Shymkent'], flag: '🇰🇿', offset: 6, population: 20843754, landArea: 2699700, density: 8, animal: 'Golden Eagle', bird: 'Golden Eagle', food: 'Beshbarmak', currency: 'Kazakhstani Tenge (₸)', independence: 'December 16, 1991', founder: 'Nursultan Nazarbayev', funFact: 'Kazakhstan is the world\'s largest landlocked country and launched Sputnik!' },
  { name: 'Kenya', timezone: 'Africa/Nairobi', cities: ['Nairobi', 'Mombasa', 'Kisumu'], flag: '🇰🇪', offset: 3, population: 57532493, landArea: 569140, density: 101, animal: 'Lion', bird: 'N/A', food: 'Ugali', currency: 'Kenyan Shilling (Sh)', independence: 'December 12, 1963', founder: 'Jomo Kenyatta', funFact: 'Kenya is home to the Great Migration and the Maasai Mara!' },
  { name: 'Kiribati', timezone: 'Pacific/Tarawa', cities: ['South Tarawa', 'Betio'], flag: '🇰🇮', offset: 12, population: 136488, landArea: 810, density: 169, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Australian Dollar ($)', independence: 'July 12, 1979', founder: 'Ieremia Tabai', funFact: 'Kiribati is the first country to see the sunrise each day!' },
  { name: 'Kuwait', timezone: 'Asia/Kuwait', cities: ['Kuwait City', 'Al Ahmadi', 'Hawalli'], flag: '🇰🇼', offset: 3, population: 5026078, landArea: 17820, density: 282, animal: 'Arabian Camel', bird: 'N/A', food: 'Machboos', currency: 'Kuwaiti Dinar (د.ك)', independence: 'June 19, 1961', founder: 'Sheikh Abdullah Al-Salim', funFact: 'Kuwait has the world\'s sixth largest oil reserves!' },
  { name: 'Kyrgyzstan', timezone: 'Asia/Bishkek', cities: ['Bishkek', 'Osh', 'Jalal-Abad'], flag: '🇰🇬', offset: 6, population: 7295034, landArea: 191800, density: 38, animal: 'Snow Leopard', bird: 'N/A', food: 'Beshbarmak', currency: 'Kyrgyzstani Som (с)', independence: 'August 31, 1991', founder: 'Askar Akayev', funFact: 'Kyrgyzstan is 90% mountainous with stunning alpine lakes!' },
  { name: 'Laos', timezone: 'Asia/Vientiane', cities: ['Vientiane', 'Pakse', 'Savannakhet'], flag: '🇱🇦', offset: 7, population: 7873046, landArea: 230800, density: 34, animal: 'Elephant', bird: 'N/A', food: 'Larbs', currency: 'Lao Kip (₭)', independence: 'October 22, 1953', founder: 'Souphanouvong', funFact: 'Laos is the most bombed country per capita in history!' },
  { name: 'Latvia', timezone: 'Europe/Riga', cities: ['Riga', 'Daugavpils', 'Liepāja'], flag: '🇱🇻', offset: 2, population: 1853559, landArea: 62200, density: 30, animal: 'Roebuck', bird: 'White Wagtail', food: 'Grey Peas with Bacon', currency: 'Euro (€)', independence: 'November 18, 1918', founder: 'Kārlis Ulmanis', funFact: 'Latvia has the widest waterfall in Europe - Ventas Rumba at 270m!' },
  { name: 'Lebanon', timezone: 'Asia/Beirut', cities: ['Beirut', 'Tripoli', 'Sidon'], flag: '🇱🇧', offset: 2, population: 5849421, landArea: 10230, density: 572, animal: 'Striped Hyena', bird: 'N/A', food: 'Kibbeh', currency: 'Lebanese Pound (ل.ل)', independence: 'November 22, 1943', founder: 'Bechara El Khoury', funFact: 'Lebanon has the oldest continuously inhabited city - Byblos, 7,000 years old!' },
  { name: 'Lesotho', timezone: 'Africa/Maseru', cities: ['Maseru', 'Teyateyaneng', 'Mafeteng'], flag: '🇱🇸', offset: 2, population: 2363325, landArea: 30360, density: 78, animal: 'Black Rhinoceros', bird: 'N/A', food: 'Pap-pap', currency: 'Lesotho Loti (L)', independence: 'October 4, 1966', founder: 'Moshoeshoe I', funFact: 'Lesotho is the only country entirely above 1,000m elevation!' },
  { name: 'Liberia', timezone: 'Africa/Monrovia', cities: ['Monrovia', 'Gbarnga', 'Kakata'], flag: '🇱🇷', offset: 0, population: 5731206, landArea: 96320, density: 60, animal: 'Leopard', bird: 'N/A', food: 'N/A', currency: 'Liberian Dollar ($)', independence: 'July 26, 1847', founder: 'Joseph Jenkins Roberts', funFact: 'Liberia was founded by freed American slaves in 1847!' },
  { name: 'Libya', timezone: 'Africa/Tripoli', cities: ['Tripoli', 'Benghazi', 'Misrata'], flag: '🇱🇾', offset: 2, population: 7458555, landArea: 1759540, density: 4, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Bazeen', currency: 'Libyan Dinar (ل.د)', independence: 'December 24, 1951', founder: 'Idris I', funFact: 'Libya is 90% desert and has some of the best-preserved Roman ruins!' },
  { name: 'Liechtenstein', timezone: 'Europe/Vaduz', cities: ['Vaduz', 'Schaan', 'Balzers'], flag: '🇱🇮', offset: 1, population: 40128, landArea: 160, density: 251, animal: 'N/A', bird: 'N/A', food: 'Käsknöpfle', currency: 'Swiss Franc (Fr)', independence: 'January 23, 1719', founder: 'Prince Johann Adam', funFact: 'Liechtenstein is the world\'s sixth smallest country and has no army!' },
  { name: 'Lithuania', timezone: 'Europe/Vilnius', cities: ['Vilnius', 'Kaunas', 'Klaipėda'], flag: '🇱🇹', offset: 2, population: 2830144, landArea: 62674, density: 45, animal: 'White Stork', bird: 'White Stork', food: 'Cepelinai', currency: 'Euro (€)', independence: 'February 16, 1918', founder: 'Jonas Basanavičius', funFact: 'Lithuania has the fastest free public WiFi in the world!' },
  { name: 'Luxembourg', timezone: 'Europe/Luxembourg', cities: ['Luxembourg City', 'Esch-sur-Alzette'], flag: '🇱🇺', offset: 1, population: 680453, landArea: 2590, density: 263, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Judd mat Gaardebounen', currency: 'Euro (€)', independence: 'October 24, 1868', founder: 'William I', funFact: 'Luxembourg has the highest minimum wage in the EU!' },
  { name: 'Madagascar', timezone: 'Indian/Antananarivo', cities: ['Antananarivo', 'Toamasina', 'Antsirabe'], flag: '🇲🇬', offset: 3, population: 32740678, landArea: 581795, density: 56, animal: 'Lemur', bird: 'N/A', food: 'Romazava', currency: 'Malagasy Ariary (Ar)', independence: 'June 26, 1960', founder: 'Philibert Tsiranana', funFact: 'Madagascar has unique wildlife - 90% of its species exist nowhere else!' },
  { name: 'Malawi', timezone: 'Africa/Blantyre', cities: ['Lilongwe', 'Blantyre', 'Mzuzu'], flag: '🇲🇼', offset: 2, population: 22216120, landArea: 94280, density: 236, animal: 'N/A', bird: 'N/A', food: 'Nsima', currency: 'Malawian Kwacha (MK)', independence: 'July 6, 1964', founder: 'Hastings Banda', funFact: 'Malawi has Lake Malawi with more fish species than any other lake!' },
  { name: 'Malaysia', timezone: 'Asia/Kuala_Lumpur', cities: ['Kuala Lumpur', 'George Town', 'Johor Bahru'], flag: '🇲🇾', offset: 8, population: 35977838, landArea: 328550, density: 110, animal: 'Malayan Tiger', bird: 'Rhinoceros Hornbill', food: 'Nasi Lemak', currency: 'Malaysian Ringgit (RM)', independence: 'August 31, 1957', founder: 'Tunku Abdul Rahman', funFact: 'Malaysia has the world\'s oldest rainforest at 130 million years old!' },
  { name: 'Maldives', timezone: 'Indian/Maldives', cities: ['Malé', 'Addu City', 'Fuvahmulah'], flag: '🇲🇻', offset: 5, population: 529676, landArea: 300, density: 1766, animal: 'N/A', bird: 'N/A', food: 'Garudhiya', currency: 'Maldivian Rufiyaa (Rf)', independence: 'July 26, 1965', founder: 'Ibrahim Nasir', funFact: 'Maldives is the flattest country with average ground level of 1.5m!' },
  { name: 'Mali', timezone: 'Africa/Bamako', cities: ['Bamako', 'Sikasso', 'Mopti'], flag: '🇲🇱', offset: 0, population: 25198821, landArea: 1220190, density: 21, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Tô', currency: 'West African CFA franc (Fr)', independence: 'September 22, 1960', founder: 'Modibo Keïta', funFact: 'Mali was home to the ancient empire of Timbuktu, center of learning!' },
  { name: 'Malta', timezone: 'Europe/Malta', cities: ['Valletta', 'Birkirkara', 'Mosta'], flag: '🇲🇹', offset: 1, population: 545405, landArea: 320, density: 1704, animal: 'Pharaoh Hound', bird: 'Blue Rock Thrush', food: 'Fenkata', currency: 'Euro (€)', independence: 'September 21, 1964', founder: 'George Borg Olivier', funFact: 'Malta has megalithic temples older than Stonehenge and the Pyramids!' },
  { name: 'Marshall Islands', timezone: 'Pacific/Majuro', cities: ['Majuro', 'Ebeye'], flag: '🇲🇭', offset: 12, population: 36282, landArea: 180, density: 202, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'October 21, 1986', founder: 'Amata Kabua', funFact: 'Marshall Islands has 29 atolls and 5 islands in the Pacific!' },
  { name: 'Mauritania', timezone: 'Africa/Nouakchott', cities: ['Nouakchott', 'Nouadhibou', 'Kiffa'], flag: '🇲🇷', offset: 0, population: 5315065, landArea: 1030700, density: 5, animal: 'N/A', bird: 'N/A', food: 'Thieboudienne', currency: 'Mauritanian Ouguiya (UM)', independence: 'November 28, 1960', founder: 'Moktar Ould Daddah', funFact: 'Mauritania has an ancient "Eye of Africa" geological formation!' },
  { name: 'Mauritius', timezone: 'Indian/Mauritius', cities: ['Port Louis', 'Beau Bassin-Rose Hill'], flag: '🇲🇺', offset: 4, population: 1268280, landArea: 2030, density: 625, animal: 'Dodo (extinct)', bird: 'N/A', food: 'Dholl Puri', currency: 'Mauritian Rupee (₨)', independence: 'March 12, 1968', founder: 'Seewoosagur Ramgoolam', funFact: 'Mauritius was the only home of the extinct Dodo bird!' },
  { name: 'Mexico', timezone: 'America/Mexico_City', cities: ['Mexico City', 'Guadalajara', 'Monterrey'], flag: '🇲🇽', offset: -6, population: 131946900, landArea: 1943950, density: 68, animal: 'Golden Eagle', bird: 'Golden Eagle', food: 'Tacos', currency: 'Mexican Peso ($)', independence: 'September 16, 1810', founder: 'Miguel Hidalgo', funFact: 'Mexico has 35 UNESCO World Heritage sites and invented chocolate!' },
  { name: 'Micronesia', timezone: 'Pacific/Pohnpei', cities: ['Palikir', 'Weno', 'Kolonia'], flag: '🇫🇲', offset: 11, population: 113683, landArea: 700, density: 162, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'November 3, 1986', founder: 'Tosiwo Nakayama', funFact: 'Micronesia has ancient stone money up to 4m in diameter!' },
  { name: 'Moldova', timezone: 'Europe/Chisinau', cities: ['Chișinău', 'Tiraspol', 'Bălți'], flag: '🇲🇩', offset: 2, population: 2996106, landArea: 32850, density: 91, animal: 'Aurochs (heraldic)', bird: 'N/A', food: 'Mămăligă', currency: 'Moldovan Leu (L)', independence: 'August 27, 1991', founder: 'Mircea Snegur', funFact: 'Moldova has the world\'s largest wine cellar - 200km of underground tunnels!' },
  { name: 'Monaco', timezone: 'Europe/Monaco', cities: ['Monaco', 'Monte Carlo', 'La Condamine'], flag: '🇲🇨', offset: 1, population: 38341, landArea: 2, density: 25732, animal: 'N/A', bird: 'N/A', food: 'Barbagiuans', currency: 'Euro (€)', independence: 'January 8, 1297', founder: 'François Grimaldi', funFact: 'Monaco is the world\'s second smallest country and most densely populated!' },
  { name: 'Mongolia', timezone: 'Asia/Ulaanbaatar', cities: ['Ulaanbaatar', 'Erdenet', 'Darkhan'], flag: '🇲🇳', offset: 8, population: 3517100, landArea: 1553560, density: 2, animal: 'Horse', bird: 'N/A', food: 'Buuz', currency: 'Mongolian Tögrög (₮)', independence: 'December 29, 1911', founder: 'Bogd Khan', funFact: 'Mongolia has the lowest population density on Earth and the Gobi Desert!' },
  { name: 'Montenegro', timezone: 'Europe/Podgorica', cities: ['Podgorica', 'Nikšić', 'Pljevlja'], flag: '🇲🇪', offset: 1, population: 632729, landArea: 13450, density: 47, animal: 'Eagle (heraldic)', bird: 'N/A', food: 'Kačamak', currency: 'Euro (€)', independence: 'June 3, 2006', founder: 'Milo Đukanović', funFact: 'Montenegro means "Black Mountain" and has Europe\'s deepest canyon!' },
  { name: 'Morocco', timezone: 'Africa/Casablanca', cities: ['Casablanca', 'Rabat', 'Marrakech'], flag: '🇲🇦', offset: 1, population: 38430770, landArea: 446300, density: 86, animal: 'Barbary Lion', bird: 'N/A', food: 'Tagine', currency: 'Moroccan Dirham (د.م.)', independence: 'March 2, 1956', founder: 'Mohammed V', funFact: 'Morocco has the world\'s oldest university, founded in 859 AD!' },
  { name: 'Mozambique', timezone: 'Africa/Maputo', cities: ['Maputo', 'Matola', 'Beira'], flag: '🇲🇿', offset: 2, population: 35631653, landArea: 786380, density: 45, animal: 'N/A', bird: 'N/A', food: 'Piri-piri chicken', currency: 'Mozambican Metical (MT)', independence: 'June 25, 1975', founder: 'Samora Machel', funFact: 'Mozambique has the unique marimbas and makonde carvings!' },
  { name: 'Myanmar', timezone: 'Asia/Yangon', cities: ['Yangon', 'Mandalay', 'Naypyidaw'], flag: '🇲🇲', offset: 6.5, population: 54850648, landArea: 653290, density: 84, animal: 'Tiger', bird: 'N/A', food: 'Mohinga', currency: 'Myanmar Kyat (K)', independence: 'January 4, 1948', founder: 'Aung San', funFact: 'Myanmar has over 2,000 ancient temples in Bagan!' },
  { name: 'Namibia', timezone: 'Africa/Windhoek', cities: ['Windhoek', 'Swakopmund', 'Walvis Bay'], flag: '🇳🇦', offset: 2, population: 3092816, landArea: 823290, density: 4, animal: 'Oryx', bird: 'N/A', food: 'Kapana', currency: 'Namibian Dollar ($)', independence: 'March 21, 1990', founder: 'Sam Nujoma', funFact: 'Namibia has the world\'s oldest desert - the Namib Desert at 55 million years!' },
  { name: 'Nauru', timezone: 'Pacific/Nauru', cities: ['Yaren'], flag: '🇳🇷', offset: 12, population: 12025, landArea: 20, density: 601, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Australian Dollar ($)', independence: 'January 31, 1968', founder: 'Hammer DeRoburt', funFact: 'Nauru is the world\'s smallest island nation at just 21 km²!' },
  { name: 'Nepal', timezone: 'Asia/Kathmandu', cities: ['Kathmandu', 'Pokhara', 'Lalitpur'], flag: '🇳🇵', offset: 5.75, population: 29618118, landArea: 143350, density: 207, animal: 'Cow', bird: 'Lophophorus', food: 'Dal Bhat', currency: 'Nepalese Rupee (₨)', independence: '1768 (Unified)', founder: 'Prithvi Narayan Shah', funFact: 'Nepal has 8 of the world\'s 10 highest mountains including Mount Everest!' },
  { name: 'Netherlands', timezone: 'Europe/Amsterdam', cities: ['Amsterdam', 'Rotterdam', 'The Hague'], flag: '🇳🇱', offset: 1, population: 18346819, landArea: 33720, density: 544, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Stroopwafels', currency: 'Euro (€)', independence: 'July 26, 1581', founder: 'William of Orange', funFact: 'Netherlands has more bikes than people and invented the microscope!' },
  { name: 'New Zealand', timezone: 'Pacific/Auckland', cities: ['Auckland', 'Wellington', 'Christchurch'], flag: '🇳🇿', offset: 13, population: 5251899, landArea: 263310, density: 20, animal: 'Kiwi', bird: 'Kiwi', food: 'Hāngi', currency: 'New Zealand Dollar ($)', independence: 'September 26, 1907', founder: 'Richard Seddon', funFact: 'New Zealand was the first country to give women the right to vote in 1893!' },
  { name: 'Nicaragua', timezone: 'America/Managua', cities: ['Managua', 'León', 'Masaya'], flag: '🇳🇮', offset: -6, population: 7007502, landArea: 120340, density: 58, animal: 'N/A', bird: 'Guardabarranco', food: 'Gallo Pinto', currency: 'Nicaraguan Córdoba (C$)', independence: 'September 15, 1821', founder: 'José Santos Zelaya', funFact: 'Nicaragua has the largest lake in Central America with freshwater sharks!' },
  { name: 'Niger', timezone: 'Africa/Niamey', cities: ['Niamey', 'Zinder', 'Maradi'], flag: '🇳🇪', offset: 1, population: 27917831, landArea: 1266700, density: 22, animal: 'Giraffe', bird: 'N/A', food: 'N/A', currency: 'West African CFA franc (Fr)', independence: 'August 3, 1960', founder: 'Hamani Diori', funFact: 'Niger is 80% covered by the Sahara Desert!' },
  { name: 'Nigeria', timezone: 'Africa/Lagos', cities: ['Lagos', 'Kano', 'Ibadan'], flag: '🇳🇬', offset: 1, population: 237527782, landArea: 910770, density: 261, animal: 'Eagle', bird: 'N/A', food: 'Jollof Rice', currency: 'Nigerian Naira (₦)', independence: 'October 1, 1960', founder: 'Nnamdi Azikiwe', funFact: 'Nigeria is Africa\'s most populous country and has Nollywood, 2nd largest film industry!' },
  { name: 'North Korea', timezone: 'Asia/Pyongyang', cities: ['Pyongyang', 'Hamhung', 'Chongjin'], flag: '🇰🇵', offset: 9, population: 26571036, landArea: 120410, density: 221, animal: 'Chollima (mythical horse)', bird: 'N/A', food: 'Kimchi', currency: 'North Korean Won (₩)', independence: 'September 9, 1948', founder: 'Kim Il-sung', funFact: 'North Korea has its own time zone - 30 minutes behind South Korea!' },
  { name: 'North Macedonia', timezone: 'Europe/Skopje', cities: ['Skopje', 'Bitola', 'Kumanovo'], flag: '🇲🇰', offset: 1, population: 1813791, landArea: 25220, density: 72, animal: 'N/A', bird: 'N/A', food: 'Tavče Gravče', currency: 'Macedonian Denar (ден)', independence: 'September 8, 1991', founder: 'Kiro Gligorov', funFact: 'North Macedonia has Lake Ohrid, one of Europe\'s oldest and deepest lakes!' },
  { name: 'Norway', timezone: 'Europe/Oslo', cities: ['Oslo', 'Bergen', 'Trondheim'], flag: '🇳🇴', offset: 1, population: 5623071, landArea: 365268, density: 15, animal: 'Moose', bird: 'White-throated Dipper', food: 'Fårikål', currency: 'Norwegian Krone (kr)', independence: 'June 7, 1905', founder: 'Haakon VII', funFact: 'Norway has the world\'s longest road tunnel at 24.5 km and midnight sun!' },
  { name: 'Oman', timezone: 'Asia/Muscat', cities: ['Muscat', 'Salalah', 'Sohar'], flag: '🇴🇲', offset: 4, population: 5494691, landArea: 309500, density: 18, animal: 'Arabian Oryx', bird: 'N/A', food: 'Shuwa', currency: 'Omani Rial (ر.ع.)', independence: '1650 (Expelled Portuguese)', founder: 'Sultan Qaboos', funFact: 'Oman has frankincense trees and was a major trading hub for 5,000 years!' },
  { name: 'Pakistan', timezone: 'Asia/Karachi', cities: ['Karachi', 'Lahore', 'Islamabad'], flag: '🇵🇰', offset: 5, population: 255219554, landArea: 770880, density: 331, animal: 'Markhor', bird: 'Chukar Partridge', food: 'Nihari', currency: 'Pakistani Rupee (₨)', independence: 'August 14, 1947', founder: 'Muhammad Ali Jinnah', funFact: 'Pakistan has K2, the second highest mountain, and the Khewra Salt Mines!' },
  { name: 'Palau', timezone: 'Pacific/Palau', cities: ['Ngerulmud', 'Koror'], flag: '🇵🇼', offset: 9, population: 17663, landArea: 460, density: 38, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'October 1, 1994', founder: 'Kuniwo Nakamura', funFact: 'Palau has Jellyfish Lake with millions of harmless jellyfish!' },
  { name: 'Palestine', timezone: 'Asia/Gaza', cities: ['Gaza', 'Ramallah', 'Hebron'], flag: '🇵🇸', offset: 2, population: 5589623, landArea: 6020, density: 929, animal: 'Palestinian Sunbird', bird: 'Palestinian Sunbird', food: 'Musakhan', currency: 'Israeli Shekel (₪)', independence: 'November 15, 1988 (Declared)', founder: 'Yasser Arafat', funFact: 'Palestine has Jericho, one of the oldest continuously inhabited cities!' },
  { name: 'Panama', timezone: 'America/Panama', cities: ['Panama City', 'San Miguelito', 'David'], flag: '🇵🇦', offset: -5, population: 4571189, landArea: 74340, density: 61, animal: 'Harpy Eagle', bird: 'Harpy Eagle', food: 'Sancocho', currency: 'Panamanian Balboa (B/.)', independence: 'November 3, 1903', founder: 'Manuel Amador Guerrero', funFact: 'Panama Canal connects two oceans and the country has amazing biodiversity!' },
  { name: 'Papua New Guinea', timezone: 'Pacific/Port_Moresby', cities: ['Port Moresby', 'Lae', 'Mount Hagen'], flag: '🇵🇬', offset: 10, population: 10762817, landArea: 452860, density: 24, animal: 'Dugong', bird: 'Raggiana Bird-of-Paradise', food: 'Mumu', currency: 'Papua New Guinean Kina (K)', independence: 'September 16, 1975', founder: 'Michael Somare', funFact: 'Papua New Guinea has over 800 languages - the most linguistically diverse country!' },
  { name: 'Paraguay', timezone: 'America/Asuncion', cities: ['Asunción', 'Ciudad del Este', 'San Lorenzo'], flag: '🇵🇾', offset: -4, population: 7013078, landArea: 397300, density: 18, animal: 'N/A', bird: 'Bare-throated Bellbird', food: 'Sopa paraguaya', currency: 'Paraguayan Guaraní (₲)', independence: 'May 14, 1811', founder: 'José Gaspar de Francia', funFact: 'Paraguay has two official languages and exports hydroelectric power!' },
  { name: 'Peru', timezone: 'America/Lima', cities: ['Lima', 'Arequipa', 'Cusco'], flag: '🇵🇪', offset: -5, population: 34576665, landArea: 1280000, density: 27, animal: 'Vicuna', bird: 'Andean Cock-of-the-rock', food: 'Ceviche', currency: 'Peruvian Sol (S/.)', independence: 'July 28, 1821', founder: 'José de San Martín', funFact: 'Peru has Machu Picchu, the "Lost City of the Incas" and 5,000 types of potatoes!' },
  { name: 'Philippines', timezone: 'Asia/Manila', cities: ['Manila', 'Quezon City', 'Cebu City'], flag: '🇵🇭', offset: 8, population: 116786962, landArea: 298170, density: 392, animal: 'Carabao', bird: 'Philippine Eagle', food: 'Adobo', currency: 'Philippine Peso (₱)', independence: 'June 12, 1898', founder: 'Emilio Aguinaldo', funFact: 'Philippines has 7,641 islands and the world\'s longest Christmas season!' },
  { name: 'Poland', timezone: 'Europe/Warsaw', cities: ['Warsaw', 'Kraków', 'Łódź'], flag: '🇵🇱', offset: 1, population: 38140910, landArea: 306230, density: 125, animal: 'White Eagle (heraldic)', bird: 'N/A', food: 'Bigos', currency: 'Polish Złoty (zł)', independence: 'November 11, 1918', founder: 'Józef Piłsudski', funFact: 'Poland gave the world Marie Curie, Copernicus, and Chopin!' },
  { name: 'Portugal', timezone: 'Europe/Lisbon', cities: ['Lisbon', 'Porto', 'Braga'], flag: '🇵🇹', offset: 0, population: 10411834, landArea: 91590, density: 114, animal: 'Galo de Barcelos (rooster)', bird: 'N/A', food: 'Bacalhau', currency: 'Euro (€)', independence: 'October 5, 1143', founder: 'Afonso I', funFact: 'Portugal is the world\'s largest cork producer and has 365 ways to cook cod!' },
  { name: 'Qatar', timezone: 'Asia/Qatar', cities: ['Doha', 'Al Rayyan', 'Al Wakrah'], flag: '🇶🇦', offset: 3, population: 3115889, landArea: 11610, density: 268, animal: 'Arabian Oryx', bird: 'N/A', food: 'Machboos', currency: 'Qatari Riyal (ر.ق)', independence: 'September 3, 1971', founder: 'Sheikh Khalifa bin Hamad', funFact: 'Qatar has the world\'s highest GDP per capita and hosted FIFA 2022!' },
  { name: 'Romania', timezone: 'Europe/Bucharest', cities: ['Bucharest', 'Cluj-Napoca', 'Timișoara'], flag: '🇷🇴', offset: 2, population: 18908650, landArea: 230170, density: 82, animal: 'Lynx', bird: 'N/A', food: 'Mămăligă', currency: 'Romanian Leu (lei)', independence: 'May 9, 1877', founder: 'Carol I', funFact: 'Romania has Bran Castle (Dracula\'s Castle) and the Carpathian Mountains!' },
  { name: 'Russia', timezone: 'Europe/Moscow', cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk'], flag: '🇷🇺', offset: 3, population: 143997393, landArea: 16376870, density: 9, animal: 'Brown Bear', bird: 'N/A', food: 'Borscht', currency: 'Russian Ruble (₽)', independence: 'June 12, 1990', founder: 'Vladimir Lenin', funFact: 'Russia is the largest country covering 11 time zones and has Lake Baikal!' },
  { name: 'Rwanda', timezone: 'Africa/Kigali', cities: ['Kigali', 'Butare', 'Gitarama'], flag: '🇷🇼', offset: 2, population: 14569341, landArea: 24670, density: 591, animal: 'Lion', bird: 'N/A', food: 'Ugali', currency: 'Rwandan Franc (Fr)', independence: 'July 1, 1962', founder: 'Grégoire Kayibanda', funFact: 'Rwanda banned plastic bags and is called the "Land of a Thousand Hills"!' },
  { name: 'Saint Kitts and Nevis', timezone: 'America/St_Kitts', cities: ['Basseterre', 'Charlestown'], flag: '🇰🇳', offset: -4, population: 46922, landArea: 260, density: 180, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'East Caribbean Dollar ($)', independence: 'September 19, 1983', founder: 'Robert Bradshaw', funFact: 'St. Kitts has a scenic railway around the island!' },
  { name: 'Saint Lucia', timezone: 'America/St_Lucia', cities: ['Castries', 'Vieux Fort', 'Soufrière'], flag: '🇱🇨', offset: -4, population: 180149, landArea: 610, density: 295, animal: 'Saint Lucia Parrot', bird: 'Saint Lucia Parrot', food: 'N/A', currency: 'East Caribbean Dollar ($)', independence: 'February 22, 1979', founder: 'John Compton', funFact: 'St. Lucia has the Pitons, two volcanic spires rising from the sea!' },
  { name: 'Saint Vincent and the Grenadines', timezone: 'America/St_Vincent', cities: ['Kingstown', 'Georgetown'], flag: '🇻🇨', offset: -4, population: 99924, landArea: 390, density: 256, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'East Caribbean Dollar ($)', independence: 'October 27, 1979', founder: 'Milton Cato', funFact: 'This country has 32 islands and cays in the Caribbean!' },
  { name: 'Samoa', timezone: 'Pacific/Apia', cities: ['Apia', 'Vaitele', 'Faleula'], flag: '🇼🇸', offset: 13, population: 219306, landArea: 2830, density: 77, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Samoan Tālā (T)', independence: 'January 1, 1962', founder: 'Tupua Tamasese Meaʻole', funFact: 'Samoa was one of the first countries to see the new millennium!' },
  { name: 'San Marino', timezone: 'Europe/San_Marino', cities: ['San Marino', 'Serravalle'], flag: '🇸🇲', offset: 1, population: 33572, landArea: 60, density: 560, animal: 'N/A', bird: 'N/A', food: 'Torta Tre Monti', currency: 'Euro (€)', independence: 'September 3, 301', founder: 'Saint Marinus', funFact: 'San Marino is the world\'s oldest republic, founded in 301 AD!' },
  { name: 'Sao Tome and Principe', timezone: 'Africa/Sao_Tome', cities: ['São Tomé', 'Trindade'], flag: '🇸🇹', offset: 0, population: 240254, landArea: 960, density: 250, animal: 'N/A', bird: 'N/A', food: 'Calulu', currency: 'São Tomé and Príncipe Dobra (Db)', independence: 'July 12, 1975', founder: 'Manuel Pinto da Costa', funFact: 'These islands lie on the equator and grow amazing cocoa!' },
  { name: 'Saudi Arabia', timezone: 'Asia/Riyadh', cities: ['Riyadh', 'Jeddah', 'Mecca'], flag: '🇸🇦', offset: 3, population: 34566328, landArea: 2149690, density: 16, animal: 'Arabian Camel', bird: 'N/A', food: 'Kabsa', currency: 'Saudi Riyal (ر.س)', independence: 'September 23, 1932', founder: 'Abdulaziz Ibn Saud', funFact: 'Saudi Arabia has no rivers and is home to the two holiest cities in Islam!' },
  { name: 'Senegal', timezone: 'Africa/Dakar', cities: ['Dakar', 'Touba', 'Thiès'], flag: '🇸🇳', offset: 0, population: 18931966, landArea: 192530, density: 98, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Thieboudienne', currency: 'West African CFA franc (Fr)', independence: 'April 4, 1960', founder: 'Léopold Senghor', funFact: 'Senegal has Pink Lake (Lac Rose) that turns pink due to algae!' },
  { name: 'Serbia', timezone: 'Europe/Belgrade', cities: ['Belgrade', 'Novi Sad', 'Niš'], flag: '🇷🇸', offset: 1, population: 6689039, landArea: 87460, density: 76, animal: 'Wolf', bird: 'N/A', food: 'Ćevapi', currency: 'Serbian Dinar (дин)', independence: 'June 5, 2006', founder: 'Karadjordje Petrović', funFact: 'Serbia has EXIT Festival and Nikola Tesla was born here!' },
  { name: 'Seychelles', timezone: 'Indian/Mahe', cities: ['Victoria', 'Anse Boileau', 'Beau Vallon'], flag: '🇸🇨', offset: 4, population: 132779, landArea: 460, density: 289, animal: 'Giant Tortoise', bird: 'N/A', food: 'Curry', currency: 'Seychellois Rupee (₨)', independence: 'June 29, 1976', founder: 'James Mancham', funFact: 'Seychelles has the world\'s heaviest land tortoise and smallest capital city!' },
  { name: 'Sierra Leone', timezone: 'Africa/Freetown', cities: ['Freetown', 'Bo', 'Kenema'], flag: '🇸🇱', offset: 0, population: 8819794, landArea: 72180, density: 122, animal: 'Lion (heraldic)', bird: 'N/A', food: 'N/A', currency: 'Sierra Leonean Leone (Le)', independence: 'April 27, 1961', founder: 'Milton Margai', funFact: 'Sierra Leone has the third largest natural harbor in the world!' },
  { name: 'Singapore', timezone: 'Asia/Singapore', cities: ['Singapore'], flag: '🇸🇬', offset: 8, population: 5870750, landArea: 700, density: 8387, animal: 'Lion (heraldic)', bird: 'N/A', food: 'Chilli Crab', currency: 'Singapore Dollar ($)', independence: 'August 9, 1965', founder: 'Lee Kuan Yew', funFact: 'Singapore is a city-state with no minimum wage but highest cost of living!' },
  { name: 'Slovakia', timezone: 'Europe/Bratislava', cities: ['Bratislava', 'Košice', 'Prešov'], flag: '🇸🇰', offset: 1, population: 5474881, landArea: 48088, density: 114, animal: 'Bear', bird: 'N/A', food: 'Bryndzové halušky', currency: 'Euro (€)', independence: 'January 1, 1993', founder: 'Michal Kováč', funFact: 'Slovakia has 180 castles and is the heart of Europe!' },
  { name: 'Slovenia', timezone: 'Europe/Ljubljana', cities: ['Ljubljana', 'Maribor', 'Celje'], flag: '🇸🇮', offset: 1, population: 2117072, landArea: 20140, density: 105, animal: 'Brown Bear', bird: 'N/A', food: 'Kranjska klobasa', currency: 'Euro (€)', independence: 'June 25, 1991', founder: 'Milan Kučan', funFact: 'Slovenia has 10,000 caves including the stunning Postojna Cave!' },
  { name: 'Solomon Islands', timezone: 'Pacific/Guadalcanal', cities: ['Honiara', 'Gizo', 'Auki'], flag: '🇸🇧', offset: 11, population: 838645, landArea: 27990, density: 30, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Solomon Islands Dollar ($)', independence: 'July 7, 1978', founder: 'Peter Kenilorea', funFact: 'Solomon Islands has some of the best diving sites in the world!' },
  { name: 'Somalia', timezone: 'Africa/Mogadishu', cities: ['Mogadishu', 'Hargeisa', 'Bosaso'], flag: '🇸🇴', offset: 3, population: 19654739, landArea: 627340, density: 31, animal: 'Leopard', bird: 'N/A', food: 'Canjeero', currency: 'Somali Shilling (Sh)', independence: 'July 1, 1960', founder: 'Aden Abdullah Osman', funFact: 'Somalia has the longest coastline in mainland Africa!' },
  { name: 'South Africa', timezone: 'Africa/Johannesburg', cities: ['Johannesburg', 'Cape Town', 'Durban'], flag: '🇿🇦', offset: 2, population: 64747319, landArea: 1213090, density: 53, animal: 'Springbok', bird: 'Blue Crane', food: 'Biltong', currency: 'South African Rand (R)', independence: 'May 31, 1910', founder: 'Nelson Mandela', funFact: 'South Africa has 3 capital cities and 11 official languages!' },
  { name: 'South Korea', timezone: 'Asia/Seoul', cities: ['Seoul', 'Busan', 'Incheon'], flag: '🇰🇷', offset: 9, population: 51667029, landArea: 97230, density: 531, animal: 'Siberian Tiger', bird: 'Korean Magpie', food: 'Kimchi', currency: 'South Korean Won (₩)', independence: 'August 15, 1945', founder: 'Syngman Rhee', funFact: 'South Korea has the fastest internet speeds and invented K-pop!' },
  { name: 'South Sudan', timezone: 'Africa/Juba', cities: ['Juba', 'Wau', 'Malakal'], flag: '🇸🇸', offset: 2, population: 12188788, landArea: 610952, density: 20, animal: 'N/A', bird: 'N/A', food: 'Kisra', currency: 'South Sudanese Pound (£)', independence: 'July 9, 2011', founder: 'Salva Kiir Mayardit', funFact: 'South Sudan is the world\'s youngest country, independent since 2011!' },
  { name: 'Spain', timezone: 'Europe/Madrid', cities: ['Madrid', 'Barcelona', 'Valencia'], flag: '🇪🇸', offset: 1, population: 47889958, landArea: 498800, density: 96, animal: 'Bull', bird: 'N/A', food: 'Paella', currency: 'Euro (€)', independence: '1492 (Reconquista)', founder: 'Isabella I & Ferdinand II', funFact: 'Spain has 48 UNESCO sites and is the world\'s largest olive oil producer!' },
  { name: 'Sri Lanka', timezone: 'Asia/Colombo', cities: ['Colombo', 'Kandy', 'Galle'], flag: '🇱🇰', offset: 5.5, population: 23229470, landArea: 62710, density: 370, animal: 'Sri Lankan Elephant', bird: 'Junglefowl', food: 'Rice and Curry', currency: 'Sri Lankan Rupee (Rs)', independence: 'February 4, 1948', founder: 'D. S. Senanayake', funFact: 'Sri Lanka has 8 UNESCO World Heritage sites in a small island!' },
  { name: 'Sudan', timezone: 'Africa/Khartoum', cities: ['Khartoum', 'Omdurman', 'Port Sudan'], flag: '🇸🇩', offset: 2, population: 51662147, landArea: 1765048, density: 29, animal: 'N/A', bird: 'N/A', food: 'Ful Medames', currency: 'Sudanese Pound (£)', independence: 'January 1, 1956', founder: 'Ismail al-Azhari', funFact: 'Sudan has more pyramids than Egypt - 255 ancient pyramids!' },
  { name: 'Suriname', timezone: 'America/Paramaribo', cities: ['Paramaribo', 'Lelydorp', 'Nieuw Nickerie'], flag: '🇸🇷', offset: -3, population: 639850, landArea: 156000, density: 4, animal: 'Jaguar', bird: 'N/A', food: 'Pom', currency: 'Surinamese Dollar ($)', independence: 'November 25, 1975', founder: 'Johan Ferrier', funFact: 'Suriname is the smallest country in South America and 90% rainforest!' },
  { name: 'Sweden', timezone: 'Europe/Stockholm', cities: ['Stockholm', 'Gothenburg', 'Malmö'], flag: '🇸🇪', offset: 1, population: 10656633, landArea: 410340, density: 26, animal: 'Moose', bird: 'N/A', food: 'Köttbullar', currency: 'Swedish Krona (kr)', independence: 'June 6, 1523', founder: 'Gustav I', funFact: 'Sweden has the Icehotel and gave us IKEA and ABBA!' },
  { name: 'Switzerland', timezone: 'Europe/Zurich', cities: ['Zurich', 'Geneva', 'Basel'], flag: '🇨🇭', offset: 1, population: 8967407, landArea: 39516, density: 227, animal: 'Cow', bird: 'N/A', food: 'Fondue', currency: 'Swiss Franc (Fr)', independence: 'August 1, 1291', founder: 'William Tell (legendary)', funFact: 'Switzerland has 4 official languages and invented milk chocolate!' },
  { name: 'Syria', timezone: 'Asia/Damascus', cities: ['Damascus', 'Aleppo', 'Homs'], flag: '🇸🇾', offset: 2, population: 25620427, landArea: 183630, density: 140, animal: 'N/A', bird: 'N/A', food: 'Kibbeh', currency: 'Syrian Pound (£)', independence: 'April 17, 1946', founder: 'Shukri al-Quwatli', funFact: 'Damascus is the world\'s oldest continuously inhabited capital city!' },
  { name: 'Tajikistan', timezone: 'Asia/Dushanbe', cities: ['Dushanbe', 'Khujand', 'Kulob'], flag: '🇹🇯', offset: 5, population: 10786734, landArea: 139960, density: 77, animal: 'Snow Leopard', bird: 'N/A', food: 'Oshi Palov', currency: 'Tajikistani Somoni (ЅМ)', independence: 'September 9, 1991', founder: 'Rahmon Nabiyev', funFact: 'Tajikistan is 93% mountainous and has the Pamir Highway!' },
  { name: 'Tanzania', timezone: 'Africa/Dar_es_Salaam', cities: ['Dar es Salaam', 'Mwanza', 'Arusha'], flag: '🇹🇿', offset: 3, population: 70545865, landArea: 885800, density: 80, animal: 'Giraffe', bird: 'N/A', food: 'Ugali', currency: 'Tanzanian Shilling (Sh)', independence: 'December 9, 1961', founder: 'Julius Nyerere', funFact: 'Tanzania has Mount Kilimanjaro, Africa\'s highest mountain, and Serengeti!' },
  { name: 'Thailand', timezone: 'Asia/Bangkok', cities: ['Bangkok', 'Chiang Mai', 'Phuket'], flag: '🇹🇭', offset: 7, population: 71619863, landArea: 510890, density: 140, animal: 'Thai Elephant', bird: 'N/A', food: 'Pad Thai', currency: 'Thai Baht (฿)', independence: 'Never colonized', founder: 'King Rama I', funFact: 'Thailand is the only Southeast Asian country never colonized!' },
  { name: 'Timor-Leste', timezone: 'Asia/Dili', cities: ['Dili', 'Dare', 'Baucau'], flag: '🇹🇱', offset: 9, population: 1418517, landArea: 14870, density: 95, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'US Dollar ($)', independence: 'May 20, 2002', founder: 'Xanana Gusmão', funFact: 'East Timor is the youngest country in Southeast Asia!' },
  { name: 'Togo', timezone: 'Africa/Lome', cities: ['Lomé', 'Sokodé', 'Kara'], flag: '🇹🇬', offset: 0, population: 9721608, landArea: 54390, density: 179, animal: 'N/A', bird: 'N/A', food: 'Fufu', currency: 'West African CFA franc (Fr)', independence: 'April 27, 1960', founder: 'Sylvanus Olympio', funFact: 'Togo is one of the smallest countries in Africa!' },
  { name: 'Tonga', timezone: 'Pacific/Tongatapu', cities: ['Nuku\'alofa', 'Neiafu'], flag: '🇹🇴', offset: 13, population: 103742, landArea: 720, density: 144, animal: 'N/A', bird: 'N/A', food: 'Ota Ika', currency: 'Tongan Paʻanga (T$)', independence: 'June 4, 1970', founder: 'King Taufa\'ahau Tupou IV', funFact: 'Tonga is the only Pacific nation never formally colonized!' },
  { name: 'Trinidad and Tobago', timezone: 'America/Port_of_Spain', cities: ['Port of Spain', 'San Fernando', 'Chaguanas'], flag: '🇹🇹', offset: -4, population: 1511155, landArea: 5130, density: 295, animal: 'Scarlet Ibis', bird: 'Scarlet Ibis', food: 'Doubles', currency: 'Trinidad and Tobago Dollar ($)', independence: 'August 31, 1962', founder: 'Eric Williams', funFact: 'Trinidad invented the steelpan, the only acoustic instrument invented in the 20th century!' },
  { name: 'Tunisia', timezone: 'Africa/Tunis', cities: ['Tunis', 'Sfax', 'Sousse'], flag: '🇹🇳', offset: 1, population: 12348573, landArea: 155360, density: 79, animal: 'Fennec Fox', bird: 'N/A', food: 'Couscous', currency: 'Tunisian Dinar (د.ت)', independence: 'March 20, 1956', founder: 'Habib Bourguiba', funFact: 'Tunisia has Carthage, one of the greatest cities of the ancient world!' },
  { name: 'Turkey', timezone: 'Europe/Istanbul', cities: ['Istanbul', 'Ankara', 'Izmir'], flag: '🇹🇷', offset: 3, population: 87685426, landArea: 769630, density: 114, animal: 'Grey Wolf', bird: 'N/A', food: 'Kebap', currency: 'Turkish Lira (₺)', independence: 'October 29, 1923', founder: 'Mustafa Kemal Atatürk', funFact: 'Turkey is the only country spanning two continents - Europe and Asia!' },
  { name: 'Turkmenistan', timezone: 'Asia/Ashgabat', cities: ['Ashgabat', 'Türkmenabat', 'Daşoguz'], flag: '🇹🇲', offset: 5, population: 7618847, landArea: 469930, density: 16, animal: 'Akhal-Teke Horse', bird: 'N/A', food: 'Palaw', currency: 'Turkmenistan Manat (m)', independence: 'October 27, 1991', founder: 'Saparmurat Niyazov', funFact: 'Turkmenistan has the "Door to Hell," a burning gas crater!' },
  { name: 'Tuvalu', timezone: 'Pacific/Funafuti', cities: ['Funafuti', 'Vaiaku'], flag: '🇹🇻', offset: 12, population: 9492, landArea: 30, density: 316, animal: 'N/A', bird: 'N/A', food: 'N/A', currency: 'Australian Dollar ($)', independence: 'October 1, 1978', founder: 'Toaripi Lauti', funFact: 'Tuvalu is the 4th smallest country and sinking due to climate change!' },
  { name: 'Uganda', timezone: 'Africa/Kampala', cities: ['Kampala', 'Gulu', 'Lira'], flag: '🇺🇬', offset: 3, population: 51384894, landArea: 199810, density: 257, animal: 'Uganda Kob', bird: 'Grey Crowned Crane', food: 'Matoke', currency: 'Ugandan Shilling (Sh)', independence: 'October 9, 1962', founder: 'Milton Obote', funFact: 'Uganda is the "Pearl of Africa" with mountain gorillas!' },
  { name: 'Ukraine', timezone: 'Europe/Kiev', cities: ['Kyiv', 'Kharkiv', 'Odesa'], flag: '🇺🇦', offset: 2, population: 38980376, landArea: 579320, density: 67, animal: 'Nightingale', bird: 'Nightingale', food: 'Borscht', currency: 'Ukrainian Hryvnia (₴)', independence: 'August 24, 1991', founder: 'Leonid Kravchuk', funFact: 'Ukraine is Europe\'s largest country and has 7 UNESCO World Heritage sites!' },
  { name: 'United Arab Emirates', timezone: 'Asia/Dubai', cities: ['Dubai', 'Abu Dhabi', 'Sharjah'], flag: '🇦🇪', offset: 4, population: 11346000, landArea: 83600, density: 136, animal: 'Arabian Oryx', bird: 'N/A', food: 'Harees', currency: 'UAE Dirham (د.إ)', independence: 'December 2, 1971', founder: 'Sheikh Zayed bin Sultan', funFact: 'UAE has the Burj Khalifa, world\'s tallest building at 828 meters!' },
  { name: 'United Kingdom', timezone: 'Europe/London', cities: ['London', 'Manchester', 'Edinburgh'], flag: '🇬🇧', offset: 0, population: 69551332, landArea: 241930, density: 287, animal: 'Lion', bird: 'European Robin', food: 'Fish and Chips', currency: 'British Pound (£)', independence: 'Acts of Union 1707', founder: 'Alfred the Great (Anglo-Saxon)', funFact: 'UK has no mountains over 1,400m but invented the World Wide Web!' },
  { name: 'United States', timezone: 'America/New_York', cities: ['New York', 'Los Angeles', 'Chicago'], flag: '🇺🇸', offset: -5, population: 347275807, landArea: 9147420, density: 38, animal: 'Bald Eagle', bird: 'Bald Eagle', food: 'Hamburger', currency: 'US Dollar ($)', independence: 'July 4, 1776', founder: 'George Washington', funFact: 'USA has 63 national parks including Yellowstone, the world\'s first!' },
  { name: 'Uruguay', timezone: 'America/Montevideo', cities: ['Montevideo', 'Salto', 'Paysandú'], flag: '🇺🇾', offset: -3, population: 3384688, landArea: 175020, density: 19, animal: 'N/A', bird: 'Rufous Hornero', food: 'Chivito', currency: 'Uruguayan Peso ($)', independence: 'August 25, 1825', founder: 'José Gervasio Artigas', funFact: 'Uruguay was the first country to legalize marijuana and has 95% renewable energy!' },
  { name: 'Uzbekistan', timezone: 'Asia/Tashkent', cities: ['Tashkent', 'Samarkand', 'Bukhara'], flag: '🇺🇿', offset: 5, population: 37053428, landArea: 425400, density: 87, animal: 'Snow Leopard', bird: 'N/A', food: 'Plov', currency: 'Uzbekistani Som (so\'m)', independence: 'September 1, 1991', founder: 'Islam Karimov', funFact: 'Uzbekistan has the ancient Silk Road cities of Samarkand and Bukhara!' },
  { name: 'Vanuatu', timezone: 'Pacific/Efate', cities: ['Port Vila', 'Luganville'], flag: '🇻🇺', offset: 11, population: 335169, landArea: 12190, density: 27, animal: 'N/A', bird: 'N/A', food: 'Laplap', currency: 'Vanuatu Vatu (Vt)', independence: 'July 30, 1980', founder: 'Walter Lini', funFact: 'Vanuatu has land diving, the original bungee jumping!' },
  { name: 'Venezuela', timezone: 'America/Caracas', cities: ['Caracas', 'Maracaibo', 'Valencia'], flag: '🇻🇪', offset: -4, population: 28516896, landArea: 882050, density: 32, animal: 'Jaguar', bird: 'Venezuelan Troupial', food: 'Arepas', currency: 'Venezuelan Bolívar (Bs.)', independence: 'July 5, 1811', founder: 'Simón Bolívar', funFact: 'Venezuela has Angel Falls, the world\'s highest waterfall at 979 meters!' },
  { name: 'Vietnam', timezone: 'Asia/Ho_Chi_Minh', cities: ['Ho Chi Minh City', 'Hanoi', 'Da Nang'], flag: '🇻🇳', offset: 7, population: 101598527, landArea: 310070, density: 328, animal: 'Water Buffalo', bird: 'N/A', food: 'Pho', currency: 'Vietnamese Dong (₫)', independence: 'September 2, 1945', founder: 'Ho Chi Minh', funFact: 'Vietnam has Ha Long Bay with 1,600 limestone islands!' },
  { name: 'Yemen', timezone: 'Asia/Aden', cities: ['Sana\'a', 'Aden', 'Taiz'], flag: '🇾🇪', offset: 3, population: 41773878, landArea: 527970, density: 79, animal: 'N/A', bird: 'N/A', food: 'Saltah', currency: 'Yemeni Rial (﷼)', independence: 'November 30, 1967', founder: 'Ali Saleh al-Sallal', funFact: 'Yemen has Socotra Island with alien-looking dragon blood trees!' },
  { name: 'Zambia', timezone: 'Africa/Lusaka', cities: ['Lusaka', 'Kitwe', 'Ndola'], flag: '🇿🇲', offset: 2, population: 21913874, landArea: 743390, density: 29, animal: 'African Fish Eagle', bird: 'African Fish Eagle', food: 'Nshima', currency: 'Zambian Kwacha (ZK)', independence: 'October 24, 1964', founder: 'Kenneth Kaunda', funFact: 'Zambia has Victoria Falls, one of the Seven Natural Wonders of the World!' },
  { name: 'Zimbabwe', timezone: 'Africa/Harare', cities: ['Harare', 'Bulawayo', 'Chitungwiza'], flag: '🇿🇼', offset: 2, population: 16950795, landArea: 386850, density: 44, animal: 'Sable Antelope', bird: 'N/A', food: 'Sadza', currency: 'Zimbabwean Dollar ($)', independence: 'April 18, 1980', founder: 'Robert Mugabe', funFact: 'Zimbabwe has Great Zimbabwe ruins and shares Victoria Falls with Zambia!' },
];

function formatNumber(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + 'B';
  } else if (num >= 1000000) {
    return (num / 1000000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 }) + 'K';
  }
  return num.toLocaleString();
}

function getFlagUrl(countryCode) {
  return `https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`;
}

function getCurrentTime(timezone) {
  try {
    const now = new Date();
    const options = { timeZone: timezone, hour12: true };
    
    const timeString = now.toLocaleTimeString('en-US', {
      ...options,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    const dateString = now.toLocaleDateString('en-US', {
      ...options,
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
    
    const hour = parseInt(now.toLocaleTimeString('en-US', {
      ...options,
      hour: '2-digit',
      hour12: false
    }));
    
    const isDaytime = hour >= 6 && hour < 18;
    
    return {
      time: timeString,
      date: dateString,
      isDaytime: isDaytime
    };
  } catch (error) {
    console.error(`Invalid timezone "${timezone}":`, error);
    return {
      time: '--:--:--',
      date: '---',
      isDaytime: true
    };
  }
}

function getAllCities(countries) {
  const cities = [];
  countries.forEach(country => {
    country.cities.forEach(city => {
      cities.push({ city, country });
    });
  });
  return cities;
}

function filterCountries(countries, searchTerm) {
  if (!searchTerm) return countries;
  
  const term = searchTerm.toLowerCase();
  return countries.filter(country =>
    country.name.toLowerCase().includes(term) ||
    country.cities.some(city => city.toLowerCase().includes(term))
  );
}

function filterCities(allCities, searchTerm) {
  if (!searchTerm) return allCities;
  
  const term = searchTerm.toLowerCase();
  return allCities.filter(({ city, country }) =>
    city.toLowerCase().includes(term) ||
    country.name.toLowerCase().includes(term)
  );
}

// SVG Icons as strings
const icons = {
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="m16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
  
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>',
  
  activity: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
  
  mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
  
  chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>',
  
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>',
  
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  
  building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"></path></svg>',
  
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
  
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
  
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
  
  bookOpen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
  
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>',
  
  bird: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 7h.01"></path><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path><path d="m20 7 2 .5-2 .5"></path><path d="M10 18v3"></path><path d="M14 17.75V21"></path><path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg>',
  
  utensils: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>',
  
  pawPrint: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><circle cx="9" cy="10" r="2"></circle><circle cx="15" cy="14" r="2"></circle><path d="M9 18h-.5a3.5 3.5 0 0 1 0-7h.5"></path><path d="M15 18h.5a3.5 3.5 0 0 0 0-7h-.5"></path></svg>',
  
  trendingUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>'
};

function createIcon(iconName, className = '') {
  const div = document.createElement('div');
  div.innerHTML = icons[iconName] || '';
  const svg = div.firstChild;
  if (svg && className) {
    svg.className.baseVal = className;
  }
  return svg;
}
// Component creation functions

function createCountryCard(country) {
  const timeData = getCurrentTime(country.timezone);
  const flagUrl = getFlagUrl(countryCodeMap[country.name]);
  
  const card = document.createElement('div');
  card.className = 'card';
  card.onclick = () => openModal(country);
  
  card.innerHTML = `
    <div class="card-top-bar"></div>
    <div class="card-content">
      <div class="card-header">
        <div class="card-header-left">
          <div class="flag-container">
            <img 
              src="${flagUrl}" 
              alt="${country.name} flag"
              class="flag-img"
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            >
            <span class="flag-emoji">${country.flag}</span>
          </div>
          <div>
            <h3 class="country-name">${country.name}</h3>
            <span class="timezone-badge">UTC ${country.offset > 0 ? '+' : ''}${country.offset}</span>
          </div>
        </div>
        ${timeData.isDaytime ? 
          '<div class="time-icon sun-icon">' + icons.sun + '</div>' : 
          '<div class="time-icon moon-icon">' + icons.moon + '</div>'
        }
      </div>

      <div class="time-display">
        <div class="time-text" data-timezone="${country.timezone}">${timeData.time}</div>
        <div class="date-text">${timeData.date}</div>
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
          <div class="stat-value">${country.density}</div>
        </div>
      </div>

      <div class="cities-section">
        <div class="cities-label">
          ${icons.mapPin}
          Top Cities
        </div>
        <div class="cities-badges">
          ${country.cities.slice(0, 3).map(city => 
            `<span class="city-badge">${city}</span>`
          ).join('')}
        </div>
      </div>

      <div class="learn-more">
        ${icons.info}
        <span>Learn More!</span>
        ${icons.chevronRight}
      </div>
    </div>
    <div class="sparkles-icon">${icons.sparkles}</div>
  `;
  
  return card;
}

function createCityCard(city, country) {
  const timeData = getCurrentTime(country.timezone);
  const flagUrl = getFlagUrl(countryCodeMap[country.name]);
  
  const card = document.createElement('div');
  card.className = 'city-card';
  
  card.innerHTML = `
    <div class="city-top-bar"></div>
    <div class="card-content">
      <div class="card-header">
        <div class="card-header-left">
          <div class="city-icon-wrapper">
            ${icons.building}
          </div>
          <div>
            <h3 class="city-name">${city}</h3>
            <div class="city-country-info">
              <img 
                src="${flagUrl}" 
                alt="${country.name} flag"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';"
              >
              <span class="flag-emoji" style="display: none;">${country.flag}</span>
              <span class="city-country-name">${country.name}</span>
            </div>
          </div>
        </div>
        ${timeData.isDaytime ? 
          '<div class="time-icon sun-icon">' + icons.sun + '</div>' : 
          '<div class="time-icon moon-icon">' + icons.moon + '</div>'
        }
      </div>

      <div class="time-display">
        <div style="display: flex; align-items: center; justify-center: center; gap: 0.5rem; margin-bottom: 0.5rem;">
          <div style="width: 1rem; height: 1rem;">${icons.clock}</div>
          <span style="font-size: 0.625rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em;">Local Time</span>
        </div>
        <div class="time-text" data-timezone="${country.timezone}">${timeData.time}</div>
        <div class="date-text" style="font-size: 0.875rem;">${timeData.date}</div>
      </div>
    </div>
    <div class="star-icon">${icons.star}</div>
  `;
  
  return card;
}

function createModalContent(country) {
  const timeData = getCurrentTime(country.timezone);
  const flagUrl = getFlagUrl(countryCodeMap[country.name]);
  
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = `
    <div style="padding: 1.25rem;">
      <div style="text-center; padding-bottom: 1rem; border-bottom: 4px double #f59e0b; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 0.75rem;">
          <img 
            src="${flagUrl}" 
            alt="${country.name} flag"
            style="width: 6rem; height: 4rem; object-fit: cover; border-radius: 0.5rem; border: 4px solid #fcd34d; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"
            onerror="this.style.display='none'"
          >
          <div style="font-size: 4.5rem; transition: all 0.3s;">${country.flag}</div>
        </div>
        <h2 style="font-size: 2.25rem; font-weight: 900; margin-bottom: 0.5rem; color: #78350f;">
          ${country.name}
        </h2>
        <span class="timezone-badge" style="font-size: 0.875rem; padding: 0.5rem 1rem;">
          UTC ${country.offset > 0 ? '+' : ''}${country.offset}
        </span>
      </div>

      <div style="background: linear-gradient(to bottom right, #dbeafe, #e9d5ff); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.25rem; border: 4px solid #60a5fa; box-shadow: 8px 8px 0px 0px rgba(0,0,0,0.1);">
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <div style="width: 1.5rem; height: 1.5rem; color: #1e40af;">${icons.clock}</div>
          <span style="font-size: 1.125rem; font-weight: 700; color: #1e3a8a;">Current Time</span>
          ${timeData.isDaytime ? 
            '<div style="width: 1.5rem; height: 1.5rem; color: #eab308; animation: spin 4s linear infinite;">' + icons.sun + '</div>' : 
            '<div style="width: 1.5rem; height: 1.5rem; color: #4f46e5;">' + icons.moon + '</div>'
          }
        </div>
        <div style="text-align: center;">
          <div class="time-text" data-timezone="${country.timezone}" style="font-size: 3rem; font-weight: 900; margin-bottom: 0.25rem; font-family: 'Courier New', monospace; color: #1e3a8a;">
            ${timeData.time}
          </div>
          <div style="font-size: 1.125rem; font-weight: 600; color: #1e40af;">
            ${timeData.date}
          </div>
        </div>
      </div>

      <div style="background: linear-gradient(to bottom right, #d1fae5, #99f6e4); border-radius: 0.75rem; padding: 1.5rem; margin-bottom: 1.25rem; border: 4px solid #34d399; box-shadow: 8px 8px 0px 0px rgba(0,0,0,0.1);">
        <div style="text-align: center;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; margin-bottom: 0.75rem;">
            <div style="width: 1.5rem; height: 1.5rem; color: #065f46;">${icons.users}</div>
            <h3 style="font-size: 1.25rem; font-weight: 900; color: #064e3b;">
              🔴 LIVE POPULATION
            </h3>
          </div>
          <div style="color: #064e3b;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem;">
              <span class="live-population" data-initial="${country.population}" style="font-family: 'Courier New', monospace; font-size: 3rem; font-weight: 900;">
                ${country.population.toLocaleString()}
              </span>
              <div style="width: 1.5rem; height: 1.5rem; color: #10b981;">${icons.trendingUp}</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.75rem; margin-top: 0.5rem; color: #065f46; font-weight: 600;">
            <div style="width: 0.5rem; height: 0.5rem; border-radius: 50%; background: #ef4444; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
            <span>Real-time updates every second!</span>
          </div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="text-align: center; padding: 1rem; border-radius: 0.5rem; background: #dbeafe; border: 4px solid #60a5fa;">
          <div style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: #1e40af;">${icons.users}</div>
          <div style="font-size: 1.5rem; font-weight: 900; color: #1e3a8a;">${formatNumber(country.population)}</div>
          <div style="font-size: 0.75rem; font-weight: 700; color: #1e40af; margin-top: 0.25rem;">Population</div>
        </div>
        <div style="text-align: center; padding: 1rem; border-radius: 0.5rem; background: #dcfce7; border: 4px solid #4ade80;">
          <div style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: #15803d;">${icons.map}</div>
          <div style="font-size: 1.5rem; font-weight: 900; color: #14532d;">${formatNumber(country.landArea)}</div>
          <div style="font-size: 0.75rem; font-weight: 700; color: #15803d; margin-top: 0.25rem;">Area (km²)</div>
        </div>
        <div style="text-align: center; padding: 1rem; border-radius: 0.5rem; background: #e9d5ff; border: 4px solid #c084fc;">
          <div style="width: 2rem; height: 2rem; margin: 0 auto 0.5rem; color: #6b21a8;">${icons.activity}</div>
          <div style="font-size: 1.5rem; font-weight: 900; color: #581c87;">${country.density}</div>
          <div style="font-size: 0.75rem; font-weight: 700; color: #6b21a8; margin-top: 0.25rem;">Density</div>
        </div>
      </div>

      <div style="background: #fef3c7; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1.25rem; border: 4px solid #fbbf24; box-shadow: 8px 8px 0px 0px rgba(0,0,0,0.1);">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <div style="width: 1.5rem; height: 1.5rem; color: #78350f;">${icons.bookOpen}</div>
          <h3 style="font-size: 1.125rem; font-weight: 900; color: #78350f;">Did You Know?</h3>
        </div>
        <p style="color: #78350f; font-weight: 600; line-height: 1.625;">${country.funFact}</p>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h3 style="font-size: 1.125rem; font-weight: 900; color: #111827; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <div style="width: 1.25rem; height: 1.25rem; color: #ca8a04;">${icons.award}</div>
          National Symbols & History
        </h3>

        ${country.currency ? `
          <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 0.5rem; background: #fef3c7; border: 4px solid #fbbf24; margin-bottom: 0.75rem;">
            <div style="padding: 0.5rem; border-radius: 50%; background: #fde68a;">
              <span style="font-size: 1.25rem; font-weight: 700; color: #78350f;">$</span>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #a16207;">Currency</div>
              <div style="font-size: 0.875rem; font-weight: 900; color: #78350f;">${country.currency}</div>
            </div>
          </div>
        ` : ''}

        ${country.animal ? `
          <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 0.5rem; background: #fed7aa; border: 4px solid #fb923c; margin-bottom: 0.75rem;">
            <div style="padding: 0.5rem; border-radius: 50%; background: #fdba74;">
              <div style="width: 1.25rem; height: 1.25rem; color: #7c2d12;">${icons.pawPrint}</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #c2410c;">National Animal</div>
              <div style="font-size: 0.875rem; font-weight: 900; color: #7c2d12;">${country.animal}</div>
            </div>
          </div>
        ` : ''}

        ${country.bird && country.bird !== 'N/A' ? `
          <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 0.5rem; background: #e0f2fe; border: 4px solid #38bdf8; margin-bottom: 0.75rem;">
            <div style="padding: 0.5rem; border-radius: 50%; background: #7dd3fc;">
              <div style="width: 1.25rem; height: 1.25rem; color: #075985;">${icons.bird}</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #0369a1;">National Bird</div>
              <div style="font-size: 0.875rem; font-weight: 900; color: #075985;">${country.bird}</div>
            </div>
          </div>
        ` : ''}

        ${country.food && country.food !== 'N/A' ? `
          <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 0.5rem; background: #fee2e2; border: 4px solid #f87171; margin-bottom: 0.75rem;">
            <div style="padding: 0.5rem; border-radius: 50%; background: #fca5a5;">
              <div style="width: 1.25rem; height: 1.25rem; color: #7f1d1d;">${icons.utensils}</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #b91c1c;">National Dish</div>
              <div style="font-size: 0.875rem; font-weight: 900; color: #7f1d1d;">${country.food}</div>
            </div>
          </div>
        ` : ''}

        ${country.independence ? `
          <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 0.5rem; background: #ccfbf1; border: 4px solid #2dd4bf; margin-bottom: 0.75rem;">
            <div style="padding: 0.5rem; border-radius: 50%; background: #5eead4;">
              <div style="width: 1.25rem; height: 1.25rem; color: #134e4a;">${icons.star}</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #0f766e;">Independence Day</div>
              <div style="font-size: 0.875rem; font-weight: 900; color: #134e4a;">${country.independence}</div>
            </div>
          </div>
        ` : ''}

        ${country.founder ? `
          <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem; border-radius: 0.5rem; background: #e9d5ff; border: 4px solid #c084fc;">
            <div style="padding: 0.5rem; border-radius: 50%; background: #d8b4fe;">
              <div style="width: 1.25rem; height: 1.25rem; color: #581c87;">${icons.users}</div>
            </div>
            <div style="flex: 1;">
              <div style="font-size: 0.75rem; font-weight: 700; color: #7c3aed;">Key Founder</div>
              <div style="font-size: 0.875rem; font-weight: 900; color: #581c87;">${country.founder}</div>
            </div>
          </div>
        ` : ''}
      </div>

      <div style="background: #e0e7ff; border-radius: 0.5rem; padding: 1rem; border: 4px solid #818cf8;">
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
          <div style="width: 1.25rem; height: 1.25rem; color: #3730a3;">${icons.mapPin}</div>
          <h3 style="font-size: 1rem; font-weight: 900; color: #312e81;">Major Cities</h3>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${country.cities.map(city => 
            `<span style="font-size: 0.875rem; padding: 0.25rem 0.75rem; background: #c7d2fe; color: #312e81; border: 2px solid #818cf8; border-radius: 0.25rem; font-weight: 700;">${city}</span>`
          ).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Start live population counter
  startLivePopulation();
}// Main application logic

let activeTab = 'countries';
let allCities = [];
let livePopulationInterval = null;
let timeUpdateInterval = null;

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  allCities = getAllCities(countries);
  
  renderCountries(countries);
  renderCities(allCities);
  
  updateCounts(countries.length, allCities.length);
  
  setupEventListeners();
  startTimeUpdates();
});

// Setup event listeners
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', handleSearch);
  
  // Tab buttons
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => handleTabChange(button.dataset.tab));
  });
  
  // Modal close
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  
  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });
}

// Handle search
function handleSearch(e) {
  const searchTerm = e.target.value;
  
  const filteredCountriesData = filterCountries(countries, searchTerm);
  const filteredCitiesData = filterCities(allCities, searchTerm);
  
  renderCountries(filteredCountriesData);
  renderCities(filteredCitiesData);
  
  updateCounts(filteredCountriesData.length, filteredCitiesData.length);
}

// Handle tab change
function handleTabChange(tab) {
  activeTab = tab;
  
  // Update tab buttons
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.toggle('active', button.dataset.tab === tab);
  });
  
  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === tab + 'Tab');
  });
}

// Render countries
function renderCountries(countriesData) {
  const grid = document.getElementById('countriesGrid');
  const empty = document.getElementById('countriesEmpty');
  
  grid.innerHTML = '';
  
  if (countriesData.length === 0) {
    empty.style.display = 'block';
    return;
  }
  
  empty.style.display = 'none';
  
  countriesData.forEach(country => {
    const card = createCountryCard(country);
    grid.appendChild(card);
  });
}

// Render cities
function renderCities(citiesData) {
  const grid = document.getElementById('citiesGrid');
  const empty = document.getElementById('citiesEmpty');
  
  grid.innerHTML = '';
  
  if (citiesData.length === 0) {
    empty.style.display = 'block';
    return;
  }
  
  empty.style.display = 'none';
  
  citiesData.forEach(({ city, country }) => {
    const card = createCityCard(city, country);
    grid.appendChild(card);
  });
}

// Update counts
function updateCounts(countriesCount, citiesCount) {
  document.getElementById('countriesCount').textContent = countriesCount;
  document.getElementById('citiesCount').textContent = citiesCount;
}

// Open modal
function openModal(country) {
  const modalOverlay = document.getElementById('modalOverlay');
  createModalContent(country);
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  
  // Stop live population counter
  if (livePopulationInterval) {
    clearInterval(livePopulationInterval);
    livePopulationInterval = null;
  }
}

// Start live population counter
function startLivePopulation() {
  const element = document.querySelector('.live-population');
  if (!element) return;
  
  const initialPopulation = parseInt(element.dataset.initial);
  let currentPopulation = initialPopulation;
  
  // Calculate growth rate (simplified)
  const baseRatePerSecond = 0.00000025 * initialPopulation;
  
  livePopulationInterval = setInterval(() => {
    currentPopulation += baseRatePerSecond;
    element.textContent = Math.floor(currentPopulation).toLocaleString();
  }, 1000);
}

// Start time updates
function startTimeUpdates() {
  timeUpdateInterval = setInterval(() => {
    updateAllTimes();
  }, 1000);
}

// Update all time displays
function updateAllTimes() {
  const timeElements = document.querySelectorAll('[data-timezone]');
  
  timeElements.forEach(element => {
    const timezone = element.dataset.timezone;
    const timeData = getCurrentTime(timezone);
    
    if (element.classList.contains('time-text')) {
      element.textContent = timeData.time;
    }
  });
}

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (livePopulationInterval) {
    clearInterval(livePopulationInterval);
  }
  if (timeUpdateInterval) {
    clearInterval(timeUpdateInterval);
  }
});