
/**
 * @description Facilities Object
 */
export interface air3_Facilities {
    /**
     * @description The facility's 3-year compliance status history by quarter (3-month period). Each character represents a quarter of compliance, going from oldest to most recent. Character values correspond to the following compliance statuses:
     * _ - No Violation Identified
     * V - Violation Identified
     * S - High Priority Violation
     * U - Undetermined
     */
    AIR3yrComplQtrsHistory?: string;
    /**
     * @description Space-delimited list of AIR cases associated with the facility.
     */
    AIRCaseIDs?: string;
    /**
     * @description The city where the AIR facility is located.
     */
    AIRCity?: string;
    /**
     * @description The facility's recent violation status under the Clean Air Act.
     */
    AIRComplStatus?: string;
    /**
     * @description The name of the county where the AIR facility is located.
     */
    AIRCounty?: string;
    /**
     * @description The number of days since the most recent compliance evaluation of the facility.
     */
    AIRDaysLastEval?: string;
    /**
     * @description The EPA region where the AIR facility is located.
     */
    AIREPARegion?: string;
    /**
     * @description The number of compliance evaluations, under the Clean Air Act, occurring at the facility within the last five years.
     */
    AIREvalCnt?: string;
    /**
     * @description A 5 digit combination of the 2 digit Federal Information Processing Standards (FIPS) code for the state and the 3 digit FIPS code of the county that a facility is located in.
     */
    AIRFIPSCode?: string;
    /**
     * @description A three-character code indicating if plant is government facility.
     * COR - Corporation
     * CNG - County Government
     * DIS - District
     * FDF - Federal Facility (U.S. Government)
     * GOC - GOCO (Gov Owned/Contractor Operated)
     * IND - Individual
     * MXO - Mixed Ownership (e.g., Public/Private)
     * MWD - Municipal or Water District
     * CTG	- Municipality
     * NON - Non-Government
     * POF - Privately Owned Facility
     * SDT - School District
     * STF - State Government
     * TRB - Tribal Government
     * UNK - Unknown
     */
    AIRFacilityTypeCode?: string;
    /**
     * @description The total number of formal enforcement actions taken against the facility within the last five years.
     */
    AIRFeaCnt?: string;
    /**
     * @description Indicates whether the facility currently has an unresolved High Priority Violation (HPV) under the Clean Air Act.
     */
    AIRHpvStatus?: string;
    /**
     * @description Air Facility System (AFS) ID.
     */
    AIRIDs?: string;
    /**
     * @description The total number of informal enforcement actions taken against the facility within the last five years.
     */
    AIRIeaCnt?: string;
    /**
     * @description Flag indicating whether the AIR facility is located in Indian country.
     */
    AIRIndianCntryFlg?: string;
    /**
     * @description The date on which the most recent Full Compliance Evaluation (FCE) of the facility by EPA or a state agency was completed.
     */
    AIRLastEvalDate?: string;
    /**
     * @description The last Air Inspection Date performed by EPA.
     */
    AIRLastEvalDateEPA?: string;
    /**
     * @description The last Air Inspection Date performed by State or local authorities.
     */
    AIRLastEvalDateState?: string;
    /**
     * @description The effective date of the most recent listed formal enforcement action taken against the facility.
     */
    AIRLastFeaDate?: string;
    /**
     * @description The last Air Formal Enforcement Action Date take by EPA.
     */
    AIRLastFeaDateEPA?: string;
    /**
     * @description The last Air Formal Enforcement Action Date take by State or Local authorities.
     */
    AIRLastFeaDateState?: string;
    /**
     * @description The effective date of the most recent listed informal enforcement action taken against the facility.
     */
    AIRLastIeaDate?: string;
    /**
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by EPA.
     */
    AIRLastIeaDateEPA?: string;
    /**
     * @description The effective date of the most recent listed informal enforcement action taken against the facility by a state agency.
     */
    AIRLastIeaDateState?: string;
    /**
     * @description Indicates the date on which the most recent assessed (or final) penalty was taken against the facility for AIR.
     */
    AIRLastPenaltyDate?: string;
    /**
     * @description The date on which the most recent stack test by EPA occurred.
     */
    AIRLastStckDateEPA?: string;
    /**
     * @description The date on which the most recent stack test by a state agency occurred.
     */
    AIRLastStckDateState?: string;
    /**
     * @description The date on which the most recent stack test occurred.
     */
    AIRLastStckTestDate?: string;
    /**
     * @description The result of the most recent stack test (Pass, Fail, Pending, or Blank).
     */
    AIRLastStckTestResults?: string;
    /**
     * @description The date on which the most recent violation was reported.
     */
    AIRLastViolDate?: string;
    /**
     * @description The Maximum Achievable Control Technology (MACT) Subpart associated with the facility.
     */
    AIRMacts?: string;
    /**
     * @description Indicated whether the facility is designated as a major facilitiy.
     */
    AIRMajorFlag?: string;
    /**
     * @description The number of months in the last three years in which the permit or site is considered in High Priority Violation (HPV) status
     */
    AIRMnthsWithHpv?: string;
    /**
     * @description The facility’s or permit's primary North American Industry Classification System (NAICS) Code.
     */
    AIRNAICS?: string;
    /**
     * @description The name of the AIR Facility.
     */
    AIRName?: string;
    /**
     * @description The New Source Performance Standards (NSPS) Subpart associated with the facility.
     */
    AIRNsps?: string;
    /**
     * @description The Non-Major New Source Performance Standards (NSPS) Subpart associated with the facility.
     */
    AIRNspsm?: string;
    /**
     * @description The total dollar amount of assessed (or final) penalties taken against the facility within the last five years under the Clean Air Act. This value only includes penalties that have been entered in the national program database, ICIS-Air.
     */
    AIRPenalties?: string;
    /**
     * @description The names of pollutants or pollutant categories with violations reported in the last year.
     */
    AIRPollRecentViol?: string;
    /**
     * @description Comma-delimited list of AIR programs.
     */
    AIRPrograms?: string;
    /**
     * @description The number of quarters in the last three years in which the permit or site is considered in High Priority Violation (HPV) status.
     */
    AIRQtrsWithHpv?: string;
    /**
     * @description The number of quarters in the last three years in which the permit or site has had unresolved violation(s) reported.
     */
    AIRQtrsWithViol?: string;
    /**
     * @description The number of violations reported in the last year.
     */
    AIRRecentViolCnt?: string;
    /**
     * @description The state where the AIR facility is located.
     */
    AIRState?: string;
    /**
     * @description The status of the AIR facility location.
     */
    AIRStatus?: string;
    /**
     * @description The street address of the AIR facility location.
     */
    AIRStreet?: string;
    /**
     * @description The EPA Tribal or Native Alaskan Village Identifier for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     */
    AIRTRIbalEPAids?: string;
    /**
     * @description The EPA Tribal or Native Alaskan Village Name for facilities, that based on their Best Pick FRS spatial coordinate, are within a Tribal or Alaskan Village area.
     */
    AIRTRIbalNames?: string;
    /**
     * @description The program office defines each CAA Source ID and the associated permits as being Federally Reportable or Non-Federally Reportable. Under the CAA, federally reportable source include majors, synthetic minors, NESHAP Part 61 minors, minors with an unresolved High Priority Violation (HPV), with recent enforcement action, or included on a Compliance Monitoring Strategy plan.
     */
    AIRUniverse?: string;
    /**
     * @description The five-digit zip code of the AIR facility.
     */
    AIRZip?: string;
    /**
     * @description A Y/N indicator indicating that the facility is active and located within the lower 48 contiguous US States.
     */
    ActiveLower48?: string;
    /**
     * @description A unique  ID assigned for each record/permit/site/facility within ICIS-NPDES. These identifiers are for used tracking purposes in the individual data systems.
     */
    CWAIDs?: string;
    /**
     * @description The estimated accuracy in Meters for the facility's geospatial coordinate.
     */
    CalculatedAccuracyMeters?: string;
    /**
     * @description Facility identifiers for the Clean Air Markets Division database.
     */
    CamdIDs?: string;
    /**
     * @description A geographic unit used by the United States Census Bureau, generally defined to contain between 600 and 3,000 people.
     */
    CensusBlockGroup?: string;
    /**
     * @description Displays "Y" if the facility is located within the Chesapeake Bay watershed.
     */
    ChesapeakeBayFlag?: string;
    /**
     * @description ??
     */
    CollectionMethod?: string;
    /**
     * @description Indicates if the facility has a current significant violation. 1 = Yes
     */
    CurrSvFlag?: string;
    /**
     * @description Indicates if the facility has a current violation. 1 = Yes
     */
    CurrVioFlag?: string;
    /**
     * @description The EPA data system in which permit and facility records are kept. EPA's Facility Registry System (FRS) links all program database records (such as permit IDs and IDs facilities use in reporting to EPA) together. The following list describes the individual data systems that are linked to from the detailed facility report:
     *
     * - AFS: Air Facility System for Clean Air Act stationary source programs.
     * - ICP: Integrated Compliance Information System for Clean Water Act programs monitoring National Pollutant Discharge Elimination System (NPDES) permits.
     * - RCR: Resource Conservation and Recovery Act Information System (RCRAInfo) for tracking the Resource Conservation and Recovery Act (RCRA) programs.
     * - NCDB: National Compliance Database System for monitoring national performance of the Toxic Substance Control Act (TSCA); the Emergency Planning and Right-to-Know Act, Section 313 (EPCRA); the Asbestos Hazard Emergency Response (AHERA); and the Federal Insecticide, Fungicide, and Rodenticide Act (FIFRA).
     * - TRI: Toxics Release Inventory for Emergency Planning and Community Right-to-Know Act, Section 313 submissions.
     * - NEI: National Emissions Inventory database contains information on stationary and mobile sources that emit criteria air pollutants and their precursors, as well as hazardous air pollutants (HAPs). The database includes estimates of annual emissions, by source, of air pollutants in each area of the country, on an annual basis.
     * - TSCA: Toxic Substances Control Act addressing the production, importation, use, and disposal of specific chemicals.
     */
    EPASystem?: string;
    /**
     * @description Indicates if the facility has a formal enforcement action within the last 5 years. 1 = Yes
     */
    Ea5yrFlag?: string;
    /**
     * @description A unique ID assigned for each facility within EPA’s Emissions Inventory System (EIS) Database.
     */
    EisIDs?: string;
    /**
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     */
    EjscreenFlag?: string;
    /**
     * @description A Y/N indicator identifying whether or not the facility is within an Environmental Justice area.
     */
    EjscreenFlagUs?: string;
    /**
     * @description Indicates whether the facility reports to the Clean Air Markets Division (CAMD).
     */
    FacCamdReporter?: string;
    /**
     * @description The facility county name from EPA's Facility Registry System
     */
    FacCountyName?: string;
    /**
     * @description The 8-digit Hydrologic Unit Code (HUC) of the watershed in which the facility resides. A HUC number is assigned to every watershed in the nation and uniquely identifies the watershed.
     */
    FacDerivedHuc?: string;
    /**
     * @description The tribes or tribal territories located within 25 miles of the facility's location.
     */
    FacDerivedTRIbes?: string;
    /**
     * @description The Hydrologic Unit Code (HUC-12) of the waterbody in which the facility resides, derived based on location data in FRS.
     */
    FacDerivedWBD?: string;
    /**
     * @description The 12 digit Watershed Boundary Dataset Name derived from the FRS Best Pick Coordinate
     */
    FacDerivedWBDName?: string;
    /**
     * @description The amount of hazardous air pollutants released to air in tons per year, as reported in the most recent National Emissions Inventory (NEI).
     */
    FacEisAIRReleases?: string;
    /**
     * @description Indicates whether the facility reports to the Emissions Inventory System (EIS).
     */
    FacEisReporter?: string;
    /**
     * @description The 2-digit Federal Information Processing Standards (FIPS) code to identify the county that a facility is located in.
     */
    FacFIPSCode?: string;
    /**
     * @description Indicates the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government. The five-character code consists of a letter followed by four numbers. There are four possible letters that can occupy the first character position: C = Civilian Federal Agency; D = Department of Defense; E = Department of Energy; X = Unknown. The second and third characters represent the agency code, while the fourth and fifth characters represent the bureau code.
     */
    FacFederalAgencyCode?: string;
    /**
     * @description Indicates the name of the federal agency, as classified in FRS. Federal agencies are installations that are owned and operated by the U.S. government.
     */
    FacFederalAgencyName?: string;
    /**
     * @description The annual sum of total release amounts and "associated quantities" of all linked Greenhouse Gas IDs from the Office of Air and Radiation "Summary 2010 Greenhouse Gas Data." Units are reported as metric tons of CO2 equivalents per year (MTCO2e/year).
     */
    FacGHGCO2Releases?: string;
    /**
     * @description Indicates whether the facility reports to the Greenhouse Gas Reporting Program (GHGRP)
     */
    FacGHGReporter?: string;
    /**
     * @description Flag showing Y/N whether the facility is located in Indian Country.
     */
    FacIndianCntryFlg?: string;
    /**
     * @description Returns “Y” if a facility is located within a tribal spatial boundary as defined by the U.S. Census Bureau 2010 tribal boundary layer data for tribes in the lower 48 states and Bureau of Land Management Alaska State Office data for native villages in Alaska. Returns “N” if a facility is not located within a tribal or native Alaskan village area.
     */
    FacIndianSpatialFlg?: string;
    /**
     * @description The latitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
     */
    FacLat?: string;
    /**
     * @description The longitude of the facility in decimal degrees expressed using the NAD83 horizontal datum. The coordinate comes from the FRS EPA Locational Reference Tables (LRT) file which represents the most accurate value for the facility based on the available spatial metadata.
     */
    FacLong?: string;
    /**
     * @description Graphical indicator denoting whether geographical data required to map a facility are available.
     */
    FacMapFlg?: string;
    /**
     * @description The default map icon image file calculated for the facility by the ECHO program.
     */
    FacMapIcon?: string;
    /**
     * @description Indicates whether the facility is located in a nonattainment area of the country, where air pollution levels persistently exceed the national ambient air quality standards. This flag does not indicate whether or not the facility has violated national ambient area quality standards.
     */
    FacNaaFlag?: string;
    /**
     * @description Percent Minority is the percentage of the population of the given area that is considered minority. Statistics are shown for the area within a 3-mile radius of each facility.
     */
    FacPercentMinority?: string;
    /**
     * @description The number of persons per square mile in the profiled area.
     */
    FacPopulationDensity?: string;
    /**
     * @description Indicates the facility’s or permit's primary Standard Industrial Classification (SIC) Code. The SIC code describes the primary activity of the facility.
     */
    FacSICCodes?: string;
    /**
     * @description The standardized  facility county name from EPA's Facility Registry System
     */
    FacStdCountyName?: string;
    /**
     * @description The total chemical releases to air, in pounds, as reported to TRI by the facility for the most recent reporting year.
     */
    FacTRIAIRReleases?: string;
    /**
     * @description The pounds of chemicals considered to be carcinogens released to air, as reported to TRI for the most recent reporting year. Chemicals are classified as carcinogens under the requirements of the Occupational Safety and Health Administration (OSHA).
     */
    FacTRICarcAIRReleases?: string;
    /**
     * @description The pounds of chemicals classified as hazardous air pollutants (HAPS) released to air in pounds per year, as reported to TRI for the most recent reporting year.
     */
    FacTRIHapsReleases?: string;
    /**
     * @description Indicates whether facility reported to the Toxics Release Inventory (TRI) for the most recent reporting year.
     */
    FacTRIReporter?: string;
    /**
     * @description A Y/N flag indicating that the facility is within 100KM of the US-Mexico Border.
     */
    FacUsMexBorderFlg?: string;
    /**
     * @description A unique ID assigned for each facility within EPA’s Greenhouse Gas Reporting Program (GHGRP) Emissions Data Sets.
     */
    GHGIDs?: string;
    /**
     * @description ???
     */
    HasPollRpt?: string;
    /**
     * @description Indicates if the facility has an informal enforcement action within the last 5 years. 1 = Yes.
     */
    Infea5yrFlag?: string;
    /**
     * @description Indicates if the facility has an inspection within the last 5 years. 1 = Yes
     */
    Insp5yrFlag?: string;
    /**
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA or a state agency was completed.
     */
    LastDatePce?: string;
    /**
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by EPA was completed.
     */
    LastDatePceEPA?: string;
    /**
     * @description The date on which the most recent Partial Compliance Evaluation (PCE) of the facility by a state agency was completed.
     */
    LastDatePceSta?: string;
    /**
     * @description Code for regions within a state. Search criteria for DFR in OTIS.
     */
    LocalControlRegionCode?: string;
    /**
     * @description Regions within a state. Search criteria for DFR in OTIS.
     */
    LocalControlRegionName?: string;
    /**
     * @description Flag showing Y/N whether location is within the contiguous (lower 48) United States.
     */
    Lower48?: string;
    /**
     * @description No Longer Used.
     */
    Map?: string;
    /**
     * @description The maximum percentile from all individual EJSCREEN indicators.
     */
    MaxPctileUs?: string;
    /**
     * @description A sorting score for internal use.
     */
    MaxScore?: string;
    /**
     * @description The nonattainment area categories that the facility is in, derived spatially based on the facility's geographic coordinates in FRS.
     */
    NaaCategories?: string;
    /**
     * @description All criteria pollutants that the facility is in nonattainment for.
     */
    NaaPollutants?: string;
    /**
     * @description Sequential number assigned to each facility or cluster returned.
     */
    ObjectId?: string;
    /**
     * @description The number of primary EJSCREEN environmental justice (EJ) indexes exceeding the 80th or higher national percentile for the Census block group that the facility is located in.
     */
    Over80CountUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN NATA air toxics cancer risk indicator.
     */
    PctileCancerUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN diesel particulate matter indicator.
     */
    PctileDpmUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN ozone indicator.
     */
    PctileO3Us?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN Lead paint indicator.
     */
    PctilePctpre1960Us?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN particulate matter indicator.
     */
    PctilePmUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to major direct water dischargers indicator.
     */
    PctileProximityNPDESUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to National Priorities List (NPL) sites indicator.
     */
    PctileProximityNplUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to Risk Management Plan (RMP) sites indicator.
     */
    PctileProximityRmpUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN proximity to Treatment Storage and Disposal Facilities (TSDFs) indicator.
     */
    PctileProximityTsdfUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN NATA respiratory hazard index indicator.
     */
    PctileRespUs?: string;
    /**
     * @description The national percentile of the census block group for the EJSCREEN Traffic proximity and volume indicator.
     */
    PctileTrafficScoreUs?: string;
    /**
     * @description A unique 12-character ID assigned for each record/permit/site/facility within the RCRAInfo database.
     */
    RCRAIDs?: string;
    /**
     * @description ??
     */
    ReferencePoint?: string;
    /**
     * @description An internal 12-digit Facility Registry Service (FRS) tracking number used to tie all facility data together in EPA regulatory program databases.
     */
    RegistryID?: string;
    /**
     * @description A unique ID assigned to each facility submitting a Risk Management Plan to EPA under the Risk Management Plan Rule.
     */
    RmpIDs?: string;
    /**
     * @description A unique 9-character ID assigned for each public water system within the Safe Drinking Water Information System (SDWIS).
     */
    SDWAIDs?: string;
    Score?: string;
    /**
     * @description Unique Identifier assigned by EPA.
     */
    SourceID?: string;
    /**
     * @description The name of the statute associated with each of the permits and identifiers linked to the facility:
     * - CAA = the Clean Air Act
     * - CWA = the Clean Water Act
     * - RCRA = the Resource Conservation and Recovery Act
     * - EP313 = the Emergency Planning and Community Right-to-Know Act, Section 313 (also known as the Toxics Release Inventory Program)
     * - TSCA = the Toxic Substances Control Act
     * - SDWA = the Safe Drinking Water Act
     */
    Statute?: string;
    /**
     * @description A unique 15-character ID assigned for each facility within the Toxics Release Inventory (TRI) program. The format is ZZZZZNNNNNSSSSS, where ZZZZZ = ZIP code, NNNNN = the first 5 consonants of the name, and SSSSS = the first 5 non-blank non-special characters in the street address.
     */
    TRIIDs?: string;
    /**
     * @description A flag indicating that the facility is within a tribal area.
     */
    TRIbalFlag?: string;
    /**
     * @description Indicates if the facility had a violation within the last 3 years. 1 = Yes
     */
    ViolFlag?: string;
    /**
     * @description Contains flags that identify what web accessible documents are available for the facility.
     */
    WebDocs?: string;
}
