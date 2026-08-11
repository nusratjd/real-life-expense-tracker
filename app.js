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

initTheme();
from.date.value = new Date().toISOString().slice(0, 10);
return () ;
from.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const tx = {
        id: Date.now().toString(),
        title: (fd.get('title') || '').toString().trim(),
        amount: Number(fd.get('amount')),
        type: fd.get('type'),
        category: fd.get('category'),
        date: fd.get('date'),
    };
})