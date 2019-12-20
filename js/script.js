document.addEventListener('DOMContentLoaded', function(e) {

	document.querySelector('.app-header__btn').onclick = function() {

		fetch('http://data.fixer.io/api/latest?access_key=c881499ceb11b4f61568443c53b906de&format=1', {
			url: "GET"
		})
			.then(info => {
				document.querySelector('.app-body__int_eur').value = 'Загрузка...'
				document.querySelector('.app-body__int_usd').value = 'Загрузка...'
				return info.json()
			}).then(currs => {

				setTimeout(() => {
						let eur = +(document.querySelector('.app-header__int').value) / currs.rates.RUB;
						let eurVal = eur.toFixed(3);
						let usd = eur * currs.rates.USD;
						let usdVal = usd.toFixed(3);

						try {
							if (isNaN(eurVal) || isNaN(usdVal)) {
								throw new Error('Ошибка значений!')
							}
							document.querySelector('.app-body__int_eur').value = eurVal + '  EUR';
							document.querySelector('.app-body__int_usd').value = usdVal + '  USD';
						}
						catch {
							document.querySelector('.app-body__int_eur').value = 'Невалидно.'
							document.querySelector('.app-body__int_usd').value = 'Невалидно.'
						}
					}, 1500)
				})

	}

})