const modal = document.querySelector('#booking-modal');
const sidebar = document.querySelector('#sidebar');
const loginModal = document.querySelector('#login-modal');
const loginButton = document.querySelector('#login-button');
const loginCloseButton = document.querySelector('#login-close');
const stateSelect = document.querySelector('#state-select');
const districtSelect = document.querySelector('#district-select');
const blockSelect = document.querySelector('#block-select');

const indianLocations = {
  'Andhra Pradesh': {
    districts: {
      'Anantapur': ['Anantapur Urban', 'Kadiri', 'Kalyandurg'],
      'Visakhapatnam': ['Anakapalle', 'Bheemunipatnam', 'Pendurthi'],
      'Guntur': ['Amaravati', 'Mangalagiri', 'Tadikonda']
    }
  },
  'Arunachal Pradesh': {
    districts: {
      'Papum Pare': ['Itanagar', 'Naharlagun', 'Doimukh'],
      'East Siang': ['Pasighat', 'Ruksin', 'Mebo'],
      'Tawang': ['Tawang', 'Mukto', 'Lumla']
    }
  },
  'Assam': {
    districts: {
      'Kamrup Metropolitan': ['Beltola', 'Dispur', 'Garchuk'],
      'Jorhat': ['Titabor', 'Jorhat East', 'Jorhat West'],
      'Nagaon': ['Samaguri', 'Kampur', 'Dhing']
    }
  },
  'Bihar': {
    districts: {
      'Patna': ['Patna Sadar', 'Maner', 'Dhanarua'],
      'Gaya': ['Belaganj', 'Gaya Sadar', 'Mohanpur'],
      'Muzaffarpur': ['Kanti', 'Bela', 'Manjhi']
    }
  },
  'Chhattisgarh': {
    districts: {
      'Raipur': ['Abhanpur', 'Tilda', 'Arang'],
      'Durg': ['Dhamdha', 'Patan', 'Bhilai'],
      'Bilaspur': ['Takhatpur', 'Masturi', 'Kota']
    }
  },
  'Goa': {
    districts: {
      'North Goa': ['Bardez', 'Pernem', 'Tiswadi'],
      'South Goa': ['Mormugao', 'Salcete', 'Sanguem']
    }
  },
  'Gujarat': {
    districts: {
      'Ahmedabad': ['Daskroi', 'Detroj', 'Viramgam'],
      'Rajkot': ['Jasdan', 'Mongrol', 'Wankaner'],
      'Surat': ['Olpad', 'Choryasi', 'Bardoli']
    }
  },
  'Haryana': {
    districts: {
      'Gurugram': ['Pataudi', 'Sohna', 'Manesar'],
      'Faridabad': ['Ballabgarh', 'Faridabad', 'Tigaon'],
      'Hisar': ['Barwala', 'Hansi', 'Narnaund']
    }
  },
  'Himachal Pradesh': {
    districts: {
      'Shimla': ['Shimla Rural', 'Theog', 'Kumarsain'],
      'Kangra': ['Palampur', 'Dharamshala', 'Nadaun'],
      'Mandi': ['Sundernagar', 'Baldwara', 'Karsog']
    }
  },
  'Jharkhand': {
    districts: {
      'Ranchi': ['Angara', 'Kanke', 'Burmu'],
      'Jamshedpur': ['Ghatshila', 'Potka', 'Nazarganj'],
      'Dhanbad': ['Govindpur', 'Topchanchi', 'Baghmara']
    }
  },
  'Karnataka': {
    districts: {
      'Bengaluru Urban': ['Yelahanka', 'Bengaluru East', 'Dasarahalli'],
      'Mysuru': ['Krishnaraja', 'Hunsur', 'Nanjangud'],
      'Belagavi': ['Athani', 'Chikodi', 'Raibag']
    }
  },
  'Kerala': {
    districts: {
      'Thiruvananthapuram': ['Nedumangad', 'Chirayinkeezhu', 'Varkala'],
      'Kozhikode': ['Koyilandy', 'Vadakara', 'Melady'],
      'Ernakulam': ['Kochi', 'Kunnathunad', 'Aluva']
    }
  },
  'Madhya Pradesh': {
    districts: {
      'Bhopal': ['Berasia', 'Bhopal', 'Huzur'],
      'Indore': ['Depalpur', 'Indore', 'Khargone'],
      'Jabalpur': ['Kundam', 'Pipariya', 'Narsinghpur']
    }
  },
  'Maharashtra': {
    districts: {
      'Mumbai': ['Andheri', 'Kurla', 'Bandra'],
      'Pune': ['Haveli', 'Baramati', 'Khed'],
      'Nagpur': ['Katol', 'Saoner', 'Kalmeshwar']
    }
  },
  'Manipur': {
    districts: {
      'Imphal West': ['Lamphel', 'Langol', 'Patsoi'],
      'Thoubal': ['Heirok', 'Thoubal', 'Wangjing'],
      'Churachandpur': ['Moirang', 'Churachandpur', 'Saparmeina']
    }
  },
  'Meghalaya': {
    districts: {
      'East Khasi Hills': ['Mawphlang', 'Mawkynrew', 'Shillong'],
      'West Garo Hills': ['Tura', 'Dalu', 'Rongram'],
      'East Jaintia Hills': ['Khlieriat', 'Jowai', 'Saipung']
    }
  },
  'Mizoram': {
    districts: {
      'Aizawl': ['Tlangnuam', 'Darlawn', 'Phullen'],
      'Lunglei': ['Lunglei', 'Hnahthial', 'Chawngte'],
      'Champhai': ['Khawzawl', 'Ngopa', 'Champhai']
    }
  },
  'Nagaland': {
    districts: {
      'Dimapur': ['Chumoukedima', 'Dimapur', 'Medziphema'],
      'Kohima': ['Meriema', 'Jakhama', 'Tseminyu'],
      'Mon': ['Mon', 'Tizit', 'Aboi']
    }
  },
  'Odisha': {
    districts: {
      'Khordha': ['Bhubaneswar', 'Jatani', 'Balianta'],
      'Cuttack': ['Kantapada', 'Niali', 'Cuttack Sadar'],
      'Sambalpur': ['Dhama', 'Sambalpur Sadar', 'Rairakhol']
    }
  },
  'Punjab': {
    districts: {
      'Ludhiana': ['Ludhiana East', 'Raikot', 'Samrala'],
      'Amritsar': ['Ajnala', 'Majitha', 'Verka'],
      'Jalandhar': ['Nakodar', 'Phillaur', 'Adampur']
    }
  },
  'Rajasthan': {
    districts: {
      'Jaipur': ['Amer', 'Sanganer', 'Vidhyadhar Nagar'],
      'Jodhpur': ['Luni', 'Osian', 'Bhopalgarh'],
      'Udaipur': ['Gogunda', 'Salumber', 'Mavli']
    }
  },
  'Sikkim': {
    districts: {
      'East Sikkim': ['Gangtok', 'Pakyong', 'Ranka'],
      'West Sikkim': ['Gyalshing', 'Soreng', 'Daramdin'],
      'South Sikkim': ['Namchi', 'Jorethang', 'Melli']
    }
  },
  'Tamil Nadu': {
    districts: {
      'Chennai': ['Alandur', 'Perungudi', 'Sholinganallur'],
      'Coimbatore': ['Coimbatore North', 'Pollachi', 'Mettupalayam'],
      'Madurai': ['Madurai East', 'Thiruparankundram', 'Usilampatti']
    }
  },
  'Telangana': {
    districts: {
      'Hyderabad': ['Madhapur', 'Gachibowli', 'Kukatpally'],
      'Warangal': ['Hanamkonda', 'Parkal', 'Jangaon'],
      'Rangareddy': ['Shamshabad', 'Medchal', 'Rajendranagar']
    }
  },
  'Tripura': {
    districts: {
      'West Tripura': ['Agartala', 'Khowai', 'Melaghar'],
      'South Tripura': ['Belonia', 'Sabroom', 'Rajnagar'],
      'North Tripura': ['Kailashahar', 'Dharmanagar', 'Kanchanpur']
    }
  },
  'Uttar Pradesh': {
    districts: {
      'Lucknow': ['Bakshi Ka Talab', 'Mohanlalganj', 'Chinhat'],
      'Prayagraj': ['Karchana', 'Handia', 'Phulpur'],
      'Varanasi': ['Pindra', 'Chandauli', 'Arajiline']
    }
  },
  'Uttarakhand': {
    districts: {
      'Dehradun': ['Vikasnagar', 'Doiwala', 'Raipur'],
      'Haridwar': ['Roorkee', 'Bhagwanpur', 'Laksar'],
      'Nainital': ['Haldwani', 'Kashipur', 'Bhimtal']
    }
  },
  'West Bengal': {
    districts: {
      'Kolkata': ['Kolkata Port', 'Kolkata South', 'Bidhannagar'],
      'North 24 Parganas': ['Barasat', 'Basirhat', 'Bangaon'],
      'Howrah': ['Uluberia', 'Amta', 'Jagatballavpur']
    }
  },
  'Andaman and Nicobar Islands': {
    districts: {
      'South Andaman': ['Port Blair', 'Bamboo Flat', 'Sippighat'],
      'North and Middle Andaman': ['Diglipur', 'Rangat', 'Mayabunder']
    }
  },
  'Chandigarh': {
    districts: {
      'Chandigarh': ['Manimajra', 'Madhya Marg', 'Industrial Area']
    }
  },
  'Dadra and Nagar Haveli and Daman and Diu': {
    districts: {
      'Dadra and Nagar Haveli': ['Silvassa', 'Dadra', 'Vapi'],
      'Daman': ['Daman', 'Diu', 'Kachigam']
    }
  },
  'Delhi': {
    districts: {
      'Central Delhi': ['Kalkaji', 'Karol Bagh', 'Patel Nagar'],
      'East Delhi': ['Mayur Vihar', 'Preet Vihar', 'Vikas Marg'],
      'North Delhi': ['Civil Lines', 'Model Town', 'Sadar Bazar']
    }
  },
  'Jammu and Kashmir': {
    districts: {
      'Srinagar': ['Ganderbal', 'Khonmoh', 'Pahalgam'],
      'Jammu': ['R S Pura', 'Bishnah', 'Akhnoor'],
      'Kupwara': ['Handwara', 'Karnah', 'Sogam']
    }
  },
  'Ladakh': {
    districts: {
      'Leh': ['Leh', 'Nubra', 'Diskit'],
      'Kargil': ['Kargil', 'Drass', 'Zanskar']
    }
  },
  'Lakshadweep': {
    districts: {
      'Lakshadweep': ['Kavaratti', 'Agatti', 'Minicoy']
    }
  },
  'Puducherry': {
    districts: {
      'Puducherry': ['Ozhukarai', 'Villianur', 'Mannadipet'],
      'Karaikal': ['Karaikal', 'Thirunallar', 'Nedungadu']
    }
  }
};

