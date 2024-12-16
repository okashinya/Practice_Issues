"use server";
type State = {
    message: string | null
  }
export async function subAction(previousState: State ,formData: FormData) {

    const currentInput = String(formData.get("PostalCode")).replace("-","")
    let InputState = String(Number(currentInput)) != "NaN" && currentInput.length == 7
    let ErrorState = ""
    let resultsAddress = []

    if(InputState){//API関係のエラー処理
        const res = await fetch("https://zipcloud.ibsnet.co.jp/api/search?zipcode="+currentInput);
        const getJson = await res.json();
        //console.log(getJson.status)
        if(getJson.status != 200){
            InputState=false
            ErrorState = "APIエラーです。"
        }
        if(getJson.results){//住所の行を作成
            for (const value of getJson.results) {//
               resultsAddress.push(<><br/>{value.address1+value.address2+value.address3}</>)
            }
        }else{//該当住所がない場合
            InputState=false
            ErrorState = "該当する住所がありません。"
        }
        //console.log(resultsAddress);
        //console.log(getJson.results)
    }


    if(String(Number(currentInput)) != "NaN"){//フォーム入力のエラー処理
        if(currentInput.length < 7 )
            ErrorState = "桁が足りません。"
        if(currentInput.length > 7)
            ErrorState = "桁が多いです。"
        }else if(String(formData.get("PostalCode")).length > 0){
            ErrorState = "半角数字を入力してください。"
        }
        //console.log(InputState);
    return {message:[InputState,ErrorState,resultsAddress]
  }
};