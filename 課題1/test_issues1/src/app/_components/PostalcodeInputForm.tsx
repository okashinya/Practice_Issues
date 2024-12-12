"use client";

import { subAction } from "./ServerActions/PostalCodeProcess";
import { TextField,Button,Stack} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const PostalForm = () => {
    
    const initialState = { error: "" };
    
    return (
    <>

        <h2>Server Actions</h2>
    <Stack
      component="form"
      action={subAction}
      sx={{ width: '25ch' }}
      spacing={2}
      noValidate
      autoComplete="off"
      method="POST"
    >
        <TextField id="standard-basic" name="PostalCode" label="郵便番号を入力" variant="standard" />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>送信する</Button>
        </Stack>
    </>
    );
  };
  
  export default PostalForm;