import Departments from "../../Models/Geo/Data/Departments";
import Departement from "../../Models/Geo/Departments";
import formatString from "../String/formatString";
import getRegions from "./getRegions";
import _ from "lodash";

/**
 * Get the departements
 * @param loadRegions Load the region of each deparment
 */
export default (loadRegions: boolean = false): Departement[] => {
  //Read departments
  const departments = JSON.parse(JSON.stringify(Departments)) as Departement[];

  if (loadRegions) {
    const regions = getRegions();
    departments.forEach(department => {
      //Get the region
      const region = regions.find(
        region => region.code === department.regionCode
      );
      if (region) {
        department.region = region;
      }
    });
  }

  return _.sortBy(departments, dep => formatString(dep.name, true, true));
};
