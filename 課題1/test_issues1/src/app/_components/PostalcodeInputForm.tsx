"use client";

import { subAction } from "./ServerActions/PostalCodeProcess";
import { TextField,Button,Stack} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormState } from 'react-dom'


const PostalForm = () => {
    
    const initialState = { error: "" };
    const [state, formAction] = useFormState(subAction,{ message: null })
    
    return (
    <>

        <h2>郵便番号住所検索</h2>
    <Stack
      component="form"
      action={formAction}
      sx={{ width: '25ch' }}
      spacing={2}
      noValidate
      autoComplete="off"
      method="POST"
    >
        <TextField id="standard-basic" name="PostalCode" label="郵便番号を入力" variant="outlined" />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>送信する</Button>
        </Stack>
        <div>{state.message}</div>
    </>
    );
  };
  
  export default PostalForm;