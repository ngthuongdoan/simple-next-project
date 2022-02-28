import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hooks/useRedux";
import { addWatch } from "../../store/features/watch/actions";

export type InputValue = {
  title: string;
  price: number;
  description: string;
  imageUrl: string;
  categories: string;
  color: string;
};

const AddForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputValue>();

  const dispatch = useAppDispatch();

  async function onSubmitWatch(data: InputValue) {
    await Promise.all([reset(), dispatch(addWatch(data)).unwrap()]);
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 2 }}>
      <form onSubmit={handleSubmit(onSubmitWatch)}>
        <Stack spacing={2}>
          <Typography variant="h5">Add a new watch</Typography>
          <TextField label="Title" {...register("title")} />
          <TextField label="Price" {...register("price")} />
          <TextField label="Description" {...register("description")} />
          <TextField label="Image Url" {...register("imageUrl")} />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              {...register("categories")}>
              <MenuItem value="Womens Watches">Womens Watches</MenuItem>
              <MenuItem value="Mens Watches">Mens Watches</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Color</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Color"
              {...register("color")}>
              <MenuItem value="Silver">Silver</MenuItem>
              <MenuItem value="Rose Gold">Rose Gold</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </Stack>
      </form>
    </Container>
  );
};
export default AddForm;
