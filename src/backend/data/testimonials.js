require("dotenv").config();
module.exports = {
  db: process.env.MONGO_URL,
  seedData: [
    {
      name: "Richard",
      website: "htps://abc.com",
      photo: "https://bootdey.com/img/Content/avatar/avatar1.png",
      comments:
        "What a helpful bunch. After being scammed by another web design company, I was recommended Fluid Studios and I now know why. They are quick to respond, informative and deliver what is asked for. Would highly recommend. Thanks guys!",
    },
    {
      name: "Johanna",
      website: "htps://abc.com",
      photo: "https://bootdey.com/img/Content/avatar/avatar2.png",
      comments:
        "These guys provided the most prompt quote of three requested for website design, communicated well during the project, and provided a well-designed website with an easy to use content management system.",
    },
    {
      name: "Tobias",
      website: "htps://abc.com",
      photo: "https://bootdey.com/img/Content/avatar/avatar3.png",
      comments:
        "As usual very helpful, nothing to much trouble and the end result as I envisaged. Good price point, you pay for what you get and Fluid are full value for money.",
    },
    {
      name: "David",
      website: "htps://abc.com",
      photo: "https://bootdey.com/img/Content/avatar/avatar4.png",
      comments:
        "First class web design service, I cannot recommend them highly enough. They clearly understood what I was looking for and interpreted my brief precisely. They have an excellent structure for getting all the information from the client which takes away a lot of stress and makes the process easy. I now have another site I want to create and I won't be going anywhere else!",
    },

    {
      name: "Anne Marie",
      website: "htps://abc.com",
      photo: "https://bootdey.com/img/Content/avatar/avatar5.png",
      comments:
        "With myself having no experience in website design and being particularly technical, the guys at Fluid Studios were a great help, particularly Mark who went to great detail and length to help get the new website up and running, and did so in a very friendly manner. Excellent customer service. Excellent Product. Would Definitely Recommend.",
    },
  ],
};
