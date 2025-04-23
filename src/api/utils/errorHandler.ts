export class ApiError extends Error {
  status?: number;
  originalError: unknown;

  constructor(error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "Ocurrió un error inesperado en la API";

    super(message);
    this.name = "ApiError";
    this.originalError = error;

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as any;
      this.status = axiosError.response?.status;
    }

    // Solo funciona en Node.js, se ignora en navegador
    if (typeof (Error as any).captureStackTrace === "function") {
      (Error as any).captureStackTrace(this, ApiError);
    }
  }
}