function injectGovernmentStyles() {
  if (document.querySelector('#government-portal-styles')) return;

  const styles = document.createElement('style');
  styles.id = 'government-portal-styles';
  styles.textContent = `
    .login-trigger{border:1px solid rgba(11,79,67,.18);background:linear-gradient(180deg,#f4faf7,#ebf5f0);color:var(--green);font-weight:700;padding:10px 16px;border-radius:999px;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease}.login-trigger:hover{transform:translateY(-1px);box-shadow:0 8px 20px rgba(11,79,67,.12)}
    .language-picker{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid var(--line);border-radius:999px;background:var(--white);box-shadow:0 8px 22px rgba(11,79,67,.04)}.language-picker span{font-size:10px;letter-spacing:.08em;color:var(--muted);text-transform:uppercase}.language-select{border:0;background:transparent;color:var(--green);font:700 12px 'Public Sans',sans-serif;appearance:none;-webkit-appearance:none;-moz-appearance:none;padding-right:18px;max-width:220px;cursor:pointer;outline:none}.language-picker:after{content:'⌄';color:var(--green);font-weight:700;pointer-events:none;margin-left:-12px}
    .auth-modal .auth-card{width:min(700px,100%);background:#fff;border-radius:26px;padding:28px 30px 24px;position:relative;box-shadow:0 20px 50px rgba(5,30,24,.18)}.auth-header{display:flex;align-items:center;gap:16px;padding-right:38px}.gob-badge{width:52px;height:52px;border-radius:16px;background:linear-gradient(135deg,#f5d765,#d9b43f);display:grid;place-items:center;font-size:28px}.auth-header h2{margin:8px 0 0;font-size:32px;line-height:1.1}.auth-form{margin-top:24px}.form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-bottom:18px}.field{display:flex;flex-direction:column;gap:8px;font-size:12px;font-weight:700;color:var(--ink)}.field span{text-transform:uppercase;letter-spacing:.07em;color:var(--muted)}.field input,.location-select{width:100%;height:48px;border:1px solid var(--line);border-radius:12px;padding:0 14px;background:#f8fbf9;color:var(--ink);font:600 14px 'Public Sans',sans-serif}.field input:focus,.location-select:focus{outline:2px solid rgba(11,79,67,.12);border-color:var(--green)}.field:last-child{grid-column:span 2}.location-select{cursor:pointer}.auth-modal .full-width{margin-top:10px}.auth-modal .primary-button{justify-content:center}.auth-modal .eyebrow{margin:0;color:var(--green);font-weight:700;font-size:10px;letter-spacing:.15em}.auth-close{position:absolute;top:18px;right:20px;border:0;background:transparent;color:var(--muted);font-size:28px;cursor:pointer;line-height:1}.auth-modal{display:flex;align-items:center;justify-content:center;opacity:0;visibility:hidden}.auth-modal.open{opacity:1;visibility:visible}.auth-modal .field input[disabled],.auth-modal .location-select[disabled]{background:#edf2f0;color:#7b8b88;cursor:not-allowed}.auth-modal .full-width{width:100%}
    @media (max-width:760px){.form-grid{grid-template-columns:1fr}.auth-card{padding:24px 18px}.auth-header{padding-right:30px}.header-actions{gap:12px}.login-trigger{padding:8px 12px}.language-picker{padding:7px 10px}}
  `;
  document.head.appendChild(styles);
}

