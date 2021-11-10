import React, { useState } from "react";

const Home = props => {
	const [value, setValue] = useState("");

	const [listItem, setListItem] = useState([]);
	const [state, setState] = useState(false);
	const [count, setCount] = useState(0);

	function deleteButton(index) {
		const deleted = listItem.filter((element, id) => id !== index);
		setListItem(deleted);
		setCount(prevCount => prevCount - 1);
	}
 
	function toggle() {
		setState();
		if (value !== "") {
			setCount(count + 1);
		}
	}

	return (
		<div>
			<h1>Todos</h1>
			<div className="container">
				<form>
					<input
						className="input"
						placeholder="Type Here"
						value={value}
						onChange={e => setValue(e.target.value)}
					/>
					<button
						onClick={e => {
							e.preventDefault();
							if (value === "") {
								/*es lint*/
							} else {
								setListItem([...listItem, value]);
							}
							toggle();
							setValue("");
						}}>
						Click Me
					</button>
				</form>
				<div>
					{listItem.map((item, index) => (
						<li key={index}>
							{item}
							<button
								onClick={() => deleteButton(index)}
								className="deleteButton">
								X
							</button>
						</li>
					))}
				</div>
				{count > 0 && <li>{count}</li>}
			</div>
		</div>
	);
};

export default Home;
