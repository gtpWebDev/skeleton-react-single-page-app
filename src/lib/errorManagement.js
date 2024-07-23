// experimental for now

/**
 * Server designed to generate following output structure:
 *
 * Success:
 * - {success: true, data: data}
 *
 * Error:
 * - {success: false, msg: "error message"}
 *
 *
 * Axios interprets this as follows:
 * Success:
 * - response.status
 * - response.data - {success: true, data: data}
 * - response.request - the original request
 * - response.headers - the response header
 * - response.statusText
 * - (other response.config)
 *
 * Error:
 * - error.status
 * - error.response.data - {success: false, msg: "customised server error text"}
 *
 */

export const constructError = (axiosError) => {
  const error = new Error(axiosError.response.data.msg);
};