function openBooking() {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeBooking() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

function openLogin() {
  if (!loginModal) return;
  loginModal.classList.add('open');
  loginModal.setAttribute('aria-hidden', 'false');
}

function closeLogin() {
  if (!loginModal) return;
  loginModal.classList.remove('open');
  loginModal.setAttribute('aria-hidden', 'true');
}

function populateStateSelect() {
  if (!stateSelect) return;
  const states = Object.keys(indianLocations).sort();
  states.forEach((state) => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
  });
}

function populateDistricts(stateName) {
  if (!districtSelect) return;
  districtSelect.innerHTML = '<option value="">Select district</option>';
  blockSelect.innerHTML = '<option value="">Select block</option>';
  blockSelect.disabled = true;

  const districts = indianLocations[stateName]?.districts || {};
  Object.keys(districts).sort().forEach((district) => {
    const option = document.createElement('option');
    option.value = district;
    option.textContent = district;
    districtSelect.appendChild(option);
  });

  districtSelect.disabled = Object.keys(districts).length === 0;
}

function populateBlocks(stateName, districtName) {
  if (!blockSelect) return;
  blockSelect.innerHTML = '<option value="">Select block</option>';
  const blocks = indianLocations[stateName]?.districts?.[districtName] || [];

  blocks.forEach((block) => {
    const option = document.createElement('option');
    option.value = block;
    option.textContent = block;
    blockSelect.appendChild(option);
  });

  blockSelect.disabled = blocks.length === 0;
}

