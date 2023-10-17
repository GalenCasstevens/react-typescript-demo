import { useState } from 'react';
import { IIdeaFormProps } from '../interfaces/ideaFormProps.interface';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const IdeaForm = (props: IIdeaFormProps) => {
	const [idea, setIdea] = useState('');

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIdea(e.currentTarget.value);
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		props.onAddIdea(idea);
	};

	return (
		<Form id="idea-form" onSubmit={onSubmit}>
			<Form.Control
				className="form-text mb-3"
				as="textarea"
				rows={4}
				onChange={onChange}
			/>
			<Button
				className="add-idea-btn float-end"
				variant="primary"
				type="submit"
			>
				Add Idea
			</Button>
		</Form>
	);
};

export default IdeaForm;
