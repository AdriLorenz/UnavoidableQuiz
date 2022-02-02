module.exports = (app) => {
  // Import Classrooms Controller
  const classroom = require("../controllers/classrooms-controller");

  // Init express router
  const routerClassrooms = require("express").Router();

  // Route get all classrooms
  routerClassrooms.get("/", classroom.getClassrooms);
  // Route get classroom by id
  routerClassrooms.get("/:classroom_id", classroom.getClassroomById);
  // Route create a new classroom
  routerClassrooms.post("", classroom.createClassroom);
  // Route update classroom by id
  routerClassrooms.put("/:classroom_id", classroom.updateClassroom);
  // Route delete classroom by id
  routerClassrooms.delete("/:classroom_id", classroom.deleteClassroom);

  app.use("/classrooms", routerClassrooms);
};
