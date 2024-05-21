import React, { useRef, useState } from "react";

function App_() {
	// state lié aux messages d'erreurs du formulaire côté utilisateur //
	const [errorMessage, setErrorMessage] = useState(false);

	// déclarer les ref aux inputs //
	const inputNameRef = useRef(null);
	const inputPseudoRef = useRef(null);

	// @submit //
	function onSubmit(event) {
		event.preventDefault();

		// sanitize values //
		const name = inputNameRef.current.value.trim();
		const pseudo = inputPseudoRef.current.value.trim();

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
			<input name="name" ref={inputNameRef} />
			{/* error message => name */}
			{errorMessage.name && <span>{errorMessage.name}</span>}

			{/* input => pseudo => required */}
			<label htmlFor="pseudo">Pseudonyme</label>
			<input name="pseudo" ref={inputPseudoRef} />
			{/* error message => pseudo */}
			{errorMessage.pseudo && <span>T{errorMessage.name}</span>}

			{/* submit */}
			<button type="submit">Valider</button>
		</form>
	);
}

export default App_;
