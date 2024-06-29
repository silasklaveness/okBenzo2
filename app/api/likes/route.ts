import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/app/lib/mongodb";
import Project from "@/app/models/projects";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { projectId } = req.query;

  if (req.method === "GET") {
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.status(200).json({ likes: project.likes });
    } catch (error) {
      res.status(500).json({ error: "Error fetching project likes" });
    }
  } else if (req.method === "POST") {
    try {
      const project = await Project.findByIdAndUpdate(
        projectId,
        { $inc: { likes: 1 } },
        { new: true }
      );
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      res.status(200).json({ likes: project.likes });
    } catch (error) {
      res.status(500).json({ error: "Error updating project likes" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
