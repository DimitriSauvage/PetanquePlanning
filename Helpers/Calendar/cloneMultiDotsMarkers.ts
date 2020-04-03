import MultiDotMarkingType from "./Types/MultiDotMarking.type";

/**
 * Clone a multidot marking type
 */
export default (markers: MultiDotMarkingType): MultiDotMarkingType =>
  JSON.parse(JSON.stringify(markers)) as MultiDotMarkingType;
