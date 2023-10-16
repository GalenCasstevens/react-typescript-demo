import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { IIdeaList } from '../interfaces/ideaList.interface';

const IdeaList = ({ ideas }: IIdeaList) => {
	return (
		<>
			{ideas.map((idea) => (
				<ListGroup.Item key={idea.id}>{idea.text}</ListGroup.Item>
			))}
		</>
	);
};

export default IdeaList;
