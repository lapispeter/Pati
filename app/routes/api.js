import Router from "express";
import PatientController from "../controllers/patientController.js";
import TreatmentController from "../controllers/treatmentController.js";

const router = Router();

router.get("/patients", PatientController.index);
router.post("/patients", PatientController.store);
router.put("/patients", PatientController.update);
router.delete("/patients", PatientController.destroy);

router.get("/treatments", TreatmentController.index);
router.post("/treatments", TreatmentController.store);
router.put("/treatments", TreatmentController.update);
router.delete("/treatments", TreatmentController.destroy);

export default router;