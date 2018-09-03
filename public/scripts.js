document.querySelector('.form').addEventListener('submit', issueToken)

async function issueToken(event) {
	event.preventDefault()
	const email = event.target[0].value
	const appName = event.target[1].value

	if (email.includes('turing.io')) {
		try {
			const response = await fetch('/api/v1/authenticate', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, appName })
			});
			const results = await response.json();
			displayResults(results)
		} catch (error) {
				throw(error)
		}
	}
	if (!email.length || !appName.length) {
		document.querySelector('.feedback').innerText = "Please enter a valid email and app name"
	} 

}

function displayResults(results) {
	document.querySelector('.feedback').innerText = results.token || results
}