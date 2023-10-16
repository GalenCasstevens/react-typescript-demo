import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import IdeaList from './components/IdeaList';

const App: React.FC = () => {
	return (
		<div className="App">
			<Container>
				<ListGroup>
					<IdeaList />
				</ListGroup>
			</Container>
		</div>
	);
};

export default App;
