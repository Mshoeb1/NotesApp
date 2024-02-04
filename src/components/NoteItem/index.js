import {ListItem, Heading, Para} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, text} = details

  return (
    <ListItem>
      <Heading>{title}</Heading>
      <Para>{text}</Para>
    </ListItem>
  )
}

export default NoteItem
