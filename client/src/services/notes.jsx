export const getNotes = async (token) => {
  try {
    const response = await fetch("/api/notlar", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("An error occurred while fetching notes:", error);
  }
};

export const getNotesById = async (id, token) => {
  try {
    const response = await fetch(`/api/notlar/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("An error occurred while fetching notes:", error);
  }
};

export const deleteNotesById = async (id, token) => {
  try {
    const response = await fetch(`/api/notlar/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("An error occurred while fetching notes:", error);
  }
};

export const updateNotesById = async (id, data, token) => {
  try {
    const response = await fetch(`/api/notlar/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("An error occurred while fetching notes:", error);
  }
};

export const createNote = async (data, token) => {
  try {
    const response = await fetch(`/api/notlar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      return response.json().then((errorData) => {
        throw new Error(errorData.message);
      });
    }
    return await response.json();
  } catch (error) {
    console.error("An error occurred while fetching notes:", error);
  }
};