if (modal) {
  document.querySelector('#new-booking')?.addEventListener('click', openBooking);
  document.querySelectorAll('[data-action="booking"]').forEach((button) => button.addEventListener('click', openBooking));
  document.querySelector('.modal-close')?.addEventListener('click', closeBooking);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeBooking();
  });
  document.querySelectorAll('.mode-option').forEach((option) => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.mode-option').forEach((item) => item.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
  document.querySelector('#continue-booking')?.addEventListener('click', () => {
    closeBooking();
    window.setTimeout(() => window.alert('Booking flow ready. Connect this step to the booking API in backend/server.js.'), 100);
  });
}

document.querySelector('.close-notice')?.addEventListener('click', (event) => event.currentTarget.closest('.notice').remove());
if (sidebar) {
  document.querySelector('.mobile-menu')?.addEventListener('click', () => sidebar.classList.toggle('mobile-open'));
}
document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((navItem) => navItem.classList.remove('active'));
    item.classList.add('active');
    sidebar?.classList.remove('mobile-open');
  });
});

if (loginButton) {
  loginButton.addEventListener('click', openLogin);
}
if (loginCloseButton) {
  loginCloseButton.addEventListener('click', closeLogin);
}
if (loginModal) {
  loginModal.addEventListener('click', (event) => {
    if (event.target === loginModal) closeLogin();
  });
}
if (stateSelect) {
  populateStateSelect();
  stateSelect.addEventListener('change', (event) => {
    const selectedState = event.target.value;
    populateDistricts(selectedState);
  });
}
if (districtSelect) {
  districtSelect.addEventListener('change', (event) => {
    const selectedState = stateSelect?.value || '';
    populateBlocks(selectedState, event.target.value);
  });
}

document.querySelector('.auth-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const farmerId = document.querySelector('.auth-form input[type="text"]')?.value || 'Not provided';
  const state = stateSelect?.value || 'Not selected';
  const district = districtSelect?.value || 'Not selected';
  const block = blockSelect?.value || 'Not selected';
  window.alert(`Farmer login request submitted for ${farmerId} in ${block}, ${district}, ${state}.`);
});

injectGovernmentStyles();

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBooking();
    closeLogin();
  }
});
