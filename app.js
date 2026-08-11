const STORAGE_KEY = 'smartspend.tx.vl';
const THEME_KEY = 'smartspend.theme';

let txs = load();
let filter = {type: 'all', cat: 'all', q: ''};

const $ = (s) => document.querySelector(s);
const from            = $ ('#texFrom');
const list            = $ ('#texList');
const empty           = $ ('#empty');
const chart           = $ ('#chart');
const totalInc        = $ ('#totalIncome');
const totalExp        = $ ('#totalExpense');
const balanceEl       = $ ('#blance');
const filterType      = $ ('#filterType');
const filterCat       = $ ('#filterCat');
const searchInp       = $ ('#searchInp');
const themeBtn        = $ ('#themeBtn');