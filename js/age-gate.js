const AgeGate = {
	b: document.body,
	el: document.querySelector('#age-gate'),
	ts: localStorage.getItem('agegate'),
	now: Date.now(),
	param: new URLSearchParams(window.location.search).get('gate'),
	month: {
		min: 1,
		max: 12,
		next: 'day'
	},
	day: {
		min: 1,
		max: 30,
		next: 'year'
	},
	year: {
		min: 1901,
		max: new Date().getFullYear()
	},
	dateInputs: [],

	getProvince: function () {
		const s = AgeGate.el.querySelector('select');
		const p = {
			name: s.options[s.selectedIndex].value,
			minage: s.options[s.selectedIndex].dataset.age,
			eligible: s.options[s.selectedIndex].dataset.eligible
		};
		return p;
	},

	getBday: function () {
		const [month, day, year] = AgeGate.dateInputs.map(
			(input) => input.value
		);
		if (!month || !day || !year) {
			return null;
		}
		const bday = new Date(
			Number(year),
			Number(month) - 1,
			Number(day)
		).getTime();
		return bday;
	},

	setFocusTrap: function () {
		ffe = AgeGate.el.querySelector('select');
		lfe = AgeGate.el.querySelector('.footsnote a');
		ffe.focus();
		let keyboardHandler = function keyboardHandler(e) {
			if (e.keyCode === 9) {
				if (e.shiftKey && document.activeElement === ffe) {
					e.preventDefault();
					lfe.focus();
				} else if (!e.shiftKey && document.activeElement === lfe) {
					e.preventDefault();
					ffe.focus();
				}
			}
		};
		AgeGate.el.addEventListener('keydown', keyboardHandler);
	},

	setInputFilter: function (input, inputFilter, callback) {
		[
			'input',
			'keydown',
			'keyup',
			'mousedown',
			'mouseup',
			'select',
			'contextmenu',
			'drop'
		].forEach(function (eventType) {
			input.addEventListener(eventType, function (event) {
				if (inputFilter(this.value)) {
					this.oldValue = this.value;
					this.oldSelectionStart = this.selectionStart;
					this.oldSelectionEnd = this.selectionEnd;
				} else if (this.hasOwnProperty('oldValue')) {
					this.value = this.oldValue;
					this.setSelectionRange(
						this.oldSelectionStart,
						this.oldSelectionEnd
					);
				} else {
					this.value = '';
				}
				if (callback) {
					callback(event);
				}
			});
		});
	},

	validateEligibility: function () {
		AgeGate.b.classList.add('validate-eligibility');
		AgeGate.el.querySelector('form').addEventListener('submit', (event) => {
			event.preventDefault();
			const p = AgeGate.getProvince();
			let bday = AgeGate.getBday();
			if (!bday) {
				return;
			}
			const diff = AgeGate.now - bday;
			const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
			if (p.eligible == 'true' && age >= p.minage) {
				AgeGate.el.remove();
				AgeGate.b.classList.remove('validate-eligibility');
				AgeGate.b.classList.add('eligible');
				localStorage.setItem('agegate', AgeGate.now);
			} else {
				AgeGate.b.classList.add('non-eligible');
				localStorage.removeItem('agegate');
			}
		});
	},

	setListeners: function () {
		AgeGate.dateInputs = Array.from(
			document.querySelectorAll('.js-date-input')
		);
		AgeGate.dateInputs.forEach((input) => {
			const inputParams = AgeGate[input.id];
			// Filter input value to only accept numbers
			AgeGate.setInputFilter(
				input,
				function (value) {
					return /^[0-9]*$/.test(value);
				},
				// Focus next input if maxLength is reached
				function (event) {
					if (event.type !== 'input') {
						return;
					}
					const { value, maxLength } = input;
					if (value.length < maxLength) {
						return;
					}
					const nextInput = AgeGate.dateInputs.find(
						(i) => i.id === inputParams.next
					);
					if (nextInput) {
						nextInput.focus();
					}
				}
			);
			// Validate (and modify) value according to parameters
			input.addEventListener('blur', () => {
				const value = Number(input.value);
				if (!value) {
					return;
				}
				let { min, max } = inputParams;
				// Validate max day according to month value if there is one
				if (input.id === 'day') {
					const monthInput = AgeGate.dateInputs.find(
						(i) => i.id === 'month'
					);
					const monthValue = Number(monthInput.value);
					const currentYear = new Date().getFullYear();
					max = month
						? new Date(currentYear, monthValue, 0).getDate()
						: max;
				}
				// Modify out of bounds values
				if (value > max) {
					input.value = max;
				}
				if (value < min) {
					input.value = min;
				}
				// Add leading zero
				if (value < 10) {
					input.value = `0${value}`;
				}
			});
		});
	},

	init: function () {
		if (
			!!AgeGate.el &&
			(AgeGate.now - AgeGate.ts >= 1800000 || AgeGate.param == 'ON') &&
			AgeGate.param != 'OFF'
		) {
			AgeGate.validateEligibility();
			AgeGate.setFocusTrap();
			AgeGate.setListeners();
			// const inM = document.querySelector('#age-gate #month');
			// const inD = document.querySelector('#age-gate #day');
			// const inY = document.querySelector('#age-gate #year');

			// AgeGate.setInputFilter(inM, function(value) {return /^[0-9]*$/.test(value);});
			// AgeGate.setInputFilter(inD, function(value) {return /^[0-9]*$/.test(value);});
			// AgeGate.setInputFilter(inY, function(value) {return /^[0-9]*$/.test(value);});
		} else {
			AgeGate.b.classList.add('eligible');
		}
	}
};

AgeGate.init();
