"use client";

import { subAction } from "./ServerActions/PostalCodeProcess";
import { TextField,Button,Stack} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormState ,Link} from 'react-dom'
import { usePathname } from "next/navigation";


const PostalForm = () => {
    const pathname = usePathname();
    const initialState = { error: "" };
    const [state, formAction] = useFormState(subAction,{ message: null })
    let currentForm = 
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
    </>;

    if(state.message=="true"){
        currentForm = <>
        <h2>郵便番号住所検索</h2>
        <Button variant="contained" endIcon={<SendIcon />} component={Link} href={pathname}>送信する</Button>
        </>;
    }
    return (
        currentForm
    );
  };
  
  export default PostalForm;