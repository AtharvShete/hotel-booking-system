import { isRedirectError } from "next/dist/client/components/redirect-error";
import { ZodError } from "zod";

type Options<T> = {
  actionFn: () => Promise<T>;
  successMessage?: string;
};

const executeAction = async <T>({
  actionFn,
  successMessage = "The actions was successful",
}: Options<T>): Promise<{ success: boolean; message: string }> => {
  try {
    await actionFn();

    return {
      success: true,
      message: successMessage,
    };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    // Handle Zod validation errors
    if (error instanceof ZodError) {
      const errorMessage = error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");
      return {
        success: false,
        message: errorMessage,
      };
    }

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "An error has occurred during executing the action",
    };
  }
};

export { executeAction };
