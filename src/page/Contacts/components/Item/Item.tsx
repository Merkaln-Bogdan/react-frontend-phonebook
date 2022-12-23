import ListItem from "@mui/material/ListItem";

import ListItemText from "@mui/material/ListItemText";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const Item = ({ contact }: any) => (
  <ListItem
    key={contact._id}
    sx={{
      marginBottom: "5px",
      backgroundColor: "#f3f7b4",
      boxShadow: "10px 10px 5px -8px rgba(0,0,0,0.75)",
    }}
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon color="error" />
      </IconButton>
    }
  >
    <ListItemText primary={contact.name} sx={{ maxWidth: 300 }} />
    <ListItemText primary={contact.number} />
  </ListItem>
);

export { Item };
