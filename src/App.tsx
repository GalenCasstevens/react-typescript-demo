import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import IdeaList from './components/IdeaList';

const App: React.FC = () => {
	const ideas = [{ id: 1, text: 'Create that cool idea list app' }];
	return (
		<div className="App">
			<Container>
				<ListGroup>
					<IdeaList ideas={ideas} />
				</ListGroup>
			</Container>
		</div>
	);
};

export default App;
