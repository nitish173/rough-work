function tick() {
	const element = (
		<h1> The time is {new Date().toLocaleString()}.</h1>
	);

	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);



/*
function formatName (user) {
	return user.fname + ' ' + user.lname;	
}

const user = {
	fname: 'Ben',
	lname: 'carson',
	avatalUrl: 'a.png'
};

const element = (
	<div>
		<h1>
			Hello {formatName(user)}
		</h1>
		<img src={user.avatalUrl}/>
	</div>
);

ReactDOM.render(
	element,
	document.getElementById('root');
)
*/


class Card extends React.Component {
	render() {
		return <h1>Hello, {this.props.name}</h1>;
	}
}