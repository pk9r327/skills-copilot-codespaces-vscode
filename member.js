function skillMember() {
  return {
    name: "skillMember",
    title: "Skills",
    type: "object",
    fields: [
      {
        name: "name",
        title: "Skill",
        type: "string",
      },
      {
        name: "skillLevel",
        title: "Skill Level",
        type: "string",
        options: {
          list: [
            { title: "Beginner", value: "beginner" },
            { title: "Intermediate", value: "intermediate" },
            { title: "Advanced", value: "advanced" },
          ],
        },
      },
    ],
  };
}