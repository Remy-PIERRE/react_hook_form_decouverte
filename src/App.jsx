import { useForm } from "react-hook-form";

function App() {
	// initialisation du hook //
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// @submit //
	function onSubmit(data) {
		console.table(data);
	}

	// affiche les changements du champs ciblé //
	console.log(watch("name"));

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form--exemple">
			{/* input => name => required */}
			<label htmlFor="name">Nom</label>
			<input
				{...register("name", {
					required: true,
					placeholder: "Ton nom",
				})}
			/>
			{/* error message => name */}
			{errors.name && <span>This field is required</span>}

			{/* input => pseudo => required */}
			<label htmlFor="pseudo">Pseudonyme</label>
			<input
				{...register("pseudo", {
					required: true,
					placeholder: "Ton pseudo",
				})}
			/>
			{/* error message => pseudo */}
			{errors.pseudo && <span>This field is required</span>}

			{/* submit */}
			<button type="submit">Valider</button>
		</form>
	);
}

export default App;
