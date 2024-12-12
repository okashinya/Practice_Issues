"use server";
export async function subAction(formData: FormData) {
    console.log(formData.get("PostalCode"));
  }