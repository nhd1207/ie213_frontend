import axios from "../requestV2";

const prefix = "/car";

export const getDetailByCode = (code) => {
  return axios({
    method: "GET",
    url: `${prefix}/${code}`,
  });
};

export const getList = () => {
  return axios({
    method: "GET",
    url: `${prefix}/`,
  });
};

export const compareTwoCars = (data) => {
  return axios({
    method: "GET",
    data,
    url: `${prefix}/compareTwoCars`,
  });
};

export const create = (data) => {
  return axios({
    method: "POST",
    data,
    url: `${prefix}/`,
  });
};

export const update = (id, data) => {
  return axios({
    method: "PUT",
    data,
    url: `${prefix}/${id}`,
  });
};

export const destroy = (id) => {
  return axios({
    method: "DELETE",
    url: `${prefix}/${id}`,
  });
};

export const cloudinaryUpload = (fileToUpload) => {
  return axios({
    method: "POST",
    fileToUpload,
    url: `uploads/cloudinary-upload`,
  });
};

export const filter = (params) => {
  return axios({
    method: "GET",
    url: `${prefix}/carFilter?${params}`,
  });
};

