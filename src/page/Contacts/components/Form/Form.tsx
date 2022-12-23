import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { contactsDataService } from "services/contact.service";

interface IContactsForm {
  name: string;
  number: string;
}

function Form() {
  const { handleSubmit, control } = useForm<IContactsForm>();
  const { errors } = useFormState({
    control,
  });

  const onSubmit: SubmitHandler<IContactsForm> = (data: IContactsForm) => {
    console.log(data);
    contactsDataService.postContact(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        // rules={null}
        render={({ field }: any) => (
          <TextField
            label="Name"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.name?.message}
            helperText={errors?.name?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="number"
        // rules={null}
        render={({ field }: any) => (
          <TextField
            label="Number"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            error={!!errors.number?.message}
            helperText={errors?.number?.message}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth={true}
        disableElevation={true}
        sx={{
          marginTop: 2,
        }}
      >
        Add contact
      </Button>
    </form>
  );
}

export { Form };
