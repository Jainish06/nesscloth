export const login = async (formData) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.log(error);
  }
};
