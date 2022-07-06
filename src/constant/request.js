import axios from "axios";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1b25nMjU1QGFiYy5jb20iLCJzdWIiOjEwLCJpYXQiOjE2NTcwMDU3NjgsImV4cCI6MTY1NzA0MTc2OH0.6w-o6iqsrG_qSh8yvkU5JudUNcHKJIds6SL4RR57n3s";

export function getCookie(name = "currentuser") {
  const v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? v[2] : null;
}
export async function postAsync(url, data = {}) {
  try {
    console.log({ data });
    const response = await axios.post(url, data);
    return response;
  } catch (ex) {
    const { status = 400, data = {}, errors = [] } = ex.response || {};
    const error = data?.errors || [];
    return {
      status,
      data: ex?.response?.data || {},
      errors,
      message: error[0]?.message || "",
    };
  }
}
export async function getAsync(url, param) {
  try {
    const response = await axios.get(url);

    return response;
  } catch (ex) {
    const { status = 400, data = {} } = ex?.response || {};
    const error = data?.errors || [];
    return {
      status,
      data: {},
      message: error[0]?.message || "",
      code: error[0]?.code || 0,
    };
  }
}
export async function getAsyncWithToken(url, param) {
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + getCookie(),
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      params: param,
    });

    return response;
  } catch (ex) {
    const { status = 400, data = {} } = ex?.response || {};
    const error = data?.errors || [];
    return {
      status,
      data: {},
      message: error[0]?.message || "",
      code: error[0]?.code || 0,
    };
  }
}

export async function getUserInfo() {
  const url = process.env.REACT_APP_BACK_END + "/auth/profile";
  const response = await getAsyncWithToken(url);
  return response?.data || [];
}
