"use client";

import { subAction } from "./ServerActions/PostalCodeProcess";
import { useFormState } from "react-dom";

export default function CommentList() {
  const initialState = { error: "" };
  const [state, dispatch] = useFormState(submitAction, initialState);

  return (
    <>
      <h2>Server Actions</h2>
      <form action={dispatch}>
        <div name="comment-form" aria-describedby="comment-error">
          <div>
            <label htmlFor="comment">comment</label>
          </div>
          <div>
            <input id="comment" name="comment" type="text" required />
          </div>
          <div>
            <button type="submit"> Add Comment</button>
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
