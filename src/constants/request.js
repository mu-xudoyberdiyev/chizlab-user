export const fetchMaterials = async () => {
  try {
    const response = await fetch(
      "https://json-api.uz/api/project/chizlab/materials"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch materials");
    }

    const data = await response.json();
    return Array.isArray(data.data) ? data.data : [];
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchMaterialById = async (id) => {
  try {
    const response = await fetch(
      `https://json-api.uz/api/project/chizlab/materials/${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch material details");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
