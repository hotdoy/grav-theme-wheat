(function () {
	"use strict";

    const resets = document.querySelectorAll('input[type="reset"]');
    if (!!resets) {
        resets.forEach(reset => {
            reset.addEventListener('click', (e) => {
                e.target.closest('form').querySelectorAll('select').forEach(select => {
                    select.querySelectorAll('option').forEach(option => {
                        option.removeAttribute('selected');
                    })
                });
            });
        });
    }

    const SyncOnLoad = function () {
        const query = window.location.search;
        const params = new URLSearchParams(query);
        for (const [key, val] of params) {
            document.querySelectorAll(`select[name="${key}"]`).forEach(s => {
                s.querySelectorAll('option').forEach(o => {
                    if (o.value == val) {
                        o.setAttribute('selected', "");
                    } else {
                        o.removeAttribute('selected');
                    }
                });
            });
        }
    }

    const SyncOnChange = function () {
        document.querySelectorAll('select').forEach(s => {
            s.addEventListener('change', () => {
                s.querySelectorAll('option').forEach(o => {
                    if (o.index == s.selectedIndex) {
                        o.setAttribute('selected', "");
                    } else {
                        o.removeAttribute('selected');
                    }
                });
                
            });
        });
    }

    SyncOnLoad();
    SyncOnChange();
})();
