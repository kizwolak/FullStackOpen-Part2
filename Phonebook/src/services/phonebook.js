import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject);
};

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const deleteEntry = (id) => {
  if (window.confirm("Do you really want to delete this record?")) {
    return axios.delete(`${baseUrl}/${id}`);
  } else return;
};

export default {
  getAll,
  create,
  update,
  deleteEntry,
};
