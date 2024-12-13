"use client";

import { subAction } from "./ServerActions/PostalCodeProcess";
import { TextField,Button,Stack,Box,Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useFormState ,Link} from 'react-dom';
import { usePathname } from "next/navigation";


const PostalForm = () => {
    const pathname = usePathname();
    const initialState = { error: "" };
    const [state, formAction] = useFormState(subAction,{ message: [] })
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

    </>;

    if(state.message[0]){
        currentForm = <>
        <h2>郵便番号住所検索</h2>
        <Box
        component="div"
        sx={(theme) => ({
          whiteSpace: 'normal',
          my: 2,
          p: 1,
          bgcolor: 'grey.100',
          color: 'grey.800',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        })}
      >
        <div sx={{ whiteSpace: 'pre-line' }}>以下が検索された住所です。<br/>{state.message[2]}</div>
      </Box>
      <Button variant="contained" endIcon={<SendIcon />} component={Link} href={pathname}>再度検索する</Button>
        </>;
    }else if(state.message[0]!=null){
    currentForm = 
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
    <Box
        component="div"
        sx={(theme) => ({
          whiteSpace: 'normal',
          my: 2,
          p: 1,
          bgcolor: 'grey.100',
          color: 'red',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 2,
          fontSize: '0.7rem',
          fontWeight: '700',
          ...theme.applyStyles('dark', {
            bgcolor: '#101010',
            color: 'grey.300',
            borderColor: 'grey.800',
          }),
        })}
      >
        正しい郵便番号を入力してください。<br/>
        {state.message[1]}
      </Box>
    <Button type="submit" variant="contained" endIcon={<SendIcon />}>送信する</Button>
    </Stack>

    </>;
    }
    return (
        currentForm
    )
  };
  
  export default PostalForm;