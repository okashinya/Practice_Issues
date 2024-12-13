"use server";
type State = {
    message: string | null
  }
export async function subAction(previousState: State ,formData: FormData) {

    const currentInput = String(formData.get("PostalCode")).replace("-","")
    const InputState = String(Number(currentInput)) != "NaN" && currentInput.length == 7
    let ErrorState = ""
    let resultsAddress = []
    if(InputState){
        const res = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode="+currentInput);
        const getJson = await res.json();
        console.log(getJson.status)
        if(getJson.status != 200)
            ErrorState = "APIエラーです。"
        for (const value of getJson.results) {
            resultsAddress.push(<><br/>{value.address1+value.address2+value.address3}</>)
            
        }
        console.log(resultsAddress);
        //console.log(getJson.results)
        
    }

    if(String(Number(currentInput)) != "NaN"){
        if(currentInput.length < 7 )
            ErrorState = "桁が足りません。"
        if(currentInput.length > 7)
            ErrorState = "桁が多いです。"
        }else if(String(formData.get("PostalCode")).length > 0){
            ErrorState = "半角数字を入力してください。"
        }
    
        //console.log(InputState);
    return {message:[InputState,ErrorState,resultsAddress]}
    if(formData.get("PostalCode")!= ""){
    return{message:"true"}}
    else{
    return{message:"false"}}
  }