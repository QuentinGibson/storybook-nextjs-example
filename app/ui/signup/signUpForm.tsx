import {
  EnvelopeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";

interface SignUpFormProps {
  stepOneCreate: () => Promise<string | undefined | void>;
}

export default function SignUpForm({ stepOneCreate }: SignUpFormProps) {
  const [errorMessage, dispatch] = useFormState(stepOneCreate, undefined);
  const status = useFormStatus();
  return (
    <>
      <form
        className="flex flex-col justify-center w-full gap-4"
        action={dispatch}
      >
        <label className="w-full max-w-md form-control">
          <div className="label">
            <span className="label-text">Email:</span>
          </div>
          <div className="inline-flex w-full items-center justify-start gap-2.5 self-stretch rounded-xl bg-base-200 p-3">
            <EnvelopeIcon width={24} height={24} />
            <input
              type="email"
              placeholder="Enter email here"
              className="w-full max-w-md input bg-base-200"
              name="email"
            />
          </div>
        </label>

        <button
          disabled={status.pending}
          aria-disabled={status.pending}
          type="submit"
          className="w-full font-bold btn btn-primary max-w-md"
        >
          Continue
        </button>
      </form>
      {errorMessage && (
        <>
          <ExclamationCircleIcon className="w-5 h-5 text-error" />
          <p className="text-sm text-error">{errorMessage}</p>
        </>
      )}
    </>
  );
}
