const SectionState = {

    observerDelay: 0,

    Intersect: function(entries) {
        for (let entry of entries) {
            const e = entry.target;
            if (entry.isIntersecting) {
                switch (e.dataset.sectionState) {
                    case '':
                        e.setAttribute('data-section-state', 'visible');
                        break;
                    case 'visited':
                        e.setAttribute('data-section-state', 'visible');
                        break;
                }
            } else {
                switch (e.dataset.sectionState) {
                    case 'visible':
                        e.setAttribute('data-section-state', 'visited');
                        break;
                }
            }
        }
    },

    Observe: function(e, o) {
        let observer = new IntersectionObserver(SectionState.Intersect, o);
        observer.observe(e);
    },

    GetOptions: function() {
        const o = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        }
        return o;
    },

    GetInitialDelay: function() {
        const e = document.querySelector("[data-section-state-delay]");
        const delay = e ? e.dataset.sectionStateDelay : '0';
        return delay;
    },

    Init: function() {
        const el = document.querySelectorAll('[data-track-section-state]');
        for (let e of el) {
            if (!e.dataset.sectionState) {
                let o = SectionState.GetOptions();
                e.setAttribute('data-section-state', '');
                e.removeAttribute('data-track-section-state');
                setTimeout(function() {
                    SectionState.Observe(e, o);
                }, SectionState.observerDelay);

            }
        }
    }
}

// SectionState.Init();
