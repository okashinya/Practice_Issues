"use server";
type State = {
    message: string | null
  }
export async function subAction(previousState: State ,formData: FormData) {
    console.log(formData.get("PostalCode"));
    if(formData.get("PostalCode")!= ""){
    return{message:"awsedrftgyhu"}}
    else{
    return{message:"郵便番号を入力してください。"}}
  }