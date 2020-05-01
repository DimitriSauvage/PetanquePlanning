
export enum DbType {
    SQL_SERVER = 0,
    MYSQL = 1,
}

export enum GenderEnum {
    Unknown = 0,
    Mister = 1,
    Madam = 2,
    Miss = 3,
}

export enum ServerModeEnum {
    Cloud = 0,
    Server = 1,
}

export enum CompetitionGenderEnum {
    Males = 0,
    Females = 1,
    Mixed = 2,
    Veterans = 3,
    UpAndComing = 4,
    Juniors = 5,
    Cadets = 6,
    Minimal = 7,
    Benjamins = 8,
    Unspecified = 9,
}

export enum CompetitionLevelEnum {
    Departmental = 0,
    Championship = 1,
    Regional = 2,
    League = 3,
    National = 4,
    Europeean = 5,
    International = 6,
    Free = 7,
}

export enum CompetitionSportEnum {
    Petanque = 0,
    Provencal = 1,
    Lyon = 2,
}

export enum CompetitionTypeEnum {
    Individual = 0,
    Doublet = 1,
    Triplet = 2,
    Precision = 3,
}

export enum LuhnCheckType {
    None = 0,
    CreditCard = 1,
    Siren = 2,
    Siret = 3,
}

export enum FrenchHolidayType {
    NewYearsDay = 0,
    EasterMonday = 1,
    LaborDay = 2,
    AlliedVictoryDay = 3,
    AscensionDay = 4,
    DayWhitDay = 5,
    NationalHoliday = 6,
    AssumptionDay = 7,
    HalloweenDay = 8,
    ArmisticeDay = 9,
    ChristmasDay = 10,
}

export enum AssocSide {
    Left = 0,
    Right = 1,
}

export enum RegexType {
    IsInteger = 0,
    IsNumeric = 1,
    FrenchZipCode = 2,
    CityName = 3,
    MultipleSpaces = 4,
    FrenchPostBox = 5,
    FrenchCedex = 6,
    CityFullNameWithFrenchZipCode = 7,
    RefServiceLeafCategoryNameWithAlias = 8,
    FrenchMobilePhone = 9,
    FrenchInternationalMobilePhone = 10,
    FrenchPhone = 11,
    FrenchInternationalPhone = 12,
}


export abstract class BaseDTO {
}

export class AdjacentDepartmentsDTO extends BaseDTO {
    FirstDepartment: DepartmentDTO;
    FirstDepartmentId: any;
    SecondDepartment: DepartmentDTO;
    SecondDepartmentId: any;
}

export class DepartmentDTO extends BaseDTO {
    AdjacentDepartments: any;
    Code: string;
    Name: string;
    Region: RegionDTO;
    RegionId: any;
}

export class RegionDTO extends BaseDTO {
    Code: string;
    Departments: any;
    Name: string;
}

export class ClubDTO extends BaseDTO {
    Id: any;
    Address: Address;
    Name: string;
    ShortName: string;
}

export abstract class ValueObject {
}

export class Address extends ValueObject {
    Number: string;
    Street: string;
    ZipCode: string;
    City: string;
    Coordinate: LatLng;
    FullAddress: string;
}

export class LatLng extends ValueObject {
    Latitude: number;
    Longitude: number;
}

export class CompetitionDTO extends BaseDTO {
    Id: any;
    Address: Address;
    CompetitionGender: EnumDTO<CompetitionGenderEnum>;
    CompetitionLevel: EnumDTO<CompetitionLevelEnum>;
    CompetitionSport: EnumDTO<CompetitionSportEnum>;
    CompetitionType: EnumDTO<CompetitionTypeEnum>;
    Date: any;
    Description: string;
    Name: string;
    Organizer: ClubDTO;
    OrganizerId: any;
}

export class EnumDTO<TEnum> {
    Key: number;
    Value: string;
    Description: string;
}

export class ApplicationUserDTO extends BaseDTO {
    Avatar: string;
    AvatarUrl: string;
    MustChangePassword: boolean;
    BirthDate: any;
    ClubId: any;
    FavoriteDepartments: any;
    Gender: EnumDTO<GenderEnum>;
    FirstName: string;
    LastName: string;
    SubscriptionDate: any;
    Roles: any;
    Id: any;
    PasswordHash: string;
    UserName: string;
    Email: string;
    NormalizedEmail: string;
    PhoneNumber: string;
    PhoneNumberConfirmed: boolean;
}

export class ApplicationUserFavoriteDepartmentDTO extends BaseDTO {
    Id: any;
    Department: DepartmentDTO;
    DepartmentId: any;
    User: ApplicationUserDTO;
    UserId: any;
}

export class ApplicationUserRoleDTO extends BaseDTO {
    Id: any;
    UserId: any;
    User: ApplicationUserDTO;
    RoleId: any;
    Role: ApplicationRoleDTO;
}

export class ApplicationRoleDTO extends BaseDTO {
    Description: string;
    Id: any;
    Name: string;
    NormalizedName: string;
}

export class LoginDTO extends BaseDTO {
    Email: string;
    Password: string;
    RememberMe: boolean;
}

export class LoginResultDTO extends BaseDTO {
    Error: string;
    User: ApplicationUserDTO;
}

export class ResetPasswordDTO extends BaseDTO {
    Code: string;
    Password: string;
}

export class TokenWithClaimsDTO extends BaseDTO {
    AccessToken: string;
    Claims: any;
    IsValid: boolean;
}

