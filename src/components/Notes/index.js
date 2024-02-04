import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  MainContainer,
  Heading,
  FormContainer,
  TitleInput,
  TextInput,
  Button,
  ListContainer,
  SubContainer,
  ImageEl,
  NoHeading,
  NoPara,
} from './styledComponents'

const Notes = () => {
  const [title, setterTitle] = useState('')
  const [text, setterText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onAddTitle = event => setterTitle(event.target.value)

  const onAddText = event => setterText(event.target.value)

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      text,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setterTitle('')
    setterText('')
  }
  console.log(commentsList)

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <FormContainer onSubmit={onAddComment}>
        <TitleInput
          type="text"
          value={title}
          onChange={onAddTitle}
          placeholder="Title"
        />
        <TextInput
          value={text}
          placeholder="Take a Note..."
          onChange={onAddText}
          rows="12"
          cols="50"
        />
        <Button type="submit">Add</Button>
      </FormContainer>
      {commentsList.length > 0 ? (
        <ListContainer>
          {commentsList.map(eachComment => (
            <NoteItem details={eachComment} key={eachComment.id} />
          ))}
        </ListContainer>
      ) : (
        <SubContainer>
          <ImageEl
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoHeading>No Notes Yet</NoHeading>
          <NoPara>Notes you add will appear here</NoPara>
        </SubContainer>
      )}
    </MainContainer>
  )
}

export default Notes
