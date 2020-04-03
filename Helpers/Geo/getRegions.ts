import Region from "../../Models/Geo/Region";
import Regions from "../../Models/Geo/Data/Regions";
import getDepartments from "./getDepartments";
import formatString from "../String/formatString";
import _ from "lodash";

/**
 * Get the regions
 * @param loadDepartements Load the regions departements
 */
export default (loadDepartements: boolean = false): Region[] => {
  //Read regions
  const regions = JSON.parse(JSON.stringify(Regions)) as Region[];

  if (loadDepartements) {
    const departments = getDepartments();
    regions.forEach(region => {
      //Get the departments of the region
      region.departments = departments.filter(x =>
        region.departmentCodes.includes(x.code)
      );
      _.sortBy(region.departments, dep =>
        formatString(dep.name, true, true)
      );
    });
  }
  return _.sortBy(regions, reg => formatString(reg.name, true, true));
};
