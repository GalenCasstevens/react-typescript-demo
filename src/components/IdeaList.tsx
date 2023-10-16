import ListGroup from 'react-bootstrap/ListGroup';

const IdeaList = () => {
	const ideas = [{ text: 'Create that cool idea list app' }];
	return (
		<>
			{ideas.map((idea, index) => (
				<ListGroup.Item key={index}>{idea.text}</ListGroup.Item>
			))}
		</>
	);
};

export default IdeaList;
