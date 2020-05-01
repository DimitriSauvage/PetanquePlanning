import { DepartmentDTO } from "../../Models/generated";
import useHttpGet from "../Shared/Requests/HttpRequests/useHttpGet";
import { IHttpRequestResult } from "../Shared/Types/HttpTypes";
import Constants from "expo-constants";

/**
 * Get the departments
 * @param withAdjacentDepartments Load adjacent departments
 * @param withRegions Load departments regions
 */
const useGetDepartment = (
  withAdjacentDepartments = false,
  withRegions = false
): IHttpRequestResult<DepartmentDTO[]> => {
  return useHttpGet({
    baseURL: Constants.manifest.extra.api.baseUrl + "/departments",
    params: {
      withAdjacentDepartments,
      withRegions,
    },
  });
};

export default useGetDepartment;
