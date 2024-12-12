"use server";
type State = {
    message: string | null
  }
export async function subAction(previousState: State ,formData: FormData) {
    console.log(formData.get("PostalCode"));
    if(formData.get("PostalCode")!= ""){
    return{message:"true"}}
    else{
    return{message:"false"}}
  }