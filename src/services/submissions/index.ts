import { axiosInstance } from "../../lib/axiosInstance";
import { SubmissionDto } from "../../datas/dtos/submissions";
import { ISubmission } from "../../datas/interfaces/submissions";

export const getSubmissions = async (): Promise<ISubmission[]> => {
  const { data } = await axiosInstance.get("/submissions");

  return data;
};

export const createSubmission = async (
  submissionDto: SubmissionDto
): Promise<ISubmission> => {
  const { data } = await axiosInstance.post("/submissions", submissionDto);

  return data;
};


