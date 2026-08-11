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
    if (!tx.title || !tx.amount || tx.amount <= 0) return;
    txs.unshift (tx);
    save ();
    form.reset ();
    from.date.value = new Date().toDateString().slice(0,10);
    return ();
    list.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-del]');
        if (!btn) return;
        txs = txs.filter((t) => t.id !== btn.dataset.del);
        save();
        render ();
    });
    filterType.addEventListener('change', () => { filter.type = filterType.value;render(); });
    filterType.addEventListener('change', () => { filter.cat = filterCht.value;render(); });
    searchInp.addEventListener('input', () => { filter.q = searchInp.valu.toLowerCase(); render(); });
    
})