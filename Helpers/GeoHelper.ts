import Departement from "../Models/Geo/Departments";
import Region from "../Models/Geo/Region";
import Departments from "../Models/Geo/Data/Departments";
import Regions from "../Models/Geo/Data/Regions";
import _ from "lodash";
import StringHelper from "./StringHelper";

export default class GeoHelper {
  //#region Methods
  /**
   * Get the departements
   * @param loadRegions Load the region of each deparment
   */
  public static getDepartments = (
    loadRegions: boolean = false
  ): Departement[] => {
    //Read departments
    const departments = JSON.parse(
      JSON.stringify(Departments)
    ) as Departement[];

    if (loadRegions) {
      const regions = GeoHelper.getRegions();
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

    return _.sortBy(departments, dep =>
      StringHelper.format(dep.name, true, true)
    );
  };

  /**
   * Get the regions
   * @param loadDepartements Load the regions departements
   */
  public static getRegions = (loadDepartements: boolean = false): Region[] => {
    //Read regions
    const regions = JSON.parse(JSON.stringify(Regions)) as Region[];

    if (loadDepartements) {
      const departments = GeoHelper.getDepartments();
      regions.forEach(region => {
        //Get the departments of the region
        region.departments = departments.filter(x =>
          region.departmentCodes.includes(x.code)
        );
        _.sortBy(region.departments, dep =>
          StringHelper.format(dep.name, true, true)
        );
      });
    }
    return _.sortBy(regions, reg => StringHelper.format(reg.name, true, true));
  };

  //#endregion
}
