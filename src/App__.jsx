import React, { useState } from "react";

function App__() {
	// déclaration des états inputs (name + pseudo) && errorMessage //
	const [inputNameValue, setInputNameValue] = useState("");
	const [inputPseudoValue, setInputPseudoValue] = useState("");
	const [errorMessage, setErrorMessage] = useState(false);

	// handle inputs values changes //
	function handleInputNameChange(event) {
		setInputNameValue(event.currentTarget.value);
	}
	function handleInputPseudoChange(event) {
		setInputPseudoValue(event.currentTarget.value);
	}

	// @submit //
	function onSubmit(event) {
		event.preventDefault();

		// sanitize values //
		const name = inputNameValue.trim();
		const pseudo = inputPseudoValue.trim();

		// check if all inputs required are completed //
		const message = "Tous les champs sont requis !";
		if (name === "") {
			return setErrorMessage({
				name: message,
			});
		} else if (pseudo === "") {
			return setErrorMessage({
				pseudo: message,
			});
		}

		console.log("data : ", { name, pseudo });
	}

	return (
		<form onSubmit={onSubmit} className="form--exemple">
			{/* input => name => required */}
			<label htmlFor="name">Nom</label>
			<input
				name="name"
				onChange={handleInputNameChange}
				value={inputNameValue}
			/>
			{/* error message => name */}
			{errorMessage.name && <span>{errorMessage.name}</span>}

			{/* input => pseudo => required */}
			<label htmlFor="pseudo">Pseudonyme</label>
			<input
				name="pseudo"
				onChange={handleInputPseudoChange}
				value={inputPseudoValue}
			/>
			{/* error message => pseudo */}
			{errorMessage.pseudo && <span>T{errorMessage.name}</span>}

			{/* submit */}
			<button type="submit">Valider</button>
		</form>
	);
}

export default App__;
