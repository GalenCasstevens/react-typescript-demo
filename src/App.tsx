import { useState } from 'react';
import { IIdea } from './interfaces/ideaList.interface';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';

const App: React.FC = () => {
	const [ideas, setIdeas] = useState<IIdea[]>([]);

	const ideaAddHandler = (text: string) => {
		setIdeas((prevIdeas) => [...prevIdeas, { id: Math.random(), text: text }]);
	};

	return (
		<div className="App">
			<Container>
				<ListGroup>
					<ListGroup.Item>
						<IdeaForm onAddIdea={ideaAddHandler} />
					</ListGroup.Item>
					<IdeaList ideas={ideas} />
				</ListGroup>
			</Container>
		</div>
	);
};

export default App;
