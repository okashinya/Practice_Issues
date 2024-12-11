"use client";

import { subAction } from "../_components/ServerActions/PostalCodeProcess";
import { useFormState } from "react-dom";

export default function CommentList() {
  const initialState = { error: "" };
  const [state, dispatch] = useFormState(subAction, initialState);

  return (
    <>
      <h2>Server Actions</h2>
      <form action={subAction}>
        <div name="comment-form" aria-describedby="comment-error">
          <div>
            <label htmlFor="comment">郵便番号</label>
          </div>
          <div>
            <input id="comment" name="PostalCode" type="text" required />
          </div>
          <div>
            <button type="submit">検索する</button>
          </div>
        </div>
        {state.error && (
          <div name="display-error" id="comment-error" aria-live="polite" aria-atomic="true">
            <p>{state.error}</p>
          </div>
        )}
      </form>
    </>
  );
}